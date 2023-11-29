import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ShopContextProvider } from './context/shopcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </React.StrictMode>
);
