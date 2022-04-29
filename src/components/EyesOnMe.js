// Code EyesOnMe Component Here
import React from 'react';

function EyesOnMe() {
    function logFocus() {
        console.log("Good!")
    }
    function logBlur() {
        console.log("Hey! Eyes on me!")
    }
    return(
        <button onFocus={logFocus} onBlur={logBlur}>Eyes on me</button>
    )
}
export default EyesOnMe;