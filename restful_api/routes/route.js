const express=require('express');
const router=express.Router();
const rest=require('../model/schema');

router.get('/',(req,res)=>{
   res.send('we are on routes'); 
});

//get back all data from database

router.get('/register',async(req,res)=>{
 try{
  const post= await rest.find();
  res.json(post);
 }catch(err){
   console.log({message:err}) 
 }

})

//store data in database

router.post('/register',async(req,res)=>{
   // console.log(typeof(req.body))
   // console.log(req.body);
   // res.json(req.body);
   const obj=new rest({
    name:req.body.name,
    email:req.body.email   
   })

   try{
      const savepost= await obj.save();
      res.json(savepost)
   }catch(err){
      res.json({message:err});
   }

}); 

// register/anystring or any id then it return those string and id 

router.get('/register/:postId',async(req,res)=>{
//   console.log(req.params.postId); 
 try{
  const post=await rest.findById(req.params.postId);
   res.json(post);
 }catch(err){
   res.json({message:err}) 
 }
});

//delete post  or delete database data using id
router.delete('/register/:postId',async(req,res)=>{
   try{
      const delpost=await rest.remove({_id:req.params.postId});  
      res.json(delpost);
   }catch(err){
     res.json({message:err}); 
   }
 
});

// update post or update database data
router.patch('/register/:postId',async(req,res)=>{
   try{
      const updatepost=await rest.updateOne(
         {_id:req.params.postId},
         {
            $set:{
               name:req.body.name,
               email:req.body.email
      
         }
    }  
     );  
      res.json(updatepost);
   }catch(err){
     res.json({message:err}); 
   }
 
})

module.exports=router;