// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApi' , (error ,  db)  => {
  if (error) {
    return console.log('Unable to connect DB Server');
  }
  console.log('Connected  to MongoDb Server');

db.collection('Todos').insertOne({
  text: 'Hi This is the frist text',
  completed: true
},  (error ,  result) => {
  if (error) {
    return console.log(error);
  }
    console.log(JSON.stringify(result.ops, undefined, 2));
  } );
db.collection('Users').insertOne({
id: 123,
  name: 'Pratap Surwase',
  age: 40,
  location: 'Pune'
}, (error, result)=> {
  if (error) {
  return  console.log('Not able to connect', error);
  }
  console.log(result.ops[0]._id.getTimestamp());
});
    db.close();
} );
