import React, { Fragment, useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Pagination from "../components/Base/Pagination";
import Boxes from "../components/Boxes";
import RequestContext from "../contexts/RequestContext";
import apiCaller from "../utils/apiCaller";
import { delayLoading } from "../utils/commonFunctions";

/* perPage items pagination */
const perPage = 12;
const totalPerPage = 50;

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

  async function searchData(page) {
    const fetchUrl = `https://api.jikan.moe/v3/search/anime?q=${q}&page=${page}`;
    const fetchItems = await apiCaller(fetchUrl);
    return { fetchUrl, value: fetchItems.results };
  }

  async function fetchData(page) {
    const fetchUrl = `https://api.jikan.moe/v3/top/anime/${page}/${type}`;
    const fetchItems = await apiCaller(fetchUrl);
    return { fetchUrl, value: fetchItems.top };
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
      let fetch = { url: "", value: [] };

      /* get total item in perPage and get startItems for slice array */
      const totalItems = Math.ceil(totalPerPage / perPage);
      const currentPage = Math.ceil(page / totalItems);
      let startItems = (page - 1) * perPage;
      if (startItems >= totalItems * perPage) {
        startItems = startItems - totalItems * perPage * (currentPage - 1);
      }

      /* check search or get api anime */
      if (type === "search") {
        fetch = await searchData(currentPage);
      } else {
        fetch = await fetchData(currentPage);
      }

      const fetchItems = fetch.value.splice(startItems, perPage);
      let moreFetch = [];
      /* if not enough item in perPage, get more items in next page */
      if (fetchItems.length !== perPage) {
        const remainValue = perPage - fetchItems.length;
        if (type === "search") {
          moreFetch = await searchData(currentPage + 1);
        } else {
          moreFetch = await fetchData(currentPage + 1);
        }
        moreFetch = moreFetch.value.slice(0, remainValue);
      }

      const resultItems = [...fetchItems, ...moreFetch];
      setItems(resultItems);
      setRequest({ url: fetch.fetchUrl, value: resultItems });
      setIsLoading(false);
    }
  }, [q, type, page]);

  return (
    <Fragment>
      <Boxes items={items} isLoading={isLoading} />
      {items.length > 0 && (
        <Pagination baseUrl={`/anime/${type}`} itemSize={perPage} />
      )}
    </Fragment>
  );
}
