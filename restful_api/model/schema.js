const mongoose=require('mongoose');

const schema=mongoose.Schema({
    name:{
 type:String,
 required:true  
    },
    email:{
      type:String,
   
    },
    date:{
       type:Date,
       default:Date.now 
    }
});

module.exports=mongoose.model('rest',schema);