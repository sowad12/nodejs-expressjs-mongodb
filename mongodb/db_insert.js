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

    // 1.insertOne method
    // db.collection('user').insertOne({
    //     name:'siam',
    //     age:22
    // },(error,result)=>{
    //   if(error){
    //  return console.log('Unable to insert data'); 
    // }
       
    // })
  
    // 2.The _id Field
    db.collection('user').insertOne({
      _id:2,
      name:'saiful',
      age:23
  },(error,result)=>{
    if(error){
   return console.log('Unable to insert data'); 
  }
  console.log('inserted data succesful');
  client.close();

  })

    //3.insertMany
    // db.collection('user').insertMany([
    //   {
    //     name:'jhon',
    //     age:41
    //   },
    //   {
    //     name:'taker',
    //     age:57
    //   }

    // ],(error,result)=>{
    //   if(error){
    //     return console.log('Unable to insert data') ;
    //   }
    //   console.log('inserted successfully');
    // })

     
    //practice insert:
    // var myobj = [
    //   {
    //    discription:'clean house',
    //    completed:true
    //   },
    //   {
    //     discription:'renew inspection',
    //     completed:false
    //   },
    //   {
    //     discription:'pot plants',
    //     completed:false
    //   }
     
    // ];
    // db.collection('tasks').insertMany(myobj,(error,result)=>{
    //   if(error){
    //     return console.log('Unable to insert data') ;
    //   }
    //   console.log("Number of documents inserted: " + result.insertedCount);
     
    // })
   
})
