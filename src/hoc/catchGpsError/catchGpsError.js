import React from "react";

import If from "../ifComponent";

import Component from "./gpsErrorComponent";

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
    error: state.coordinates.isGpsFailure
});

export default connect(mapStateToProps)(catchGpsError);