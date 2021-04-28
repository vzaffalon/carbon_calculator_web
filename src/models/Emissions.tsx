import api from "./ApiConsts.js";
import axios from "axios";
import { EmissionsCreation } from "../interfaces/emission/emissions.creation.interface";
import { Emission } from "../interfaces/emission/emission.interface.js";

const model_uri = "calculate_total_emission";

const calculate_total_emission = async (payload: EmissionsCreation) => {
  return new Promise(async (resolve, reject) => {
    resolve(axios.post<Emission>(`${api.uri}${model_uri}`, payload));
  });
};

export default {
    calculate_total_emission,
};