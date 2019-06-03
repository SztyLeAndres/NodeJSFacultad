var request = require('request');
request.get('https://api.darksky.net/forecast/52769a4f22dfad879a6eade0a6eef3f0/19.2433,-103.725', (error, response, body) =>{
    var info = JSON.parse(body); //Convertimos el texto del body a JSON

    console.log(info.temperature); //Imprimimos el JSON generado
});