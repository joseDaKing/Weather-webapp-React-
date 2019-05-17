import React from "react";

import Unit from "./unit/unit";

export default props => (
    <Unit prefix="Pressure" value={props.value} symbol="hPa"/>
);