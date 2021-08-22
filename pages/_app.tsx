import { ReactElement } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/Theme';
import { GlobalStyle } from '../styles/globals.styles';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
