const router=require('express').Router();
const verify=require('./verifytoken');
const post = require("../model/user");

router.get('/post',verify,async(req,res)=>{
    // res.json({
    //    post:{
    //        title:'first jwttoken',
    //        discription:'lol'
    //    } 
    // })
    // res.send(req.user);
  const data=  await post.findOne({email:req.user.email});//we can find database data using token mail or id
  res.json(data);

})

module.exports=router;