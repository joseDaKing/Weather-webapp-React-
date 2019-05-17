import React from "react";

import * as Layout from "../bootstrap/layout";

import {
    Title,
}
from "../bootstrap"

export default props => {
    return (
        <Layout.Row>
            <Layout.Col>
                <Title level="6" position="center"> 
                    Sunrise {props.rise} 
                </Title>
            </Layout.Col>

            <Layout.Col>
                <Title level="6" position="center"> 
                    Sunset {props.set} 
                </Title>
            </Layout.Col>
        </Layout.Row>
    );
};