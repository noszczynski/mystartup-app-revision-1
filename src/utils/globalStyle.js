import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${({ theme: { size, color, mq } }) => css`
    *,
    *::after,
    *::before {
      box-sizing: border-box;
    }

    *::-webkit-scrollbar-track {
      background-color: ${color.white};
    }

    *::-webkit-scrollbar {
      width: 10px;
      background-color: ${color.dark};
    }

    *::-webkit-scrollbar-thumb {
      background-color: ${color.dark};
    }

    body {
      padding: 0;
      margin: 0;
      font-family: Poppins, Arial, sans-serif;
      background-color: ${color.bodyBg};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: ${size.weight.medium};
      font-family: Poppins, Arial, sans-serif;
    }

    h1,
    h2 {
      font-weight: ${size.weight.bold};
    }

    h1 {
      font-size: 40px;
      line-height: 48px;
      background: ${color.h1};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      
      ${mq.tablet} {
        font-size: ${size.font.xxl};
        line-height: 80px;
      }
    }

    h2 {
      font-size: ${size.font.lg};
      line-height: 32px;
      background: ${color.h2};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      
      ${mq.tablet} {
        font-size: ${size.font.xl};
        line-height: 50px;
      }
    }

    h3 {
      font-size: ${size.font.md};
      line-height: 24px;

      ${mq.tablet} {
        font-size: ${size.font.lg};
        line-height: 32px;
      }
    }

    h4 {
      font-size: ${size.font.md};
      line-height: ${size.font.md};
    }

    h5 {
      font-size: ${size.font.s};
      line-height: ${size.font.s};
    }

    h6 {
      font-size: ${size.font.sm};
      line-height: ${size.font.sm};
    }
    
    h3, h4, h5, h6 {
      color: ${color.headers};
    }
    
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ul,
    ol {
      padding: 0;
      margin: 0;
    }

    /* Reset style */

    ul,
    ol {
      list-style: none;
    }

    img {
      display: block;
      max-height: 100%;
      max-width: 100%;
    }

    figure {
      margin: 0;
      margin-block-start: initial;
      margin-block-end: initial;
      margin-inline-start: initial;
      margin-inline-end: initial;
    }

    button {
      font-size: ${size.font.xs};
      cursor: pointer;
      border: none;
      margin: 0;
      padding: 0;
      width: auto;
      overflow: visible;
      text-align: inherit;
      line-height: inherit;
      -webkit-appearance: none;
      background-color: transparent;
      
      ${mq.tablet} {
        font-size: ${size.font.md};
      }
    }

    a {
      text-decoration: none;
      color: ${color.dark};

      :hover {
        text-decoration: none;
      }
    }

    p {
      font-size: ${size.font.xs};
      color: ${color.p};
      display: inline-block;

      ${mq.tablet} {
        font-size: ${size.font.md};
      }
    }
  `}`;

export default GlobalStyle;
