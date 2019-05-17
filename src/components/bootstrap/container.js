import React from "react";

export default props => (
    <div className={`container text-${props.position || "left"} bg-${props.color || "white"} p-3`}>
        {props.children}
    </div>
);