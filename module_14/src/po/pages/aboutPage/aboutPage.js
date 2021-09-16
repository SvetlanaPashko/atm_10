const {$} = require('protractor');
const BasePage = require('../basePage');
const Cards = require('../../blocks/cards/cards');

class AboutPage extends BasePage {
    constructor() {
        super($('#about'), 'about?group=Angular');
        this.cards = new Cards(this.rootElement);
    }
}

module.exports = AboutPage;