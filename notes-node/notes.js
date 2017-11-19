console.log('Starting notes.js');

module.exports.addNote = (x, y) => {
    console.log(`Added a note with ${x} and ${y}` );
    return `Note with ${x} and ${y}`;
};