import { css } from 'styled-components';

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
    ${({ p }) =>
      p &&
      css`
        padding: ${p * offsetWidth}rem;
      `}
    ${({ px }) =>
      px &&
      css`
        padding-left: ${px * offsetWidth}rem;
        padding-right: ${px * offsetWidth}rem;
      `}
		${({ py }) =>
      py &&
      css`
        padding-top: ${py * offsetWidth}rem;
        padding-bottom: ${py * offsetWidth}rem;
      `}
		${({ pt }) =>
      pt &&
      css`
        padding-top: ${pt * offsetWidth}rem;
      `}
		${({ pb }) =>
      pb &&
      css`
        padding-bottom: ${pb * offsetWidth}rem;
      `}
		${({ pl }) =>
      pl &&
      css`
        padding-left: ${pl * offsetWidth}rem;
      `}
		${({ pr }) =>
      pr &&
      css`
        padding-right: ${pr * offsetWidth}rem;
      `}
		${({ m }) =>
      m &&
      css`
        margin: ${m * offsetWidth}rem;
      `}
		${({ mx }) =>
      mx &&
      css`
        margin-left: ${mx * offsetWidth}rem;
        margin-right: ${mx * offsetWidth}rem;
      `}
		${({ my }) =>
      my &&
      css`
        margin-top: ${my * offsetWidth}rem;
        margin-bottom: ${my * offsetWidth}rem;
      `}
		${({ mt }) =>
      mt &&
      css`
        margin-top: ${mt * offsetWidth}rem;
      `}
		${({ mb }) =>
      mb &&
      css`
        margin-bottom: ${mb * offsetWidth}rem;
      `}
		${({ ml }) =>
      ml &&
      css`
        margin-left: ${ml * offsetWidth}rem;
      `}
		${({ mr }) =>
      mr &&
      css`
        margin-right: ${mr * offsetWidth}rem;
      `}
  `,
};

export { marginable };
