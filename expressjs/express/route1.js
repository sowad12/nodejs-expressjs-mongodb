//sample route
//https://expressjs.com/en/guide/routing.html
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about',(req,res)=>{
res.send('About!');
});

app.get('/help',(req,res)=>{
res.send('Help!');
});

app.get('/weather',(req,res)=>{
 res.send('Weather'); 
});

//if i type localhost:3000/api/anystring ->then it return console message 
app.all('/api/*',(req,res)=>{
res.send('This is api page');
});

//string pattern match
app.get('/ab?cd',(req,res)=>{
res.send('This route path will match acd or abcd');  
});


// Regular expression
//if localhost:3000/anystring -> if string contain character 'a' then it return message
// app.get(/a/,(req,res)=>{
// res.send('This is a');  
// });


//multiple callback ->using next method and next parameter for excute next callback function
app.get('/multiplecb',(req,res,next)=>{
console.log('First callback');  
next();
},(req,res)=>{
console.log('Second callback');
res.send('Multiple callback');
}
);

//Array of callback
const cb1=(req,res,next)=>{
  console.log('First callback');
  next();
};

const cb2=(req,res,next)=>{
  console.log('Second callback');
  next();
};

const cb3=(req,res)=>{
console.log('Third callback');
res.send('Array of callback');
};
app.get('/arraycb',[cb1,cb2,cb3]);


// combine individual callback and array of call back

const c1=(req,res,next)=>{
  console.log('First callback');
  next();
};

const c2=(req,res,next)=>{
  console.log('Second callback');
  next();
};

const c3=(req,res,next)=>{
console.log('Third callback');
next();
};
app.get('/combo',[c1,c2,c3],(req,res,next)=>{
console.log('Fourth callback');
next();
},(req,res)=>{
  console.log('Fifth callback');
res.send('combo callback')
});

// app.get doesn't find any route then app.all return this message like else condition
app.all('*',(req,res)=>{
res.send('Page not found (:');
});


app.listen(port, () => {
  console.log('Server running at http://localhost:3000');
});