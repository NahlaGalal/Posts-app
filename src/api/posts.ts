import axios from "../utils/axiosInterceptors";

export const getPosts = async () => {
  const { data } = await axios.get("/posts");

  return data;
};