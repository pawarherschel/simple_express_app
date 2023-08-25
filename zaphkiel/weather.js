const axios = require('axios');

async function get_weather_data(city, apiKey) {
    const apiRequestUrl = `https://api.weatherapi.com/v1/current.json?q=${city}&key=${apiKey}`;
    try {
        const response = await axios.get(apiRequestUrl);
        const temp = response.data["current"]["temp_c"];

        return { [city]: temp };
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return error;
    }
}

module.exports = { get_weather_data };