const jasmineReporters = require('jasmine-reporters');
const protractorBeautiful = require('protractor-beautiful-reporter');
const {JasmineAllureReporter} = require('allure-jasmine');

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
        browserVersion: 'latest',
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

    onPrepare: async function () {
        const {protractor} = require('protractor');
        await protractor.browser.waitForAngularEnabled(true);

        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: './artifacts/reports/jUnit/',
            filePrefix: 'xmloutput'
        }));

        jasmine.getEnv().addReporter(new protractorBeautiful({
            baseDirectory: './artifacts/reports/beautiful/',
            takeScreenShotsOnlyForFailedSpecs: true,
            screenshotsSubfolder: 'screenshots',
            jsonsSubfolder: 'jsons'
        }).getJasmine2Reporter());

        jasmine.getEnv().addReporter(new JasmineAllureReporter({
            resultsDir: "./artifacts/reports/allure/source/"
        }));
    },
};