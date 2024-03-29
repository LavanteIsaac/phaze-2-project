import React from 'react';
import ReactDOM from 'react-dom/client';
import  { RouterProvider, createBrowserRouter } from  "react-router-dom"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Welcome from "./Components/Welcome"
import NewInsta from "./Components/NewInsta"
import Header from "./Components/Header"
const routes = [
  {
    path: '/',
    element:  < Welcome />,
 },

{
  path: '/App',
  element: <App/>,  
},
  {
    path: '/NewInsta',
    element:  < NewInsta />
  }
]

const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


