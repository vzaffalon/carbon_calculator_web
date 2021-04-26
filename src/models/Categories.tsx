import api from "./ApiConsts.js";
import axios from "axios";

const model_uri = "categories";

const list = async (params) => {
  return new Promise(async (resolve, reject) => {
    resolve(axios.get(`${api.uri}${model_uri}`, { params: params }));
  });
};

export default {
  list,
};