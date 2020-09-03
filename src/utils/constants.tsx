import {
  Category, MonetizationOn, PlayArrow, FiberNew,
} from '@material-ui/icons';
import React from 'react';
import theme, { colors } from '../theme/theme';
import { AdvantagesArray, CommentArray, ObjectOfStrings } from './interfaces';

const ADVANTAGES_ITEMS: AdvantagesArray = [
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

const COMMENTS: CommentArray = [
  {
    id: 'id_1',
    author: 'John doe',
    signature: 'Works in Google as Frontend developer',
    avatar: 'https://api.adorable.io/avatars/120/random',
    content:
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Corporis culpa et eveniet exercitationem facere id, ipsam praesentium quae quasi quo?
            Blanditiis cumque cupiditate earum error iusto praesentium quasi rerum vero 1?
         `,
  },
  {
    id: 'id_2',
    author: 'John doe',
    signature: 'Works in Google as Frontend developer',
    avatar: 'https://api.adorable.io/avatars/120/random',
    content:
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Corporis culpa et eveniet exercitationem facere id, ipsam praesentium quae quasi quo?
            Blanditiis cumque cupiditate earum error iusto praesentium quasi rerum vero 2?
         `,
  },
  {
    id: 'id_3',
    author: 'John doe',
    signature: 'Works in Google as Frontend developer',
    avatar: 'https://api.adorable.io/avatars/120/random',
    content:
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Corporis culpa et eveniet exercitationem facere id, ipsam praesentium quae quasi quo?
            Blanditiis cumque cupiditate earum error iusto praesentium quasi rerum vero 3?
         `,
  },
  {
    id: 'id_4',
    author: 'John doe',
    signature: 'Works in Google as Frontend developer',
    avatar: 'https://api.adorable.io/avatars/120/random',
    content:
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Corporis culpa et eveniet exercitationem facere id, ipsam praesentium quae quasi quo?
            Blanditiis cumque cupiditate earum error iusto praesentium quasi rerum vero 4?
         `,
  },
  {
    id: 'id_5',
    author: 'John doe',
    signature: 'Works in Google as Frontend developer',
    avatar: 'https://api.adorable.io/avatars/120/random',
    content:
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Corporis culpa et eveniet exercitationem facere id, ipsam praesentium quae quasi quo?
            Blanditiis cumque cupiditate earum error iusto praesentium quasi rerum vero 5?
         `,
  },
];

const CATEGORY_COLORS: ObjectOfStrings = {
  EVENTS: colors.blue,
  CULTURE_AND_ART: colors.yellow,
  BUSINESS: colors.green,
  POLITICS: colors.gray900,
  HEALTH: colors.red,
  SPORT: colors.blue,
  GAMES: colors.green,
  MUSIC: colors.red,
  FOOD_AND_CRAFT: colors.yellow,
  DESIGN_AND_TECH: colors.ocean,
  FILM_AND_COMICS: colors.ocean,
};

const CATEGORY_LABELS: ObjectOfStrings = {
  EVENTS: 'Events',
  CULTURE_AND_ART: 'Culture and Art',
  BUSINESS: 'Business',
  POLITICS: 'Politics',
  HEALTH: 'Health',
  SPORT: 'Sport',
  GAMES: 'Games',
  MUSIC: 'Music',
  FOOD_AND_CRAFT: 'Food and Craft',
  DESIGN_AND_TECH: 'Design and tech',
  FILM_AND_COMICS: 'Film and Comics',
};

const ARTICLE_THUMBNAIL_MAX_LENGTH = 200;

export {
  ADVANTAGES_ITEMS,
  COMMENTS,
  CATEGORY_COLORS,
  CATEGORY_LABELS,
  ARTICLE_THUMBNAIL_MAX_LENGTH,
};
