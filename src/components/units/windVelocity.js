import React from "react";

import Unit from "./unit/unit";

export default props => (
    <Unit prefix="Wind" value={props.value} symbol="m/s">
        velocity
    </Unit>
);