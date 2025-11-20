# Visual Studio Code - React UI Library (vscrui)

The `vscrui` is a React components library for building [webview-based extensions](https://code.visualstudio.com/api/extension-guides/webview) with React in Visual Studio Code.

> [!NOTE]
> The library is based on the [VS Code Webview UI Toolkit](https://github.com/microsoft/vscode-webview-ui-toolkit), which was deprecated on January 6, 2025. See the [deprecation announcement](https://github.com/microsoft/vscode-webview-ui-toolkit/issues/561) for more details. Instead of providing web components, this library provides React components.

## Installation

To install the library, run the following command:

```bash
npm install vscrui
```

> [!IMPORTANT]
> When using the `Icon` component, make sure to import the Codicon CSS file in your project. You can use the following import statement: `import 'vscrui/dist/codicon.css';`.

## Usage

To use the library, import the components you need and use them in your React components.

```tsx
import { Badge, Button, Checkbox, Label, Tag } from "vscrui";
import "vscrui/dist/codicon.css"; // If using Icons
```

### Button

```tsx
import { Button } from "vscrui";

<Button appearance="primary" onClick={() => console.log("Clicked")}>
  Primary Button
</Button>

<Button appearance="secondary">
  Secondary Button
</Button>

<Button appearance="icon" aria-label="Add">
  <span className="codicon codicon-plus"></span>
</Button>
```

### TextField

```tsx
import { TextField } from "vscrui";

<TextField 
  placeholder="Enter text..." 
  onChange={(value) => console.log(value)}
>
  Label Text
</TextField>
```

### Dropdown

```tsx
import { Dropdown } from "vscrui";

<Dropdown
  options={["Option 1", "Option 2", "Option 3"]}
  value="Option 1"
  onChange={(value) => console.log(value)}
/>

// With object options
<Dropdown
  options={[
    { label: "Option 1", value: "opt1" },
    { label: "Option 2", value: "opt2" }
  ]}
  value="opt1"
  onChange={(value) => console.log(value)}
/>
```

### Checkbox

```tsx
import { Checkbox } from "vscrui";

<Checkbox 
  checked={true} 
  onChange={(checked) => console.log(checked)}
>
  Checkbox Label
</Checkbox>
```

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

### Future Components

- [ ] Tooltip
- [ ] Multi-select

## Development

1. Clone the repository
2. Run `npm install`
3. Run `npm run storybook` to start the development server
4. Open the `http://localhost:6006` in your browser
5. Test out the components or make changes to the library

## Contributing

If you want to contribute, please find an open issue you would like to work on and leave us a comment. If you have any questions, feel free to ask in the issue or in the Discord server.

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
