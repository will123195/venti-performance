import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { state } from 'venti'

const numElements = 100
let numColorUpdates = 0

function setColor(n) {
  if (numColorUpdates === 0) {
    state.set('startTime', Date.now())
  }
  const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`
  state.set(`colors.${n}`, randomColor)
  numColorUpdates++
  state.set('numColorUpdates', numColorUpdates)
  setTimeout(() => setColor(n), 0)
}

for (let n = 1; n <= numElements; n++) {
  setColor(n)
}

ReactDOM.render(
  <App numElements={numElements} />
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
