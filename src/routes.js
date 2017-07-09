import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';
import App from "./App";
import prefix from './utils/routePrefix';
import Home from "./pages/Home";

const routes = (
    <Route path={`${prefix}/`} component={App}>
        <IndexRoute component={Home}/>
    </Route>
);
export default routes;