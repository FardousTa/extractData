import "./Css/App.css";
import "./Css/bootstrap.min.css";
import "./Css/magnific-popup.css";
import NaV from "./Components/NaV.js";
import { Provider } from "react-redux";
import NavLog from "./Components/NavLog";
import React, { Component } from "react";
function App() {  return (
    <div>
      <main className="container-fluid">
          <NavLog />
      </main>
    </div>
  );
}

function AppWithStore() {
  return <App />;
}

export default AppWithStore;
