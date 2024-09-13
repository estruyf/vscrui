import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from ".";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof Checkbox> = {
  args: {
    checked: false,
    children: "Checkbox label",
    className: undefined,
    indeterminate: false,
    disabled: false,
    onChange: (checked: boolean) => console.log(`Checkbox checked: ${checked}`),
  }
};