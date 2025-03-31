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
import Exercise_2310 from './Exercise_2310';
import AxiosExample from './AxiosExample';
import Exercise_tablejson from './exam_exercise1702/Exercise_tablejson';
import All_inputs from"./exercise_inputs/All_inputs";
import Exercise_1303 from './exercise_1303/Table_Exercise';
import AllIn from "./exercise_1703/AllIn";
import Exam_Prep from "./exam_prep/Exam_Prep";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <NewComponent />
    <Sci />
    <Exercise1 />
    <MyOwnTable/>
    <Exercise_2310 />
    <AxiosExample /> 
    <Exercise_tablejson />
    <All_inputs />
    <Exercise_1303 />
    <AllIn/>
    */}
    <Exam_Prep/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
