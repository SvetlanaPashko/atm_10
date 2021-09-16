const App = require('../app');
const {
    expect,
} = require('chai');

const app = new App();
const homePage = app.page('home');
const docsPage = app.page('docs');
const tutorialPage = app.page('tutorial');


describe('smoke suit', () => {
    beforeEach(async () => {
        await homePage.open()
    });

    it('check Get Started button is working', async () => {
        expect(await homePage.intro.isDisplayed()).to.be.true;

        await homePage.intro.startBtn.click();
        await docsPage.isOpened();

        await docsPage.navigate().back();
        await homePage.isOpened();
    });

    it('open page from search results', async () => {
        expect(await homePage.header.isDisplayed()).to.be.true;

        await homePage.header.searchInput.setValue('key');
        await homePage.searchResultPopup.isVisible();

        await homePage.searchResultPopup.searchElement('Create a new project').click();
        await tutorialPage.isOpened();
    });

    it('check section "Speed & Performance" on home page', async () => {
        expect(await homePage.content.section('Speed & Performance').isDisplayed()).to.be.true;
    })
})