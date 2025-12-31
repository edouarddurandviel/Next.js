declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      grey: string;
      black: string;
    };
    widths: {
      lg: string;
      sm: string;
    };
  }
}

export const AppTheme = {
  colors: {
    grey: '#d3d1d1',
    black: '#000000',
  },
  widths: {
    lg: '1000px',
    sm: '850px',
  },
};
