import React from 'react';

import { FormControlLabel, Switch } from '@material-ui/core';

import { useThemeMode } from '@config/theme-provider';

const SwitchTheme: React.FC = () => {
  const { themeType, changeThemeMode } = useThemeMode();

  return (
    <FormControlLabel
      control={
        <Switch
          title="sdasdf"
          checked={themeType === 'dark'}
          onChange={changeThemeMode}
        />
      }
      label="Dark-mode"
    />
  );
};

export default SwitchTheme;
