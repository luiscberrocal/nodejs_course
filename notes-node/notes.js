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

var saveNote = (notes) => {
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
        saveNote(notes);
    }else {
        console.log('Duplicate value');
    }
};

var listNotes = () => {
    console.log('Listing all nodes!!')
}

var removeNote = (title) =>{
    console.log('Removing ', title);
}
module.exports = {
    addNote,
    listNotes,
    removeNote
};