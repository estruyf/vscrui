import type { Meta, StoryObj } from "@storybook/react";
import { Pane } from ".";

const meta: Meta<typeof Pane> = {
  title: "Components/Pane",
  component: Pane,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof Pane> = {
  args: {
    title: "Pane title",
    children: (
      <>
        <h1>Pane content</h1>
        <p>Some text content for the pane</p>
        <p>Some text content for the pane</p>
        <p>Some text content for the pane</p>
        <p>Some text content for the pane</p>
      </>
    ),
    actions: [
      {
        iconName: "add",
        onClick: () => console.log("add clicked"),
      },
      {
        iconName: "refresh",
        onClick: () => console.log("refresh clicked"),
      },
    ],
  },
};
