import axios from "axios";
import React, { useEffect, useState } from "react";
import Home from "../components/Home";
import { delayLoading } from "../utils/commonFunctions";

export default function HomeContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const [pagination, setPagination] = useState({
    activePage: 1,
    page: 1,
  });
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`https://api.jikan.moe/v3/top/anime/${pagination.page}/airing`)
        .then((res) => setItems(res.data.top))
        .catch((error) => console.log(error));
      await delayLoading();
      setIsLoading(false);
    }

    fetchData();
  }, [pagination]);

  const nextPage = (newPage) => {
    setPagination({
      activePage: newPage + 1,
      page: newPage + 1
    })
  }

  const prevPage = (newPage) => {
    setPagination({
      activePage: newPage - 1,
      page: newPage - 1
    })
  }

  return <Home items={items} isLoading={isLoading} pagination={pagination} nextPage={nextPage} prevPage={prevPage} />;
}
