import axios from "../utils/axiosInterceptors";

export const getUsersData = async () => {
  const { data } = await axios.get("/users");

  return data;
};
