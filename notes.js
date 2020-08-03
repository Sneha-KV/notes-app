const fs = require('fs');
const chalk = require('chalk');
const getNotes = (a) => { return `Your notes....${a} `}

const addNote = (title,body) => {
    const notes = loadNotes();
    // console.log(notes);
    
    const duplicateNotes = checkIfExists(notes,title);
    

    if(duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.bgGreen('New Note Added!'));
    } else {
        console.log(chalk.bgRed('Note exists!!'));
    }
    
}

const removeNote = (title) => {
    const notes = loadNotes();
    // const duplicateNotes = checkIfExists(notes,title);
    var newNotesArray = notes.filter(function(note){    
        return note.title !== title;
    })
    if(newNotesArray.length < notes.length) {

        console.log(chalk.bgGreen(`The note asked to be deleted is ${title}`));
        saveNotes(newNotesArray); 
    } else {
        console.log(chalk.red.inverse(`The note with title - ${title} does not exist`));
    }
}

const checkIfExists = (notes,title) => {
    const duplicateNotes = notes.filter(function(note){
        return note.title === title;
    })
    return duplicateNotes;
}

const saveNotes = (notes) => {
    // convert object to string while writing to the file
    fs.writeFileSync('notes.json',JSON.stringify(notes));
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = JSON.parse(dataBuffer);
        return dataJSON;
    } catch (e) {
        return []
    }
}



module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
};