const {
    Builder,
    By,
    until
} = require('selenium-webdriver');
const timeout = {
    sec: 1000,
    min: 60000,
    xs: 5000,
    s: 10000,
    m: 15000,
    l: 20000,
    xl: 30000,
};
const windowSize = {
    x: 1920,
    y: 1080,
};

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.manage().setTimeouts({
        pageLoad: timeout.min,
        script: timeout.xl,
    });
    await driver.manage().window().setSize(windowSize.x, windowSize.y);

    try {
        await driver.get('https://angular.io');
        const getStartedButton = driver.findElement(By.css(".button.hero-cta"));
        const getStartedDisplayed = await getStartedButton.isDisplayed();

        if (!getStartedDisplayed) {
            throw new Error('Get Started button is not displayed');
        }

        await getStartedButton.click();

        const getHeader = await driver.findElement(By.css('.no-toc'));
        const headerDisplayed = await getHeader.isDisplayed();

        if (!headerDisplayed) {
            throw new Error('Header "introduction-to-the-angular-docs" is absent');
        }

        await driver.wait(until.urlIs('https://angular.io/docs'), timeout.xl)

        await driver.navigate().back();
        await driver.wait(until.titleIs('Angular'), timeout.xl)

    } finally {
        await driver.quit();
    }
})();