import React from 'react';
import ReactDOM from 'react-dom/client';
import { LoginPage, RegisterPage } from 'View/Page';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';
import { Store } from './Flux';
import 'View/index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
