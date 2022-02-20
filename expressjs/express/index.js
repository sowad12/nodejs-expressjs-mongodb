const express=require('express');
const path=require('path');
const app=express();

app.get('/',(req,res)=>{
    res.send('<h1>lol</h1>')
});

// console.log(path.join(__dirname,'../frontend','index.html'));

//path-join with another folder and file
// app.get('/path_join',(req,res)=>{
// res.sendFile(path.join(__dirname,'../frontend','index.html'))
// });

const port=process.env.PORT|| 3000;

app.listen(port, () => {
    console.log('Server running at http://localhost:3000');
  });