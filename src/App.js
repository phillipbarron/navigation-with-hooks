import React from "react";
import "./App.css";
import ResponsiveNavigation from "./navigation/responsive-navigation";
import WindowDimensionsProvider from "./window-dimensions-provider";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

function App() {
  return (
    <Router history={createBrowserHistory()}>
      <WindowDimensionsProvider>
        <div className="App">
          <ResponsiveNavigation breakpoint={545} />
        </div>
      </WindowDimensionsProvider>
    </Router>
  );
}

export default App;
