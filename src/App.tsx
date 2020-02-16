import React from 'react';
import { Box, Grommet, ThemeType } from 'grommet';

import { AppBar, Footer } from './components';
import { Presentation, Demo } from './pages';

const theme: ThemeType = {
  global: {
    colors: {
      brand: '#339999',
      brandLight: '#33999978',
      redLight: '#c83e3e78',
      primary: 'linen',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
  formField: {
    border: {
      side: 'all',
    },
  },
  anchor: {
    extend: () => ({
      outlineColor: 'none',
      boxShadow: 'none',
    }),
    hover: {
      extend: () => ({
        filter: 'brightness(75%)',
      }),
    }
  }
};

function App() {
  return (
    <Grommet theme={theme} full id='app'>
      <Box fill>
        <AppBar />
        <Box fill overflow={{ horizontal: 'hidden' }}>
          <Presentation />
          <Demo />
        </Box>
        <Footer />
      </Box>
    </Grommet>
  );
}

export default App;
