
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
.options('b', {
   alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Base of the table multiplication'
})
.options('l', {
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'List the table in the console'
})
.options('s', {
    alias: 'show',
    type: 'boolean',
    default: false,
    describe: 'Limit of the multiplication'
})
.option('n',{
    alias: 'name',
    type: 'string',
    default: 'multiplication-table',
    describe: 'file name'
})
.option('d',{
    alias: 'destination',
    type: 'string',
    default: 'outputs',
    describe: 'file destination'
})

.check(( argv, options) => {

    if( argv.b < 1) throw ('The base must be greater than 0');
    return true;

} )

.parseSync();
