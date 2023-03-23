import api from "./api";

export const getLikePosts = async () => {
  const { data } = await api.get(`/myposts`);

  return data.data;
};
