import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { BASE_URL } from '../utils/api';

const CursorLogo = ({ className = 'w-5 h-5' }) => {
  const { isDarkMode } = useTheme();

  return (
    <img
      src={isDarkMode ? `${BASE_URL}/icons/cursor-white.svg` : `${BASE_URL}/icons/cursor.svg`}
      alt="Cursor"
      className={className}
    />
  );
};

export default CursorLogo;
