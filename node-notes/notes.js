const fs = require("fs")
const getNotes = function () {
    return "Your notes..."
}
const addNotes = function (title, body) {
    notes = loadNotes()
    const duplicateNotes = notes.filter(note => note.title === title)
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log("new notes added")
    } else {
        console.log("Title not identical")

    }

}

const saveNotes = function (notes) {
    const note = JSON.stringify(notes)
    fs.writeFileSync("notes.json", note)
}
const loadNotes = function () {
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
        console.log("Notes Removed")
    } else {
        console.log("No title to delete")
    }

}
const removeTitle = (notes) => {
    const note = JSON.stringify(notes)
    fs.writeFileSync("notes.json", note)
}
module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes

}