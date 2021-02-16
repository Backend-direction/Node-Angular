var Todos = require('../models/toDoModel');

module.exports = function (app) {

  app.get('/api/setupTodos', (req, res) => {
     // seed data
     var starterTodos = [
      {
        "username": "Schneider Odom",
        "todo": "sunt",
        "isDone": false,
        "hasAttachment": false
      },
      {
        "username": "Catalina Shields",
        "todo": "anim",
        "isDone": true,
        "hasAttachment": false
      },
      {
        "username": "Leonor Cote",
        "todo": "esse",
        "isDone": true,
        "hasAttachment": true
      },
      {
        "username": "Mccullough Madden",
        "todo": "incididunt",
        "isDone": true,
        "hasAttachment": false
      },
      {
        "username": "Hopper Pacheco",
        "todo": "velit",
        "isDone": false,
        "hasAttachment": false
      }
    ];

    Todos.create(starterTodos, function(err, result) {
      res.send(result);
    })
  })
}
