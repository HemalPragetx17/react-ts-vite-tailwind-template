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
  render: () => <Spinner color="primary" size="md" variant="default" />,
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-6 items-center">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex gap-6 items-center">
      <Spinner color="default" />
      <Spinner color="primary" />
      <Spinner color="secondary" />
      <Spinner color="success" />
      <Spinner color="warning" />
      <Spinner color="danger" />
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => <Spinner color="warning" label="Loading..." />,
};

export const LabelColors: Story = {
  render: () => (
    <div className="flex gap-6 items-center">
      <Spinner color="default" label="Default" />
      <Spinner color="primary" label="Primary" />
      <Spinner color="secondary" label="Secondary" />
      <Spinner color="success" label="Success" />
      <Spinner color="warning" label="Warning" />
      <Spinner color="danger" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-8 items-center justify-center p-4">
      <div className="flex flex-col items-center justify-between h-20">
        <Spinner variant="default" />
        <span className="text-xs font-semibold text-neutral-500 mt-2">default</span>
      </div>
      <div className="flex flex-col items-center justify-between h-20">
        <Spinner variant="simple" />
        <span className="text-xs font-semibold text-neutral-500 mt-2">simple</span>
      </div>
      <div className="flex flex-col items-center justify-between h-20">
        <Spinner variant="gradient" />
        <span className="text-xs font-semibold text-neutral-500 mt-2">gradient</span>
      </div>
      <div className="flex flex-col items-center justify-between h-20">
        <Spinner variant="spinner" />
        <span className="text-xs font-semibold text-neutral-500 mt-2">spinner</span>
      </div>
      <div className="flex flex-col items-center justify-between h-20">
        <Spinner variant="wave" />
        <span className="text-xs font-semibold text-neutral-500 mt-2">wave</span>
      </div>
      <div className="flex flex-col items-center justify-between h-20">
        <Spinner variant="dots" />
        <span className="text-xs font-semibold text-neutral-500 mt-2">dots</span>
      </div>
    </div>
  ),
};
