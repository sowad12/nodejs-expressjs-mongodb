//path join with hbs
const path=require('path');
const express = require('express');

const app = express();
const port=process.env.PORT|| 3000;

//  console.log(path.join(__dirname,'../template'))

//to set the view engine hbs
const views_path=path.join(__dirname,'../template/views');
app.set('views',views_path);
app.set('view engine','hbs');

// we don't use static webpage image didn't load
 const static_path=path.join(__dirname,'../template');
 app.use(express.static(static_path));

//template engine create route 
app.get('/',(req,res)=>{
res.render('index',{
  title:'dynamic website',
  name:'sowad'
});
});

app.get('/about',(req,res)=>{
  res.render('about',{
    title:'Super Saiyan Blue',
    name:'Son Goku'
  });
});

app.get('/help',(req,res)=>{
  res.render('help',{
    title:'This is dynamic website using hbs template'
  })
})

app.listen(port, () => {
  console.log('Server running at http://localhost:3000');
});