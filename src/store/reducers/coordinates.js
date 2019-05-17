import {
    concatObjects
}
from "../../utilities/index";

import {
    onGetCurrentCoordinatesSuccess,
    onGetCurrentCoordinatesFailure,
}
from "../actions/coordinates";

const initState = {
    lat: null,
    lon: null,
    isGpsFailure: true
};

export default (state = initState, action) => {
    switch(action.type) {
        case onGetCurrentCoordinatesSuccess.getName:
            return concatObjects(state, {
                lat: action.lat,
                lon: action.lon
            });
        
        case onGetCurrentCoordinatesFailure.getName: 
            return concatObjects(state, {
                isGpsFailure: false
            });

        default: 
            return state;
    }
}