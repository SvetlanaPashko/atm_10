const yargs = require('yargs');

const {argv} = yargs
    .options({
        threads: {
            description: 'The count of threads to run tests',
            demandOption: true,
            type: 'number',
            default: 1
        },
        logLevel: {
            description: 'The log level for log4js',
            demandOption: true,
            type: 'string',
            choices: ['trace', 'debug', 'info', 'warn', 'error', 'fatal'],
            default: 'warn'
        },
        tags: {
            description: 'scenarios marked with these tags will be executed',
            demandOption: false,
            type: 'string'
        }
    })
    .help();

module.exports = {argv};