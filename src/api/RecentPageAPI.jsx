import api from "./api";

export const getRecentPosts = async ({ pageParam }) => {
  const { data } = await api.get(`/posts/recent?page=${pageParam}`);
  return data.data;
};
