import axios from "../utils/axiosInterceptors";

export const getPosts = async () => {
  const { data } = await axios.get("/posts?_expand=user");

  return data;
};