import React, { useState } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import Login from "./Login.jsx";
import "./styles.css";

function Main() {
  const [showDashboard, setShowDashboard] = useState(false);

  function handleLogin() {
    // Frontend demo only.
    // Dito ikakabit ng backend developer ang totoong login.
    setShowDashboard(true);
  }

  if (!showDashboard) {
    return <Login onLogin={handleLogin} />;
  }

  return <App onLogout={() => setShowDashboard(false)} />;
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
);
