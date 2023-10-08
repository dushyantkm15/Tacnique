const express=require('express');
const dotenv=require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');

// const connectDB = require('./server/database/connection');

const app=express();



app.use(morgan('tiny'));

// connectDB();

app.use(bodyparser.urlencoded({ extended : true}))

app.set("view engine", "ejs")

app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

app.get('/',(req,res)=>{
    res.render('index.ejs');
})
app.get('/add_user',(req,res)=>{
    res.render('add_user.ejs');
})
app.get('/update_user',(req,res)=>{
    res.render('update_user.ejs');
})
app.listen(8080,()=>{console.log('server is running on http://localhost:8080')});