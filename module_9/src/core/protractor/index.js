const {browser, ExpectedConditions: EC} = require('protractor');
const timeout = require('../../helpers/timeout.json');
const Logger = require('../../helpers/logger');

class Protractor {
    /**
     * @param rootElement {ElementFinder | ElementArrayFinder}
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
        this.logger = Logger(this.constructor.name);
    }

    sync(param='on') {
        return browser.waitForAngularEnabled(param === 'on');
    }

    isPresent() {
        this.logger.debug(`isPresent: ${this.rootElement.locator()}`);
        return this.rootElement.isPresent();
    }

    isDisplayed() {
        this.logger.info(`isDisplayed: ${this.rootElement.locator()}`);
        return this.rootElement.isDisplayed();
    }

    async click() {
        await browser.wait(
            EC.visibilityOf(this.rootElement),
            timeout.xs,
            `[Protractor::click] The element ${this.rootElement.locator()} is not visible on ${this.constructor.name}.`);

        await browser.wait(
            EC.elementToBeClickable(this.rootElement),
            timeout.xs,
            `[Protractor::click] The element ${this.rootElement.locator()} is not clickable on ${this.constructor.name}.`
        );

        this.logger.info(`click on: ${this.rootElement.locator()}`);
        return this.rootElement.click();
    }

    async getText() {
        await browser.wait(
            EC.presenceOf(this.rootElement),
            timeout.xs,
            `[Protractor::getText] The element ${this.rootElement.locator()} is not present on ${this.constructor.name}.`
        );

        this.logger.info(`getText from: ${this.rootElement.locator()}`);
        return this.rootElement.getText();
    }

    getWebElement() {
        this.logger.debug(`getWebElement from: ${this.rootElement.locator()}`);
        return this.rootElement.getWebElement();
    }

    async highlight () {
        const bg = this.rootElement.getCssValue("background-color");
        const highlightEl = await this.rootElement.getWebElement();
        await browser.executeScript("arguments[0].style.backgroundColor = '" + "red" + "' ", highlightEl);
        this.logger.debug(`highlight ${this.rootElement.locator()}`);
        return browser.executeScript("arguments[0].style.backgroundColor = '" + bg + "'", highlightEl);
    }

    hover() {
        this.logger.info(`hover ${this.rootElement.locator()}`);
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