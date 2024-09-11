import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from ".";

const meta: Meta<typeof TextField> = {
  title: "Components/TextField",
  component: TextField,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof TextField> = {
  args: {
    children: "Text field label",
    className: undefined,
    placeholder: "Placeholder text",
    value: "",
    onChange: (value: string) => console.log(`Text field value: ${value}`),
  },
};
