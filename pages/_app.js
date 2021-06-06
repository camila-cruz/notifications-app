import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/core';
import { GlobalStyle } from '../src/theme/GlobalStyle';
import { theme } from '../src/theme';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.object.isRequired,
};
