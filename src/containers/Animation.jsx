import React, { Fragment, useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Pagination from "../components/Base/Pagination";
import Boxes from "../components/Boxes";
import { animeSubtype, mangaSubtype } from "../const/jikan";
import RequestContext from "../contexts/RequestContext";
import { jikanFetchData, jikanSearchData } from "../utils/apiCaller";
import { delayLoading, capitalize } from "../utils/commonFunctions";
import NoMatchContainer from "./NoMatch";

function isNotMatchUrl({ type, subtype }) {
  let notMatch = false;
  if (type === "anime") {
    if ([...animeSubtype, "search"].findIndex((o) => o === subtype) === -1) {
      notMatch = true;
    }
  } else if (type === "manga") {
    if ([...mangaSubtype, "search"].findIndex((o) => o === subtype) === -1) {
      notMatch = true;
    }
  } else {
    notMatch = true;
  }
  return notMatch;
}

export default function AnimationContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const [isNotMatch, setIsNotMatch] = useState(false);
  const [items, setItems] = useState([]);
  const { setRequest, resetRequest } = useContext(RequestContext);

  const params = useParams();
  const {type = "anime", subtype = "airing"} = params;
  const query = new URLSearchParams(useLocation().search);

  const page = query.get("page") || 1;
  let q = query.get("q") || "anime";
  q = q.length >= 3 ? q : "anime";

  useEffect(() => {
    /* check correct url */
    const isNotMatch = isNotMatchUrl({ type, subtype });
    setIsNotMatch(isNotMatch);

    /* set title and scroll to top page when change value in router */
    if (params.type) {
      const title = `${capitalize(type)} - ${capitalize(subtype)}`;
      document.title = `${title} | React Jikan`;
    }
    window.scrollTo(0, 0);
    resetRequest();

    /* set loading and get data from api */
    if (!isLoading) {
      setIsLoading(true);
    }

    if (!isNotMatch) {
      requestData();
    }
  }, [q, type, subtype, page]);

  async function requestData() {
    let items = { url: "", value: [] };
    let url = "";
    let value = [];
    if (subtype === "search") {
      items = await jikanSearchData({ type, q, page });
      if (items.value === undefined) {
        setIsNotMatch(true);
      } else {
        url = items.fetchUrl;
        value = items.value.results;
      }
    } else {
      items = await jikanFetchData({ type, subtype, page });
      if (items.value === undefined) {
        setIsNotMatch(true);
      } else {
        url = items.fetchUrl;
        value = items.value.top;
      }
    }

    setItems(value);
    /* delay loading utils render data */
    await delayLoading();
    setRequest({ url, value });
    setIsLoading(false);
  }

  if (isNotMatch) {
    return <NoMatchContainer />;
  }

  return (
    <Fragment>
      <Boxes items={items} isLoading={isLoading} />
      {items.length > 0 && (
        <Pagination baseUrl={`/animation/${type}/${subtype}`} />
      )}
    </Fragment>
  );
}
