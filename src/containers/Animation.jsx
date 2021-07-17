import React, { Fragment, useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Pagination from "../components/Base/Pagination";
import Boxes from "../components/Boxes";
import { animeSubtype, mangaSubtype } from "../const/jikan";
import RequestContext from "../contexts/RequestContext";
import { jikanFetchData, jikanSearchData } from "../utils/apiCaller";
import { delayLoading } from "../utils/commonFunctions";
import NoMatchContainer from "./NoMatch";

export default function AnimationContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const [isNotMatch, setIsNotMatch] = useState(false);
  const [items, setItems] = useState([]);
  const { setRequest, resetRequest } = useContext(RequestContext);

  const params = useParams();
  const query = new URLSearchParams(useLocation().search);

  const type = params.type || "anime";
  const subtype = params.subtype || "airing";
  const page = query.get("page") || 1;
  let q = query.get("q") || "anime";
  q = q.length >= 3 ? q : "anime";

  useEffect(() => {
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
    setIsNotMatch(notMatch);
  }, [q, type, subtype, page]);

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
      if (subtype === "search") {
        items = await jikanSearchData({ type, q, page });
      } else {
        items = await jikanFetchData({ type, subtype, page });
      }

      setItems(items.value);
      setRequest({ url: items.fetchUrl, value: items.value });
      setIsLoading(false);
    }
  }, [q, type, subtype, page]);

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
