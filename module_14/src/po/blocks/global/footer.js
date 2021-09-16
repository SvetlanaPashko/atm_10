const {by, $} = require('protractor');
const BaseBlock = require('../baseBlock');
const Section = require('../../elements/section/section');

class Footer extends BaseBlock {
    constructor() {
        super($('footer.no-print'));
    }

    link(value) {
        return new Section(this.rootElement.element(by.xpath(`.//div[@class="footer-block ng-star-inserted"]//a[normalize-space(.)='${value}']`)));
    }
}

module.exports = Footer;