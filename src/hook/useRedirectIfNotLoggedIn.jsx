import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLoginCheck } from "../context/LoginCheckContext";

export function useRedirectIfNotLoggedIn() {
  const { isLogin } = useLoginCheck();
  const navigator = useNavigate();
  useEffect(() => {
    if (!isLogin) {
      toast("로그인 후 이용하세요");
      navigator("/login");
    }
  }, [isLogin, navigator]);
}
