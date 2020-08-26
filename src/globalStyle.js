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
  
  h1 {
    font-size: ${({ theme }) => theme.size.font.xxl};
    line-height: ${({ theme }) => theme.size.font.xxl};
  }
  
  h2 {
    font-size: ${({ theme }) => theme.size.font.xl};
    line-height: ${({ theme }) => theme.size.font.xl};
  }
  
  h3 {
    font-size: ${({ theme }) => theme.size.font.lg};
    line-height: ${({ theme }) => theme.size.font.lg};
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
  
  ul, ol {
    list-style: none;
  }
`;

export default GlobalStyle;
