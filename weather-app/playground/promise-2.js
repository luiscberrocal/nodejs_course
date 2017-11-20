const request = require('request')


var geocodeAddress = (address) => {
    var encodedAddress = encodeURIComponent(address);
    return new Promise((resolve, reject) => {
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('Could not connect to google');
            } else if (body.status === 'ZERO_RESULTS') {
                reject('No results found');
            } else if (body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng,
                });
                //console.log(JSON.stringify(body.results[0], undefined, 2));
            }

        });
    });

};


geocodeAddress('Hato Pintado Panama').then((result) => {
    console.log(JSON.stringify(result));
},
    (errorMessage) => {
        console.log(errorMessage);
    });

module.exports = {
    geocodeAddress
}