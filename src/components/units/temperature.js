import React from "react";

import Unit from "./unit/unit";

export default props => (
    <Unit prefix="Temperature" value={props.value} symbol={"\u{000B0}C"}/> 
);