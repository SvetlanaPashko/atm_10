const {$} = require('protractor');
const BasePage = require('../basePage');

class TutorialPage extends BasePage {
    constructor() {
        super($('#tutorial-toh-pt0'), 'tutorial/toh-pt0');
    }
}

module.exports = TutorialPage;