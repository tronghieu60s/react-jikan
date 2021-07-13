import React from "react";
import Boxes from "./Boxes";

export default function Home(props) {
  const { items, isLoading } = props;
  return (
    <div className="container">
      <Boxes items={items} isLoading={isLoading} />
      <div className="d-flex justify-content-center mt-4">
        <button type="button" className="btn btn-primary">
          Load More
        </button>
      </div>
    </div>
  );
}
