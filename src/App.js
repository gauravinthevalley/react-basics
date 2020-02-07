import React, { useState } from 'react';

import './App.css';


function App(props) {
  const handleClick = () => props.onClickFunction(props.increment);
  return (
    <button onClick = {handleClick}>
      +{props.increment}
    </button>);
}

function Display(props) {
  return (
    <div>
      {props.message}
    </div>
  )
}

export {
  App,
  Display
}
