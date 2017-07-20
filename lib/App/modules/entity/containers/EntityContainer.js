import React from "react";
import {renderRoutes} from "react-router-config";

function EntityList ({route:{routes}}) {
  return (
    <div>
      {renderRoutes(routes)}
    </div>
  );
}

export default EntityList;
