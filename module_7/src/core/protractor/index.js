const {
    browser,
    ExpectedConditions: EC
} = require('protractor');

const timeout = require('../../helpers/timeout.json')

class Protractor {

    /**
     * @param rootElement {ElementFinder | ElementArrayFinder}
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    };

    isDisplayed() {
        return this.rootElement.isDisplayed();
    }

    async click(rootElement) {
        await browser.wait(
            EC.visibilityOf(this.rootElement),
            timeout.s,
            `There is no such ${this.rootElement.locator()} element`);

        return this.rootElement.click();
    }
};

module.exports = Protractor;