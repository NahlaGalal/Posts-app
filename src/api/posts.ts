import axios from "../utils/axiosInterceptors";

export const getPosts = async () => {
  const { data } = await axios.get("/posts?_expand=user");

  return data;
};

export const getPost = async (id: number) => {
  const { data } = await axios.get(`/posts/${id}?_embed=comments&_expand=user`);

  return data;
};

export const addComment = async (id: number, body: any) => {
  const {data} = await axios.post(`/posts/${id}/comments`, body);
  console.log(data)
}