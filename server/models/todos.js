var mongoose = require('mongoose');
var Todo = mongoose.model('Todo', {
  text: {
    type : String,
    required: true,
    minilength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  CompletedAt: {
    type: Number,
    default: null
      }
});

module.exports = {Todo};








// var newTodo =new Todo ({
//   text: 'Cook Dinner'
// });
// newTodo.save().then((doc) => {
//   console.log('Save to Doc', doc);
// }, (e) =>{
//   console.log('Unable to save Data');
// } );
// var  newSchema = new Todo({
//   text: 'Make a Tea',
//   completed: true,
//   CompletedAt: 123
// });
// newSchema.save().then((doc)  => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save Data');
// });
//
// module.exports ={Todo};
