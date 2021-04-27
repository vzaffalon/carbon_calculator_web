import api from "./ApiConsts.js";
import axios from "axios";
import { Emissions } from "../interfaces/emissions.interface.js";

const model_uri = "emissions";

const create = async (payload: Emissions) => {
  return new Promise(async (resolve, reject) => {
    resolve(axios.post(`${api.uri}${model_uri}`, payload));
  });
};

export default {
  create,
};