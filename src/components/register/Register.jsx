import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postIdCheck, postRegister } from "../../api/registerAPI";
import Input from "./Input";
import classes from "./Register.module.css";
import SubmitBtn from "./SubmitBtn";
import Title from "./Title";
export default function Register() {
  const [id, setId] = useState(""); // id input
  const [pw, setPw] = useState(""); // pw input
  const [pwCheck, setPwCheck] = useState(""); // pwCheck input
  const [pwValidateResult, setPwValidateResult] = useState(""); // pwCheck result
  const [pwCheckResult, setPwCheckResult] = useState(""); // pwDuple result
  const [idDupleResult, setIdDupleResult] = useState(""); // idDuple result
  const regId = /^[a-z0-9]*$/; // id 유효성
  const regPw = /^[a-z0-9]{8,16}$/; // pw 유효성

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
      setIdDupleResult("Loading...");
    } else if (!regId.test(id)) {
      setIdDupleResult("숫자와 영문만 입력하세요");
    } else if (id.length < 4) {
      setIdDupleResult("4글자 이상 입력하세요");
    } else if (id.length > 16) {
      setIdDupleResult("16글자 이하로 입력하세요");
    } else {
      idCheckMutate({ username: id });
    }
  }, [id]);

  //pw 유효성검사 & 중복확인
  useEffect(() => {
    if (!pw) {
      setPwValidateResult("비밀번호를 입력하세요");
    } else if (!regPw.test(pw)) {
      setPwValidateResult("8~16글자의 영문과 숫자로 입력하세요");
    } else {
      setPwValidateResult("사용 가능한 비밀번호입니다.");
    }

    if (!pwCheck) {
      setPwCheckResult("비밀번호 확인을 입력하세요.");
    } else if (pw === pwCheck) {
      setPwCheckResult("비밀번호가 일치합니다.");
    } else {
      setPwCheckResult("비밀번호가 다릅니다.");
    }
  }, [pw, pwCheck]);

  //pw 중복 체크 mutation
  const { mutate: idCheckMutate, isLoading: idCheckLoading } = useMutation(
    (payload) => postIdCheck(payload),
    {
      onSuccess: () => setIdDupleResult("사용 가능한 ID입니다."),
      onError: () => setIdDupleResult("중복된 ID 입니다."),
    }
  );
  // Sign up mutation
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

  // form onSubmit
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
          text={idDupleResult}
        />
        <Input
          onChange={onPwChange}
          placeholder="PW"
          name="password"
          type="password"
          text={pwValidateResult}
        />
        <Input
          onChange={onPwCheckChange}
          placeholder="PW Check"
          name="password"
          type="password"
          text={pwCheckResult}
        />
        <SubmitBtn form="register" name="회원가입" />
      </form>
    </div>
  );
}
