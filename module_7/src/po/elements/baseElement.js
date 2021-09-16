const Protractor = require('../../core/protractor');

class BaseElement extends Protractor {

    get(number) {
        return this.rootElement.get(number);
    }
}

module.exports = BaseElement;
