const mongoose=require('mongoose');
// or as an es module:
// import mongoose from 'mongoose' in es6
// Connection URL
const chalk=require('chalk');
//or import chalk from 'chalk' in es6

const User=require('./employee.js'); // or import user from './employee.js' in es6 method

const url='mongodb://localhost:27017/employeedb';
mongoose.connect(url,{useNewUrlParser:true},(err,res)=>{
  if(err){
     return console.log(chalk.bold.red('unable to connect mongoose'));
  }
  console.log(chalk.bold.green('mongoose connect successful'));
 });
// const user=new User({
//   name:'sowad',
//   age:23  
// });
const obj=new User({
    name:' ali',
    age:23,

  });

  obj.save().then(()=>{
    console.log(obj);
    mongoose.connection.close();
    }).catch((error)=>{
        console.log(error);
});