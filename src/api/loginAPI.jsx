import api from "./api";

//로그인
export const loginApi = async (login) => {
  const data = await api.post("/login", login);

  return data;
};

//로그아웃
export const logoutApi = async () => {
  const data = await api.post("/logout");
  return data;
};
