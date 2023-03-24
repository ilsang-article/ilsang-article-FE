import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import { logoutApi } from "../../api/loginAPI";
import { useDarkMode } from "../../context/DarkModeContext";
import { useLoginCheck } from "../../context/LoginCheckContext";
import classes from "./Header.module.css";
import MenuBtn from "./MenuBtn";
const Header = () => {
  const menus = [
    {
      menu: "로고/홈",
      url: "/",
    },
    {
      menu: "찜한글",
      url: "likeposts",
    },
    {
      menu: "최근읽은글",
      url: "recentposts",
    },
  ];
  const { isLogin, setIsLogin } = useLoginCheck();
  const { darkMode, toggleDarkMode } = useDarkMode();
  const logoutMutation = useMutation(() => logoutApi(), {
    onSuccess: () => alert("성공"),
  });
  return (
    <div className={classes.container}>
      <div className={classes.darkBtn} onClick={toggleDarkMode}>
        {darkMode ? "dark" : "light"}
      </div>
      {menus.map((menu) => {
        return <MenuBtn key={menu.menu} menu={menu.menu} url={menu.url} />;
      })}
      <MenuBtn
        menu={isLogin ? "로그아웃" : "로그인"}
        url={isLogin ? "logout" : "login"}
        logoutMutation={logoutMutation}
        setIsLogin={setIsLogin}
      />
    </div>
  );
};

export default Header;
