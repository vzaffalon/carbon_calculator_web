import api from "./ApiConsts.js";
import axios from "axios";
import { Categories } from "../interfaces/categories.interface.js";

const model_uri = "categories";

const list = async (params: Categories) => {
  return new Promise(async (resolve, reject) => {
    resolve(axios.get(`${api.uri}${model_uri}`, { params: params }));
  });
};

export default {
  list,
};