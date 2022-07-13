require ('dotenv').config ()
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book_routes");
const cors = require("cors");


const app =express()



//middlewares


app.use(express.json());
app.use(cors());


// parse application/json


app.use('/books',router) //localhost:5000/books










mongoose.connect(process.env.KEY).then(()=>
console.log('connected to database')).then(()=>{
    app.listen(5000)

}).catch((err)=>{
console.log(err);
})

