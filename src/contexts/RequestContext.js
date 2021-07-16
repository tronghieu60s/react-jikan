import React from "react";

const RequestContext = React.createContext({});

export const RequestProvider = RequestContext.Provider;
export const RequestConsumer = RequestContext.Consumer;
export default RequestContext;
