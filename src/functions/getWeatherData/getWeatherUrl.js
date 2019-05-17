export const getWeatherUrl = ({lat, lon}) => 
    `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`;