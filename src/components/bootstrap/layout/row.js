import React, {
    Fragment
} 
from "react";

export default props => (
    <Fragment>
        <div className="row">
            {props.children}
        </div>
        <hr/>
    </Fragment>
);