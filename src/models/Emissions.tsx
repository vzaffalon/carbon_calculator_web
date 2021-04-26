import api from "./ApiConsts.js";
import axios from "axios";

const model_uri = "emissions";

const create = async (payload) => {
  return new Promise(async (resolve, reject) => {
    resolve(axios.post(`${api.uri}${model_uri}`, payload));
  });
};

export default {
  create,
};