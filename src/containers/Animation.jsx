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

  // hooks
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    resetRequest();
    setIsLoading(true);

    if (type === "search") {
      searchData();
    } else {
      fetchData();
    }

    async function searchData() {
      await delayLoading();
      const fetchUrl = `https://api.jikan.moe/v3/search/anime?q=${q}&page=${page}`;
      const items = await apiCaller(fetchUrl);
      setItems(items.results);
      setRequest({ url: fetchUrl, value: items.results });
      setIsLoading(false);
    }

    async function fetchData() {
      await delayLoading();
      const fetchUrl = `https://api.jikan.moe/v3/top/anime/${page}/${type}`;
      const items = await apiCaller(fetchUrl);
      setItems(items.top);
      setRequest({ url: fetchUrl, value: items.top });
      setIsLoading(false);
    }
  }, [q, type, page]);

  return (
    <Fragment>
      <Boxes items={items} isLoading={isLoading} />
      {items.length > 0 && (
        <Pagination baseUrl={`/anime/${type}`} currentPage={page} />
      )}
    </Fragment>
  );
}
