import axios from "axios";
import { apiLogin } from "./api";

// axios.defaults.headers.common["Access-Control-Allow-Origin"] = import.meta.env.API_ORIGIN;
// axios.defaults.headers.common["Access-Control-Allow-Methods"] = import.meta.env.API_METHODS;
// axios.defaults.headers.common["Access-Control-Allow-Headers"] = import.meta.env.API_HEADERS;
// axios.defaults.headers.common["Access-Control-Allow-Credentials"] = import.meta.env.API_CREDENTIALS;
// axios.defaults.headers.common["Access-Control-Max-Age"] = import.meta.env.API_MAX_AGE;
// axios.defaults.headers.common["Access-Control-Expose-Headers"] = import.meta.env.API_EXPOSE_HEADERS;

export const postLogin = (user, pass) => {
  return axios
    .post(
      apiLogin,
      { user, pass },
    
    )
    .then((res) => {
      return res.data;
    });
};
