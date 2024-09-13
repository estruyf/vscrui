import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from ".";

const meta: Meta<typeof Divider> = {
  title: "Components/Divider",
  component: Divider,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof Divider> = {
  args: {
    className: undefined,
  },
};
