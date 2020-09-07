interface ObjectOfStrings {
  [key: string]: string;
}

interface ObjectOfNumbers {
  [key: string]: number;
}

interface ObjectOfAny {
  [key: string]: any;
}

type ArrayOfJSX = Array<JSX.Element>;
type ArrayOfAny = Array<any>;

type CommentArray = {
  id: string;
  author: string;
  signature: string;
  avatar: string;
  content: string;
}[];

type AdvantagesArray = {
  title: string;
  description: string;
  icon: JSX.Element;
  background: string;
}[];

type NavItemsArray = {
  label: string;
  to: string;
}[];

type SideNavItemsArray = {
  label: string;
  to: string;
  icon: JSX.Element;
}[];

type ArticlesArray = {
  article: {
    image: string;
    imageAlt: string;
    category: string;
    time: string;
    title: string;
    id: string;
  };
  signature: {
    title: string;
    content: string;
    image: string;
  };
  content: string;
}[];

interface ThemeSizes {
  space: { [key: string]: string };
  font: { [key: string]: string };
  weight: { [key: string]: string };
}

export type {
  ThemeSizes,
  ObjectOfStrings,
  ObjectOfNumbers,
  ObjectOfAny,
  ArrayOfJSX,
  ArrayOfAny,
  CommentArray,
  AdvantagesArray,
  NavItemsArray,
  SideNavItemsArray,
  ArticlesArray,
};
