import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../../mui material-ui 07a4824f261561e878ac03e1c96c33e2774eba7d docs-src_pages_premium-themes_onepirate/modules/theme';

export default function withRoot(Component) {
  function WithRoot(props) {
    return (
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...props} />
      </ThemeProvider>
    );
  }

  return WithRoot;
}
