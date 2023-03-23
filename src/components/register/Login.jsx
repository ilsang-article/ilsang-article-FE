import React from "react";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { loginApi } from "../../api/loginAPI";
import classes from "./Login.module.css";

export default function Login() {
  const [login, setLogin] = useState({ username: "", password: "" });

  const loginMutation = useMutation((login) => loginApi(login), {
    onSuccess: (res) => {
      console.log(res.headers);
      localStorage.setItem("access_token", res.headers.access_token);
      localStorage.setItem("refresh_token", res.headers.refresh_token);
      alert("로그인완료");
    },
  });

  const onChangeLogin = (event) => {
    const { name, value } = event.target;
    setLogin({ ...login, [name]: value });
  };
  const onClickLogin = () => {
    loginMutation.mutate(login);
  };
  return (
    <div className={classes.container}>
      <input
        onChange={onChangeLogin}
        placeholder="id"
        name="username"
        type="text"
      />

      <input
        onChange={onChangeLogin}
        placeholder="pw"
        name="password"
        type="password"
      />

      <button onClick={onClickLogin}>login</button>
    </div>
  );
}
