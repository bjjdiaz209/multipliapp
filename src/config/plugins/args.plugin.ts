
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

.parseSync();
