import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    upDateDarkMode(!darkMode);
  };

  //페이지가 로딩될 때, 로컬스토리지가 다크이거나, 로컬스토리지에 theme정보가 없는 경우 브라우저의 모드가 dark모드인지 확인 후 해당 불리언 값에 맞게 darkMode와 updateDarkMode 변경
  useEffect(() => {
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme:dark)").matches);
    setDarkMode(isDark);
    upDateDarkMode(isDark);
  }, []);
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

//useContext 사용
export const useDarkMode = () => useContext(DarkModeContext);

//darkMode가 true인 경우 최상단 element의 class에 dark추가, 로컬스토리지에 theme=dark 추가
//아닌경우 dark삭제 및 로컬스토리지 dark->light변경
const upDateDarkMode = (darkMode) => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
};
