//create database and insert

const mongoose=require('mongoose');
// or as an es module:
// import mongoose from 'mongoose' in es6
// Connection URL
const chalk=require('chalk');
//or import chalk from 'chalk' in es6
const url='mongodb://localhost:27017/employeedb';
mongoose.connect(url,{useNewUrlParser:true},(err,res)=>{
 if(err){
    return console.log(chalk.bold.red('unable to connect mongoose'));
 }
 console.log(chalk.bold.green('mongoose connection successful'));
});

const User=mongoose.model('User',{
    name:String,
    age:Number
});
const obj=new User({
    name:'rahim',
    age:27
});

obj.save().then(()=>{
console.log(obj);
mongoose.connection.close();
}).catch((error)=>{
    console.log(error);
})