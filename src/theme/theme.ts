import { boxShadows, buttonSizes } from './constants';
import { ObjectOfStrings, ObjectOfAny, ThemeSizes, ObjectOfNumbers } from '../utils/interfaces';

const breakpoints: ObjectOfNumbers = {
  mobileS: 375,
  mobileM: 425,
  mobileL: 576,
  tabletS: 768,
  tablet: 1024,
  laptopS: 1280,
  laptopM: 1440,
  laptopL: 1600,
  desktopS: 1920,
  desktopM: 2560,
  desktopL: 3840,
};

const mq: ObjectOfStrings = {
  mobileS: `@media screen and (min-width: ${breakpoints.mobileS}px)`,
  mobileM: `@media screen and (min-width: ${breakpoints.mobileM}px)`,
  mobileL: `@media screen and (min-width: ${breakpoints.mobileL}px)`,
  tabletS: `@media screen and (min-width: ${breakpoints.tabletS}px)`,
  tablet: `@media screen and (min-width: ${breakpoints.tablet}px)`,
  laptopS: `@media screen and (min-width: ${breakpoints.laptopS}px)`,
  laptopM: `@media screen and (min-width: ${breakpoints.laptopM}px)`,
  laptopL: `@media screen and (min-width: ${breakpoints.laptopL}px)`,
  desktopS: `@media screen and (min-width: ${breakpoints.desktopS}px)`,
  desktopM: `@media screen and (min-width: ${breakpoints.desktopM}px)`,
  desktopL: `@media screen and (min-width: ${breakpoints.desktopL}px)`,
};

const colors: ObjectOfStrings = {
  light: '#FCF3D7',
  dark: '#212121',
  white: '#FFFFFF',
  black: '#000000',
  blue: '#367BF5',
  yellow: '#F3AA18',
  green: '#2FA84F',
  red: '#FA5D50',
  ocean: '#069697',
  gray900: '#3E4345',
  gray700: '#5E6366',
  gray500: '#919699',
  gray300: '#C6CACC',
  gray100: '#E3E5E6',
  gray50: '#F8F8F8',
};

const gradients: ObjectOfStrings = {
  orange: 'linear-gradient(to right, #F2Af8C, #E6753A)',
  green: 'linear-gradient(to right, #57CBAF, #2FA84F)',
  rose: 'linear-gradient(to right, #F4977B, #F9567E)',
  blue: 'linear-gradient(to right, #9BAAFA, #367BF5)',
  violet: 'linear-gradient(to right, #4F586A, #367BF5)',
};

const sizes: ThemeSizes = {
  space: {
    xxs: '.125rem', // 2px
    xs: '.25rem', // 4px
    sm: '.5rem', // 8px
    md: '1rem', // 16px
    lg: '2rem', // 32px
    xl: '4rem', // 64px
    xxl: '8rem', // 128px
  },
  font: {
    xxs: '9px',
    xs: '12px',
    s: '14px',
    md: '18px',
    lg: '24px',
    xl: '36px',
    xxl: '64px',
  },
  weight: {
    light: '300',
    regular: '400',
    medium: '500',
    bold: '700',
  },
};

const createBoxShadow = (levels: string[]): string => {
  const shadows: string[][] = levels.map((name: string) =>
    !boxShadows[name] ? [name] : boxShadows[name],
  );
  return ([] as string[]).concat(...shadows).join(', ');
};

const utils: ObjectOfAny = {
  createBoxShadow,
};

const theme: ObjectOfAny = {
  utils,
  buttonSizes,
  color: colors,
  size: sizes,
  gradient: gradients,
  breakpoint: breakpoints,
  mq,
};

export { colors, gradients, sizes, mq, breakpoints };

export default theme;
