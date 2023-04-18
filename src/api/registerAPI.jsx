import api from "./api";

//id 중복검사
export const postIdCheck = async (payload) => {
  const { data } = await api.post("/username", payload);
  return data;
};

//회원가입
export const postRegister = async (payload) => {
  const { data } = await api.post("/signup", payload);
  return data;
};
