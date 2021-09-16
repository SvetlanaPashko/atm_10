const timeout = require('./src/helpers/timeout.json');
const {argv} = require('./yargs.conf');
const ARTIFACTS_DIR = './artifacts/';

module.exports.config = {
    baseUrl: 'https://angular.io/',
    directConnect: false,
    ignoreUncaughtExceptions: false,
    allScriptsTimeout: timeout.min,
    getPageTimeout: timeout.l,

    specs: ['./src/tests/**/*.feature'],

    capabilities: {
        browserName: 'chrome',
        browserVersion: 'latest',
        shardTestFiles: argv.threads > 1,
        maxInstances: argv.threads,
        'goog:chromeOptions': {
            w3c: false
        }
    },

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    cucumberOpts: {
        require: [
            './src/cucumber/steps/**/*.js',
            './src/cucumber/hooks/**/*.js'
        ],
        format: [
            `json:${ARTIFACTS_DIR}/cucumber/report.json`,
            'node_modules/cucumber-pretty',
            `node_modules/cucumber-junit-formatter:${ARTIFACTS_DIR}/junit/junit.xml`
        ],
        tags: argv.tags || '@smoke',
    },

    onPrepare: async function () {
        const {protractor} = require('protractor');
        await protractor.browser.waitForAngularEnabled(true);
    },

    beforeLaunch: function () {
        const fs = require('fs-extra');
        const folders = {
            html : `${ARTIFACTS_DIR}/html`,
            cucumber : `${ARTIFACTS_DIR}/cucumber`,
            junit : `${ARTIFACTS_DIR}/junit`,
            screenshots : `${ARTIFACTS_DIR}/screenshots`,
        }

        function createDir(folder) {
            if (!fs.existsSync(folder)) {
                fs.mkdirpSync(folder)
        }}

        function cleanDir(folder) {
            if (folder !== folders.screenshots ) {
                fs.emptyDirSync(folder);
            }
        }

        for (let foldersKey in folders) {
            createDir(folders[foldersKey]);
        }

        for (let foldersKey in folders) {
            cleanDir(folders[foldersKey]);
        }

    },

    afterLaunch: function () {
        const reporter = require('cucumber-html-reporter');
        const {reporterOptions} = require('./report.conf');
        reporter.generate(reporterOptions);
    }
};