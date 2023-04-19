import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function useParamHook() {
  const url = useLocation();
  const [currentTab, setCurrentTab] = useState();
  useEffect(() => {
    if (url.pathname === "/") {
      setCurrentTab(0);
    } else if (url.pathname === "/likeposts") {
      setCurrentTab(1);
    } else if (url.pathname === "/recentposts") {
      setCurrentTab(2);
    } else if (url.pathname === "/login" || url.pathname === "register") {
      setCurrentTab(3);
    }
  }, [url]);
  return { currentTab };
}
