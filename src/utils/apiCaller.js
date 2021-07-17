import axios from "axios";

export default function apiCaller(url) {
  return axios
    .get(url)
    .then((res) => res.data)
    .catch((error) => console.log(error));
}

export async function jikanSearchData({ type, q, page }) {
  const fetchUrl = `https://api.jikan.moe/v3/search/${type}?q=${q}&page=${page}`;
  const items = await apiCaller(fetchUrl);
  return { fetchUrl, value: items };
}

export async function jikanFetchData({ type, subtype, page }) {
  const fetchUrl = `https://api.jikan.moe/v3/top/${type}/${page}/${subtype}`;
  const items = await apiCaller(fetchUrl);
  return { fetchUrl, value: items };
}
