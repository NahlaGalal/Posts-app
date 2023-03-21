import axios from "../utils/axiosInterceptors";

export const getPosts = async (page: number) => {
  const { data } = await axios.get(
    `/posts?_expand=user&_limit=20&_page=${page}`
  );

  return data;
};

export const getPost = async (id: number) => {
  const { data } = await axios.get(`/posts/${id}?_embed=comments&_expand=user`);

  return data;
};

export const addComment = async (id: number, body: any) => {
  const { data } = await axios.post(`/posts/${id}/comments`, body);
  return data;
};
