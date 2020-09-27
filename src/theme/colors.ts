import { hexToRgba } from 'utils/utils';
import { ObjectOfAny, ObjectOfStrings } from '../utils/interfaces';
import { THEME } from '../utils/constants';

const socialColors: ObjectOfStrings = {
  facebook: '#1877f2',
  twitter: '#1da1f2',
  instagram: '#4c5fd7',
  google: '#4285f4',
  googleBlue: '#4285f4',
  googleRed: '#ea4335',
  googleGreen: '#34a853',
  googleYellow: '#fbbc05',
  github: '#333333',
  youtube: '#ff0000',
  linkedin: '#007bb5',
  spotify: '#1ed760'
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
  gray1000: '#242728',
  gray900: '#3E4345',
  gray700: '#5E6366',
  gray500: '#919699',
  gray300: '#C6CACC',
  gray100: '#E3E5E6',
  gray50: '#F8F8F8',
  facebook: socialColors.facebook,
  twitter: socialColors.twitter,
  instagram: socialColors.instagram,
  google: socialColors.google,
  googleBlue: socialColors.googleBlue,
  googleRed: socialColors.googleRed,
  googleGreen: socialColors.googleGreen,
  googleYellow: socialColors.googleYellow,
  github: socialColors.github,
  youtube: socialColors.youtube,
  linkedin: socialColors.linkedin,
  spotify: socialColors.spotify,
};

const categoryColors: ObjectOfStrings = {
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

 const gradients: ObjectOfStrings = {
   orange: 'linear-gradient(to right, #F2Af8C, #E6753A)',
   green: 'linear-gradient(to right, #57CBAF, #2FA84F)',
   rose: 'linear-gradient(to right, #F4977B, #F9567E)',
   blue: 'linear-gradient(to right, #9BAAFA, #367BF5)',
   violet: 'linear-gradient(to right, #4F586A, #367BF5)',
 };

 const elements: ObjectOfAny = {
   h1: {
     light: gradients.violet,
     dark: gradients.orange,
     contrast: colors.yellow
   },
   h2: {
     light: gradients.violet,
     dark: colors.white,
     contrast: colors.white
   },
   headers: {
     light: colors.dark,
     dark: colors.white,
     contrast: colors.yellow
   },
   bodyBg: {
     light: colors.white,
     dark: colors.gray1000,
     contrast: colors.dark
   },
   p: {
     light: colors.gray900,
     dark: colors.white,
     contrast: colors.yellow
   },
   icon: {
     light: colors.blue,
     dark: colors.yellow,
     contrast: colors.yellow
   },
   iconBg: {
     light: hexToRgba(colors.blue, 0.2),
     dark: hexToRgba(colors.yellow, 0.2),
     contrast: hexToRgba(colors.yellow, 0.2)
   },
   elementBg: {
     light: colors.white,
     dark: colors.gray900,
     contrast: colors.gray900
   },
   highlightedElementBg: {
     light: colors.gray50,
     dark: colors.gray900,
     contrast: colors.dark
   },
   bottomMenu: {
     light: colors.gray50,
     dark: colors.gray900,
     contrast: colors.dark
   },
   bottomMenuHighlighted: {
     light: hexToRgba(colors.yellow, 0.2),
     dark: hexToRgba(colors.ocean, 0.2),
     contrast: colors.dark
   },
   button: {
     light: colors.blue,
     dark: gradients.orange,
     contrast: colors.yellow
   },
   buttonText: {
     light: colors.white,
     dark: colors.gray1000,
     contrast: colors.dark
   },
   hamburger: {
     light: colors.dark,
     dark: colors.white,
     contrast: colors.dark
   }
 }

 export const generateElements = (theme: string ): any => {
   // returns object {h1: '#ffffff', h2: '#323232', button: '#222', ...}

   const keys = Object.keys(elements)

   return keys.reduce((acc, key) => {
     const element = elements[key]
     const o: string = element[theme.toLowerCase()]

     Object.assign(acc, { [key]: o })
     return acc
   }, {})
 }

 const lightThemeColors: ObjectOfStrings = {
   ...colors,
   ...generateElements(THEME.LIGHT),
 }

 const darkThemeColors: ObjectOfStrings = {
   ...colors,
   ...generateElements(THEME.DARK),
 }

 const contrastThemeColors: ObjectOfStrings = {
   ...colors,
   ...generateElements(THEME.CONTRAST),
 }


export {
 colors,
  gradients,
  socialColors,
  lightThemeColors,
  darkThemeColors,
  contrastThemeColors,
  categoryColors,
 };
