import React from "react";

export default function Keypad(props) {
  return (
    <input type="password" onKeyUp={() => console.log('Entering password...')} >

    </input>
  );
}