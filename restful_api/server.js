const express=require('express');
require('./db/conn');
const app=express();

// import routes
const routes=require('./routes/route')

// middlewares
// app.use('/p',()=>{
//   console.log('hello middleware');  
// })

// app.use('/route',routes); // only access if i use /route
app.use(express.json()); // or use (bodyParser.json) first import bodyParser
app.use(routes);

app.get('/',(req,res)=>{
    res.send('hello');
});


app.get('/p',(req,res)=>{
  res.send('from middleware');  
});

app.get('/json',(req,res)=>{
    res.json({
      'message': 'from json', 
      key:5000
    });
});


const port=process.env.port||5000;

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
});