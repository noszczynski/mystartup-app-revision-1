 import { ObjectOfStrings } from '../utils/interfaces';

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

 const gradients: ObjectOfStrings = {
   orange: 'linear-gradient(to right, #F2Af8C, #E6753A)',
   green: 'linear-gradient(to right, #57CBAF, #2FA84F)',
   rose: 'linear-gradient(to right, #F4977B, #F9567E)',
   blue: 'linear-gradient(to right, #9BAAFA, #367BF5)',
   violet: 'linear-gradient(to right, #4F586A, #367BF5)',
 };

 const lightThemeColors: ObjectOfStrings = {
   ...colors,
   primary: colors.blue,
   secondary: colors.blue,
   h1: gradients.violet,
   h2: gradients.violet,
   p: colors.gray900,
   headers: gradients.dark,
   primaryBackground: colors.white,
   secondaryBackground: colors.gray50,
 }

 const darkThemeColors: ObjectOfStrings = {
   ...colors,
   primary: colors.white,
   secondary: colors.yellow,
   h1: gradients.orange,
   h2: colors.white,
   p: colors.white,
   headers: colors.white,
   primaryBackground: colors.gray900,
   secondaryBackground: colors.gray1000,
 }

 const contrastThemeColors: ObjectOfStrings = {
   ...colors,
   primary: colors.white,
   secondary: colors.light,
   h1: colors.yellow,
   h2: colors.yellow,
   p: colors.yellow,
   headers: colors.yellow,
   primaryBackground: colors.black,
   secondaryBackground: colors.gray1000,
 }


export {
 colors,
  gradients,
  socialColors,
  lightThemeColors,
  darkThemeColors,
  contrastThemeColors,
 };
