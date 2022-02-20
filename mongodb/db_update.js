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
   
    //1.use $set

    // db.collection('user').updateOne({
    //    _id:  mongodb.ObjectId('62076acfa0f9bb371657bbf6')
    //  },
    //  {
    //     $set:{
    //         lastname:'ali'
    //     } 
    //  }
    //  ).then((result)=>{
    //   console.log(result);
    // }).catch((error)=>{
    //  console.log(error);
    // })

    //2. use $inc 

  //  db.collection('user').updateOne({
  //      _id:  mongodb.ObjectId('62076acfa0f9bb371657bbf6')
  //    },
  //    {
  //       $inc:{
  //           age:1 //increment age or decrement using -1
  //       } 
  //    }
  //    ).then((result)=>{
  //     console.log(result);
  //     client.close();
  //   }).catch((error)=>{
  //    console.log(error);
  //   })

 db.collection('tasks').updateMany({
  completed: false
},{
  $set:{
     completed: true
  }
}).then((result)=>{
   console.log(result) 
}).catch((error)=>{
 console.log(error) 
} )
})
