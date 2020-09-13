import React, { FC } from 'react';
import { RouteProps } from 'utils/interfaces';

const Faq: FC = () => <div>Faq page</div>;

const route: RouteProps = {
  key: 'faq',
  component: Faq,
  path: '/faq',
  exact: true,
};

export default route;
