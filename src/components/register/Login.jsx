import React from "react";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { loginApi } from "../../api/loginAPI";
import classes from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import SubmitBtn from "./SubmitBtn";
import Title from "./Title";
import { useLoginCheck } from "../../context/LoginCheckContext";
import { toast } from "react-toastify";
import Loading from "../loading/Loading";

export default function Login() {
  const navigator = useNavigate();
  const [login, setLogin] = useState({ username: "", password: "" });

  const loginMutation = useMutation((login) => loginApi(login), {
    onSuccess: (res) => {
      sessionStorage.setItem("access_token", res.headers.access_token);
      sessionStorage.setItem("refresh_token", res.headers.refresh_token);
      setIsLogin(true);
      navigator("/");
    },
    onError: (err) => {
      toast(err.response.data.error.detail);
    },
  });

  const onChangeLogin = (event) => {
    const { name, value } = event.target;
    setLogin({ ...login, [name]: value });
  };
  const onSubmitLogin = (e) => {
    e.preventDefault();
    loginMutation.mutate(login);
  };
  const { setIsLogin } = useLoginCheck();

  if (loginMutation.isLoading) {
    return <Loading />;
  }

  return (
    <div className={classes.container}>
      <Title className={classes.title}>Login</Title>
      <form className={classes.form} onSubmit={onSubmitLogin} id="login">
        <Input
          onChange={onChangeLogin}
          placeholder="ID"
          name="username"
          type="text"
        />

        <Input
          onChange={onChangeLogin}
          placeholder="PW"
          name="password"
          type="password"
        />
      </form>
      <SubmitBtn form="login" name="로그인" />

      <span className={classes.sign_up1}>
        Don't have an account?{" "}
        <span
          className={classes.sign_up2}
          onClick={() => navigator("/register")}
        >
          Sign up
        </span>
      </span>
    </div>
  );
}
