//To serve static files such as images, CSS files, and JavaScript files,
// use the express.static built-in middleware function in Express.
// https://expressjs.com/en/starter/static-files.html
const path=require('path');
const express = require('express');

const app = express();
const port=process.env.PORT|| 3000;

// console.log(__dirname);
// // console.log(__filename);
// console.log(path.join(__dirname,'../frontend  '));

//set static folder
const join_path=path.join(__dirname,'../frontend');
app.use(express.static(join_path));


app.listen(port, () => {
  console.log('Server running at http://localhost:3000');
});