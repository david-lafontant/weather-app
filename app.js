import dotenv from 'dotenv'
import request from 'request';
import chalk from 'chalk';
dotenv.config()
const latitude = 51.5072;
const longitude = 0.1276
const url = `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${latitude},${longitude}&aqi=no`

request(url, function (error, response, body) {

  try{
    console.log('statusCode:', response && response.statusCode); 
    const data = JSON.parse(body)
    console.log("location: ",chalk.blue(data.location.name))
    console.log("current temperature: ",chalk.blue(data.current.temp_c,"C"))
    console.log("current condition: ",chalk.blue(data.current.condition.text))
}catch(error){
  console.log(chalk.red.inverse("Invalid request"))
  console.log(chalk.red('Error:', error.message));
}

  if(error){
    console.error('error:', error.message); 
  }
else if (response.body.error) {
  console.log('Error:', response.body.error);
} else{


}

});

const url2 = `http://api.positionstack.com/v1/forward?access_key=${process.env.GEOCODING_API_KEY}&query=london`

request(url2, (error, response, body) => {
  try {
    console.log('statusCode:', response && response.statusCode);
    const data = JSON.parse(body);
    console.log(chalk.blue(data.data[0].name));
    console.log(chalk.blue(data.data[0].latitude));
    console.log(chalk.blue(data.data[0].longitude));
  } catch (error) {
    console.log(chalk.red.inverse("Error in your request"));
    console.log('Error: ', chalk.red(response.body));
  }
});

