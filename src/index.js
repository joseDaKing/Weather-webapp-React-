import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {
    Provider
} 
from "react-redux";

import {
    createStore,
    compose,
    applyMiddleware,
    combineReducers
}
from "redux";

import coordinatesReducers from "./store/reducers/coordinates";
import weatherDataReducers from "./store/reducers/weatherData";

import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    coordinates: coordinatesReducers,
    weatherData: weatherDataReducers
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));