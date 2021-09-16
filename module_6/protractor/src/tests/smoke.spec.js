const {
    browser,
    element,
    by,
    ExpectedConditions
} = require('protractor');
const {
    expect,
} = require('chai');

describe('smoke tests', () => {
    it('check Get started button and do some search', async function () {
        await browser.get('');
        await element(by.cssContainingText('.button', 'Get Started')).click();
        await browser.wait(
            ExpectedConditions.titleIs('Angular - Introduction to the Angular Docs'),
            10000,
            'There is no such title'
        );

        expect(await browser.getCurrentUrl()).to.equal('https://angular.io/docs');
        await browser.navigate().back();

        await element(by.xpath('//aio-search-box/input[@type = "search"]')).sendKeys('key');
        expect(await element(by.cssContainingText('span', 'Create a new project')).isDisplayed()).to.be.true;
        await element(by.cssContainingText('span', 'Create a new project')).click();

        expect(await browser.getCurrentUrl()).to.equal('https://angular.io/tutorial/toh-pt0');
        expect(await element(by.id('summary')).isDisplayed()).to.be.true;
    })
})