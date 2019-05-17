import React from "react";

import {
    Container,
    Display
}
from "../bootstrap"

export default props => (
    <Container color="dark">
        <Display level="4" position="center" transform="uppercase" color="white">
            {props.children}
        </Display>
    </Container>
);