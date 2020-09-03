import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap');

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: Poppins, serif;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: ${({ theme }) => theme.size.weight.medium};
    font-family: Poppins, serif;
  }
  
  h1, h2 {
    font-weight: ${({ theme }) => theme.size.weight.bold};
    background: ${({ theme }) => theme.gradient.violet};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  h1 {
    font-size: ${({ theme }) => theme.size.font.xxl};
    line-height: 80px;
  }
  
  h2 {
    font-size: ${({ theme }) => theme.size.font.xl};
    line-height: 50px;
  }
  
  h3 {
    font-size: ${({ theme }) => theme.size.font.lg};
    line-height: 32px;
  }
  
  h4 {
    font-size: ${({ theme }) => theme.size.font.md};
    line-height: ${({ theme }) => theme.size.font.md};
  }
  
  h5 {
    font-size: ${({ theme }) => theme.size.font.s};
    line-height: ${({ theme }) => theme.size.font.s};
  }
  
  h6 {
    font-size: ${({ theme }) => theme.size.font.sm};
    line-height: ${({ theme }) => theme.size.font.sm};
  }
  
  h1, h2, h3, h4, h5, h6, p, ul, ol {
    padding: 0;
    margin: 0;
  }
  
  /* Reset style */
  
  ul, ol {
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
  
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.dark};
    
    :hover {
      text-decoration: none;
    }
  }
  
  button {
    border: 0;
    background-color: ${({ theme }) => theme.color.light};
    color: ${({ theme }) => theme.color.dark};
    
    :focus {
      outline: 1px solid ${({ theme }) => theme.color.dark};
    }
  }
  
`;

export default GlobalStyle;
