var express = require('express');
var app = express();
var mongoose =require('mongoose');
var setupController = require('./controllers/setupController');
var apicontroller = require('./controllers/apicontroller');


var config = require('./config');
var port = process.env.port || 3000;

app.use('/',express.static(__dirname + '/public'));
//app.get('/', function(req,res){
//    res.sendFile('/public/index.html',{root:__dirname});
//});
app.set('view engine','ejs');

mongoose.connect(config.getDbConnectionString(),{},function(err){
    if(err)console.log(err);
});
setupController(app);
apicontroller(app);
app.listen(port);
