const fs = require('fs');
const notes = require('./notes.js')
const _= require('lodash');
const yargs = require ('yargs');

/*
    With Yargs we can insert command method. This allows several things:
        All the parameters can now be required, have descriptions and an alias.
        Aliases allow us to enter -t instead of --title in order to make our commands
        easier to use.
*/
let title = {
    describe: 'Title of Note',
    demand: true,
    alias: 't'
}
let body = {
    describe: 'Body of the Note',
    demand: true,
    alias:'b'
}
const argv = yargs
    .command('add', 'Add a new note.', {title, body})
    .command('list', 'List all notes')
    .command('read', 'Read a note', {title})
    .command('remove', 'Remove a note', {title})
    .help()
    .argv;
let command = process.argv[2];

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note){
        console.log('Note created');
        console.log('--');
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    } else {
        console.log("Note already exists");
    }
} else if (command === 'list'){
    let allNotes = notes.getAll();
    console.log(`Printing: ${allNotes.length} notes(s).`);
    allNotes.forEach((note) => {
        notes.logNote(note);
    })
} else if (command === 'read') {
    var note = notes.readNote(argv.title);
    if (note) {
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    } else {
        console.log("Note does not exist.");
    }
} else if (command === 'remove'){
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? "Note was removed" : "Note not found";
    console.log(message);
} else {
    console.log('Command not reconized');
}