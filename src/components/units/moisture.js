import React from "react";

import Unit from "./unit/unit";

export default props => (
    <Unit prefix="Moisture" value={props.value} symbol="%"/>
);