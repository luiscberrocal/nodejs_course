console.log('Starting app.js');

const fs = require('fs');
const os = require('os');

const notes = require('./notes.js');

const _ = require('lodash');
const yargs = require('yargs');

var titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};
var bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
}

args = yargs
    .command('add', 'Add new note', {
        'title': titleOptions,
        'body': bodyOptions,
    })
    .command('list', 'List all notes')
    .command('remove', 'Remove a note', {
        'title': titleOptions
    })
    .command('read', 'Read a note', {
        'title': titleOptions
    })
    .help()
    .argv;

command = args._[0];

//console.log(args);


if (command === 'add') {
    var note = notes.addNote(args.title, args.body);
    if (note) {
        notes.printResults(note, 'created')
    } else {
        console.log('Note not found')
    }
} else if (command === 'list') {
    var allNotes = notes.listNotes();
    console.log(`Printing ${allNotes.length} notes`)
    allNotes.forEach((note) => notes.printResults(note, 'listed'))
} else if (command == 'remove') {
    var result = notes.removeNote(args.title);
    var message = result ? 'Note removed' : 'Note not found';
    console.log(message);
} else if (command == 'read') {
    var note = notes.readNote(args.title);
    if (note) {
        notes.printResults(note, 'fetched')
    }
    ;

}