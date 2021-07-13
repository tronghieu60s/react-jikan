import React from "react";
import Skeleton from "react-loading-skeleton";

export default function BoxesSkeleton() {
  return (
    <div style={{ marginBottom: "30px" }}>
      <Skeleton height={250} />
      <Skeleton height={40} />
    </div>
  );
}
