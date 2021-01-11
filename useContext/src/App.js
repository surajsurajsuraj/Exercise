import React, { useState } from "react";
import Toolbar from "./Toolbar";
export const ThemeContext = React.createContext();

const App = () => {
  const [DarkTheme, setDarkTheme] = useState(true);

  return (
    <ThemeContext.Provider value={[DarkTheme, setDarkTheme]}>
      <Toolbar />
    </ThemeContext.Provider>
  );
};

export default App;
