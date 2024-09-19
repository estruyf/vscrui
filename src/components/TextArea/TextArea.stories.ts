import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from ".";

const meta: Meta<typeof TextArea> = {
  title: "Components/TextArea",
  component: TextArea,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof TextArea> = {
  args: {
    children: "Text area label",
    className: undefined,
    placeholder: "Placeholder text",
    value: "",
    onChange: (value: string) => console.log(`Text field value: ${value}`),
  },
};
