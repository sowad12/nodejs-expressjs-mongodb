//create database and insert

const mongoose=require('mongoose');
const chalk=require('chalk');

const url='mongodb://localhost:27017/employeedb';
mongoose.connect(url,{useNewUrlParser:true},(err,res)=>{
 if(err){
    return console.log(chalk.bold.red('unable to connect mongoose'));
 }
 console.log(chalk.bold.green('mongoose connect successful'));
});

// const User=mongoose.model('User',{
//     name:String,
//     age:Number
// });

const task=mongoose.model('task',{
    discription:String,
    field:Boolean
})

const obj=new task({
    discription:'learn mongoose library',
    field:false
});

obj.save().then(()=>{
console.log(obj);
mongoose.connection.close();
}).catch((error)=>{
    console.log(error);
})