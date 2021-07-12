import React, { useEffect, useState } from "react";
import Home from "../components/Home";

export default function HomeContainer() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("Call API Now!!!");
  }, []);

  return <Home />;
}
