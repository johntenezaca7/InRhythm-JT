import axios from "axios";
import { FETCH_DATA } from "./type";

export const fetchData = query => {
  const request = axios.get(
    `https://itunes.apple.com/search?term=${query}&entity=album&limit=25`
  );

  return {
    type: FETCH_DATA,
    payload: request
  };
};
