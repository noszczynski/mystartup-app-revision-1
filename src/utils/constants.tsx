import {
  CommentArray,
  ObjectOfStrings,
  ArticlesArray,
  NavItemsArray,
  FooterNavigationArray,
} from './interfaces';

const ARTICLES_ITEMS: ArticlesArray = [
  {
    article: {
      image: 'https://picsum.photos/800',
      imageAlt: 'random image from picsum photos',
      category: 'EVENTS',
      time: 'A year ago',
      title: 'New app to acquire street sellers into a team',
      id: 'id_1',
    },
    signature: {
      title: 'Edward Pawłowski',
      content: 'Lorem ipsum dolor sit amet',
      image: 'https://picsum.photos/64',
    },
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos doloremque eaque nam soluta tenetur! Accusamus aperiam dicta dolore enim excepturi, hic ipsam, laboriosam, magnam neque quae quam quisquam tempore voluptate.',
  },
  {
    article: {
      image: 'https://picsum.photos/800',
      imageAlt: 'random image from picsum photos',
      category: 'EVENTS',
      time: 'A year ago',
      title: 'New app to acquire street sellers into a team',
      id: 'id_2',
    },
    signature: {
      title: 'Edward Pawłowski',
      content: 'Lorem ipsum dolor sit amet',
      image: 'https://picsum.photos/64',
    },
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos doloremque eaque nam soluta tenetur! Accusamus aperiam dicta dolore enim excepturi, hic ipsam, laboriosam, magnam neque quae quam quisquam tempore voluptate.',
  },
  {
    article: {
      image: 'https://picsum.photos/800',
      imageAlt: 'random image from picsum photos',
      category: 'EVENTS',
      time: 'A year ago',
      title: 'New app to acquire street sellers into a team',
      id: 'id_3',
    },
    signature: {
      title: 'Edward Pawłowski',
      content: 'Lorem ipsum dolor sit amet',
      image: 'https://picsum.photos/64',
    },
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos doloremque eaque nam soluta tenetur! Accusamus aperiam dicta dolore enim excepturi, hic ipsam, laboriosam, magnam neque quae quam quisquam tempore voluptate.',
  },
  {
    article: {
      image: 'https://picsum.photos/800',
      imageAlt: 'random image from picsum photos',
      category: 'EVENTS',
      time: 'A year ago',
      title: 'New app to acquire street sellers into a team',
      id: 'id_4',
    },
    signature: {
      title: 'Edward Pawłowski',
      content: 'Lorem ipsum dolor sit amet',
      image: 'https://picsum.photos/64',
    },
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos doloremque eaque nam soluta tenetur! Accusamus aperiam dicta dolore enim excepturi, hic ipsam, laboriosam, magnam neque quae quam quisquam tempore voluptate.',
  },
  {
    article: {
      image: 'https://picsum.photos/800',
      imageAlt: 'random image from picsum photos',
      category: 'EVENTS',
      time: 'A year ago',
      title: 'New app to acquire street sellers into a team',
      id: 'id_5',
    },
    signature: {
      title: 'Edward Pawłowski',
      content: 'Lorem ipsum dolor sit amet',
      image: 'https://picsum.photos/64',
    },
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos doloremque eaque nam soluta tenetur! Accusamus aperiam dicta dolore enim excepturi, hic ipsam, laboriosam, magnam neque quae quam quisquam tempore voluptate.',
  },
];

