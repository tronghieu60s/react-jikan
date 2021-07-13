import axios from "axios";
import React, { useEffect, useState } from "react";
import Home from "../components/Home";
import { delayLoading } from "../utils/commonFunctions";

export default function HomeContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const [pagination, setPagination] = useState(1);
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`https://api.jikan.moe/v3/top/anime/1/airing`)
        .then((res) => setItems(res.data.top))
        .catch((error) => console.log(error));
      await delayLoading();
      setIsLoading(false);
    }

    fetchData();
  }, []);

  return <Home items={items} isLoading={isLoading} />;
}
