import { React, StrictMode } from 'react';
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
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { createRoute, createRootRoute } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen.ts";
const router = createRouter({
  routeTree,
  context: {},
  defaultPreload: "intent",
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
});



/*
    <React.StrictMode>
    <NewComponent />
    <Sci />
    <Exercise1 />
    <MyOwnTable/>
    <Exercise_2310 />
    <AxiosExample /> 
    <Exercise_tablejson />
    <All_inputs />
    <Exercise_1303 />
    <AllIn/>
    <Exam_Prep/>
    </React.StrictMode>
    */
    const rootElement = document.getElementById("app");
    if (rootElement && !rootElement.innerHTML) {
      const root = ReactDOM.createRoot(rootElement);
      root.render(
        <StrictMode>
          <RouterProvider router={router} />
        </StrictMode>,
      );
    };
reportWebVitals();
