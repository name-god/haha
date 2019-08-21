import axios from "axios";

export const get = async (url, params = {}) => {
  try {
    let response = await axios.get(url, { params: params });
    if (response.status === 200 && response.data.code === 0) {
      return response.data;
    } else {
      throw new Error();
    }
  } catch (error) {
    //console.log(url);
    console.log("请求失败", error);
  }
};

export const post = async (url, data = {}, params = {}) => {
  try {
    let response = await axios.post(url, data, params);
    if (response.status === 200 && response.data.code === 0) {
      return response.data;
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log("请求失败", error);
    // return error;
  }
};
export default {
  get,
  post
};
