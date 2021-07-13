import React from "react";
import BoxesItem from "./BoxesItem";

export default function Posts(props) {
  const { items } = props;
  return (
    <div className="row mt-5">
      {items.map((item) => (
        <div key={item.mal_id} className="col-6 col-md-4 col-lg-3">
          <BoxesItem item={item} />
        </div>
      ))}
    </div>
  );
}
