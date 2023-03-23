import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postIdCheck, postRegister } from "../../api/registerAPI";
import Input from "./Input";
import classes from "./Register.module.css";
import SubmitBtn from "./SubmitBtn";
import Title from "./Title";
export default function Register() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [pwCheckResult, setPwCheckResult] = useState("");
  const [pwDuple, setPwDuple] = useState("");
  const [idCheck, setIdCheck] = useState("");
  const regId = /^[a-z0-9]*$/;
  const regPw = /^[a-z0-9]{8,16}$/;

  const navigator = useNavigate();

  // id onChange
  const onIdChange = (e) => {
    setId(e.target.value);
  };

  // pw onChange
  const onPwChange = (e) => {
    setPw(e.target.value);
  };

  // pwCheck onChange
  const onPwCheckChange = (e) => {
    setPwCheck(e.target.value);
  };

  //id 유효성검사 & 중복확인
  useEffect(() => {
    if (idCheckLoading) {
      setIdCheck("Loading...");
    } else if (id.length < 4 && regId.test(id)) {
      setIdCheck("4글자 이상 입력하세요");
    } else if (id.length > 3 && id.length < 17 && regId.test(id)) {
      idCheckMutate({ username: id });
    } else if (id.length > 16 && regId.test(id)) {
      setIdCheck("16글자 이하로 입력하세요");
    } else if (!regId.test(id)) {
      setIdCheck("숫자와 영문만 입력하세요");
    }
  }, [id]);

  useEffect(() => {
    if (!regPw.test(pw)) {
      setPwCheckResult("8~16글자의 영문과 숫자로 입력하세요");
    } else if (regPw.test(pw)) {
      setPwCheckResult("사용 가능한 비밀번호입니다.");
    }
    if (pw === pwCheck) {
      setPwDuple("비밀번호가 일치합니다.");
    } else if (pw !== pwCheck) {
      setPwDuple("비밀번호가 다릅니다.");
    }
  }, [pw, pwCheck]);

  //중복 체크 mutation
  const { mutate: idCheckMutate, isLoading: idCheckLoading } = useMutation(
    (payload) => postIdCheck(payload),
    {
      onSuccess: () => setIdCheck("사용 가능한 ID입니다."),
      onError: () => setIdCheck("중복된 ID 입니다."),
    }
  );

  const { mutate: registerMutate } = useMutation(
    (payload) => postRegister(payload),
    {
      onSuccess: () => {
        alert("회원가입 성공");
        navigator("/login");
      },
      onError: () => alert("에러발생!"),
    }
  );

  const onRegisterSubmit = (e) => {
    e.preventDefault();
    registerMutate({ username: id, password: pw, passwordConfirm: pwCheck });
  };
  return (
    <div className={classes.container}>
      <Title>Sign up</Title>
      <form className={classes.form} onSubmit={onRegisterSubmit} id="register">
        <Input
          onChange={onIdChange}
          placeholder="ID"
          name="id"
          type="text"
          text={idCheck}
        />
        <Input
          onChange={onPwChange}
          placeholder="PW"
          name="password"
          type="password"
          text={pwCheckResult}
        />
        <Input
          onChange={onPwCheckChange}
          placeholder="PW Check"
          name="password"
          type="password"
          text={pwDuple}
        />
        <SubmitBtn form="register" name="회원가입" />
      </form>
    </div>
  );
}
