import {
    getWeatherUrl
}
from "./getWeatherUrl";

export const getWeatherData = ({lat, lon}, successFn = () => {}, failureFn = () => {}) => 
    fetch(getWeatherUrl({
    lat: lat,
    lon: lon
    }))
    .then(data => 
        data.json()
    )
    .then(data => {
        delete data.id;
        delete data.coord;
        delete data.base;
        delete data.cod;
        delete data.weather[0].id;
        delete data.sys.type;
        delete data.sys.id;

        return data;
    })
    .then(data => {
        successFn(data);
    })
    .catch(error => {
        failureFn(error);
    });