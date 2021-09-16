const {configure, getLogger} = require('log4js');
const {argv} = require('../../yargs.conf');

configure({
    appenders: {
        file: {
            type: 'file',
            filename: `./artifacts/log4js/${new Date().valueOf()}_PID_${process.pid}_e2e.log`,
        },
        console: {
            type: 'stdout',
            layout: {
                type: 'coloured',
            },
        },
    },
    categories: {
        default: {
            appenders: ['console', 'file'],
            level: argv.logLevel,
        }
    }
});

const Logger = namespace => getLogger(namespace);

module.exports = Logger;