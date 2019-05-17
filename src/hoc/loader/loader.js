import React from "react";

import {
    connect
} 
from "react-redux";

import {
    isObjectEmpty
}
from "../../utilities";

import Loader from "./loaderComponent";

import If from "../ifComponent";

const loader = props => {
    return (
        <If expression={props.isDataEmpty} render={<Loader/>}>
            {props.children}
        </If>
    );
}

const mapStateToProps = state => ({
    isDataEmpty: isObjectEmpty(state.weatherData.data),
});

export default connect(mapStateToProps)(loader);