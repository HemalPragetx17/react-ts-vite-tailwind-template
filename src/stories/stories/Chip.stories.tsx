import type { Meta, StoryObj } from "@storybook/react";
import { FaCamera, FaHeart } from "react-icons/fa6";
import { Chip } from "../../components/ui";

const meta: Meta<typeof Chip> = {
  title: "Components/Chip",
  component: Chip,
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
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    children: "Chip",
  },
};

export const Colors: Story = {
  render: (args) => (
    <div className="flex justify-center items-center gap-4 w-[800px]">
      <Chip {...args} color="default">Default</Chip>
      <Chip {...args} color="primary">Primary</Chip>
      <Chip {...args} color="secondary">Secondary</Chip>
      <Chip {...args} color="success">Success</Chip>
      <Chip {...args} color="warning">Warning</Chip>
      <Chip {...args} color="danger">Danger</Chip>
    </div>
  ),
};

export const Variants: Story = {
  render: (args) => (
    <div className="flex justify-center items-center gap-4 w-[800px]">
      <Chip {...args} variant="solid">Solid</Chip>
      <Chip {...args} variant="bordered">Bordered</Chip>
      <Chip {...args} variant="light">Light</Chip>
      <Chip {...args} variant="flat">Flat</Chip>
      <Chip {...args} variant="faded">Faded</Chip>
      <Chip {...args} variant="shadow">Shadow</Chip>
      <Chip {...args} variant="dot">Dot</Chip>
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex justify-center items-center gap-4 w-[800px]">
      <Chip {...args} size="sm">Small</Chip>
      <Chip {...args} size="md">Medium</Chip>
      <Chip {...args} size="lg">Large</Chip>
    </div>
  ),
};

export const Radiuses: Story = {
  render: (args) => (
    <div className="flex justify-center items-center gap-4 w-[800px]">
      <Chip {...args} radius="none">None</Chip>
      <Chip {...args} radius="sm">Small</Chip>
      <Chip {...args} radius="md">Medium</Chip>
      <Chip {...args} radius="lg">Large</Chip>
      <Chip {...args} radius="full">Full</Chip>
    </div>
  ),
};

export const StartAndEndContent: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Chip
        {...args}
        color="success"
        endContent={<FaCamera className="w-4 h-4" aria-hidden />}
      >
        Take a photo
      </Chip>
      <Chip
        {...args}
        color="danger"
        variant="bordered"
        startContent={<FaHeart className="w-4 h-4" aria-hidden />}
      >
        Delete user
      </Chip>
    </div>
  ),
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
