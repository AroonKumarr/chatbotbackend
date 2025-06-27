import React from "react";
import { createRoot } from "react-dom/client"; // ✅ NEW
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");
const root = createRoot(container); // ✅ React 18+
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
