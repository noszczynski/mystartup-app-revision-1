import { ObjectOfStrings, ObjectOfAny, ThemeSizes } from '../interfaces';

const colors: ObjectOfStrings = {
  light: '#FFFFFF',
  dark: '#464A5F',
  primary: '#6C63FF',
  secondary: '#FFD037',
  primary10: 'rgba(108, 99, 255, .1)',
  primary30: 'rgba(108, 99, 255, .3)',
  lightGray: '#9C9CA1',
};

const sizes: ThemeSizes = {
  space: {
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

const theme: ObjectOfAny = {
  color: colors,
  size: sizes,
};

export default theme;
