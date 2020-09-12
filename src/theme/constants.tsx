interface Button {
  fontSize: string,
  padding: string,
  borderRadius: string,
}

interface ButtonSizes {
  sm: Button;
  md: Button;
  lg: Button;
  xl: Button;
}

const buttonSizes: ButtonSizes = {
  sm: {
    fontSize: '0.75rem',
    padding: '0.15rem 0.35rem',
    borderRadius: '0.1rem',
  },
  md: {
    fontSize: '0.9rem',
    padding: '0.25rem 0.75rem',
    borderRadius: '0.15rem',
  },
  lg: {
    fontSize: '1rem',
    padding: '0.375rem 1rem',
    borderRadius: '0.25rem',
  },
  xl: {
    fontSize: '1.25rem',
    padding: '0.45rem 1.25rem',
    borderRadius: '0.35rem',
  },
};

interface BoxShadows{
  [key: string]: string[];
}

const boxShadows: BoxShadows = {
  'minimal': ['-1px 0 2px 0 rgba(0, 0, 0, 0.12)', '1px 0 2px 0 rgba(0, 0, 0, 0.12)', '0 1px 1px 0 rgba(0, 0, 0, 0.24)'],
  'medium': ['0 5px 15px -8px rgba(0,0,0,.5)'],
};

export { buttonSizes, boxShadows };
