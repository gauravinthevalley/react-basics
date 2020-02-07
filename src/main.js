import React, { useState } from 'react';

import { App, Display } from './App'

function Main() {
    const [counter, setCounter] = useState(42);
    const incrementCounter = (incrementValue) => setCounter(counter + incrementValue);
    return (
        <div>
            <App onClickFunction = {incrementCounter} increment={1}/>
            <App onClickFunction = {incrementCounter} increment={5}/>
            <App onClickFunction = {incrementCounter} increment={10}/>
            <App onClickFunction = {incrementCounter} increment={100}/>
            <Display message={counter} />
        </div>
    )
}

export default Main;