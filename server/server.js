var express= require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todos');
var {Users} = require('./models/users');

var app =express();
var port = process.env.PORT | |  3000;
app.use(bodyParser.json());
//setting the route , for creating request it has to use post http request
app.post('/todos', (req, res) =>{
var todo = new Todo ({
  text: req.body.text
});
todo.save().then( (doc) =>  {
res.send(doc);
console.log(doc);
}, (e)  => {
  res.status(400).send(e);
});
});
app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
    console.log(todos);
  }, (error) => {
    res.status(400).send(error);
  })
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  Todo.findById(id).then((todo) => {
    if(!todo) {
      return res.status(400).send();
    }
    res.send({todo});
  }).catch ((e) =>{
       res.status(404).send();
  });
  // res.send(req.params);
  // console.log(req.params);
});
app.listen(3000,  () => {
  console.log(`Server is started on ${port}`);
});

module.exports= {app};
