import { css } from 'styled-components';
import { colors } from 'theme/theme'; // moze da sie jakoś dynamicznie propsy twozyc na podstawie tego obiektu??

export interface MarginableProps {
  p?: number;
  px?: number;
  py?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  m?: number;
  mx?: number;
  my?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
}

const offsetWidth = 0.25;

const marginable = {
  css: css<MarginableProps>`
    ${({ p, px, py, pt, pb, pl, pr, m, mx, my, mt, mb, ml, mr }) => css`
      ${p &&
      css`
        padding: ${p * offsetWidth}rem;
      `}
      ${px &&
      css`
        padding-left: ${px * offsetWidth}rem;
        padding-right: ${px * offsetWidth}rem;
      `}
			${py &&
      css`
        padding-top: ${py * offsetWidth}rem;
        padding-bottom: ${py * offsetWidth}rem;
      `}
			${pt &&
      css`
        padding-top: ${pt * offsetWidth}rem;
      `}
			${pb &&
      css`
        padding-bottom: ${pb * offsetWidth}rem;
      `}
			${pl &&
      css`
        padding-left: ${pl * offsetWidth}rem;
      `}
			${pr &&
      css`
        padding-right: ${pr * offsetWidth}rem;
      `}
			${m &&
      css`
        margin: ${m * offsetWidth}rem;
      `}
			${mx &&
      css`
        margin-left: ${mx * offsetWidth}rem;
        margin-right: ${mx * offsetWidth}rem;
      `}
			${my &&
      css`
        margin-top: ${my * offsetWidth}rem;
        margin-bottom: ${my * offsetWidth}rem;
      `}
			${mt &&
      css`
        margin-top: ${mt * offsetWidth}rem;
      `}
			${mb &&
      css`
        margin-bottom: ${mb * offsetWidth}rem;
      `}
			${ml &&
      css`
        margin-left: ${ml * offsetWidth}rem;
      `}
			${mr &&
      css`
        margin-right: ${mr * offsetWidth}rem;
      `}
    `}
  `,
};

export interface FontableProps {
  muted?: boolean;
  small?: boolean;
  bold?: boolean;
  color?:
    | 'light'
    | 'dark'
    | 'white'
    | 'black'
    | 'blue'
    | 'yellow'
    | 'red'
    | 'ocean'
    | 'gray900'
    | 'gray700'
    | 'gray500'
    | 'gray300'
    | 'gray100'
    | 'gray50';
  size?: string | number;
  line?: string | number;
}

const fontable = {
  css: css<FontableProps>`
    ${({ theme, muted, small, bold, color, size, line }) => css`
      ${muted &&
      css`
        opacity: 0.75;
      `}
      ${small &&
      css`
        font-size: 0.8rem;
      `}
      ${bold &&
      css`
        font-weight: ${bold === true ? 'bold' : bold};
      `}
      ${color &&
      css`
        color: ${theme.color[color]};
      `}
      ${size &&
      css`
        font-size: ${Number.isInteger(size) ? `${size}px` : size};
      `}
      ${line &&
      css`
        line-height: ${Number.isInteger(line) ? `${line}px` : line};
      `}
    `}
  `,
};

export { marginable, fontable };
