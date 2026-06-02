import type { Meta, StoryObj } from "@storybook/react";
import CustomButton from "./CustomButton";

const meta: Meta<typeof CustomButton> = {
  title: "Components/CustomButton",
  component: CustomButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "bordered", "light", "flat", "faded", "shadow", "ghost"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "danger"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    radius: {
      control: "select",
      options: ["default", "rounded", "pill", "circle"],
    },
    loading: {
      control: "boolean",
    },
    fullWidth: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    iconPosition: {
      control: "radio",
      options: ["left", "right"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof CustomButton>;

export const Solid: Story = {
  args: {
    children: "Button",
    variant: "solid",
    color: "primary",
  },
};

export const Bordered: Story = {
  args: {
    children: "Bordered",
    variant: "bordered",
    color: "primary",
  },
};

export const Light: Story = {
  args: {
    children: "Light",
    variant: "light",
    color: "primary",
  },
};

export const Flat: Story = {
  args: {
    children: "Flat",
    variant: "flat",
    color: "primary",
  },
};

export const Faded: Story = {
  args: {
    children: "Faded",
    variant: "faded",
    color: "primary",
  },
};

export const Shadow: Story = {
  args: {
    children: "Shadow",
    variant: "shadow",
    color: "primary",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost",
    variant: "ghost",
    color: "primary",
  },
};

export const WithIcon: Story = {
  args: {
    children: "Settings",
    color: "primary",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
};

export const Loading: Story = {
  args: {
    children: "Loading",
    color: "primary",
    loading: true,
  },
};

export const FullWidth: Story = {
  args: {
    children: "Full Width Button",
    color: "primary",
    fullWidth: true,
  },
  parameters: {
    layout: "padded",
  },
};

export const Circle: Story = {
  args: {
    radius: "circle",
    color: "primary",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    ),
  },
};
