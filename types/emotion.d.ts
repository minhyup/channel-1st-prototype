import '@emotion/react';

type primaryTheme = {
  textColor: string;
  bgColor: string;
  hanwha_primary: string;
  positive: string;
  negative: string;
};

declare module '@emotion/react' {
  export interface Theme {
    light: primaryTheme;
    dark: primaryTheme;
  }
}
