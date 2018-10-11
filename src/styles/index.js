import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './themes';
import { baseStyles } from './base';

export default WarrapedComponent => {
  return class extends React.Component {
    render() {
      baseStyles();
      return (
        <ThemeProvider theme={defaultTheme}>
          <WarrapedComponent {...this.props} />
        </ThemeProvider>
      );
    }
  };
};
