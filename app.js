// import dotenv from 'dotenv'
// import request from 'request';
import chalk from 'chalk';
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
const yarg = yargs(hideBin(process.argv));
import geocoding from './geocoding.js'

console.log(chalk.green("//////////////////////////////////////////////////////"))
console.log(chalk.green("//                                                  //"))
console.log(chalk.green("//                                                  //"))
console.log(chalk.green("//                   WEATHER APP                    //"))
console.log(chalk.green("//                                                  //"))
console.log(chalk.green("//                                                  //"))
console.log(chalk.green("//////////////////////////////////////////////////////"))

yarg.command({
    command: "weather",
    describe: "Search city current weather",
    builder: {
        city: {
            describe: "city common name",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        geocoding(argv.city)
    }
})

yarg.argv;

