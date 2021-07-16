import axios from "axios";

export default function apiCaller(url) {
  return axios
    .get(url)
    .then((res) => res)
    .catch((error) => console.log(error));
}
