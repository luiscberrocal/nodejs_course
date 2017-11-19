const request = require('request')


var geocodeAddress = (address) => {
    var encodedAddress = encodeURIComponent(address);
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            console.log('Could not connect to google');
        } else if (body.status === 'ZERO_RESULTS') {
            console.log('No results found');
        } else {
            //console.log(JSON.stringify(body.results[0], undefined, 2));
            console.log(`Address: ${body.results[0].formatted_address}`);
            console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
            console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
        }

    })
};


module.exports = {
    geocodeAddress
}