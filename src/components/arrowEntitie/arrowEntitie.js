import React from "react";

export default props => {
    const styles = {
        display: "inline-block",
        transform: `rotate(${props.rotation || 0}deg)`,
        marginLeft: "0.5em"
    };
    return (
        <span>
            {props.children}
            <span style={styles}>
                {"\u{2191}"}
            </span>
        </span>
    );
}