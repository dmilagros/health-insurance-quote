import axios from "axios";

const baseUrl = "https://freestyle.getsandbox.com/dummy/obtenerdatospersona";

export const getUserData = async () => {
  const res = await axios.post(`${baseUrl}`);
  return res;
};

export default {
  getUserData,
};
