const {
    $
} = require('protractor');
const BasePage = require('../basePage');
const Content = require('../../blocks/content/content');
const Intro = require('../../blocks/intro/intro')

class HomePage extends BasePage {

    constructor() {
        super($('#home'), '');
        this.intro = new Intro(this.rootElement);
        this.content = new Content(this.rootElement);
    }
}

module.exports = HomePage;