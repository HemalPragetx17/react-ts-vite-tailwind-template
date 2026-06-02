import type { Meta, StoryObj } from "@storybook/react";
import CustomTabs from "./CustomTabs";

const meta: Meta<typeof CustomTabs> = {
  title: "Components/CustomTabs",
  component: CustomTabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "bordered", "light", "underlined"],
    },
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "success", "warning", "danger"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    radius: {
      control: "select",
      options: ["none", "sm", "md", "lg", "full"],
    },
    placement: {
      control: "select",
      options: ["top", "bottom", "start", "end"],
    },
    isVertical: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof CustomTabs>;

const defaultItems = [
  { id: "photos", label: "Photos", content: <div className="p-4">Photos content here</div> },
  { id: "music", label: "Music", content: <div className="p-4">Music content here</div> },
  { id: "videos", label: "Videos", content: <div className="p-4">Videos content here</div> },
];

export const Solid: Story = {
  args: {
    items: defaultItems,
    variant: "solid",
  },
};

export const Bordered: Story = {
  args: {
    items: defaultItems,
    variant: "bordered",
  },
};

export const Light: Story = {
  args: {
    items: defaultItems,
    variant: "light",
  },
};

export const Underlined: Story = {
  args: {
    items: defaultItems,
    variant: "underlined",
  },
};

export const Vertical: Story = {
  args: {
    items: defaultItems,
    isVertical: true,
    variant: "solid",
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      {
        id: "photos",
        label: "Photos",
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        ),
        content: <div className="p-4">Photos content</div>,
      },
      {
        id: "music",
        label: "Music",
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </svg>
        ),
        content: <div className="p-4">Music content</div>,
      },
    ],
  },
};

export const WithCount: Story = {
  args: {
    items: [
      { id: "all", label: "All", count: 24, content: <div className="p-4">All items</div> },
      { id: "active", label: "Active", count: 12, content: <div className="p-4">Active items</div> },
      { id: "archived", label: "Archived", count: 5, content: <div className="p-4">Archived items</div> },
    ],
  },
};
