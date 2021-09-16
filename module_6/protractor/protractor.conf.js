exports.config = {
    baseUrl: 'https://angular.io',
    allSctiptsTimeout: 60000,
    getPageTimeout: 40000,

    specs: ['./src/tests/**/*.spec.js'],

    capabilities: {
        browserName: 'chrome',
    },

    jasmineNodeOpts: {
        defaultTimeoutInterval: 90000
    }
};