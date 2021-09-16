const {ExpectedConditions: EC, browser} = require('protractor');
const Protractor = require('../../core/protractor');
const Header = require('../blocks/global/header');
const Footer = require('../blocks/global/footer');
const SearchResultPopup = require('../blocks/searchResultPopup/searchResultPopup')
const timeout = require('../../helpers/timeout.json');

class BasePage extends Protractor {
    /**
     * @param rootElement {ElementFinder | ElementArrayFinder}
     * @param url {string} unique part of page URL
     */
    constructor(rootElement, url) {
        super(rootElement);
        this.url = url;
        this.baseUrl = browser.baseUrl;
        this.header = new Header();
        this.footer = new Footer();
        this.searchResultPopup = new SearchResultPopup();
    }

    open(url = this.url) {
        return browser.get(url);
    }

    async isOpened() {
        try {
            await browser.wait(
                EC.urlIs(this.baseUrl + this.url),
                timeout.m,
                `The page URL is not ${this.baseUrl + this.url}`
            );
            await browser.wait(
                EC.visibilityOf(this.rootElement),
                timeout.m,
                `The element ${this.rootElement} is not displayed on ${this.constructor.name}`
            );
        } catch (e) {
            throw new Error(e);
        }
    }

    navigate() {
        return {
            back: () => browser.navigate().back(),
            forward: () => browser.navigate().forward(),
            refresh: () => browser.navigate().refresh()
        };
    }
}

module.exports = BasePage;