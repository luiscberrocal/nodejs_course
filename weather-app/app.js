const geocode = require('./geocode/geocode')

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

geocode.geocodeAddress(argv.address);