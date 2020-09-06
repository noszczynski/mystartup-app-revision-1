import {
  Category,
  MonetizationOn,
  PlayArrow,
  FiberNew,
  Announcement,
  Score,
  AccountTree,
} from '@material-ui/icons';
import React from 'react';
import theme from './theme/theme';
import {
  AdvantagesArray,
  CommentArray,
  NavItemsArray,
  SideNavItemsArray,
} from './utils/interfaces';

const ADVANTAGES_ITEMS: AdvantagesArray = [
  {
    title: 'Categories',
    description:
      'The projects available on our website have their own categories that you can filter the results by to choose what you really want to support',
    icon: <Category />,
    background: theme.gradient.rose,
  },
  {
    title: 'Start-up',
    description:
      'By registering as a startup, you can actively search for new investors and submit financing proposals to them',
    icon: <PlayArrow />,
    background: theme.gradient.orange,
  },
  {
    title: 'Invest',
    description:
      'As an investor, you can follow your favorite startups and support them with your funds',
    icon: <MonetizationOn />,
    background: theme.gradient.green,
  },
  {
    title: 'News',
    description:
      'Here you will find news from your favorite startups and news that may interest you',
    icon: <FiberNew />,
    background: theme.gradient.blue,
  },
];

const COMMENTS: CommentArray = [
  {
    author: 'John doe',
    signature: 'Works in Google as Frontend developer',
    avatar: 'https://api.adorable.io/avatars/120/random',
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Corporis culpa et eveniet exercitationem facere id, ipsam praesentium quae quasi quo?
            Blanditiis cumque cupiditate earum error iusto praesentium quasi rerum vero 1?
         `,
  },
  {
    author: 'John doe',
    signature: 'Works in Google as Frontend developer',
    avatar: 'https://api.adorable.io/avatars/120/random',
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Corporis culpa et eveniet exercitationem facere id, ipsam praesentium quae quasi quo?
            Blanditiis cumque cupiditate earum error iusto praesentium quasi rerum vero 2?
         `,
  },
  {
    author: 'John doe',
    signature: 'Works in Google as Frontend developer',
    avatar: 'https://api.adorable.io/avatars/120/random',
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Corporis culpa et eveniet exercitationem facere id, ipsam praesentium quae quasi quo?
            Blanditiis cumque cupiditate earum error iusto praesentium quasi rerum vero 3?
         `,
  },
  {
    author: 'John doe',
    signature: 'Works in Google as Frontend developer',
    avatar: 'https://api.adorable.io/avatars/120/random',
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Corporis culpa et eveniet exercitationem facere id, ipsam praesentium quae quasi quo?
            Blanditiis cumque cupiditate earum error iusto praesentium quasi rerum vero 4?
         `,
  },
  {
    author: 'John doe',
    signature: 'Works in Google as Frontend developer',
    avatar: 'https://api.adorable.io/avatars/120/random',
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Corporis culpa et eveniet exercitationem facere id, ipsam praesentium quae quasi quo?
            Blanditiis cumque cupiditate earum error iusto praesentium quasi rerum vero 5?
         `,
  },
];
const NAV_ITEMS: NavItemsArray = [
  {
    label: 'Home',
    to: '/',
    exact: true,
  },
  {
    label: 'News',
    to: '/news',
    exact: false,
  },
  {
    label: 'Category',
    to: '/category',
    exact: false,
  },
  {
    label: 'About',
    to: '/about',
    exact: false,
  },
];

const SIDE_NAV_ITEMS: SideNavItemsArray = [
  {
    label: 'Getting Started',
    to: '/gettingstarted',
    icon: <PlayArrow />,
  },
  {
    label: 'News',
    to: '/news',
    icon: <Announcement />,
  },
  {
    label: 'Category',
    to: '/category',
    icon: <Category />,
  },
  {
    label: 'Results',
    to: '/results',
    icon: <Score />,
  },
  {
    label: 'Project',
    to: '/project',
    icon: <AccountTree />,
  },
  {
    label: 'Settings',
    to: '/settings',
    icon: <Category />,
  },
];

export { ADVANTAGES_ITEMS, COMMENTS, NAV_ITEMS, SIDE_NAV_ITEMS };
