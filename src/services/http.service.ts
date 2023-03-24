import axios from "axios";
import configFile from "../config.json";

const http = axios.create({ baseURL: configFile.apiEndpoint });

http.interceptors.request.use(
  function (config) {
    if (config.url) {
      config.url = config.url + ".json";
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const httpService = {
  get: http.get,
};

export default httpService;
