import api from "./ApiConsts";
import axios from "axios";

const model_uri = "subcategories";

const list = async (params) => {
  return new Promise(async (resolve, reject) => {
    resolve(axios.get(`${api.uri}${model_uri}`, { params: params }));
  });
};

export default {
  list,
};