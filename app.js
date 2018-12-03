var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/bookAPI');

var app = express();

var Book = require('./models/bookModel');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

router = require('./Routes/bookRoutes')(Book);

app.use('/api/books', router);

app.get('/', function(req, res){
    res.send("Welcome to my API");
});

var port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log("Gulp is Runninng on port "+port);
});