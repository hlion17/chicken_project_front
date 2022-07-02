import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import style from "./index.css";
import {createRoot} from 'react-dom/client';

// react 18 방식
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>)

// react 18 이전 방식
// ReactDOM.render(
//     <App />
//     , document.getElementById("root")
// );


