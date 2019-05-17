import React from "react";

import {
    Loader,
    Display
}
from "../../components/bootstrap";

import Center from "../../components/center/center";

export default () => (
    <Center>
        <div className="mr-5">
            <Loader/>
        </div>
        <Display level="4" transform="uppercase">
            loading
        </Display>
    </Center>
);