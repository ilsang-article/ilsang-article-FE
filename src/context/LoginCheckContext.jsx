import { createContext, useContext, useEffect, useState } from "react";

const LoginCheckContext = createContext();

export const LoginCheckProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (sessionStorage.access_token) {
      setIsLogin(true);
    }
  }, [isLogin]);
  return (
    <LoginCheckContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </LoginCheckContext.Provider>
  );
};

export const useLoginCheck = () => useContext(LoginCheckContext);
