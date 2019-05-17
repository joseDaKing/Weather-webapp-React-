import React from "react";

import CatchDataError from "./catchDataError/catchDataError";

import CatchGpsError from "./catchGpsError/catchGpsError";

export default props => (
    <CatchGpsError>
        <CatchDataError>
            {props.children}
        </CatchDataError>
    </CatchGpsError>
);