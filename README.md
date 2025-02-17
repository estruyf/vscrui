# Visual Studio Code - React UI Library (vscrui)

> [!WARNING]
> This project is in an early stage of development. Feel free to contribute or use it at your own risk.

The `vscrui` is a React components library for building [webview-based extensions](https://code.visualstudio.com/api/extension-guides/webview) with React in Visual Studio Code.

> [!NOTE]
> The library is based on the [VS Code Webview UI Toolkit](https://github.com/microsoft/vscode-webview-ui-toolkit), which has announced to be deprecated on January 1, 2025. See the [deprecation announcement](https://github.com/microsoft/vscode-webview-ui-toolkit/issues/561) for more details. Instead of providing web components, this library provides React components.

## Contributing

If you want to contribute, please find an open issue you would like to work on and leave us a comment. If you have any questions, feel free to ask in the issue or in the Discord server.

## Components

The following components are available in the library:

- [x] Badge
- [x] Button
- [x] Checkbox
- [x] Divider
- [x] Dropdown
- [x] Icon
- [x] Label
- [x] Loader
- [x] Pane (collapsible)
- [x] Panels
- [x] Table
- [x] Tag
- [x] TextArea
- [x] TextField

> [!WARNING]
> When using the `Icon` component, make sure to import the Codicon CSS file in your project. You can use the following import statement: `import 'vscrui/dist/codicon.css';`.

### Future Components

- [ ] Tooltip
- [ ] Multi-select

## Installation

To install the library, run the following command:

```bash
npm install vscrui
```

## Usage

To use the library, import the components you need and use them in your React components:

```tsx
import { Badge, Button, Checkbox, Label, Tag } from "vscrui";
```

## Development

1. Clone the repository
2. Run `npm install`
3. Run `npm run storybook` to start the development server
4. Open the `http://localhost:6006` in your browser
5. Test out the components or make changes to the library

## References

- <https://github.com/facebook/sapling/tree/main/addons/components>
- <https://github.com/microsoft/vscode-webview-ui-toolkit>

## Sponsors

If you find this project useful, please consider becoming a sponsor to help Open Source sustainable. Thank you!

<p align="center">
  <a href="https://github.com/sponsors/estruyf" title="Sponsor Elio Struyf" target="_blank">
    <img src="https://img.shields.io/badge/Sponsor-Elio%20Struyf%20%E2%9D%A4-%23fe8e86?logo=GitHub&style=flat-square" height="25px" alt="Sponsor @estruyf" />
  </a>
</p>

<br />

<p align="center">
  <a href="https://visitorbadge.io/status?path=https%3A%2F%2Fgithub.com%2Festruyf%2Fvscrui">
    <img src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2Festruyf%2Fvscrui&labelColor=%23555555&countColor=%2397ca00" height="25px" alt="VSCRUI visitors" />
  </a>
</p>

<br />

<p align="center">
  <a href="https://struyfconsulting.com" title="Hire Elio Struyf via Struyf Consulting" target="_blank">
    <img src="./assets/struyf-consulting.webp" height="25px" alt="Struyf Consulting Logo" />
  </a>
</p>
