import React, { useState } from "react";
import { createContext } from "react/cjs/react.production.min";

export const ThemeContext = createContext();
const ThemeContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  return (
    <ThemeContext.Provider value={[isDark, setIsDark]}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
