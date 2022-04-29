// Code Keypad Component Here
import React from 'react';

function KeyPad () {
    function logPass() {
        console.log("Entering password...")
    }
    return(
        <input  onChange={logPass} type="password" />
    )   
}
export default KeyPad;