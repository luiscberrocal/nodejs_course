const request = require('request')

// // https://api.darksky.net/forecast/51c5aa244f54257d09a98dab799d9572/37.8267,-122.4233

var getWeather = (address, callback) => {
    request({
        url: `https://api.darksky.net/forecast/51c5aa244f54257d09a98dab799d9572/${address.latitude},${address.longitude}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Could not connect to api.darksky.net');
        } else if (body.error) {
            callback(body.error);
        } else {
            callback(undefined, {
                teemperature: body.currently.temperature,
            });
            //console.log(JSON.stringify(body.results[0], undefined, 2));
        }

    })
};


module.exports = {
    getWeather
}