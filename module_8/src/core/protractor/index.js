const {browser, ExpectedConditions: EC} = require('protractor');
const timeout = require('../../helpers/timeout.json');

class Protractor {
    /**
     * @param rootElement {ElementFinder | ElementArrayFinder}
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    isPresent() {
        return this.rootElement.isPresent();
    }

    isDisplayed() {
        return this.rootElement.isDisplayed();
    }

    async click() {
        await browser.wait(
            EC.visibilityOf(this.rootElement),
            timeout.s,
            `There is no such ${this.rootElement.locator()} element`);

        return this.rootElement.click();
    }

    getWebElement() {
        return this.rootElement.getWebElement();
    }

    async highlight () {
        const bg = this.rootElement.getCssValue("background-color");
        const highlightEl = await this.rootElement.getWebElement();
        await browser.executeScript("arguments[0].style.backgroundColor = '" + "red" + "' ", highlightEl);
        return browser.executeScript("arguments[0].style.backgroundColor = '" + bg + "'", highlightEl);
    }

    hover() {
        return browser.actions().mouseMove(this.rootElement).perform();
    }

    isVisible() {
        return browser.wait(
            EC.visibilityOf(this.rootElement),
            timeout.l,
            `The element ${this.rootElement.locator()} is not displayed on ${this.constructor.name}`
        );
    }
}

module.exports = Protractor;