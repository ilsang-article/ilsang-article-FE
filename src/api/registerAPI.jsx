import api from "./api";

export const postIdCheck = async (payload) => {
  const { data } = await api.post("/username", payload);
  return data;
};

export const postRegister = async (payload) => {
  const { data } = await api.post("/signup", payload);
  return data;
};
