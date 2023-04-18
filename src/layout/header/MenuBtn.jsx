import React from "react";
import classes from "./MenuBtn.module.css";
import { useNavigate } from "react-router-dom";
export default function MenuBtn({ menu, url, logoutMutation, setIsLogin }) {
  const navigator = useNavigate();
  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  };
  return (
    <div
      className={classes.menuBtn}
      onClick={
        url === "logout"
          ? () => {
              // logoutMutation.mutate();
              logout();
              setIsLogin(false);
            }
          : () => navigator(url)
      }
    >
      {menu}
    </div>
  );
}
