import React, { createContext, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import MenuBar from "./components/MenuBar";
import { BrowserRouter as Router } from "react-router-dom";

export const themeContext = createContext();

function App() {
  //* state
  const [darkMode, setDarkMode] = useState(true);

  const handleToggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <Router>
      <themeContext.Provider value={{ darkMode }}>
        <div className={darkMode ? "dark" : ""}>
          <div>
            <Header
              handleToggleDarkMode={handleToggleDarkMode}
              darkMode={darkMode}
            />
          </div>
          <div className="py-20 pt-24 dark:bg-[#0b090a] bg-slate-50 min-h-screen w-full">
            <Main />
          </div>
          <div>
            <MenuBar />
          </div>
        </div>
      </themeContext.Provider>
    </Router>
  );
}

export default App;
