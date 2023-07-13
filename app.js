import dotenv from 'dotenv'
import request from 'request';
import chalk from 'chalk';
dotenv.config()
const latitude = 51.5072;
const longitude = 0.1276
const url = `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${latitude},${longitude}&aqi=no`

request(url, function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log(chalk.blue('body:', body)); // Print the HTML for the Google homepage.
});


