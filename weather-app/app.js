const request = require('request')

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

console.log(argv)

var address = encodeURIComponent(argv.address)

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}` ,
    json: true
}, (error, response, body) => {
    //console.log(JSON.stringify(body.results[0], undefined, 2));
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
})