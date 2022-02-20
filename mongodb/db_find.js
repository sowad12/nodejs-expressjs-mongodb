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

    
  // 1.find one method   
  // in mysql -> select * from user where name='sowad'; 

//   db.collection('user').findOne({name:'sowad'},(err,res)=>{
//         if(err){
//             return console.log('unable fetch');
//         }
//         console.log(res);
//         client.close();
//   })


// 2.find all  return all documents
//like mysql-> select * from user

// db.collection('user').find({}).toArray((err,res) =>{
//     if(err){
//         return console.log('unable fetch');
//     }
//     console.log(res);
   
    
// })

// The _id Field
 //i)custom id
//   db.collection('user').findOne({_id:1},(err,res)=>{
//         if(err){
//             return console.log('unable fetch');
//         }
//         console.log(res);
//         client.close();
//   })

// ii)inbuilt object id
// db.collection('user').findOne({_id: mongodb.ObjectId('62058363043d547e95c934ee')},(err,res)=>{
//     if(err){
//         return console.log('unable fetch');
//     }
//     console.log(res);
//     client.close();
// })

//3.count all documents
// sql-> select count(*) from user
// db.collection('user').find({}).count((err,res)=>{
// console.log(res);
// client.close();
// })

})
