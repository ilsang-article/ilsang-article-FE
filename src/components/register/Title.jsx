import React from "react";
import classes from "./Title.module.css";
export default function Title({ children }) {
  return <span className={classes.title}>{children}</span>;
}
