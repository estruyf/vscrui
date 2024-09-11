import type { Meta, StoryObj } from '@storybook/react';
import { Label } from ".";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof Label> = {
  args: {
    children: "Label text",
    className: undefined,
  }
};