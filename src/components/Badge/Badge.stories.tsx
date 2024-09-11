import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from ".";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof Badge> = {
  args: {
    className: undefined,
    children: "99",
  }
};