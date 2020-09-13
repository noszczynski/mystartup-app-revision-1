import React, { FC } from 'react';
import { RouteProps } from 'utils/interfaces';

const NoRoute: FC = () => <div>404</div>;

const route: RouteProps = {
  key: 'noRoute',
  component: NoRoute,
};

export default route;
