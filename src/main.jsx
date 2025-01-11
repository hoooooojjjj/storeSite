import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import PaymentComponent from "./PaymentComponent.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PaymentComponent />
  </StrictMode>
);
