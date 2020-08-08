const path = require("path")
const express = require("express")
const app = express()
const hbs=require("hbs")
// console.log(__dirname)
// console.log(path.join(__dirname, "../public"))

//define paths for express config
const directoryName = path.join(__dirname, "../public")
const viewDir=path.join(__dirname,"../templates/views")
const partials=path.join(__dirname,"../templates/partials")

//define handlebars engine and views location
app.set("view engine","hbs")
app.set("views",viewDir)
hbs.registerPartials(partials)

//setup statci directory to serve
app.use(express.static(directoryName))

//rendering app
app.get("", (req, res) => {
    // res.send("<h1>Express</h1>")
    res.render("index",{
        title:"Weather app",
        name:"Jamil"
    })
})
app.get("/about",(req,res)=>{
    res.render("about",{
        title:"About Me",
        name:"Jamil"
    })

})
app.get("/help",(req,res)=>{
    res.render("help",{
        title:"Want Help?",
        name:"Jamil",
        message:"You cant get any help"
    })
})

app.get("/weather", (req, res) => {
    res.send({
        forecast: "It is showing",
        location: "Dhaka"
    })
})
app.get("/help/*",(req,res)=>{
    res.render("errors",{
        error:"Help Directory Not found",
        title:"404!",
        name:"Jamil"
    })
})
app.get("*",(req,res)=>{
    res.render("errors",{
        error:"Page Not found",
        title:"404!",
        name:"Jamil"
    })

})

app.listen(3005, () => {
    console.log("Listening to port 3005")
})