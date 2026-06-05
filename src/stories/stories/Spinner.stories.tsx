import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "../../components/ui";

const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "success", "warning", "danger"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    variant: {
      control: "select",
      options: ["default", "simple", "gradient", "spinner", "wave", "dots"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    color: "primary",
    size: "md",
    variant: "default",
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex gap-6 items-center">
      <Spinner {...args} size="sm" />
      <Spinner {...args} size="md" />
      <Spinner {...args} size="lg" />
    </div>
  ),
};

export const Colors: Story = {
  render: (args) => (
    <div className="flex gap-6 items-center">
      <Spinner {...args} color="default" />
      <Spinner {...args} color="primary" />
      <Spinner {...args} color="secondary" />
      <Spinner {...args} color="success" />
      <Spinner {...args} color="warning" />
      <Spinner {...args} color="danger" />
    </div>
  ),
};

export const WithLabel: Story = {
  args: {
    color: "warning",
    label: "Loading...",
  },
};

export const LabelColors: Story = {
  render: (args) => (
    <div className="flex gap-6 items-center">
      <Spinner {...args} color="default" label="Default" />
      <Spinner {...args} color="primary" label="Primary" />
      <Spinner {...args} color="secondary" label="Secondary" />
      <Spinner {...args} color="success" label="Success" />
      <Spinner {...args} color="warning" label="Warning" />
      <Spinner {...args} color="danger" label="Danger" />
    </div>
  ),
};

export const Variants: Story = {
  render: (args) => (
    <div className="flex gap-8 items-center justify-center p-4">
      <div className="flex flex-col items-center justify-between h-20">
        <Spinner {...args} variant="default" />
        <span className="text-xs font-semibold text-neutral-500 mt-2">default</span>
      </div>
      <div className="flex flex-col items-center justify-between h-20">
        <Spinner {...args} variant="simple" />
        <span className="text-xs font-semibold text-neutral-500 mt-2">simple</span>
      </div>
      <div className="flex flex-col items-center justify-between h-20">
        <Spinner {...args} variant="gradient" />
        <span className="text-xs font-semibold text-neutral-500 mt-2">gradient</span>
      </div>
      <div className="flex flex-col items-center justify-between h-20">
        <Spinner {...args} variant="spinner" />
        <span className="text-xs font-semibold text-neutral-500 mt-2">spinner</span>
      </div>
      <div className="flex flex-col items-center justify-between h-20">
        <Spinner {...args} variant="wave" />
        <span className="text-xs font-semibold text-neutral-500 mt-2">wave</span>
      </div>
      <div className="flex flex-col items-center justify-between h-20">
        <Spinner {...args} variant="dots" />
        <span className="text-xs font-semibold text-neutral-500 mt-2">dots</span>
      </div>
    </div>
  ),
};
