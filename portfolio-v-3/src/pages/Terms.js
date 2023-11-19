import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Markdown from '../../mui material-ui 07a4824f261561e878ac03e1c96c33e2774eba7d docs-src_pages_premium-themes_onepirate/modules/components/Markdown';
import Typography from '../../mui material-ui 07a4824f261561e878ac03e1c96c33e2774eba7d docs-src_pages_premium-themes_onepirate/modules/components/Typography';
import AppAppBar from './modules/views/AppAppBar';
import AppFooter from './modules/views/AppFooter';
import withRoot from '../../mui material-ui 07a4824f261561e878ac03e1c96c33e2774eba7d docs-src_pages_premium-themes_onepirate/modules/withRoot';
import terms from './modules/views/terms.md';

function Terms() {
  return (
    <React.Fragment>
      <AppAppBar />
      <Container>
        <Box sx={{ mt: 7, mb: 12 }}>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Terms
          </Typography>
          <Markdown>{terms}</Markdown>
        </Box>
      </Container>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Terms);
