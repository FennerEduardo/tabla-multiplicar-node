const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Is the base of the  multiplication table'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Is the limit for the multiplication table'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Show the multiplication table'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'Base should be a number'
        }
        if (isNaN(argv.h)) {
            throw 'Limit should be a number'
        }
        return true
    })
    .argv

module.exports = argv