const COMMENTS: CommentArray = [
  {
    id: 'id_1',
    author: 'John doe',
    signature: 'Works in Google as Frontend developer',
    avatar: 'https://api.adorable.io/avatars/120/random',
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Corporis culpa et eveniet exercitationem facere id, ipsam praesentium quae quasi quo?
            Blanditiis cumque cupiditate earum error iusto praesentium quasi rerum vero 1?
         `,
  },
  {
    id: 'id_2',
    author: 'John doe',
    signature: 'Works in Google as Frontend developer',
    avatar: 'https://api.adorable.io/avatars/120/random',
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Corporis culpa et eveniet exercitationem facere id, ipsam praesentium quae quasi quo?
            Blanditiis cumque cupiditate earum error iusto praesentium quasi rerum vero 2?
         `,
  },
  {
    id: 'id_3',
    author: 'John doe',
    signature: 'Works in Google as Frontend developer',
    avatar: 'https://api.adorable.io/avatars/120/random',
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Corporis culpa et eveniet exercitationem facere id, ipsam praesentium quae quasi quo?
            Blanditiis cumque cupiditate earum error iusto praesentium quasi rerum vero 3?
         `,
  },
  {
    id: 'id_4',
    author: 'John doe',
    signature: 'Works in Google as Frontend developer',
    avatar: 'https://api.adorable.io/avatars/120/random',
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Corporis culpa et eveniet exercitationem facere id, ipsam praesentium quae quasi quo?
            Blanditiis cumque cupiditate earum error iusto praesentium quasi rerum vero 4?
         `,
  },
  {
    id: 'id_5',
    author: 'John doe',
    signature: 'Works in Google as Frontend developer',
    avatar: 'https://api.adorable.io/avatars/120/random',
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Corporis culpa et eveniet exercitationem facere id, ipsam praesentium quae quasi quo?
            Blanditiis cumque cupiditate earum error iusto praesentium quasi rerum vero 5?
         `,
  },
  {
    id: 'id_6',
    author: 'John doe',
    signature: 'Works in Google as Frontend developer',
    avatar: 'https://api.adorable.io/avatars/120/random',
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Corporis culpa et eveniet exercitationem facere id, ipsam praesentium quae quasi quo?
            Blanditiis cumque cupiditate earum error iusto praesentium quasi rerum vero 6?
         `,
  },
  {
    id: 'id_7',
    author: 'John doe',
    signature: 'Works in Google as Frontend developer',
    avatar: 'https://api.adorable.io/avatars/120/random',
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Corporis culpa et eveniet exercitationem facere id, ipsam praesentium quae quasi quo?
            Blanditiis cumque cupiditate earum error iusto praesentium quasi rerum vero 7?
         `,
  },
];

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

const NAV_ITEMS: NavItemsArray = [
  {
    label: 'Home',
    to: '/',
    alt: 'nav link',
    exact: true,
  },
  {
    label: 'News',
    to: '/news',
    alt: 'nav link',
    exact: false,
  },
  {
    label: 'Category',
    to: '/category',
    alt: 'nav link',
    exact: false,
  },
  {
    label: 'About',
    to: '/about',
    alt: 'nav link',
    exact: false,
  },
];

const BOTTOM_NAV_ITEMS: FooterNavigationArray = [
  [{
    title: 'USER',
    items: [
      {label: 'Help', to: '/'},
      {label: 'Categories', to: '/'},
      {label: 'New', to: '/'},
    ]
  }, {
    title: 'PROJECTS',
    items: [
      {label: 'Help', to: '/'},
      {label: 'Categories', to: '/'},
      {label: 'New', to: '/'},
      {label: 'Contracts', to: '/'},
      {label: 'Comments', to: '/'},
      {label: 'Lorem', to: '/'},
      {label: 'Ipsum', to: '/'},
      {label: 'Dolor sit', to: '/'},
    ]
  }], [{
    title: 'SUPPORT',
    items: [
      {label: 'Help', to: '/'},
      {label: 'Categories', to: '/'},
      {label: 'New', to: '/'},
      {label: 'Lorem', to: '/'},
      {label: 'Ipsum', to: '/'},
      {label: 'Dolor sit', to: '/'},
    ]
  }, {
    title: 'NEWS',
    items: [
      {label: 'Help', to: '/'},
      {label: 'Categories', to: '/'},
      {label: 'New', to: '/'},
      {label: 'Contracts', to: '/'},
    ]
  }], [{
    title: 'NAVIGATION',
    items: [
      {label: 'Help', to: '/'},
      {label: 'Categories', to: '/'},
      {label: 'New', to: '/'},
      {label: 'News', to: '/'},
    ]
  }, {
    title: 'OTHERS',
    items: [
      {label: 'Help', to: '/'},
      {label: 'Categories', to: '/'},
      {label: 'New', to: '/'},
      {label: 'News', to: '/'},
    ]
  }]
];

const THEME: ObjectOfStrings ={
  LIGHT: 'LIGHT',
  DARK: 'DARK',
  CONTRAST: 'CONTRAST',
};

export {
  ARTICLES_ITEMS,
  COMMENTS,
  CATEGORY_LABELS,
  NAV_ITEMS,
  BOTTOM_NAV_ITEMS,
  THEME,
};
