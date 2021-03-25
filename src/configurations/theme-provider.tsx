import React, { createContext, useContext, useState } from 'react';

import { CssBaseline, PaletteType } from '@material-ui/core';
import {
  ThemeProvider as ThemeProviderMUI,
  createMuiTheme,
  responsiveFontSizes,
} from '@material-ui/core/styles';

import { ThemeProvider as ThemeProviderSC } from 'styled-components';

interface ThemeContextProps {
  changeThemeMode: () => void;
  themeType: PaletteType;
}

const ThemeContext = createContext<ThemeContextProps>({
  themeType: 'light',
  changeThemeMode() {},
});

const themeMUI = (mode: PaletteType = 'light') =>
  responsiveFontSizes(
    createMuiTheme({
      palette: {
        type: mode,
        primary: {
          main: mode === 'light' ? '#797A9E' : '#444444',
        },
        secondary: {
          main: mode === 'light' ? '#797A9E' : '#797A9E',
        },
      },
      overrides: {
        MuiCssBaseline: {
          '@global': {
            body: {
              margin: 0,
              display: 'flex',
              justifyContent: 'center',
            },
            '#__next': {
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
            },
          },
        },
      },
    })
  );
const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(themeMUI());

  function changeThemeMode() {
    const themeMode: PaletteType = theme.palette.type;
    const newTheme = themeMUI(themeMode === 'light' ? 'dark' : 'light');
    setTheme(newTheme);
  }

  return (
    <ThemeContext.Provider
      value={{
        changeThemeMode,
        themeType: theme.palette.type,
      }}
    >
      <ThemeProviderMUI theme={theme}>
        <ThemeProviderSC theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProviderSC>
      </ThemeProviderMUI>
    </ThemeContext.Provider>
  );
};

export const useThemeMode = () => {
  const context = useContext(ThemeContext);

  return context;
};

export default ThemeProvider;
