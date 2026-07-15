# Change Log

## [1.0.0] - 2026-07-15

- Fixed React 19 support. `react/jsx-runtime` was being bundled into the library, shipping a React 18-era runtime that accessed the removed `React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED` internals. Under React 19 this crashed with `Cannot read properties of undefined (reading 'ReactCurrentDispatcher')` and `A React Element from an older version of React was rendered`. The build now externalizes all `react` and `react-dom` subpath entry points so the consuming app supplies its own React copy. React 16.8+, 17, 18, and 19 are supported via the peer dependency range.
- Added an `overlay` prop to the `Loader` component. It defaults to `true` (the full-page overlay behind the progress bar). Set `overlay={false}` to show only the progress bar at the top without the overlay.

## [0.3.0] - 2025-11-20

- Documentation updates on the README

## [0.2.2] - 2025-02-17

- [#6](https://github.com/estruyf/vscrui/pull/6): fix: Dropdown dependencies by [System233](https://github.com/System233)

## [0.2.1] - 2025-02-06

- [#3](https://github.com/estruyf/vscrui/issues/3): Fix for `TextField` component implemented by [Lao](https://github.com/maoguy)

## [0.2.0] - 2024-10-28

- Added the following components:
  - Table

## [0.1.0] - 2024-09-19

- Preview release with the following components:
  - Badge
  - Button
  - Checkbox
  - Divider
  - Dropdown
  - Icon
  - Label
  - Loader
  - Pane (collapsible)
  - Panels
  - Tag
  - TextArea
  - TextField
