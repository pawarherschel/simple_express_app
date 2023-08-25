const express = require('express');
const {get_weather_data} = require('../../zaphkiel/weather');
const {get_api_key} = require('../../zaphkiel/env');

const router = express.Router();


router.get(
    '/:city',
    async function (req, res, _next) {
            const city = req.params.city;
            console.log('city:', city)
            const apiKey = get_api_key();

            let temp = await get_weather_data(city, apiKey);
            temp = temp[city];

            console.log(`temp: ${temp}`);
            res.send(`The temperature in ${city} is ${temp} degrees Celsius.`);
    }
);

module.exports = router;