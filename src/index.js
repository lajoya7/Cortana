import React from 'react';
//import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Auth0Provider
    domain="lajoya.us.auth0.com"
    clientId="xRj66gpsyXJ9wW0UBR4nY7HtIwpe3ymd"
    authorizationParams={{
      redirect_uri: "http://localhost:3000/"
    }}
  >

  <App />
  </Auth0Provider>,

  <React.StrictMode>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
