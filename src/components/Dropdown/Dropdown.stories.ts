import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from ".";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof Dropdown> = {
  args: {
    className: undefined,
    disabled: false,
    position: "below",
    open: true,
    options: ["Option 1", "Option 2", "Option 3"],
    value: "Option 2",
    onChange: (value) => console.log(`Dropdown selected: ${value}`),
  },
};
