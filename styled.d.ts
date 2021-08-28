import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts:{
      primary: string;
      secondary: string;
    },
    colors: {
      background: string;
      foreGroundBackground: string;
      primary: string;
      font: string;
    };
  }
}
