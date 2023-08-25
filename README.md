# Backend Development internship at XivTech

Q1. Thank you for your interest in our internship opening. As a next step, we are expecting you to complete a short assignment. 

## Backend Assessment 1
Create an express based node.js server with below requirements. 

The API should accept names of multiple cities as input and fetch real time weather from any weather API's and 
respond with real time weather results. Create a POST endpoint /getWeather which accepts the name of the cities as 
POST body params

Example Input 
```json 
{ "cities": [ "toronto", "mumbai", "london" ] }
``` 
Example Output 
```json
{ "weather": { "toronto": "24C", "mumbai": "34C", "london": "14C" } } 
```

## Bonus 

Create a simple UI app which accepts the names of the cities as input in a text box and makes a call to the API 
endpoint created in `#1` and also displays the result in the UI. 

---

Please push your code to either GitHub or gitlab and 
send me the workable link.

---

## Credits

- WebStorm's express template
- [WeatherAPI](https://www.weatherapi.com/)
- [WeatherAPI Swagger Documentation](https://app.swaggerhub.com/apis-docs/WeatherAPI.com/WeatherAPI/1.0.2-oas3-oas3.1-oas3.1/#/)