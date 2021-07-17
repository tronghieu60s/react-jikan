import React, { Fragment, useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Pagination from "../components/Base/Pagination";
import Boxes from "../components/Boxes";
import RequestContext from "../contexts/RequestContext";
import apiCaller from "../utils/apiCaller";
import { delayLoading } from "../utils/commonFunctions";

export default function AnimationContainer() {
  const { setRequest, resetRequest } = useContext(RequestContext);

  const params = useParams();
  const query = new URLSearchParams(useLocation().search);

  const type = params.type || "airing";
  const page = query.get("page") || 1;
  let q = query.get("q") || "anime";
  q = q.length >= 3 ? q : "anime";

  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);

  async function searchData() {
    const fetchUrl = `https://api.jikan.moe/v3/search/anime?q=${q}&page=${page}`;
    const items = await apiCaller(fetchUrl);
    return { fetchUrl, value: items.results };
  }

  async function fetchData() {
    const fetchUrl = `https://api.jikan.moe/v3/top/anime/${page}/${type}`;
    const items = await apiCaller(fetchUrl);
    return { fetchUrl, value: items.top };
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    resetRequest();

    if (!isLoading) {
      setIsLoading(true);
    }

    requestData();

    async function requestData() {
      await delayLoading();
      let items = { url: "", value: [] };
      if (type === "search") {
        items = await searchData();
      } else {
        items = await fetchData();
      }

      setItems(items.value);
      setRequest({ url: items.fetchUrl, value: items });
      setIsLoading(false);
    }
  }, [q, type, page]);

  return (
    <Fragment>
      <Boxes items={items} isLoading={isLoading} />
      {items.length > 0 && <Pagination baseUrl={`/anime/${type}`} />}
    </Fragment>
  );
}
