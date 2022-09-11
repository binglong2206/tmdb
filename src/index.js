import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import Debounce from './SearchField';
import Hero from './Hero'
import { Provider } from 'react-redux';
import store from "./stores"
import { BrowserRouter, Route, Routes } from 'react-router-dom' // Switch makes sure only one match gets rendered


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <> 
    <React.StrictMode>
      <Provider store={store}> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/demo" element={<Debounce />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </>
);