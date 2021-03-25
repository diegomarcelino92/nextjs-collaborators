import React from 'react';

import { Switch } from '@material-ui/core';

import { useThemeMode } from '@config/theme-provider';

const SwitchTheme: React.FC = () => {
  const { themeType, changeThemeMode } = useThemeMode();

  return (
    <Switch
      checked={themeType === 'dark'}
      name="checkedA"
      inputProps={{ 'aria-label': 'secondary checkbox' }}
      onChange={changeThemeMode}
    />
  );
};

export default SwitchTheme;
