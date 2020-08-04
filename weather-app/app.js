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
const geocodeurl = "https://api.mapbox.com/geocoding/v5/mapbox.places/dhaka.json?access_token=pk.eyJ1IjoiamFtaWwtMzQiLCJhIjoiY2tkZ2l6NW1sMml2NjJ4cG1zdWIya3JrOCJ9.u-WRzzHsbUwKGA74KTCX3A&limit=1"

request({ url: geocodeurl, json: true }, (error, response) => {
    if (error) {
        console.log("Unable to connect to server")
    }
    else if (response.body.message) {
        console.log("Check your spelling")
    } else if (response.body.features.length === 0) {
        console.log("Unable to find location. Try another Search")
    }
    else {
        const latitude = response.body.features[0].center[0]
        const langtitude = response.body.features[0].center[1]
        //console.log("latitude: " + response.features[0].center[1])
        console.log("latitude: ", latitude)
        console.log("langtitude: ", langtitude)
    }

})