import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./components/app/app.jsx";
import reportWebVitals from './reportWebVitals';
import { StrictMode } from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./thems/default";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
reportWebVitals();