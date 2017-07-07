const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const{Todo} = require('./../server/models/todos');
const{User} = require('./../server/models/users');

var id = '695e6a5efe86dc902df87d69' ;
if (!ObjectId.isValid(id))  {
  console.log('Id is invalid');
}
// Todo.find({
//   _id:  id
// }).then((todos) => {
//   console.log('Todos' , todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo is ', todo);
// });
// Todo.findById( id).then((todo) => {
//   console.log('Todos by Id is ');
// });

// to user code
User.findById('595eea236acf3734974a4e21').then((user) => {
    if(!user) {
      return console.log('Unable find user');
      }
    console.log(JSON.stringify (user, undefined, 2));
}, (e) => {
  console.log(e);
});



// Todo.findById(id).then((todo)=> {
//   if (!todo) {
//     return conole.log('Is is not found');
//   }
// console.log('Todo by id', todo);
// }).catch((e) =>  console.log(e));
