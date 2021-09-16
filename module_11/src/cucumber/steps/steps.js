const {Given, When, Then} = require('cucumber');
const App = require('../../app');
const {expect} = require('chai');

const app = new App();
const homePage = app.page('home');
const aboutPage = app.page('about');

Given(/^The "([^"]*)" page is opened$/, async (page) => {
    return await app.page(page).open();
});

Given(/^The GetStarted button should be displayed$/, async () => {
    return expect(await homePage.intro.isDisplayed()).to.be.true;
});

When(/^The GetStarted button is clicked$/, async () => {
    return await homePage.intro.startBtn.click();
});

Then(/^The "([^"]*)" page should be opened$/, async (page) => {
    return await app.page(page).isOpened();
});

When(/^The browser (back|forward|refresh) button is clicked on the "([^"]*)" page$/, async (btn, page) => {
    return await app.page(page).navigate()[btn]();
});

Then(/^The footer link "([^"]*)" is present$/, async (link) => {
    return expect(await homePage.footer.link(link).isDisplayed()).to.be.true;
});

When(/^The footer link "([^"]*)" is clicked$/, async (link) => {
    return await homePage.footer.link(link).click();
});

When(/^The "([^"]*)" card is displayed$/, async (contributor) => {
    return expect(await aboutPage.cards.contributor(contributor).isDisplayed()).to.be.true;
});

When(/^The icon "([^"]*)" on the "([^"]*)" card is (not )?displayed$/, async (item, contributor, not) => {
    const contributorIcon = aboutPage.cards.contributor(contributor).icon(item);
    return expect(await contributorIcon.isDisplayed()).to.be.equal(!not);
});

When(/^The "([^"]*)" card is hovered$/, async (contributor) => {
    return await aboutPage.cards.contributor(contributor).hover();
});
