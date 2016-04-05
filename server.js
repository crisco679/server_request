var express = require('express');
var path = require('path');
var app = express();





app.get('/', function(req,res){
  console.log('Recieved a request')
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3000, function(){
  console.log('Listening for requests for port 3000');
});
