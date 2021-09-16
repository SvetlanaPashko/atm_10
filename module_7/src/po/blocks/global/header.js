const {
    $
} = require('protractor');
const BaseBlock = require('../baseBlock');
const Input = require('../../elements/search/input');
const Logo = require('../../elements/logo/logo')

class Header extends BaseBlock {
    constructor() {
        super($('mat-toolbar-row:not(.notification-container)'));
    }

    get logoHome() {
        return new Logo(this.rootElement.$('.nav-link'))
    }

    get searchInput() {
        return new Input(this.rootElement.$('.search-container input'));
    }
}

module.exports = Header;