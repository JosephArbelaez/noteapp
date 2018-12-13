const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) { 
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes))
};

let addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title: title,
        body: body
    };
    var duplicateNotes = notes.filter((note) => {
        return note.title === title;
    })

    if (duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }    
};

let getAll = () => {
    return fetchNotes();
}

let readNote = (title) => {
    let notes = fetchNotes();
    let note = notes.filter((note) => note.title === title); 
    return note[0];
}

let removeNote = (title) => {
    console.log('--');
    let notes = fetchNotes();
    let duplicateNotes = notes.filter((note) => note.title !== title);
    saveNotes(duplicateNotes);

    return duplicateNotes.length !== notes.length;
}

let logNote = (note) => {
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}
module.exports = {
    // This is equal to just having addNote (ES6)
    addNote: addNote,
    getAll: getAll,
    readNote: readNote,
    removeNote: removeNote,
    logNote: logNote
}