import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginCheck } from "../context/LoginCheckContext";

export function useRedirectIfNotLoggedIn() {
  const { isLogin } = useLoginCheck();
  const navigator = useNavigate();
  useEffect(() => {
    if (!isLogin) {
      alert("로그인 후 이용가능한 곳입니다.");
      navigator("/login");
    }
  }, [isLogin, navigator]);
}
