var express= require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todos');
var {Users} = require('./models/users');

var app =express();

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

app.listen(3000,  () => {
  console.log('Server is started 3000');
});

module.exports= {app};
