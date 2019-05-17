import React from "react";

export default props => (
    <div className={`spinner-border text-${props.color || "dark"}`}>
        <span className="sr-only">Loading...</span>
    </div>
);