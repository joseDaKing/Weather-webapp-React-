import React from "react";

import {
    Col
}
from "../bootstrap/layout"

import {
    Title
}
from "../bootstrap";

export default ({children, header}) => {
    const styles = {
        paddingLeft: "7.5em"
    };

    return (
        <Col>
            {header && 
            <Title level="2" transform="capitalize" position="center">
                {header}
            </Title>}

            <hr/> 
            
            <div style={styles}>
                {children}
            </div>
        </Col>
    );
}