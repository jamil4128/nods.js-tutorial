const fs = require("fs")
const chalk = require("chalk")
const getNotes = () => {
    return "Your notes..."
}
const addNotes = (title, body) => {
    notes = loadNotes()
    const duplicateNotes = notes.find(note => note.title === title)
    if (!duplicateNotes) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("new notes added"))
    } else {
        console.log(chalk.red.inverse("Title not identical"))

    }

}

const saveNotes = (notes) => {
    const note = JSON.stringify(notes)
    fs.writeFileSync("notes.json", note)
}
const loadNotes = () => {
    try {
        const noteBuffer = fs.readFileSync("notes.json")
        const note = JSON.parse(noteBuffer.toString())
        return note

    } catch (error) {
        return []

    }

}
const removeNotes = (title) => {
    notes = loadNotes()
    const removed = notes.filter(note => note.title === title)
    if (removed.length) {
        const index = notes.findIndex(p => p.title === title)
        const note = notes.splice(index, 1)
        removeTitle(notes)
        console.log(chalk.green.inverse("Note Removed!"))
    } else {
        console.log(chalk.red.inverse("No Note Found!"))
    }

}
const removeTitle = (notes) => {
    const note = JSON.stringify(notes)
    fs.writeFileSync("notes.json", note)
}
const listNotes = () => {
    notes = loadNotes()
    console.log(chalk.white.inverse("Your notes "))
    notes.forEach(element => {
        console.log(element.title)

    });

}
const readNotes = (title) => {
    notes = loadNotes()
    const read = notes.find(n => n.title === title)
    if (read) {
        console.log("Title: " + chalk.green(read.title))
        console.log("Body: " + read.body)
    } else {
        console.log(chalk.red("Error!"))
    }

}
module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes

}