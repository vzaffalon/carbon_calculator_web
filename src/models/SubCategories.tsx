import api from "./ApiConsts";
import axios from "axios";
import { SubCategories } from "../interfaces/subcategory/subcategories.interface";

const model_uri = "subcategories";

const list = async (category_id: number) => {
  return new Promise(async (resolve, reject) => {
    resolve(axios.get<SubCategories>(`${api.uri}/categories/${category_id}/${model_uri}`));
  });
};

export default {
  list,
};