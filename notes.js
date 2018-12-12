console.log('Starting Notes.js');

let addNote = (title, body) => {
    console.log('Adding note', title, body);
};

let getAll = () => {
    console.log('Getting all notes');
}

let readNote = (title) => {
    console.log(`Reading note ${title}`)
}

let removeNote = (title) => {
    console.log(`Removing note ${title}`)
}
module.exports = {
    // This is equal to just having addNote (ES6)
    addNote: addNote,
    getAll: getAll,
    readNote: readNote,
    removeNote: removeNote
}