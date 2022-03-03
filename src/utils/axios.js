import axios from "axios";
import { API_URL } from "../constants";

export const getData = async () => {
  const { data } = await axios.get(API_URL);
  return data;
};
