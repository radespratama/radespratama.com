import { useEffect, useState } from 'react';

export default function useLightSide() {
  const [theme, setTheme] = useState('light');
  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const rootElement = window.document.documentElement;
    rootElement.classList.remove(colorTheme);
    rootElement.classList.add(theme);

    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    } else {
      localStorage.removeItem('theme', theme);
    }
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}
