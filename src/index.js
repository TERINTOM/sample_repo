import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Project from './Project';
import Contactlist from './Contactlist';
// import Description from './Description';
// import Study from './Study';
// import Drag from './Drag'
// import Form from './Form'
// import Field from './Field';
// import Login from './Login';
// import Topbar from './components/Topbar';
import ButtonWrapper from './ButtonWrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Description/> */}
    {/* <Study/> */}
    {/* <Form/> */}
    {/* <Drag/> */}
    {/* <Field/> */}
    {/* <Project/> */}
    {/* <Login/> */}
    {/* <Topbar/> */}
    <Contactlist/>
    <ButtonWrapper/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
