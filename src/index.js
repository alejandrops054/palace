import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Bootstrap CSS
//import './css/style-mode/dark-mode.css'
import './css/style-mode/blue-mode.css'
import './css/bootstrap/bootstrap-reboot.min.css'
import './css/bootstrap/bootstrap.css'
import './css/bootstrap/bootstrap-grid.min.css'
//import './assets/fontface/work-sans/'

//		<!-- Fontawesome CSS -->
import './assets/fontawesome/css/all.min.css'
import './assets/fontawesome/css/fontawesome.min.css'

//		<!-- Charts -->
import './css/charts/Chart.min.css'
import './css/general.css'
import './js/jquery-3.5.1.slim.min.js'
import './js/bootstrap/bootstrap.bundle.min.js'
import './js/functions.js'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
