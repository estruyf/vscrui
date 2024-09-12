import { useState, useEffect } from 'react';

export default function useVscodeTheme(options?: any) {
  const [theme, setTheme] = useState('vscode-light');

  const getTheme = () => {
    const theme = document.body.getAttribute(`data-vscode-theme-kind`);
    setTheme(theme || 'vscode-light');
  };

  useEffect(() => {
    getTheme();
    const observer = new MutationObserver(getTheme);
    observer.observe(document.body, { childList: false, attributes: true });
    return () => observer.disconnect();
  }, []);

  return {
    theme
  };
}