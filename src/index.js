import React from 'react';
import ReactDOM from 'react-dom/client'; // `react-dom/client`ni ishlating
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Yangi createRoot API
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
