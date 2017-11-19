console.log('Starting app.js');

const fs = require('fs');
const os = require('os');

const notes = require('./notes.js');

const _ = require('lodash');
const yargs = require('yargs');


args = yargs.argv;

command = args._[0];

console.log(args);

if (command === 'add'){
    notes.addNote(args.title, args.body)
}