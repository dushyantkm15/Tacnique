
const express=require('express');
const route=express.Router()

const services =require('../services/render');

route.get('/',services.homeRoutes);

route.get('/add_user',(req,res)=>{
    res.render('add_user.ejs');
})
route.get('/update_user',(req,res)=>{
    res.render('update_user.ejs');
})

module.exports = route