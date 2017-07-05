// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApi' , (error ,  db)  => {
  if (error) {
    return console.log('Unable to connect DB Server');
  }
  console.log('Connected  to MongoDb Server');
db.collection('Todos').deleteMany({result: true}).then((result)  => {
  console.log(result);
});
    db.close();
} );
