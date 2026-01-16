import { createGlobalStyle } from 'styled-components';
import { colors, fonts } from './theme';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${fonts.body};
    background-color: ${colors.cream};
    color: ${colors.darkBrown};
    line-height: 1.6;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${fonts.heading};
    font-weight: 700;
    line-height: 1.2;
    color: ${colors.darkBrown};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    font-family: ${fonts.body};
    border: none;
    outline: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ::selection {
    background-color: ${colors.gold};
    color: ${colors.darkBrown};
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${colors.cream};
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.coral};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.red};
  }
`;

export default GlobalStyles;
