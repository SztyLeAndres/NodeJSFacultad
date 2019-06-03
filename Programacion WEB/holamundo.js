var express = require('express');
var app = express();

var myResponse = {error:"false",status: "200",message: "Ok"};


app.get('/', function (req, res) {
  res.send(myResponse);
});

app.get('/user/:id', function (req, res) {
    if(req.params.id > 50) {
        myResponse.error = "false";
        myResponse.status = "1500";
        myResponse.message= "Ok";
        res.send(myResponse);
    }
    else {
        myResponse.error = "true";
        myResponse.status = "404";
        myResponse.message= "Error en el servidor";
        res.send(myResponse);
    }
  });

app.listen(3000, function () {
  console.log('Escuchando en puerto 3000');
});