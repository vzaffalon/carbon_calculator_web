import api from "./ApiConsts";
import axios from "axios";
import { Categories } from "../interfaces/category/categories.interface";

const model_uri = "categories";

const list = async () => {
  return new Promise(async (resolve, reject) => {
    resolve(axios.get<Categories>(`${api.uri}${model_uri}`));
  });
};

export default {
  list,
};
