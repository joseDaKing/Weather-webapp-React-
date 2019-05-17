import React from "react";

export default props => {
    const level = `h${props.level || 1}`;
    const color = `text-${props.color || "dark"}`;
    const position = `text-${props.position|| "left"}`;
    const transform = `text-${props.transform || "_none_"}`;
    const bg = `bg-${props.bg || "transparent"}`;

    return (
        <h1 className={`${level} ${color} ${position} ${transform} ${bg}`}>
            {props.children}
        </h1>
    );
}