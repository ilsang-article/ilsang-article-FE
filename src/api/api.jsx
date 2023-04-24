import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_AXIOS_API}`,
});

api.interceptors.request.use((config) => {
  const access_token = sessionStorage.getItem("access_token");
  const refresh_token = sessionStorage.getItem("refresh_token");

  if (access_token) {
    config.headers["access_token"] = `${access_token}}`;
    config.headers["refresh_token"] = `${refresh_token}`;
  }
  return config;
});

export default api;
