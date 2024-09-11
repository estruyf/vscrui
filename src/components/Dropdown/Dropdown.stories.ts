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

export const Object: StoryObj<typeof Dropdown> = {
  args: {
    className: undefined,
    disabled: false,
    position: "below",
    open: true,
    options: [
      {
        label: "Option 1",
        value: "option1",
      },
      {
        label: "Option 2",
        value: "option2",
      },
      {
        label: "Option 3",
        value: "option3",
        disabled: true,
      },
    ],
    value: "option2",
    onChange: (value) => console.log(`Dropdown selected: ${value}`),
  },
};
