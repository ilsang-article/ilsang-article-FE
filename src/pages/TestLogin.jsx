import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { loginApi } from "../api/loginAPI";
const TestLogin = () => {
  const [login, setLogin] = useState({ username: "", password: "" });

  const loginMutation = useMutation((login) => loginApi(login), {
    onSuccess: (res) => {
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
    <>
      <input onChange={onChangeLogin} placeholder="id" name="username" />
      <input onChange={onChangeLogin} placeholder="pw" name="password" />
      <button onClick={onClickLogin}>login</button>
    </>
  );
};

export default TestLogin;
