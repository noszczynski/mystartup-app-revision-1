import { THEME } from 'utils/constants';
import { boxShadows, buttonSizes } from './constants';
import { ObjectOfStrings, ObjectOfAny, ThemeSizes, ObjectOfNumbers } from '../utils/interfaces';
import { darkThemeColors, lightThemeColors, contrastThemeColors, gradients } from './colors';

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

const sizes: ThemeSizes = {
  space: {
    xxs: '.125rem', // 2px
    xs: '.25rem', // 4px
    sm: '.5rem', // 8px
    md: '1rem', // 16px
    lg: '2rem', // 32px
    xl: '4rem', // 64px
    xxl: '8rem', // 128px
    xxxl: '16rem', // 256px
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

const defaultTheme: ObjectOfAny = {
  utils,
  buttonSizes,
  size: sizes,
  breakpoint: breakpoints,
  mq,
}

const lightTheme: ObjectOfAny = {
  ...defaultTheme,
  color: lightThemeColors,
  gradient: gradients,
  activeTheme: THEME.LIGHT
};

const darkTheme: ObjectOfAny = {
  ...defaultTheme,
  color: darkThemeColors,
  gradient: gradients,
  activeTheme: THEME.DARK
};

const contrastTheme: ObjectOfAny = {
  ...defaultTheme,
  color: contrastThemeColors,
  gradient: gradients,
  activeTheme: THEME.CONTRAST
};

export {
  gradients,
  sizes,
  mq,
  breakpoints,
  lightTheme,
  darkTheme,
  contrastTheme,
};
