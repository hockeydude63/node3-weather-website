const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=3b22b79f64bed9042c3cee1e7d849504&query=' + latitude + ',' + longitude + '&units=f'

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service')
        } else if (body.error) {
            callback('Unable to find location')
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. Wind is from the ' + body.current.wind_dir + ' at ' + body.current.wind_speed + '. It is currently ' + body.current.temperature + ' degrees out.  It feels like ' + body.current.feelslike + ' degrees out.')
        }
    })
}

module.exports = forecast