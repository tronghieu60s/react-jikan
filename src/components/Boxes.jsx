import React, { Fragment } from "react";
import BoxesItem from "./BoxesItem";
import BoxesSkeleton from "./BoxesSkeleton";

export default function Boxes(props) {
  const { items, isLoading } = props;

  return (
    <Fragment>
      <div className={`row${!isLoading ? " d-none" : ""}`}>
        {[...Array(12).keys()].map((item) => (
          <div key={item} className="col-6 col-md-4 col-lg-3">
            <BoxesSkeleton item={item} />
          </div>
        ))}
      </div>
      <div className={`row${isLoading ? " d-none" : ""}`}>
        {items.map((item) => (
          <div key={item.mal_id} className="col-6 col-md-4 col-lg-3">
            <BoxesItem item={item} />
          </div>
        ))}
      </div>
    </Fragment>
  );
}
