import rootContainer from "./rootContainer";
import { routes as landingRoutes } from "./modules/landing";
import { routes as entityRoutes } from "./modules/entity";

const routes = [
  {
    component: rootContainer,
    routes: [
      ...landingRoutes,
      ...entityRoutes
    ]
  }
];

export default routes;
