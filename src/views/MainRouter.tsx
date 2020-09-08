import React, { FC } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import {
  Home,
  Category,
  Categories,
  News,
  Results,
  Article,
  Project,
  NoRoute,
  Layout,
  About,
  EditProject,
  Settings,
  User,
  Faq,
} from './index';

const MainRouter: FC = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/category" component={Categories} />
        <Route path="/category/:id" component={Category} />
        <Route exact path="/news" component={News} />
        <Route path="/news/:id" component={Article} />
        <Route path="/results/:search" component={Results} />
        <Route path="/about" component={About} />
        <Route path="/user/:id" component={User} />
        <Route exact path="/project/:id" component={Project} />
        <Route path="/faq" component={Faq} />
        <ProtectedRoute
          restrictedPath="/project/:id/settings"
          authenticationPath="/"
          component={EditProject}
          isAuthenticated={false}
          isAllowed
        />
        <ProtectedRoute
          restrictedPath="/settings/:id"
          authenticationPath="/"
          component={Settings}
          isAuthenticated
          isAllowed
        />
        <Route component={NoRoute} />
      </Switch>
    </Layout>
  </Router>
);

export default MainRouter;
