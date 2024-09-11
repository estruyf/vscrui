import { parse, resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import react from '@vitejs/plugin-react';
import { readdirSync, statSync } from "fs";

const componentFolder = resolve(__dirname, 'src/components');
const folders = readdirSync(componentFolder).filter((path) => statSync(resolve(componentFolder, path)).isDirectory());
const components = {};
folders.forEach((folder) => {
  const componentName = folder.toLowerCase();
  components[componentName] = resolve(componentFolder, folder, `${folder}.tsx`);
});
console.log(components);

export default defineConfig({
  build: {
    cssCodeSplit: false,
    lib: {
      entry: {
        'index': resolve(__dirname, 'src/index.ts'),
        ...components
      },
      name: "vscrui",
      formats: ['es'],
      fileName: `[name]`,
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: "React"
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'codicon.css';
          return assetInfo.name;
        },
      },
      sourcemap: true,
      emptyOutDir: true,
    },
  },
  plugins: [
    react({
      // include: /\.(jsx|tsx)$/,
      // babel: {
      //   plugins: ['styled-components'],
      //   babelrc: false,
      //   configFile: false,
      // },
    }),
    dts({ rollupTypes: true })
  ],
});
