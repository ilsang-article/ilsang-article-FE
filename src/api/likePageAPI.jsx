import api from "./api";

export const getLikePosts = async ({ filter }) => {
  const { data } = await api.get(`/myposts${filter}`);

  return data.data;
};

export const deleteReadCheck = async (id) => {
  const { data } = await api.delete(`/myposts/${id}/unread`);
  return data.data;
};
