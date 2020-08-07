// console.log("Starting....")
// setTimeout(() => {
//     console.log("2 second timeout")
// }, 2000)
// setTimeout(() => {
//     console.log("0 second timeout")
// }, 000)
// console.log("Stopping...")

// const request = require("request")
// const url = "http://api.weatherstack.com/current?access_key=98670d2bcbce0a608524c4a371acf2fd&query=dhaka"
// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log("Unable to connect")
//     } else if (response.body.error) {
//         console.log("Internal error")
//     } else {
//         console.log(response.body.current.temperature)
//         console.log(response.body.current.pressure)
//     }

// })


//Geocoding

const request = require("request")
const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")
const address = process.argv[2]
if (!address) {
    console.log("provide an address")
} else {
    geocode(address, (error, { location }) => {
        if (error) {
            return console.log("Error: ", error)
        }
        forecast(location, (error, { temperature, pressure, prediction }) => {
            if (error) {
                return console.log("Error: ", error)
            }
            console.log(location)
            console.log("Its " + temperature + " degree celcius and there is " + pressure + " atmospheric pressure. And " + prediction)
        })
    })


}

