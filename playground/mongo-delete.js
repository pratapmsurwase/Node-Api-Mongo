// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApi' , (error ,  db)  => {
  if (error) {
    return console.log('Unable to connect DB Server');
  }
//   console.log('Connected  to MongoDb Server');
// db.collection('Todos').deleteOne({text: 'Today is clean sky'}).then((result)  => {
//   console.log(result);
// });

db.collection('Users').findOneAndDelete({age: 40}).then((result) => {
  console.log(result);
})
    db.close();
} );
