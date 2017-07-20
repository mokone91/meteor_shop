import EntityContainer from "./containers/EntityContainer";
import EntityList from "./containers/EntityList";
import Entity from "./containers/Entity";
import EntityEdit from "./containers/EntityEdit";
import EntityCreate from "./containers/EntityCreate";

const routes = [
  {
    path: "/entity",
    component: EntityContainer,
    routes: [
      {
        path: "/entity",
        exact: true,
        component: EntityList
      },
      {
        path: "/entity/create",
        component: EntityCreate
      },
      {
        path: "/entity/:id",
        component: Entity
      },
      {
        path: "/entity/:id/edit",
        component: EntityEdit
      }
    ]
  }
];

export default routes;
