const {$} = require('protractor');
const BasePage = require('../basePage');

class DocsPage extends BasePage {
    constructor() {
        super($('#docs'), 'docs');
    }
}

module.exports = DocsPage;