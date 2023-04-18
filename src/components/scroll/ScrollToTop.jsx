import React from "react";
import classes from "./ScrollToTop.module.css";
export default function ScrollToTop() {
  const onClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className={classes.scroll} onClick={onClick}>
      TOP
    </div>
  );
}
