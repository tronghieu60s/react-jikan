import React from "react";

export default function NoMatchContainer() {
  return (
    <div className="h-100 d-flex justify-content-center align-items-center">
      <div className="px-4">
        <h1 className="mb-0">404 Page Not Found</h1>
        <small>
          This page does not exist or this is an API limitation, please try
          again later.
        </small>
      </div>
    </div>
  );
}
