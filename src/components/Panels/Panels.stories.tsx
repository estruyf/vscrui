import type { Meta, StoryObj } from "@storybook/react";
import { Panels } from ".";

const meta: Meta<typeof Panels> = {
  title: "Components/Panels",
  component: Panels,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof Panels> = {
  args: {
    tabs: [
      {
        id: "tab1",
        label: "Tab 1",
      },
      {
        id: "tab2",
        label: "Tab 2",
      },
      {
        id: "tab3",
        label: "Tab 3",
      },
    ],
    views: [
      {
        id: "tab1",
        content: (
          <>
            <h1>Tab 1 content</h1>
            <p>Some text content for the tab</p>
          </>
        ),
      },
      {
        id: "tab2",
        content: "Tab 2 content",
      },
      {
        id: "tab3",
        content: "Tab 3 content",
      },
    ],
  },
};
