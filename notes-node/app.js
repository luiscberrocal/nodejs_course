console.log('Starting app.js');

const fs = require('fs');
const os = require('os');

const notes = require('./notes.js');

const _ = require('lodash');
const yargs = require('yargs');


args = yargs.argv;

command = args._[0];

console.log(args);

var printResults = (note, action) => {
    console.log(`Note ${action}`);
    console.log('--------------');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

if (command === 'add') {
    var note = notes.addNote(args.title, args.body);
    if (note) {
      printResults(note, 'created')
    } else {
        console.log('Note not found')
    }
} else if (command === 'list') {
    var allNotes = notes.listNotes();
    console.log(`Printing ${allNotes.length} notes`)
    allNotes.forEach((note) => printResults(note, 'listed'))
} else if (command == 'remove') {
    var result = notes.removeNote(args.title);
    var message = result ? 'Note removed' : 'Note not found';
    console.log(message);
} else if (command == 'read') {
    var note = notes.readNote(args.title);
    if (note) {
      printResults(note, 'fetched')
    };

}