const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

yargs.version('1.1.0');
//add, remove, read, list

// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new Note',
    builder: {
        title: {
            describe: 'Note title',
            type: 'string',
            demandOption: true
            
        },
        body: {
            describe: 'Note Body',
            type: "string",
            demandOption: true
        }
    },
    handler: function(argv) {
    //    notes.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
       notes.removeNote(argv.title);
    }
});

yargs.command({
    command: 'list',
    describe: 'Listing the note',
    handler: function(){
        console.log('Listing a note');
    }
})

yargs.command({
    command: 'read',
    describe: 'Read the note',
    handler: function(){
        console.log('Read a note');
    }
})
yargs.argv;
// console.log(chalk.green.inverse("Success!!"))
// console.log(getNotes('Hello Dear'))
// console.log(chalk.blue.red.magentaBright('Hello') + ' World' + chalk.bgRed.yellow.underline(' Dear!'));
// console.log(chalk.keyword('green')('Hello','Orange colored text'));


// const validator = require('validator'); // npm validator



// arguments process.argv

// console.log(validator.isURL('https://snehagmail.com'))

// const addFun = require('./utils.js'); // relative path
// console.log(addFun(4, -9));