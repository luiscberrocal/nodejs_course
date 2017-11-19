console.log('Starting notes.js');

const fs = require('fs')
const sourceFile = './output/notes-data.json';

var fetchNotes = () => {
    try {
        notesString = fs.readFileSync(sourceFile);
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync(sourceFile, JSON.stringify(notes));
};

var addNote = (title, body) => {

    var notes = fetchNotes();
    //console.log('Notes>>', notes);
    var note = {
        title,
        body
    };

    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note
    }else {
        //console.log('Duplicate value');
    }
};

var listNotes = () => {
   return fetchNotes();
}

var readNote = (title) =>{
    var notes = fetchNotes();
    var foundNotes = notes.filter((note) => note.title === title);
    return foundNotes[0];
}

var removeNote = (title) =>{
    var notes = fetchNotes();
    var notDeletedNotes = notes.filter((note) => note.title !== title);
    saveNotes(notDeletedNotes);
    return notes.length !== notDeletedNotes.length;
}

var printResults = (note, action) => {
    console.log(`Note ${action}`);
    console.log('--------------');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

module.exports = {
    addNote,
    listNotes,
    removeNote,
    readNote,
    printResults
};