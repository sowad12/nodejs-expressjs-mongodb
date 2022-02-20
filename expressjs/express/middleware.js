const express=require('express');
const app=express();
const port=process.env.port||3000;

//middleware
//middleware always has a three parameters.it works between server request and response
//at first we send req route our server then middlework function works.after complete it's work then server will response
//Example: if i didnot login then i cannot watch any about page
const middleware=(req,res,next)=>{ 
 console.log('From middleware');
 next(); // if i didnot type next then /about route is stuck on pending. chrome inspect then network then status we see route is pending
}

app.get('/',(req,res)=>{
res.send('hello world');
});

app.get('/about',middleware,(req,res)=>{ //middleware
   console.log('after middleware');
    res.send('From about');
 });

app.get('/contact',(req,res)=>{
res.send('from contact');
});    

app.get('/signin',(req,res)=>{
  res.send('from signin');
  });   


app.listen(port, () => {
    console.log('Server running at http://localhost:3000');
  });