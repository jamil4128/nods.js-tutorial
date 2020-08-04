// const fs = require("fs")
// const book = {
//     title: "title",
//     author: "Jamil"
// }
// const bookJSON = JSON.stringify(book)
// fs.writeFileSync("1-json.json", bookJSON)



// /* console.log(book.title)
// console.log(bookJSON.title)
// const parseData=JSON.parse(bookJSON)
// console.log(parseData.author) */

// const fs = require('fs');
// const dataBuffer = fs.readFileSync("1-json.json")
// const dataString = dataBuffer.toString()
// const data = JSON.parse(dataString)
// console.log(data)

const fs = require('fs');
const DataBuffer = fs.readFileSync("1-json.json")
const data = JSON.parse(DataBuffer.toString())
data.name = "Maruf"
data.age = "22"

const DataString = JSON.stringify(data)
//console.log(DataString)
fs.writeFileSync("1-json.json", DataString)
