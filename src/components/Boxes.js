import React from "react";
import BoxesItem from "./BoxesItem";

export default function Posts(props) {
  const { items } = props;
  return (
    <div className="row mt-5">
      {items.map((item) => (
        <BoxesItem key={item.mal_id} item={item} />
      ))}
    </div>
  );
}
