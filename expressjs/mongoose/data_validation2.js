//https://mongoosejs.com/docs/schematypes.html
//https://mongoosejs.com/docs/validation.html
//learn from above those links

const validator=require('validator');
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
 console.log(chalk.bold.green('mongoose connect successful'));
});

const User=mongoose.model('User',{
    name:{
     type:String,
     required:true,
     trim:true
    },
    email:{
     type:String,
     required:true,  // cannot be NULL
     trim:true, // if i insert ' sowad ' after triming mongoose insert 'sowad' in database
     lowercase:true, // covert email into lowercase then store in database
     validate(value){ //custom validator and using npm validator
         if(!validator.isEmail(value)){
           throw new Error('Invalid Email');
         }
     }
    },
    age:{
      type:Number,
      default:0,//set default value 0 if i don't insert age  
      validate(value){ //custom validator
          if(value<0){
             throw new Error('age must be positive number');
          }
      }  
    }
});

const obj=new User({
    name:' mike ',
    age:50,
    email:'MIKE@gmail.com'
});
obj.save().then(()=>{
console.log(obj);
mongoose.connection.close();
}).catch((error)=>{
    console.log(error);
    mongoose.connection.close();
})