interface ObjectOfStrings {
  [key: string]: string
}

interface ObjectOfNumbers {
  [key: string]: number
}

interface ObjectOfAny {
  [key: string]: any
}

type ArrayOfJSX = Array<JSX.Element>;

interface ThemeSizes {
  space: {[key: string]: string}
  font: {[key: string]: string}
  weight: {[key: string]: string}
}

export type {
  ThemeSizes,
  ObjectOfStrings,
  ObjectOfNumbers,
  ObjectOfAny,
  ArrayOfJSX,
};
