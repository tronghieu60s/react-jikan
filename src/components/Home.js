import React from "react";
import Boxes from "./Boxes";

export default function Home() {
  return (
    <div className="container">
      <Boxes />
      <div className="d-flex justify-content-center">
        <button type="button" className="btn btn-primary">
          Load More
        </button>
      </div>
    </div>
  );
}
