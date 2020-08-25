const colors = {
  light: '#FFFFFF',
  dark: '#464A5F',
  primary: '#6C63FF',
  secondary: '#FFD037',
  primary10: 'rgba(108, 99, 255, .1)',
  primary30: 'rgba(108, 99, 255, .3)',
  lightGray: '#9C9CA1',
};

const sizes = {
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

const breakpoints = [350, 640, 768, 1024, 1280, 1440, 1600, 1920, 2560];

const mediaQueries = breakpoints.reduce((acc, curr) => {
  acc[curr] = `@media screen and (min-width: ${curr}px)`;
  return acc;
}, {});

const theme = {
  color: colors,
  size: sizes,
  mq: mediaQueries,
};

export default theme;
