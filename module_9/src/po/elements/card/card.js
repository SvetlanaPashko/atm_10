const BaseElement = require('../baseElement');
const {by} = require('protractor');

class Card extends BaseElement {
    get viewBio() {
        return this.rootElement.element(by.xpath('./..//div[@class="contributor-info"]//a[normalize-space(.)="View Bio"]'))
    }

    get giHub() {
        return this.rootElement.element(by.xpath('./..//div[@class="contributor-info"]//a[normalize-space(.)="link"]'))
    }

    get twitter() {
        return this.rootElement.element(by.xpath('./..//div[@class="contributor-info"]//mat-icon[@data-mat-icon-name="twitter"]'))
    }
}

module.exports = Card;