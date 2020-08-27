import { ObjectOfNumbers, ObjectOfStrings } from '../interfaces';

const breakpoints: ObjectOfNumbers = {
  mobileS: 375,
  mobileM: 425,
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
  tabletS: `@media screen and (min-width: ${breakpoints.tabletS}px)`,
  tablet: `@media screen and (min-width: ${breakpoints.tablet}px)`,
  laptopS: `@media screen and (min-width: ${breakpoints.laptopS}px)`,
  laptopM: `@media screen and (min-width: ${breakpoints.laptopM}px)`,
  laptopL: `@media screen and (min-width: ${breakpoints.laptopL}px)`,
  desktopS: `@media screen and (min-width: ${breakpoints.desktopS}px)`,
  desktopM: `@media screen and (min-width: ${breakpoints.desktopM}px)`,
  desktopL: `@media screen and (min-width: ${breakpoints.desktopL}px)`,
};

export default mq;
