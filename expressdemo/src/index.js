const path = require('path')
const express = require('express')
const app = express()
const hbs = require('hbs')

//const staticpath = path.join(__dirname,"../public/style.css")
const templatepath = path.join(__dirname,"../templates/views")
const partialspath = path.join(__dirname,"../templates/partials")
app.use(express.static('public'))

// to set the view engine

app.set('view engine',"hbs")
app.set('views',templatepath)
hbs.registerPartials(partialspath)



//built in middleware

//app.use(express.static(staticpath))

// template engine route

app.get("/",(req, res)=>{

    res.render('index',{
        myname : "krantikumar"
    })

})
app.get("/about",(req, res)=>{
    res.render("about")
})


// always put * this at bottum
//because code runner check all the page 
//then give you error 


app.get('*',(req, res)=>{
    res.render('404',{
        pageerror:"page not found"
    })
})


app.listen(5000,()=>{
    console.log("listening port no. 5000")
})