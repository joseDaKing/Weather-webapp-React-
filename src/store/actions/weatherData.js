import {
    createAction,  
} 
from "../../functions/createAction";

import {
    createAsyncAction,  
} 
from "../../functions/createAsyncAction";

import {
    getWeatherData
}
from "../../functions/getWeatherData/getWeatherData";

import {
    onGetCurrentCoordinates
}
from "../../functions/onGetCurrentCoordinates";

export const onGetWeatherDataSuccess = createAction({
    name: "ON_GET_WEATHER_DATA_SUCCESS",
    payload: [
        "data"
    ]
});

export const onGetWeatherDataFailure = createAction({
    name: "ON_GET_WEATHER_DATA_FAILURE"
});

export const onGetWeatherDataAsync = createAsyncAction({
    success: onGetWeatherDataSuccess,
    failure: onGetWeatherDataFailure
}, 
({dispatch, actions}) => {
    onGetCurrentCoordinates(({lat, lon}) => {
        getWeatherData({
            lat: lat,
            lon: lon
        },
        data => {

            dispatch(
                actions.success({
                    data: data
                })
            );
        },
        error => {
            console.error(error);
            dispatch(
                actions.failure()
            )
        });
    });
});