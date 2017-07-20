import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { renderRoutes } from "react-router-config";

import history from "./history";
import store from "./store";
import routes from "./rootRoutes";

function App () {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        {renderRoutes(routes)}
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
