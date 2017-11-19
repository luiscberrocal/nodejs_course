const request = require('request')


var geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Could not connect to google');
        } else if (body.status === 'ZERO_RESULTS') {
            callback('No results found');
        } else if (body.status === 'OK'){
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng,
            });
            //console.log(JSON.stringify(body.results[0], undefined, 2));
        }

    })
};


module.exports = {
    geocodeAddress
}