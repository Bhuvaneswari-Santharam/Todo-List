var Todos = require('../models/todomodels');

module.exports = function(app){
    app.get('/api/setupTodos',function(req,res){
        var startTodos = [
            {
                username: 'test14',
                todo: 'Buy Veg',
                isDone: false,
                isAttachment: false
            },
            {
                username: 'test14',
                todo: 'Buy dresses',
                isDone: false,
                isAttachment: false
            },
            {
                username: 'test14',
                todo: 'purchase photo',
                isDone: false,
                isAttachment: false
            }
        ];

        Todos.create(startTodos, function(err,results){
            res.send(results);
        });
    });
}