// www.thapa.com- welcome to my home page
// /about- welcome to my about page
// /contact- welcome to my contact page
// /temp- welcome to my temp page


const express = require('express')
const app = express()

// app.get(root,callback)

app.get("/",(req, res)=>{
    res.write("<h1>welcome to my home page</h1>")
    res.write("<h3>welcome again to my home page</h3>")
    res.send()
})
app.get("/about",(req, res)=>{
    res.status(200).send("welcome to my about page")
})

app.get("/contact",(req, res)=>{
    res.send("welcome to my contact page")
})

app.get("/temp",(req, res)=>{
    res.json([{
        id:"0001",
        name:"krantikumar"},
        {
            id:"005",
            name:"deshmukh"

        }
    ])
})

app.listen(3000,()=>{
    console.log("port 3000 reading")
}
)