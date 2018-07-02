//const MongoClient = require('mongodb').MongoClient;
const  {MongoClient, ObjectID}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if (err){
    return console.log('unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Walk the dog',
  //   completed: false
  // }, (err, result)=>{
  //   if (err) return console.log('error on input data', err);
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // })

  // db.collection('Todos').find({
  //     _id: new ObjectID('5b19824833d1242da266fcdd')
  //   }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err)
  // })

    // db.collection('Todos').find().count().then((count) => {
    //   console.log(`Todos count: ${count}`);
    // }, (err) => {
    //   console.log('Unable to fetch todos', err)
    // })

    db.collection('Users').find({name: 'Rinat'}).toArray().then((data)=>{
      console.log(JSON.stringify(data, undefined, 2));
    }, (err) =>{
      console.log('Unable to fetch', err);
    })

  // db.close();
});