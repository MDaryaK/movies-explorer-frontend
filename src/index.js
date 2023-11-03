import App from './components/App';
import React from "react";
import ReactDOM from "react-dom/client";

import {BrowserRouter} from "react-router-dom";

import "./index.css";
import axios from "axios";

axios.defaults.baseURL = "https://api.movies-darya.nomoredomainsrocks.ru/";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
