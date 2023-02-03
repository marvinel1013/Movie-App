import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import MenuBar from "./components/MenuBar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <div>
          <Header />
        </div>
        <div className="py-24 bg-slate-50 min-h-screen">
          <Main />
        </div>
        <div>
          <MenuBar />
        </div>
      </div>
    </Router>
  );
}

export default App;
