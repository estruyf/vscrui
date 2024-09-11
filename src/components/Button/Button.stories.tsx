import type { Meta, StoryObj } from '@storybook/react';
import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;

export const Primary: StoryObj<typeof Button> = {
  args: {
    children: "Click me",
    className: undefined,
    appearance: "primary",
    disabled: false,
    type: "button",
    onClick: () => alert("Button clicked"),
  }
};

export const Secondary: StoryObj<typeof Button> = {
  args: {
    children: "Click me",
    appearance: "secondary",
    disabled: false,
    type: "button",
    onClick: () => alert("Button clicked"),
  }
};

export const Icon: StoryObj<typeof Button> = {
  args: {
    children: <span className="codicon codicon-plus"></span>,
    appearance: "icon",
    disabled: false,
    type: "button",
    onClick: () => alert("Button clicked"),
  }
};