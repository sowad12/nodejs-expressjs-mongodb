const express=require('express');
const app=express();
require('./db/conn');
const authroute=require('./routes/auth');
const postroute=require('./routes/route')

app.use(express.json());

//route middleware
app.use(authroute);
app.use(postroute);

app.get('/',(req,res)=>{
  res.send('hello from server');
});




const port=process.env.port|| 5000;
app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
})