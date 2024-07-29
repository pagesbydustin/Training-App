import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';

import '/src/assets/css/bootstrap_lumen-theme.min.css';
import '/src/assets/css/index.css';
import '/src/assets/css/App.css';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
