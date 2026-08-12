import { useState, useEffect } from 'react';

export type VscodeThemeKind =
  | 'vscode-light'
  | 'vscode-dark'
  | 'vscode-high-contrast'
  | 'vscode-high-contrast-light';

export default function useVscodeTheme(): { theme: VscodeThemeKind } {
  const [theme, setTheme] = useState<VscodeThemeKind>('vscode-light');

  const getTheme = () => {
    const theme = document.body.getAttribute(`data-vscode-theme-kind`);
    setTheme((theme as VscodeThemeKind) || 'vscode-light');
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