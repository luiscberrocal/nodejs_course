console.log('Starting notes.js');

const fs = require('fs')

var addNote = (title, body) => {
    var sourceFile = './output/notes-data.json';
    var notes = [];
    var note = {
        title,
        body
    };
    try {
        notesString = fs.readFileSync(sourceFile);
        notes = JSON.parse(notesString);
    } catch (e) {

    }

    var duplicateNotes = notes.filter((notes) => note.title === title);

    if (duplicateNotes.length === 0){
        notes.push(note);
        fs.writeFileSync(sourceFile, JSON.stringify(notes));
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