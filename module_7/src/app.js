const HomePage = require('./po/pages/homePage/homePage');
const DocsPage = require('./po/pages/docsPage/docsPage');
const TutorialPage = require('./po/pages/tutorialPage/tutorialPage');

class App {

    /**
     * @param name {'Home'|'home'|'Docs'|'docs'|'Tutorial'|'tutorial'}
     * @return {BasePage}
     */
    page(name) {
        const page = {
            home: HomePage,
            docs: DocsPage,
            tutorial: TutorialPage
        };
        return new page[name.toLowerCase()]();
    }
};

module.exports = App;