import axios from "../utils/axiosInterceptors";

export const getPosts = async (page: number, val?: string) => {
  try {
    const { data } = await axios.get(
      `/posts?_expand=user&_limit=20&_page=${page}&q=${val || ""}`
    );
    return data;
  } catch (err) {
    throw err;
  }
};

export const getPost = async (id: number) => {
  try {
    const { data } = await axios.get(
      `/posts/${id}?_embed=comments&_expand=user`
    );
    return data;
  } catch (err) {
    throw err;
  }
};

export const addComment = async (id: number, body: any) => {
  try {
    const { data } = await axios.post(`/posts/${id}/comments`, body);
    return data;
  } catch(err) {
    throw err;
  }
};
