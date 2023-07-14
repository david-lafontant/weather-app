

# WEATHER APP
Weather App is a command line node application that retrieve current weather data for a specified location from data from [WEATHER API](https://www.weatherapi.com/). To do so it use geocoding provided by [POSITIONSTACK API](https://positionstack.com/), to translate the city name passed by the user in coordinate that can be used by the [WEATHER API](https://www.weatherapi.com/) to retrieve the weather.

## Built With

- Node.js, Request, Chalk, Yargs, GIT,.
- - Technologies used: GitHub, VScodium, Ubuntu.


## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- A device that support running node.js and a terminal.
- access to internet connection.
- secret keys from [POSITIONSTACK API](https://positionstack.com/) and from [WEATHER API](https://www.weatherapi.com/). To get those keys please sign up to these API.


### Setup

#### Install locally the code of the application

In order to install a local version of this project and please do the following steps:
- Install the latest version of a Code editor.
- Install the latest version of a Node.js.
- install the latest version of GIT. 
- Go to the repository [Repository](https://github.com/david-lafontant/weather-app)
- Clone the repository
-run `npm i`
- create a .env file that will content two variables that refere to the keys gatered from the 2 up above API. At the end your .env file should like this
```
WEATHER_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxx //where xxxxxxxxxxxxxxxxxxxxx is the API key  from [WEATHER API](https://www.weatherapi.com/)
GEOCODING_API_KEY=yyyyyyyyyyyyyyyyyyyyyyyyy ////where xxxxxxxxxxxxxxxxxxxxx is the API key  [POSITIONSTACK API](https://positionstack.com/)

```
- run in the terminal `node apps country --city="cityame"`
***country name could be any country common name like london, paris, sofia, or tokyo
- Play with the code and enjoy :confetti_ball:


## Author

👤 **David Lafontant**

- GitHub: [@githubhandle](https://github.com/david-lafontant)
- Twitter: [@twitterhandle](https://twitter.com/manikatex)


## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments
[WEATHER API](https://www.weatherapi.com/)
[POSITIONSTACK API](https://positionstack.com/)

## Other Resources

This project is [MIT](LICENCE.md) licensed.