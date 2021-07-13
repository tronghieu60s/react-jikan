import axios from "axios";
import React, { useEffect, useState } from "react";
import Home from "../components/Home";

export default function HomeContainer() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.jikan.moe/v3/top/anime/1/airing`)
      .then((res) => setItems(res.data.top))
      .catch((error) => console.log(error));
  }, []);

  return <Home items={items} />;
}
