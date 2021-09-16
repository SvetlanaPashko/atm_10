const BaseElement = require('../baseElement');

class Input extends BaseElement {
    clear() {
        return this.rootElement.clear();
    }

    async setValue(value) {
        await this.clear();
        return this.rootElement.sendKeys(value);
    }
}

module.exports = Input;