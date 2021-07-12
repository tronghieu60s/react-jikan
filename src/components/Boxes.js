import React from "react";
import BoxesItem from "./BoxesItem";

export default function Posts() {
  return (
    <div className="row mt-5" data-masonry='{"percentPosition": true }'>
      <BoxesItem />
      <BoxesItem />
      <BoxesItem />
      <BoxesItem />
      <BoxesItem />
      <BoxesItem />
    </div>
  );
}
