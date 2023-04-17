import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Home";
import AppV from "./App";
import reportWebVitals from "./reportWebVitals";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const Index = ({ children }: any) => {
  
  return <div> {children}</div>;
};

root.render(
  <React.StrictMode>
    <Index>
      <AppV />
    </Index>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

