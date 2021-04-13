import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import Main from "./pages/Main";

const ROUTES = [
  {
    path: "/",
    key: "APP",
    component: (props) => {
      return <RenderRoutes {...props} />;
    },
    routes: [
      {
        path: "/",
        key: "APP_ROOT",
        exact: true,
        component: Main,
      },
    ],
  },
];

export default ROUTES;

const RouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
};

export const RenderRoutes = ({ routes }) => {
  return (
    <Switch>
      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  );
};

RenderRoutes.propTypes = {
  routes: PropTypes.array.isRequired,
};
