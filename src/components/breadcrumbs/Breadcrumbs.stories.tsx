import type { Meta, StoryObj } from "@storybook/react";
import Breadcrumbs from "./Breadcrumbs";
import { MemoryRouter } from "react-router-dom";
import React from "react";

const meta: Meta<typeof Breadcrumbs> = {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "success", "warning", "danger"],
    },
    variant: {
      control: "select",
      options: ["solid", "bordered", "light"],
    },
    underline: {
      control: "select",
      options: ["none", "hover", "always", "active", "focus"],
    },
    radius: {
      control: "select",
      options: ["none", "sm", "md", "lg", "full"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

const staticItems = [
  { label: "Home", path: "/", isLast: false, isClickable: true },
  { label: "Products", path: "/products", isLast: false, isClickable: true },
  { label: "Electronics", path: "/products/electronics", isLast: true, isClickable: false },
];

export const Default: Story = {
  args: {
    items: staticItems,
  },
};

export const Solid: Story = {
  args: {
    items: staticItems,
    variant: "solid",
    radius: "md",
    color: "primary",
  },
};

export const Bordered: Story = {
  args: {
    items: staticItems,
    variant: "bordered",
    radius: "full",
    color: "secondary",
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <Breadcrumbs {...args} size="sm" items={staticItems} />
      <Breadcrumbs {...args} size="md" items={staticItems} />
      <Breadcrumbs {...args} size="lg" items={staticItems} />
    </div>
  ),
};

export const Colors: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <Breadcrumbs {...args} color="default" items={staticItems} />
      <Breadcrumbs {...args} color="primary" items={staticItems} />
      <Breadcrumbs {...args} color="secondary" items={staticItems} />
      <Breadcrumbs {...args} color="success" items={staticItems} />
      <Breadcrumbs {...args} color="warning" items={staticItems} />
      <Breadcrumbs {...args} color="danger" items={staticItems} />
    </div>
  ),
};
