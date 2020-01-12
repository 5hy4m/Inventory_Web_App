import React from 'react';
import ReactDOM from 'react-dom';
// import Items from './Components/Items';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import CustomerModel from './Components/CustomerModel';
import InvoiceModel from './Components/InvoiceModel';
import ItemModel from './Components/ItemModel';

ReactDOM.render(<App />, document.getElementById('content'));
ReactDOM.render(<CustomerModel />, document.getElementById('CustomerModel'));
ReactDOM.render(<ItemModel />, document.getElementById('ItemModel'));
ReactDOM.render(<InvoiceModel />, document.getElementById('InvoiceModel'));
// ReactDOM.render(<Items />, document.getElementById('items'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
