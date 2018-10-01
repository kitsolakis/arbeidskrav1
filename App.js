const express = require('express'); 
let bodyParser = require('body-parser');
const app = express(); 
let mongoose = require('mongoose'); 
const config = require('./config'); 
let User = require('./user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

mongoose.connect(config.MONGOURI); 

app.get('/api/user', (req, res) => {
    User.getData(function(err, user){
        if(err) throw err; 
        res.json(user); 
    })
});

app.post('/api/user', function (req, res){
    let user = req.body; 
    User.addData(user, function(err, callback){
        if(err) throw err; 
        res.json(user); 
    });
});


let port = process.env.PORT || 3000; 

app.listen(port); 
console.log('Listening to port');