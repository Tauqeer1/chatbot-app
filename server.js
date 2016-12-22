var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();


app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send('hello world, i am chatbot');
});

//For facebook verification
app.get('/webhook', function(req, res){
    if(req.query['hub.verify_token'] === 'i_am_chatbot_verify_me'){
        res.send(req.query['hub.challenge']);
    }
    res.send('error, wrong token');
});

//Start the server
app.listen(app.get('port'), function(){
   console.log('running on port ', app.get('port'));
});