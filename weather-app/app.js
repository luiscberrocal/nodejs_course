const geocode = require('./geocode/geocode')
const weather = require('./weather')

const yargs = require('yargs');
const argv = yargs
    .options(
        {
            a: {
                alias: 'address',
                describe: 'Address to get weather for',
                demand: true,
                string: true
            }
        }
    )
    .help()
    .argv

//console.log(argv)

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(results, undefined, 2))
        weather.getWeather(results, (errorMessage, weather_results) => {
            console.log(JSON.stringify(weather_results, undefined, 2));
        })
    }
});

