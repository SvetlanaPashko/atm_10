const App = require('../app');
const {expect} = require('chai');

const app = new App();
const homePage = app.page('home');
const docsPage = app.page('docs');
const tutorialPage = app.page('tutorial');
const aboutPage = app.page('about');
const contributorCard = aboutPage.cards.contributor('Alex Rickabaugh');


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
        expect(await homePage.header.isDisplayed()).to.be.true;

        expect(await homePage.content.section('Speed & Performance').isDisplayed()).to.be.true;
    })

    it('check that hover contains elements on About page', async () => {
        expect(await homePage.header.isDisplayed()).to.be.true;

        await homePage.footer.link('About').click();
        await aboutPage.isOpened();

        expect(await contributorCard.isDisplayed()).to.be.true;
        expect(await contributorCard.viewBio.isDisplayed()).to.be.false;
        expect(await contributorCard.giHub.isDisplayed()).to.be.false;
        expect(await contributorCard.twitter.isDisplayed()).to.be.false;

        await contributorCard.hover();
        expect(await contributorCard.viewBio.isDisplayed()).to.be.true;
        expect(await contributorCard.giHub.isDisplayed()).to.be.true;
        expect(await contributorCard.twitter.isDisplayed()).to.be.true;
    })

    it('check highlighting elements', async () => {
        expect(await homePage.header.isDisplayed()).to.be.true;
        await homePage.intro.startBtn.highlight();
    })
})