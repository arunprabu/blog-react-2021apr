import React from 'react'; // core react package -- used for working with comp
import ReactDOM from 'react-dom'; //  rendering UI in browser 

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // importing styles

import App from './App'; // App Component is imported
import reportWebVitals from './reportWebVitals'; // webvitals 

ReactDOM.render(
    <App />
  ,
  document.getElementById('root')   // inside this el, App Comp will be rendered
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
