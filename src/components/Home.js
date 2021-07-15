import React from "react";
import Boxes from "./Boxes";
import Pagination from "./Pagination";



export default function Home(props) {
  const { items, isLoading, pagination } = props;

  return (
    <div className="container">
      <Boxes items={items} isLoading={isLoading} />
      <Pagination pagination={pagination} />
    </div>
  );
}
