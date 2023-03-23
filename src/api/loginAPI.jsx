import api from "./api";

export const loginApi = async (login) => {
  const data = await api.post("/login", login);

  return data;
};
