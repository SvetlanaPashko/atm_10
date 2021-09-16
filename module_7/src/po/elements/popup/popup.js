const {
	browser,
	ExpectedConditions: EC,
} = require('protractor');
const BaseElement = require('../baseElement');
const timeout = require('../../../helpers/timeout.json')

class Popup extends BaseElement {

	isVisible() {
		return browser.wait(
			EC.visibilityOf(this.rootElement),
			timeout.l,
			`The element ${this.rootElement.locator()} is not displayed on ${this.constructor.name}`
		);
	}
}

module.exports = Popup;
