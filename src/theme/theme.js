const colors = {
    light: '#ffffff',
    dark: '',
    primary: '',
    secondary: '',
    lightGray: '',
    gray: '',
    darkGray: '',
}

const sizes = {
    space: {
        sm: '.5rem', // 8px
        md: '1rem', // 16px
        lg: '2rem', // 32px
        xl: '4rem', // 64px
    },
    font: {
        xxs: '9px',
        xs: '12px',
        s: '14px',
        md: '18px',
        lg: '24px',
        xl: '36px',
        xxl: '64px',
    }
}

const breakpoints = [350, 640, 768, 1024, 1280, 1440, 1600, 1920, 2560]

const mediaQueries = breakpoints.reduce((acc, curr) => {
    acc[curr] = `@media screen and (min-width: ${curr}px)`;
    return acc;
}, {});

const theme = {
    color: colors,
    size: sizes,
    mq: mediaQueries,
}

export default theme;
