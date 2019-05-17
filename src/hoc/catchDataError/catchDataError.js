import React from "react";

import If from "../ifComponent";

import Component from "./dataErrorComponent";

import {
    connect
} 
from "react-redux";

const catchGpsError = props => (
    <If expression={props.error} render={<Component/>}>
        {props.children}
    </If>
);


const mapStateToProps = state => ({
    error: state.weatherData.isErrorWeatherData
});

export default connect(mapStateToProps)(catchGpsError);