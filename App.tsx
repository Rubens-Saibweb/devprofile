import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';

import { Home } from './src/pages/Home';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
