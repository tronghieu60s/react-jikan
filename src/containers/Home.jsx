import axios from "axios";
import React, { useEffect, useState } from "react";
import Home from "../components/Home";
import Page from "../components/Page";

import { delayLoading } from "../utils/commonFunctions";
import { BrowserRouter as Router, Route } from "react-router-dom";


export default function HomeContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const [pagination, setPagination] = useState({
    activePage: true,
    page: 1,
  });
  const [items, setItems] = useState([]);

  const getId = (id) => {
    setPagination({
      activePage: true,
      page: id,
    })
  }

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



  return (
    <Router>
      <Route exact path="/">
        <Home items={items} isLoading={isLoading} pagination={pagination} />
      </Route>
      <Route path="/anime/:type/:page">
        <Page items={items} isLoading={isLoading} pagination={pagination} getId={getId} />
      </Route>
    </Router>
  )
}
