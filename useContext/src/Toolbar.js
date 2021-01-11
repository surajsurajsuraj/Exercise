import React, { useContext } from "react";
import { ThemeContext } from "./App";

const Toolbar = () => {
  const ThemeContextTool = useContext(ThemeContext);
  const [DarkTheme, setDarkTheme] = ThemeContextTool;
  const theme = {
    background: DarkTheme ? "black" : "white",
    fontSize: "large",
    margin: "5px",
    color: DarkTheme ? "white" : "black",
    borderRadius: "5px",
    boxShadow: "0 4px 8px 0 rgba(12, 12, 12, 0.2)",
  };
  return (
    <button
      onClick={() => {
        setDarkTheme(!DarkTheme);
      }}
      style={theme}
    >
      Click To Invert Button Color
    </button>
  );
};

export default Toolbar;
