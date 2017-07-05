// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApi' , (error ,  db)  => {
  if (error) {
    return console.log('Unable to connect DB Server');
  }
  console.log('Connected  to MongoDb Server');
db.collection('Todos').find({
  _id: new ObjectID('595c68786acf373497496c44')}).toArray().then((docs) =>{
  console.log('Todos');
  console.log(JSON.stringify(docs, undefined, 2));
},  (error)  => {
  console.log('Error is getting for connectiong to DB', error);
});

db.collection('Users').find({name: 'Pratap Surwase'}).toArray().then((docs) =>{
console.log('Users');
console.log(JSON.stringify(docs, undefined, 2));
},  (error)  => {
console.log('Error is getting for connectiong to DB', error);
});

    db.close();
} );
