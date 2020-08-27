import React from "react";

export default function EyesOnMe(props) {
  return (
    <button onFocus={() => console.log('Good!')} onBlur={() => console.log('Hey! Eyes on me!')} >

    </button>
  )
}