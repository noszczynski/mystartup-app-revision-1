import {
  Category, MonetizationOn, PlayArrow, FiberNew,
} from '@material-ui/icons';
import React from 'react';
import theme from './theme/theme';

const ADVANTAGES_ITEMS: {
  title: string,
  description: string,
  icon: JSX.Element,
  background: string
}[] = [
  {
    title: 'Categories',
    description: 'The projects available on our website have their own categories that you can filter the results by to choose what you really want to support',
    icon: <Category />,
    background: theme.gradient.rose,
  },
  {
    title: 'Start-up',
    description: 'By registering as a startup, you can actively search for new investors and submit financing proposals to them',
    icon: <PlayArrow />,
    background: theme.gradient.orange,
  },
  {
    title: 'Invest',
    description: 'As an investor, you can follow your favorite startups and support them with your funds',
    icon: <MonetizationOn />,
    background: theme.gradient.green,
  },
  {
    title: 'News',
    description: 'Here you will find news from your favorite startups and news that may interest you',
    icon: <FiberNew />,
    background: theme.gradient.blue,
  },
];

export {
  // eslint-disable-next-line import/prefer-default-export
  ADVANTAGES_ITEMS,
};
