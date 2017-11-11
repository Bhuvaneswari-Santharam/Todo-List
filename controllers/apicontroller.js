var Todos = require('../models/todomodels');
var bodyparser = require('body-parser');

module.exports = function(app){
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({ extended: true}));

    app.get('/api/todos/:uname', function(req,res){
        Todos.find({username: req.params.uname},function(err,todos){
            if(err) throw err;
            res.send(todos);
        });
    });

    app.get('/api/todo/:id',function(req,res){
        Todos.findById({_id: req.params.id},function(err,todo){
            if(err) throw err;
            res.send(todo);

        });
    });

    app.post('/api/todo',function(req,res){

        if(req.body.id){
            Todos.findByIdAndUpdate(req.body.id,{
                todo: req.body.todo,isDone: req.body.isDone,
                isAttachment: req.body.isAttachment }, function(err,todo){
                    if(err) throw err;
                    res.send('Success');
            })
        

        }
        else{
            var newTodo = Todos({
                username: 'test14',
                todo: req.body.todo,
                isDone: req.body.isDone,
                isAttachment: req.body.isAttachment
            });

            newTodo.save(function(err){
                if(err) throw err;
                res.send('Success');
            });

        }
    });
    
    app.delete('/api/todo', function(req,res){
        Todos.findByIdAndRemove(req.body.id, function(err){
            if(err) throw err;
            res.send('Success');
        });
    });
    
}
