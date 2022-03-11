const mongoose=require('mongoose');
require('dotenv').config();

// const url='mongodb://localhost:27017/rest_api';
// console.log(process.env.url);
mongoose.connect(process.env.url,{useNewUrlParser:true},()=>{
  console.log('db connection successful')  
});


