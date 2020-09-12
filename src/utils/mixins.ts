import { css, CSSProp } from 'styled-components';
// import { colors } from 'theme/theme'; // moze da sie jakoś dynamicznie propsy twozyc na podstawie tego obiektu??

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

const generateCss = (style: string): CSSProp =>
  css`
    ${style}
  `;

const marginable = {
  css: css<MarginableProps>`
    ${({ p, px, py, pt, pb, pl, pr, m, mx, my, mt, mb, ml, mr }) => css`
      ${p && generateCss(`padding: ${p * offsetWidth}rem;`)}

      ${px &&
      generateCss(`padding-left: ${px * offsetWidth}rem;
      padding-right: ${px * offsetWidth}rem;`)}

			${py &&
      generateCss(`padding-top: ${py * offsetWidth}rem;
      padding-bottom: ${py * offsetWidth}rem;`)}

			${pt &&
      generateCss(`padding-top: ${pt * offsetWidth}rem;`)}

			${pb &&
      generateCss(`padding-bottom: ${pb * offsetWidth}rem;`)}

			${pl &&
      generateCss(`padding-left: ${pl * offsetWidth}rem;`)}

			${pr &&
      generateCss(`padding-right: ${pr * offsetWidth}rem;`)}

			${m &&
      generateCss(`margin: ${m * offsetWidth}rem;`)}

			${mx &&
      generateCss(`margin-left: ${mx * offsetWidth}rem;
      margin-right: ${mx * offsetWidth}rem;`)}

			${my &&
      generateCss(`margin-top: ${my * offsetWidth}rem;
      margin-bottom: ${my * offsetWidth}rem;`)}

			${mt &&
      generateCss(`margin-top: ${mt * offsetWidth}rem;`)}

			${mb &&
      generateCss(`margin-bottom: ${mb * offsetWidth}rem;`)}

			${ml &&
      generateCss(`margin-left: ${ml * offsetWidth}rem;`)}

			${mr &&
      generateCss(`margin-right: ${mr * offsetWidth}rem;`)}
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
      ${muted && generateCss(`opacity: 0.75;`)}

      ${small && generateCss(`font-size: 0.8rem;`)}

      ${bold &&
      generateCss(`font-weight: ${bold === true ? 'bold' : bold};`)}

      ${color &&
      generateCss(`color: ${theme.color[color]};`)}

      ${size &&
      generateCss(`font-size: ${Number.isInteger(size) ? `${size}px` : size};`)}

      ${line &&
      generateCss(`line-height: ${Number.isInteger(line) ? `${line}px` : line};`)}
    `}
  `,
};

export { marginable, fontable, generateCss };
