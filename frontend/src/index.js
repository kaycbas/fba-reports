import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
// import './index.css';
// import App from './App';

document.addEventListener("DOMContentLoaded", () => {
    let store = configureStore();

    window.store = store;
    
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});