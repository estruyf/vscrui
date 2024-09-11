import { readdirSync, writeFileSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const icons = readdirSync(resolve(__dirname, '../node_modules/@vscode/codicons/src/icons')).map((icon) => {
  return icon.replace('.svg', '');
});

// Create an object with all icons
const iconsObject = icons.reduce((acc, icon) => {
  acc[icon] = icon;
  return acc;
}, {});

// Create a file with all icons
writeFileSync(resolve(__dirname, '../src/components/Icon/Icons.ts'), `export const Icons = ${JSON.stringify(iconsObject, null, 2)};`);
