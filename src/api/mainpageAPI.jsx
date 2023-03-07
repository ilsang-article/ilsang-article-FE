import api from "./api";

export const getAllPosts = async ({ pageParam }) => {
  const { data } = await api.get(`/posts?page=${pageParam}`);
  return data.data;
};
