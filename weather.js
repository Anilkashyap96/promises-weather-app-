const request = require('request');

var getWeather = (lat, lag, callback) => {
    request({
        url:  `https://api.darksky.net/forecast/1c66f60f255c7dd3659c60a84d6fdfc6/${lat}, ${lag}`,
        json: true  
     },
     (error,response,body)=>{
         if(error){
             callback("Unable to connect forecast api");
         }
         else if(response.statusCode == 400){
             callback("unable to fetch weather");
         }
         else if(response.statusCode == 200)
         {
             callback(response.body.currently.temperature);
             console.log(response.body.currently.temperature);
         }
        
     });
}
module.exports.getWeather = getWeather;