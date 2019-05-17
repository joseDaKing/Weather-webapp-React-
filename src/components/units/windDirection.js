import React from "react";

import Arrow from "../arrowEntitie/arrowEntitie";

import Unit from "./unit/unit";

export default props => (
    <Unit prefix="Wind" value={props.value} symbol={
        <Arrow rotation={props.value}>{
            "\u{000B0}"}
        </Arrow>}>
            direction
    </Unit>
);

//\u{000B0}