import React from "react";
import BoxesItem from "./BoxesItem";

export default function Posts(props) {
  const { items } = props
  return (
    <div className="row mt-5">
      <BoxesItem items={items}/>
    </div>
  );
}
