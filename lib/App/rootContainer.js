import React from "react";
import { renderRoutes } from "react-router-config";

function RootContainer ({route:{routes}}) {
  return (
    <div>
      <h1>{"Root"}</h1>
      {renderRoutes(routes)}
    </div>
  );
}

export default RootContainer;
