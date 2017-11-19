console.log('Starting notes.js');

var addNote = (title, body) => {
    console.log('Adding note', title, body)
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