const request = require("request");

let api = "https://us1.locationiq.com/v1/search.php?key=2e300226432f42&q=Colima&format=json";

request.get(api, function(error, response, body) {
    let location = JSON.parse(body)[0];
    let options = {
        url = "https://api.openuv.io/api/v1/uv"
    }
});

