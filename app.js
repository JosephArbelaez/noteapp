console.log('Starting app.');

// Functions that are in fs or os are now available to use

const fs = require('fs');
const notes = require('./notes.js')
const _= require('lodash');
const yargs = require ('yargs');
const argv = yargs.argv;
let command = process.argv[2];

console.log('Command: ', command);
console.log('Yargs :', argv);

if (command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if (command === 'list'){
    notes.getAll();
} else if (command === 'read') {
    notes.readNote(argv.title);
} else if (command === 'remove'){
    notes.removeNote(argv.title);
} else {
    console.log('Command not reconized');
}