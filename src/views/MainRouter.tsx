import React, { FC } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Layout } from 'components';
import routes from 'views';
import { ProtectedRoute } from './ProtectedRoute';

const MainRouter: FC = () => {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          {routes.map((route) => {
            if(!route.path){
              return <Route component={route.component} />
            }
            if(route.isProtected){
              return <ProtectedRoute
              restrictedPath={route.path || "/"}
              authenticationPath={route.meta?.authenticationPath || "/"}
              component={route.component}
              isAuthenticated={route.meta?.isAuthenticated || false}
              isAllowed={route.meta?.isAllowed || false}
            />
            }
            return <Route exact={route.exact} path={route.path} component={route.component} key={route.key}/>
          })}
        </Switch>
      </AnimatePresence>
    </Layout>
  );
};

export default MainRouter;
