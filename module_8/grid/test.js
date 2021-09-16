const {Builder, By} = require('selenium-webdriver');

(async function test() {
    const driver = await new Builder()
        .forBrowser('chrome')
        .usingServer('http://localhost:4444/wd/hub')
        .build();

    try {
        await driver.get('https://angular.io');
        const getStartedButton = driver.findElement(By.css(".button.hero-cta"));
        const getStartedDisplayed = await getStartedButton.isDisplayed();

        if (!getStartedDisplayed) {
            throw new Error('Get Started button is not displayed');
        }

        await getStartedButton.click();

        await driver.sleep(2000)
    } finally {
        await driver.quit();
    }
})();
