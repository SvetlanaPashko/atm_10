const timeout = require('./src/helpers/timeout.json')
const {argv} = require('./yargs.conf');

module.exports.config = {
    baseUrl: 'https://angular.io/',
    directConnect: false,
    ignoreUncaughtExceptions: false,
    allScriptsTimeout: timeout.min,
    getPageTimeout: timeout.l,

    specs: ['./src/tests/**/*.spec.js'],

    capabilities: {
        browserName: 'chrome',
        // browserVersion: '87.0',
        shardTestFiles: argv.threads > 1,
        maxInstances: argv.threads,
        'goog:chromeOptions': {
            w3c: false
        }
    },

    jasmineNodeOpts: {
        showColors: true,
        includeStackTrace: false,
        isVerbose: false,
        defaultTimeoutInterval: timeout.xl
    },

    async onPrepare() {
        const {protractor} = require('protractor');

        await protractor.browser.waitForAngularEnabled(true);
        await protractor.browser.sleep(timeout.xs)
    }
};