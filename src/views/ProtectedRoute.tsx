import React, { FC } from 'react';
import {
  Route, Redirect, RouteProps,
} from 'react-router-dom';

interface ProtectedRouteProps extends RouteProps {
  isAuthenticated: boolean;
  isAllowed: boolean;
  restrictedPath: string;
  authenticationPath: string;
  component: FC;
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({
  isAuthenticated,
  isAllowed,
  restrictedPath,
  authenticationPath,
  component: Component,
  ...props
}) => {
  let redirectPath = '';
  if (!isAuthenticated) {
    redirectPath = authenticationPath;
  }
  if (isAuthenticated && !isAllowed) {
    redirectPath = restrictedPath;
  }

  if (redirectPath) {
    const renderComponent: FC = () => <Redirect to={{ pathname: redirectPath }} />;
    return <Route {...props} component={renderComponent} render={undefined} />;
  }
  return <Route component={Component} {...props} />;
};

export default ProtectedRoute;
