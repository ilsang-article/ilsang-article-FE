import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { logoutApi } from "../../api/loginAPI";
import { useDarkMode } from "../../context/DarkModeContext";
import { useLoginCheck } from "../../context/LoginCheckContext";
import { BsLightbulbOff, BsFillLightbulbFill } from "react-icons/bs";
import classes from "./Header.module.css";
import MenuBtn from "./MenuBtn";
import useParamHook from "../../hook/useParamHook";

const Header = () => {
  const navigator = useNavigate();
  const menus = [
    {
      menu: "찜한글",
      url: "likeposts",
      tab: 1,
    },
    {
      menu: "최근읽은글",
      url: "recentposts",
      tab: 2,
    },
  ];
  const { isLogin, setIsLogin } = useLoginCheck();
  const { darkMode, toggleDarkMode } = useDarkMode();
  const logoutMutation = useMutation(() => logoutApi(), {
    onSuccess: () => alert("성공"),
  });

  const { currentTab } = useParamHook();
  console.log("현재탭", currentTab);
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <img
          src={darkMode ? "/logo-dark.png" : "/logo-light.png"}
          onClick={() => navigator("/")}
          alt=""
          className={currentTab === 0 ? classes.tabcurrent : null}
        />
        {menus.map((menu) => {
          return (
            <MenuBtn
              currentTab={currentTab}
              key={menu.menu}
              menu={menu.menu}
              url={menu.url}
              tab={menu.tab}
            />
          );
        })}
        <div className={classes.darkBtn} onClick={toggleDarkMode}>
          {darkMode ? <BsFillLightbulbFill /> : <BsLightbulbOff />}
        </div>
        <MenuBtn
          menu={isLogin ? "로그아웃" : "로그인"}
          url={isLogin ? "logout" : "login"}
          logoutMutation={logoutMutation}
          setIsLogin={setIsLogin}
          currentTab={currentTab}
          tab={3}
        />
      </div>
    </div>
  );
};

export default Header;
