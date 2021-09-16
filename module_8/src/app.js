const HomePage = require('./po/pages/homePage/homePage');
const DocsPage = require('./po/pages/docsPage/docsPage');
const TutorialPage = require('./po/pages/tutorialPage/tutorialPage');
const AboutPage = require('./po/pages/aboutPage/aboutPage');

class App {
    /**
     * @param name {'Home'|'home'|'Docs'|'docs'|'Tutorial'|'tutorial'|'About'|'about'}
     * @return {BasePage}
     */
    page(name) {
        const page = {
            home: HomePage,
            docs: DocsPage,
            tutorial: TutorialPage,
            about: AboutPage
        };
        return new page[name.toLowerCase()]();
    }
}

module.exports = App;