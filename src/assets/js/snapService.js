import axios from "axios";
import {
  apiCategory,
  apiGetLayBaiViet,
  apiLogin,
  apiProduct,
  apiQuanTriBaiViet,
} from "./api";
// eslint-disable-next-line no-unused-vars
import { decrypt, encrypt, decryptAESCBC } from "./crypto";

// axios.defaults.headers.common["Access-Control-Allow-Origin"] = import.meta.env.API_ORIGIN;
// axios.defaults.headers.common["Access-Control-Allow-Methods"] = import.meta.env.API_METHODS;
// axios.defaults.headers.common["Access-Control-Allow-Headers"] = import.meta.env.API_HEADERS;
// axios.defaults.headers.common["Access-Control-Allow-Credentials"] = import.meta.env.API_CREDENTIALS;
// axios.defaults.headers.common["Access-Control-Max-Age"] = import.meta.env.API_MAX_AGE;
// axios.defaults.headers.common["Access-Control-Expose-Headers"] = import.meta.env.API_EXPOSE_HEADERS;

export const postLogin = (user, pass) => {
  return axios.post(apiLogin, { user, pass }).then((res) => {
    return res.data;
  });
};

export const getBaiViet = () => {
  return axios.get(apiGetLayBaiViet).then((res) => {
    return res.data;
  });
};

export const postUpdateBaiViet = (
  funcId,
  user,
  title,
  shortContent,
  content,
  urlImgBaiViet,
  shortUrl,
  id
) => {
  return axios
    .post(apiQuanTriBaiViet, {
      funcId,
      user,
      title,
      shortContent,
      content,
      urlImgBaiViet,
      shortUrl,
      id,
    })
    .then((res) => {
      return res;
    });
};
export const getChiTietBaiViet = (funcId, shortUrl) => {
  return axios
    .post(apiQuanTriBaiViet, {
      funcId,
      shortUrl,
    })
    .then((res) => {
      return res.data;
    });
};

export const postListCategory = () => {
  return axios
    .post(apiCategory, {
      funcId: 10,
    })
    .then((res) => {
      const data = decrypt(res.data);
   
      return data;
    });
};


export const postListProduct = () => {
  return axios
    .post(apiProduct, {
      funcId: 10,
    })
    .then((res) => {
      const data = decrypt(res.data);
   
      return data;
    });
};
