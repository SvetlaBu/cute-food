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

// const rootElement = ReactDOM.createRoot(getElementById("root"));
// rootElement.render(
//   <StrictMode>
//     <ThemeProvider theme={defaultTheme}>
//       <App />
//     </ThemeProvider>
//   </StrictMode>,
//   rootElement
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();