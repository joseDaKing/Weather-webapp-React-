import {
    concatObjects
}
from "../../utilities/index";

import {
    onGetWeatherDataSuccess,
    onGetWeatherDataFailure
}
from "../actions/weatherData";

const initState = {
    data: {},
    isErrorWeatherData: false,
};

export default (state = initState, action) => {
    switch(action.type) {
        case onGetWeatherDataSuccess.getName:
            return concatObjects(state, {
                data: action.data
            });
        
        case onGetWeatherDataFailure.getName:
            return concatObjects(state, {
                isErrorWeatherData: true
            });

        default: 
            return state;
    }
}