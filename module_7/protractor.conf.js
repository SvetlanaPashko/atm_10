const timeout = require('./src/helpers/timeout.json')

module.exports.config = {
    baseUrl: 'https://angular.io/',
    allSctiptsTimeout: timeout.min,
    getPageTimeout: timeout.l,

    specs: ['./src/tests/**/*.spec.js'],

    capabilities: {
        browserName: 'chrome',
    },

    jasmineNodeOpts: {
        defaultTimeoutInterval: timeout.xl
    }
};