import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from ".";

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    size: {
      type: "string",
    }
  }
};

export default meta;

export const Default: StoryObj<typeof Icon> = {
  args: {
    name: "gear",
    spin: false,
    className: undefined,
  }
};

export const Spin: StoryObj<typeof Icon> = {
  args: {
    name: "gear",
    spin: true,
    className: undefined,
  }
};