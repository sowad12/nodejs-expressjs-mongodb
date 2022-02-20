// serving up html and json 

const express = require('express');
const app = express();
const port = 3000;

// send html
app.get('/', (req, res) => {
  res.send('<h1>express!</h1>');
});

app.get('/about',(req,res)=>{
res.send('<h1>About!</h1>');
});

//send array of objects
app.get('/help',(req,res)=>{
res.send([
 {
  name:'jett',
  role:'duelist',
  age:25   
 },

 {
name:'brim',
role:'controller',
age:40
 }  
]);
});

app.get('/weather',(req,res)=>{
 res.send({
     forecast:'It is snowing',
     location:'America'
 }); 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});