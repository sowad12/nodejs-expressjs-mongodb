const mongoose=require('mongoose');
const schema=new mongoose.Schema({
 name:String,
 age:Number,
 email:String,
 mobile:String,
 city:String   

});
module.exports=mongoose.model("lol",schema); // string lol means document name