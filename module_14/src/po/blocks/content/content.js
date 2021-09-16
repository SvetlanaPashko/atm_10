const {by} = require('protractor');
const BaseBlock = require('../baseBlock');
const Section = require('../../elements/section/section');

class Content extends BaseBlock {
    constructor(rootElement) {
        super(rootElement.$('.home-rows'));
    }

    section(value) {
        return new Section(this.rootElement.element(by.xpath(`./..//div[@layout="row"]//div[normalize-space(.)='${value}']`)));
    }
}

module.exports = Content;