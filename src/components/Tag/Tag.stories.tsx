import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from ".";

const meta: Meta<typeof Tag> = {
  title: "Components/Tag",
  component: Tag,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof Tag> = {
  args: {
    children: "1 unsaved",
    className: undefined,
  }
};