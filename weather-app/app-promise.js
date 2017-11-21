const axios = require('axios')

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

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Could not find address')
    }
    var latitude = response.data.results[0].geometry.location.lat;
    var longitude = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/51c5aa244f54257d09a98dab799d9572/${latitude},${longitude}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
}).then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemp = response.data.currently.apparentTemperature;
    console.log(`It is ${temperature}, it feel like ${apparentTemp}`)
}).catch((e) => {
    if (e.code === 'ENOTFOUND') {
        console.log('Could not connect to url')
    } else {
        console.log(e.message);
    }
});