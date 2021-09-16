const {$, by} = require('protractor');
const Popup = require('../../elements/popup/popup');
const BaseElement = require('../../elements/baseElement');

class SearchResultPopup extends Popup {
    constructor() {
        super($('aio-search-results'));
    }

    searchElement(value) {
        return new BaseElement(this.rootElement.element(by.cssContainingText('span', value)))
    }
}

module.exports = SearchResultPopup;