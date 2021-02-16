var Todo = require('../models/toDoModel');
var bodyParser = require('body-parser');
const Todos = require('../models/toDoModel');

module.exports = function(app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
    

  app.get('/api/todos/:uname', function(req, res) {
    console.log(req.params)
    Todo.find({ username: req.params.uname }, function(err, todos) {
      if(err) throw err;

      res.send(todos);
    });
  })

  app.get('/api/todo/:id', function(req, res) {
    Todos.find({_id: req.params.id }, function(err, todo) {
      if (err) throw err;

      res.send(todo);
    })
  });

  app.post('/api/todo', function (req, res) {
    // update current one
    if (req.body.id) {
      Todos.findByIdAndUpdate(req.body.id, { 
        todo: req.body.todo,
        isDone: req.body.isDone, 
        hasAttachment: req.body.hasAttachment }, function(err, todo) {
          if (err) throw err;
          
          res.send('Success');
      })
    } else {
      var newTodo = Todos({
        username: 'vova',
        todo: req.body.todo,
        isDone: req.body.isDone,
        hasAttachment: req.body.hasAttachment,
      });
  
      newTodo.save(function(err, result) {
        if (err) throw err;
  
        res.send('Success');
      })
    }
  })

  app.delete('/api/todo', function(req, res) {
        
    Todos.findByIdAndRemove(req.body.id, function(err) {
        if (err) throw err;
        res.send('Success');
    })
    
  });
}