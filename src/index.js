import React from 'react';
import ReactDOM from 'react-dom';
import Transforming from './Components/Transforming';
import * as serviceWorker from './serviceWorker';





// ReactDOM.render(<App />, document.getElementById('dashboard'));
ReactDOM.render(<Transforming />, document.getElementById('root'));


 

// ReactDOM.render(<Items />, document.getElementById('items'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
