import api from "./ApiConsts";
import axios from "axios";
import { SubCategories } from "../interfaces/subcategories.interface";

const model_uri = "subcategories";

const list = async (params: SubCategories) => {
  return new Promise(async (resolve, reject) => {
    resolve(axios.get(`${api.uri}${model_uri}`, { params: params }));
  });
};

export default {
  list,
};