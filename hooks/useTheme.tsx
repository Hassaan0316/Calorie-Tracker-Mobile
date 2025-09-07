import { useState } from 'react';
import {
  alAdeemColors,
  duneColors,
  fontFamilies,
  fontStyles,
  greyColors,
  palmColors,
  seaColors,
  skylineColors,
} from '../Theme/theme';
import { iCommomPallets, tThemes } from '../Interfaces/dataInterfaces';

const useTheme = () => {
  const [theme, setTheme] = useState<tThemes>('alAdaam');

  const toggleTheme = (value: tThemes) => {
    setTheme(value);
  };

  const themeColors: iCommomPallets =
    theme === 'alAdaam'
      ? alAdeemColors
      : theme === 'dune'
        ? duneColors
        : theme === 'skyline'
          ? skylineColors
          : theme === 'palm'
            ? palmColors
            : theme === 'sea'
              ? seaColors
              : greyColors

  return { themeColors, currentTheme: theme, toggleTheme, fontStyles, fontFamilies };
};

export default useTheme;