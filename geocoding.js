import chalk from 'chalk';
import dotenv from 'dotenv';
import request from 'request'
import weather from "./weather.js"

dotenv.config()


const geocoding = async (city)=>{

    const url2 = `http://api.positionstack.com/v1/forward?access_key=${process.env.GEOCODING_API_KEY}&query=${city}`
    
    request(url2, async (error, response, body) => {
        try {
            const data = await JSON.parse(body); 
            const latitude = data.data[0].latitude;
            const longitude = data.data[0].longitude
            weather(latitude, longitude )
  
        } catch (error) {
            console.log('statusCode:', response && response.statusCode);
            console.log(chalk.red.inverse("Error in your request. Try another request"));
            console.log('Error: ', chalk.red(error.message));
            
        }
    });
}



export default geocoding;