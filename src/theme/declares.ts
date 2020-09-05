/* eslint-disable import/prefer-default-export */

interface Button {
  fontSize: number,
  padding: number[],
  borderRadius: number,
}

interface ButtonSizes {
  xsmall: Button;
  small: Button;
  medium: Button;
  large: Button;
}

const buttonSizes: ButtonSizes = {
  xsmall: {
    fontSize: 0.75,
    padding: [0.15, 0.35],
    borderRadius: 0.1,
  },
  small: {
    fontSize: 0.9,
    padding: [0.25, 0.75],
    borderRadius: 0.15,
  },
  medium: {
    fontSize: 1,
    padding: [0.375, 1],
    borderRadius: 0.25,
  },
  large: {
    fontSize: 1.25,
    padding: [0.45, 1.25],
    borderRadius: 0.35,
  },
};

interface BoxShadows{
  [key: string]: string[];
}

const boxShadows: BoxShadows = {
  'minimal': ['-1px 0 2px 0 rgba(0, 0, 0, 0.12)', '1px 0 2px 0 rgba(0, 0, 0, 0.12)', '0 1px 1px 0 rgba(0, 0, 0, 0.24)'],
};

export { buttonSizes, boxShadows };