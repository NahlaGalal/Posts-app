import axios from "../utils/axiosInterceptors";

export const getUserData = async (id: string) => {
  try {
    const { data } = await axios.get(`/users/${id}?_embed=posts`);
    return data;
  } catch (err) {
    throw err;
  }
};
