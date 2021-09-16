const timeout = require('./src/helpers/timeout.json')

module.exports.config = {
    baseUrl: 'https://angular.io/',
    allSctiptsTimeout: timeout.min,
    getPageTimeout: timeout.l,

    specs: ['./src/tests/**/*.spec.js'],

    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
            w3c: false
        }
    },

    jasmineNodeOpts: {
        defaultTimeoutInterval: timeout.xl
    }
};