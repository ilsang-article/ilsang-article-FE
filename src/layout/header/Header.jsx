import { useDarkMode } from "../../context/DarkModeContext";
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
    { menu: "로그인", url: "login" },
  ];

  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className={classes.container}>
      <div className={classes.darkBtn} onClick={toggleDarkMode}>
        {darkMode ? "dark" : "light"}
      </div>
      {menus.map((menu) => {
        return <MenuBtn key={menu.menu} menu={menu.menu} url={menu.url} />;
      })}
    </div>
  );
};

export default Header;
