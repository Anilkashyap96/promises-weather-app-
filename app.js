const request = require('request')
const weather = require('./weather.js');
console.log("starting weathernapp");

weather.getWeather(12.9716,77.5946, (errorMessage, weatherResult)=>{
if(errorMessage){
  console.log(errorMessage);
}
else{
    console.log(weatherResult);
}
});
