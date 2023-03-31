import React from "react";
import classes from "./ScrollToTop.module.css";
export default function ScrollToTop() {
  const onClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className={classes.scroll} onClick={onClick}>
      TOP
    </div>
  );
}
