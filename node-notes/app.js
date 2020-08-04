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
    handler: function (argv) {
        notes.addNotes(argv.title, argv.body)

    }
})
//create remove command
yargs.command({
    command: "remove",
    describe: "remove a new note",
    handler: function () {
        console.log("Inside function of removing a new commands")
    }
})
//create read command
yargs.command({
    command: "read",
    describe: "Read a new note",
    handler: function () {
        console.log("Inside function of Reading a new commands")
    }
})
//create list command
yargs.command({
    command: "list",
    describe: "List a new note",
    handler: function () {
        console.log("Inside function of Listing a new commands")
    }
})
yargs.parse()

