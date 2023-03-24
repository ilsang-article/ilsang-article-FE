import React from "react";
import classes from "./MenuBtn.module.css";
import { useNavigate } from "react-router-dom";
export default function MenuBtn({ menu, url }) {
  const navigator = useNavigate();
  const logout = () => {};
  return (
    <div className={classes.menuBtn} onClick={() => navigator(url)}>
      {menu}
    </div>
  );
}
