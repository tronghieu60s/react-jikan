import React from "react";
import BoxesItem from "./BoxesItem";
import BoxesSkeleton from "./BoxesSkeleton";

export default function Boxes(props) {
  const { items, isLoading } = props;

  const renderLoading = () => {
    return [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
      <div key={item} className="col-6 col-md-4 col-lg-3">
        <BoxesSkeleton item={item} />
      </div>
    ));
  }

  const renderBoxes = () => {
    return items.map((item) => (
      <div key={item.mal_id} className="col-6 col-md-4 col-lg-3">
        <BoxesItem item={item} />
      </div>
    ));
  }

  return (
    < div className="row mt-5" >
      {isLoading ? renderLoading() : renderBoxes()}
    </div >

  );
}
