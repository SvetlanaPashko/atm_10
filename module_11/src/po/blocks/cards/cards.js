const {by} = require('protractor');
const BaseBlock = require('../baseBlock');
const Card = require('../../elements/card/card');

class Cards extends BaseBlock {
    constructor(rootElement) {
        super(rootElement.$('.grid-fluid.ng-star-inserted'));
    }

    contributor(value) {
        return new Card(this.rootElement.element(by.xpath(`.//div[@class="contributor-card"]//h3[normalize-space(.)='${value}']`)));
    }
}

module.exports = Cards;