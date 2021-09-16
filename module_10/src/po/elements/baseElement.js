const Protractor = require('../../core/protractor');

class BaseElement extends Protractor {
    /**
     * @param number {Element index}
     * @returns {*|ElementFinder}
     */
    get(number) {
        return this.rootElement.get(number);
    }
}

module.exports = BaseElement;