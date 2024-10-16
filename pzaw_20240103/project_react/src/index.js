import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import MyOwnTable from './MyOwnTable';
import Sci from './Sci';
import reportWebVitals from './reportWebVitals';
import NewComponent from './NewComponent';
import Exercise1 from './Exercise1';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NewComponent />
    <Sci />
    <Exercise1 />
    <MyOwnTable/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
