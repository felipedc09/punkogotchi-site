import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${(props) => props.theme.fonts.primary};
    font-size: large;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  @font-face {
    font-family: "EBGaramond";
    src: url("/static/fonts/aweMonoV1/AweMono.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
`;
