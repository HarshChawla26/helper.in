import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from "react-router-dom";
import Resultstate from './context/resultContext/Resultstate'
import AuthState from './context/AuthContext/AuthState'
import { CartState } from './context/CartContext/Cartstate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Resultstate>
      <AuthState>
        <CartState>
          <App />
        </CartState>
      </AuthState>
    </Resultstate>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
