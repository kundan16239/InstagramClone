import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Postview from './Postview';
import reportWebVitals from './reportWebVitals';
import Landingpage from './Landingpage'
import Form from './Form'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route Route path="/Postview" element={<Postview />} />
        <Route Route path="/Form" element={<Form />} />
        <Route Route path="/Postview" element={<Postview />} />
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
