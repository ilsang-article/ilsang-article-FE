import React from "react";
import { useDarkMode } from "../../context/DarkModeContext";
import classes from "./NoResults.module.css";
export default function NoResults({ children }) {
  const { darkMode } = useDarkMode();
  return (
    <div className={classes.container}>
      <img
        src={darkMode ? "/logo-dark.png" : "/logo-light.png"}
        alt="No Results"
      />
      {children}
    </div>
  );
}
