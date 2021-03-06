// const fs = require("fs")

// //fs.writeFileSync("notes.txt","This is my first file")
// fs.appendFileSync("notes.txt","Another line to my text")

// const add=require("./utilities")
// const sum=add(4,2)
// console.log(sum)

/* const getNotes = require("./notes.js") */
// const a=getNotes()
// console.log(a)

// const validator = require("validator")

// console.log(validator.isEmail("jamil@example.com"))

/* const chalk = require("chalk") */
// const greenMsg = chalk.red.inverse.bold("Error!")
// console.log(greenMsg)

const notes = require("./notes.js")
const chalk = require("chalk")
const yargs = require("yargs")
yargs.version['1.1.0']

/* const command = process.argv[2]
if (command.toLowerCase() === "add") {
    console.log("Adding......")
} else if (command.toLowerCase() === "remove") {
    console.log("Removing...")
} */
/* console.log(process.argv) */

//create add command
yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note Body",
            demandOption: true,
            type: "string"
        },
    },
    handler(argv) {
        notes.addNotes(argv.title, argv.body)

    }
})
//create remove command
yargs.command({
    command: "remove",
    describe: "remove a new note",
    builder: {
        title: {
            describe: "Remove Title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.removeNotes(argv.title)
    }
})
//create read command
yargs.command({
    command: "read",
    describe: "Read a new note",
    builder: {
        title: {
            describe: "Read a note",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.readNotes(argv.title)
    }
})
//create list command
yargs.command({
    command: "list",
    describe: "List a new note",
    handler(argv) {
        notes.listNotes()
    }
})
yargs.parse()

