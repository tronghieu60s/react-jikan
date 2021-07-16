import React, { Fragment, useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Pagination from "../components/Base/Pagination";
import Boxes from "../components/Boxes";
import RequestContext from '../contexts/RequestContext';
import apiCaller from "../utils/apiCaller";
import { delayLoading } from "../utils/commonFunctions";

export default function AnimationContainer() {
  const { setRequest, resetRequest } = useContext(RequestContext);

  const params = useParams();
  const query = new URLSearchParams(useLocation().search);

  const type = params.type || "airing";
  const page = query.get("page") || 1;

  // hooks
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    resetRequest();
    setIsLoading(true);
    fetchData();

    async function fetchData() {
      await delayLoading();
      const fetchUrl = `https://api.jikan.moe/v3/top/anime/${page}/${type}`;
      const items = await apiCaller(fetchUrl);
      setItems(items.data.top);
      setRequest({ url: fetchUrl, value: items.data.top });
      setIsLoading(false);
    }
  }, [type, page]);

  return (
    <Fragment>
      <Boxes items={items} isLoading={isLoading} />
      {items.length > 0 && (
        <Pagination baseUrl={`/anime/${type}`} currentPage={page} />
      )}
    </Fragment>
  );
}
