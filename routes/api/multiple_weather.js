const express = require('express');
const { get_weather_data } = require('../../zaphkiel/weather');
const { get_api_key } = require('../../zaphkiel/env');

const router = express.Router();


router.post(
    '/',
    express.json(),
    async function (req, res, _next) {
        console.log(`multiple_weather called with req:`);
        console.log(req.body)
        let cities = req.body.cities;
        console.log(`cities:`);
        console.log(cities);

        const apiKey = get_api_key();

        let temps = cities.map(async (city) => {
            return await get_weather_data(city, apiKey);
        });

        temps = await Promise.all(temps);

        console.log(`temps:`);
        console.log(temps)

        let returnObj = {};

        cities.forEach((city, index) => {
            returnObj[city] = `${temps[index][city]}C`;
        });

        console.log(`returnObj:`);
        console.log(returnObj);

        res.send(returnObj);
    }
);

module.exports = router;