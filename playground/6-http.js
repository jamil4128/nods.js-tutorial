const http = require("http")
const url = "http://api.weatherstack.com/current?access_key=98670d2bcbce0a608524c4a371acf2fd&query=Dhaka"

const request = http.request(url, (response) => {
    let data = ""
    response.on("data", (chunk) => {
        data = data + chunk.toString()
    })
    response.on("end", () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})
request.on("error", (error) => {
    console.log("An error")
})
request.end()