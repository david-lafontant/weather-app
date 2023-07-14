import dotenv from 'dotenv'
import request from 'request';
import chalk from 'chalk';
dotenv.config()


const weather = async (latitude, longitude) => {
    const url = `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${latitude},${longitude}&aqi=no`
    request(url, async function (error, response, body) {
        try {
            const data = await JSON.parse(body)
            console.log("location: ", chalk.blue(data.location.name))
            console.log("current temperature: ", chalk.blue(data.current.temp_c, "C"))
            console.log("current condition: ", chalk.blue(data.current.condition.text))
        } catch (error) {
            console.log('statusCode:', response && response.statusCode);
            console.log(chalk.blue.inverse("Invalid request"))
            console.log(chalk.red('Error:', error.message));
        }
    });
}

export default weather;