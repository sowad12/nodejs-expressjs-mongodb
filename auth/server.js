const express=require('express');
const app=express();
require('./db/conn');
const authroute=require('./routes/auth')

app.use(express.json());
//route middleware
app.use(authroute);

app.get('/',(req,res)=>{
  res.send('hello from server');
});

app.post('/register',(req,res)=>{
 res.send('register') 
});


const port=process.env.port|| 5000;
app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
})