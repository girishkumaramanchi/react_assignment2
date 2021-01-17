import React from "react";

const validationComponent = (props) => {

    let para = null;

    if(props.len <= 5){
        para =(
            <p>Text too short</p>
        )
    } else {
        para =(
            <p>Text long enough</p>
        )
    }

    return(
        <div>
            {para}
            <p>getting the result.</p>
        </div>
    );
}

export default validationComponent;