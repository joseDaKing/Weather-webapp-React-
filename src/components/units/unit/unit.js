import React from "react";

import {
    Title
}
from "../../bootstrap";

export default props => { 
    let component = null;

    if (props.value) {
        component = (
            <Title level="4">
                {props.prefix} {props.children} {props.value} {props.symbol}
            </Title>
        );
    }

    return component;
}