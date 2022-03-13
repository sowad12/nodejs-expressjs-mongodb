const mongoose=require('mongoose');

const schema= mongoose.Schema({

name:{
 type:String,
 required:true
},email:{
  type:String,
  required:true  
},password:{
  type:String,
  require:true  
},confirm_password:{
 type:String,
 require:true
},date:{
   type:Date,
   default:Date.now 
}

});
module.exports=mongoose.model('auth',schema);