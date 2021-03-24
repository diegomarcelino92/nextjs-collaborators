import { createContext, useState } from 'react';

import { ThemeProvider as ThemeProviderMUI, createMuiTheme } from '@material-ui/core/styles';
import { PaletteType } from '@material-ui/core';
import { ThemeProvider as ThemeProviderSC } from 'styled-components';

const ThemeContext = createContext({})

const themeMUI = (mode: PaletteType = 'light') => createMuiTheme({
  palette: {
    type: mode
  }
});

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(themeMUI())

  function changeThemeMode() {
    const themeMode: PaletteType = theme.palette.type;
    const newTheme = themeMUI(themeMode === 'light' ? 'dark' : 'light')

    setTheme(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ changeThemeMode }}>
      <ThemeProviderMUI theme={theme}>
        <ThemeProviderSC theme={theme}>
          {children}
        </ThemeProviderSC>
      </ThemeProviderMUI>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
