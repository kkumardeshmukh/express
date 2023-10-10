const express = require('express')

const app = express()

// app.get(root, callback)



// API methods
// get-read data fron Server
// post-create a new data
// put- for update the data
// delete- delete the data




app.get("/",(req, res)=>{
    res.send("hello from the express")
})

app.get("/about",(req, res)=>{
    res.send("hello from the express about page")
})

app.listen(8000,()=>{
    console.log("listening port no. 8000")
})