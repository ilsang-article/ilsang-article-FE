import api from "./api";

// 메인페이지 글 불러오기
export const getAllPosts = async ({ pageParam, search }) => {
  if (search === "") {
    const { data } = await api.get(`/posts?page=${pageParam}`);
    return data.data;
  } else {
    const { data } = await api.get(`/posts?page=${pageParam}&search=${search}`);
    return data.data;
  }
};

//메인페이지 최근 읽은 글 저장하기
export const postRecentRead = async ({ postId }) => {
  const data = await api.post(`/posts/${postId}/read`);
  return data;
};

export const postLikePost = async ({ postId }) => {
  const data = await api.post(`/posts/${postId}/like`);
  return data;
};
