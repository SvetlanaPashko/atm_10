const BaseBlock = require('../baseBlock');
const Button = require('../../elements/buttons/button')

class Intro extends BaseBlock {
    constructor(rootElement) {
        super(rootElement.$('#intro'));
    }

    get startBtn() {
        return new Button(this.rootElement.$('.hero-cta'))
    }
}

module.exports = Intro;