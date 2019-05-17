import React from "react";

export default props => {
    const styles = {
        outerWrapper: {
            position: "absolute",
            top: "50%",
            right: "0px",
            left: "0px",
            transform: "translateY(-50%)"
        },
        innerWrapper: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }
    };

    return (
        <div style={styles.outerWrapper}>
            <div style={styles.innerWrapper} className="text-center">
                {props.children}
            </div>
        </div>
    );
}