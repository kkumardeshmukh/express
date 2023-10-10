// www.thapa.com- welcome to my home page
// /about- welcome to my about page
// /contact- welcome to my contact page
// /temp- welcome to my temp page


const express = require('express')
const app = express()

// app.get(root,callback)

app.get("/",(req, res)=>{
    res.send("welcome to my home page")
})
app.get("/about",(req, res)=>{
    res.status(200).send("welcome to my about page")
})

app.get("/contact",(req, res)=>{
    res.send("welcome to my contact page")
})

app.get("/temp",(req, res)=>{
    res.send("welcome to my temp page")
})

app.listen(5000,()=>{
    console.log("port 5000 reading")
}
)