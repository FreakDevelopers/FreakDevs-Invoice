import axios from "axios";
import { SERVER_URL } from "../data/constants";

export const getAxiosInstance = () => {
  const jwt = localStorage.getItem("token");
  return axios.create({
    baseURL: SERVER_URL,
    headers: {
      Authorization: `Bearer ${jwt}`,
      "Content-Type": "application/json",
    },
  });
}