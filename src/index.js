import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Task2 from './components/Task2';
import Index from './components/Index';
import Task1 from './components/Task1';
import Task3 from './components/Task3';
import Task4 from './components/Task4';
import Task5 from './components/Task5';
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Index/>}/>
      <Route path="/task1" element={<Task1/>} />
      <Route path="/task2" element={<Task2/>} />
      <Route path="/task3" element={<Task3/>} />
      <Route path="/task4" element={<Task4/>} />
      <Route path="/task5" element={<Task5/>} />
    </>
  )
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

