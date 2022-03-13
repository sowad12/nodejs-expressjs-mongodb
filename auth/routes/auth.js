const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt=require('jsonwebtoken');
const post = require("../model/user");
const { register, login } = require("../validation/validate");
// require('dotenv').config();

//Registration
router.post("/register", async (req, res) => {
  // const {error}=Joi.validate(req.body,schema); // for test purpose
  //  res.send(error);
  // console.log(req.body);

  const { error } = register(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // check duplicate email or email already in database
  const emailchek = await post.findOne({ email: req.body.email });
  if (emailchek) return res.status(400).send("email already exist");

    // password check
 if(req.body.password==req.body.confirm_password){
     //hash password
    // const salt=await bcrypt.genSalt(10);
    // console.log(salt);
  const hashpass = await bcrypt.hash(req.body.password, 10); // use salt or any numer here i give 10
  const cfhashpass=await bcrypt.hash(req.body.confirm_password, 10);

    const obj = new post({
      name: req.body.name,
      email: req.body.email,
      password: hashpass,
      confirm_password:cfhashpass
    });
    try {
      const reg = await obj.save();
    
      res.json(reg);
    } catch (err) {
      res.status(400).send(err);
    }
 }
 else{
  res.status(400).send('password does not match'); 
 }
});


//Login

router.post("/login",async (req, res) => {
  const { error } = login(req.body);
//  console.log(req.body.email);
  if (error) return res.status(400).send(error.details[0].message);
  
  const user= await post.findOne({email:req.body.email});
 
// check user exist or not
  if(!user) return res.status(400).send('Email  wrong');

  // password check
  const validpass=await bcrypt.compare(req.body.password,user.password);
 
  if(!validpass) return res.status(400).send('Password wrong');

  //create and assign a token

  // console.log(process.env.token_secret)

   const token=jwt.sign({_id:user._id,email:user.email},process.env.token_secret)
    res.header('auth-token',token).send(token);
    // res.status(200).send('log in successful');
  
});

module.exports = router;
