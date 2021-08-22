import { ReactElement } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/Theme';
import { Body } from '../styles/app.styles';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <Body>
        <Component {...pageProps} />
      </Body>
    </ThemeProvider>
  );
}
export default MyApp;
