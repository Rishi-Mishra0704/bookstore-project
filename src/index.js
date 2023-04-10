import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/css/index.css';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
