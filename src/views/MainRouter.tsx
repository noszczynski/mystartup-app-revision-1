import React, { FC } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Layout } from 'components';
import { ProtectedRoute } from './ProtectedRoute';
import * as Path from './index';

const MainRouter: FC = () => {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Path.Home} />
          <Route exact path="/category" component={Path.Categories} />
          <Route path="/category/:id" component={Path.Category} />
          <Route exact path="/news" component={Path.News} />
          <Route path="/news/:id" component={Path.Article} />
          <Route path="/results/:search" component={Path.Results} />
          <Route path="/about" component={Path.About} />
          <Route path="/user/:id" component={Path.User} />
          <Route exact path="/project/:id" component={Path.Project} />
          <Route path="/faq" component={Path.Faq} />
          <ProtectedRoute
            restrictedPath="/project/:id/settings"
            authenticationPath="/"
            component={Path.EditProject}
            isAuthenticated={false}
            isAllowed
          />
          <ProtectedRoute
            restrictedPath="/settings/:id"
            authenticationPath="/"
            component={Path.Settings}
            isAuthenticated
            isAllowed
          />
          <Route component={Path.NoRoute} />
        </Switch>
      </AnimatePresence>
    </Layout>
  );
};

export default MainRouter;
