import { useState, createContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const handleTheme = () => {
    setDarkMode((prev) => !prev);
    console.log("button clicked");
  };

  return (
    <ThemeContext.Provider value={{ darkMode, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;