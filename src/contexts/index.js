import React, { useState } from "react";
import { RequestProvider } from "./RequestContext";

export default function Contexts(props) {
  const { children } = props;
  const [request, setRequest] = useState({ url: "", value: "" });

  return (
    <RequestProvider value={{ request, setRequest }}>
      {children}
    </RequestProvider>
  );
}
