import api from "./api";

export const serchApi = async (query) => {
  const data = await api.get(`/posts?search=${query}`);
  return data;
};
