const mongodb = require('mongodb');
// or as an es module:
// import mongodb from 'mongodb'
// Connection URL

const url = 'mongodb://localhost:27017';
const mongoclient = mongodb.MongoClient

// Database Name
const dbname = 'myProject';

mongoclient.connect(url,{useNewUrlParser:true},(error,client)=>{
    if(error){
      return console.log('Unable to connect');  
    }
    const db=client.db(dbname);
})
