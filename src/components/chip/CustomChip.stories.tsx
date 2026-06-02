import type { Meta, StoryObj } from "@storybook/react";
import CustomChip from "./CustomChip";

const meta: Meta<typeof CustomChip> = {
  title: "Components/CustomChip",
  component: CustomChip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "bordered", "light", "flat", "faded", "shadow", "dot"],
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
    isDisabled: {
      control: "boolean",
    },
    onClose: { action: "closed" },
  },
};

export default meta;
type Story = StoryObj<typeof CustomChip>;

export const Default: Story = {
  args: {
    children: "Chip",
    color: "default",
    variant: "solid",
  },
};

export const Primary: Story = {
  args: {
    children: "Primary",
    color: "primary",
    variant: "solid",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    color: "secondary",
    variant: "solid",
  },
};

export const Success: Story = {
  args: {
    children: "Success",
    color: "success",
    variant: "solid",
  },
};

export const Warning: Story = {
  args: {
    children: "Warning",
    color: "warning",
    variant: "solid",
  },
};

export const Danger: Story = {
  args: {
    children: "Danger",
    color: "danger",
    variant: "solid",
  },
};

export const Bordered: Story = {
  args: {
    children: "Bordered",
    variant: "bordered",
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

export const Dot: Story = {
  args: {
    children: "Dot",
    variant: "dot",
    color: "primary",
  },
};

export const WithStartContent: Story = {
  args: {
    children: "With Icon",
    color: "primary",
    startContent: (
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
};

export const Closable: Story = {
  args: {
    children: "Closable",
    color: "primary",
    onClose: () => console.log("Close clicked"),
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    color: "primary",
    isDisabled: true,
  },
};
