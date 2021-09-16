const reporterOptions = {
    theme: 'bootstrap',
    jsonDir: './artifacts/cucumber/',
    output: './artifacts/html/report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: false
}

module.exports = {reporterOptions};