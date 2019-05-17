import {
    createAction,  
} 
from "../../functions/createAction";

import {
    createAsyncAction,  
} 
from "../../functions/createAsyncAction";

import {
    onGetCurrentCoordinates
}
from "../../functions/onGetCurrentCoordinates";

export const onGetCurrentCoordinatesSuccess = createAction({
    name: "ON_GET_CURRENT_COORDINATES_SUCCESS",
    payload: [
        "lat",
        "lon"
    ]
});

export const onGetCurrentCoordinatesFailure = createAction({
    name: "ON_GET_CURRENT_COORDINATES_FAILURE"
});

export const onGetCurrentCoordinatesAsync = createAsyncAction({
    failure: onGetCurrentCoordinatesFailure,
    success: onGetCurrentCoordinatesSuccess
}, 
({dispatch, actions}) => {
    onGetCurrentCoordinates(
        ({lat, lon}) => {
            dispatch(
                actions.success({
                    lat: lat,
                    lon: lon
                })
            );

            dispatch(
                actions.failure()
            );
        }
    );
});