import { createMuiTheme } from '@material-ui/core';

// export const theme = {
//   colors: {
//     primary: '#0070f3',
//   },
// };

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#273476',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#1ebebe',
      contrastText: '#FFFFFF',
    },
    tertiary: {
      main: '#FFFFFF',
      contrastText: '#6f6f6f',
    },
    info: {
      main: '#e54797',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#c1d13d',
      contrastText: '#6f6f6f',
    },
    error: {
      main: '#cd1719',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#edd921',
      contrastText: '#6f6f6f',
    },
    grey: {
      main: '#c5c4c4',
    },
    background: {
      main: '#FFFFFF',
      contrastText: '#6f6f6f',
    },
  },
});
