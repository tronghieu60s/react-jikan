import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Pagination from "../components/Base/Pagination";
import Boxes from "../components/Boxes";
import { delayLoading } from "../utils/commonFunctions";

export default function AnimationContainer() {
  const params = useParams();
  const query = new URLSearchParams(useLocation().search);

  const type = params.type || "airing";
  const page = query.get("page") || 1;

  // hooks
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    fetchData();

    async function fetchData() {
      await delayLoading();
      await axios
        .get(`https://api.jikan.moe/v3/top/anime/${page}/${type}`)
        .then((res) => setItems(res.data.top))
        .catch((error) => console.log(error));
      setIsLoading(false);
    }
  }, [type, page]);

  return (
    <Fragment>
      <Boxes items={items} isLoading={isLoading} />
      <Pagination baseUrl={`/anime/${type}`} currentPage={page} />
    </Fragment>
  );
}
