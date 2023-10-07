import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import GameplayProvider from "./context/GameplayContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GameplayProvider>
      <App />
    </GameplayProvider>
  </React.StrictMode>
);
