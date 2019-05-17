import React from "react";

import {
    Display
}
from "../../components/bootstrap";

import Center from "../../components/center/center";

export default () => (
    <Center>
        <div>
            <Display level="4" transform="uppercase" position="text-center">
                to se the weather
            </Display>
            <Display level="4" transform="uppercase" position="text-center">
                share the gps coordinates
            </Display>
            <Display level="4" transform="uppercase" position="text-center">
                in the browser settings
            </Display>
        </div>
    </Center>
);