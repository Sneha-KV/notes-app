const fs = require('fs');
const chalk = require('chalk');
const getNotes = (a) =>  `Your notes....${a} `

// Function to add a note
const addNote = (title,body) => {
    const notes = loadNotes();
    // console.log(notes);
    
    const duplicateNote = checkIfExists(notes,title);
    

    if(!duplicateNote) {
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

// function to remove notes
const removeNote = (title) => {
    const notes = loadNotes();
    // const duplicateNotes = checkIfExists(notes,title);
    var newNotesArray = notes.filter((note) => note.title !== title)
    if(newNotesArray.length < notes.length) {

        console.log(chalk.bgGreen(`The note asked to be deleted is ${title}`));
        saveNotes(newNotesArray); 
    } else {
        console.log(chalk.red.inverse(`The note with title - ${title} does not exist`));
    }
}


// function to List all the notes
const lisNotes = () =>{
    const notes = loadNotes();
    console.log(chalk.bold.underline('Your Notes'));
    // console.log(notes);
    notes.forEach((note) => {
        console.log(chalk.yellow(note.title));
    })
}

// Function to read any specific note

const readNote = (title) => {
    const notes = loadNotes();
    desiredNote = notes.find((note) => note.title === title);
    if(desiredNote) {
        console.log(chalk.black.bgYellow('Note title '+title));
        console.log(desiredNote.body)
    } else {
        console.log(chalk.black.bgRed('Note with title '+ title +' not found.'));
    }
    
}


const checkIfExists = (notes,title) => {
    // duplicate notes, can use filter too
    return notes.find((note) => note.title === title)
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
    removeNote: removeNote,
    lisNotes: lisNotes,
    readNote: readNote
};