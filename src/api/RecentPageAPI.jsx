import api from "./api";

export const getRecentPosts = async () => {
  const { data } = await api.get(`/posts/recent`);

  return data.data;
};
