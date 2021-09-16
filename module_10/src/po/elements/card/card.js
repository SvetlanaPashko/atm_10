const BaseElement = require('../baseElement');
const {by} = require('protractor');

class Card extends BaseElement {
    /**
     * @param  value ('viewBio'|'gitHub'|'twitter')
     * @returns {ElementFinder}
     */
    icon(value) {
        const items = {
            viewbio: 'View Bio',
            github: 'link',
            twitter: '',
        }
        return this.rootElement.element(by.xpath(`./..//div[@class="contributor-info"]//a[normalize-space(.)="${items[value.toLowerCase()]}"]`))
    }
}

module.exports = Card;