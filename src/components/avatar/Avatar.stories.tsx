import type { Meta as MetaType, StoryObj as StoryObjType } from "@storybook/react";
import { FaCheck } from "react-icons/fa6";
import Avatar from "./Avatar";

const meta: MetaType<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    radius: {
      control: "select",
      options: ["none", "sm", "md", "lg", "full"],
    },
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "success", "warning", "danger"],
    },
    isBordered: {
      control: "boolean",
    },
    isDisabled: {
      control: "boolean",
    },
    showFallback: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObjType<typeof Avatar>;

const demoImage = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&h=256&q=80";

export const Default: Story = {
  args: {
    src: demoImage,
    name: "Jane Doe",
    size: "md",
    radius: "full",
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-end gap-4">
      <Avatar {...args} size="sm" src={demoImage} name="Small" />
      <Avatar {...args} size="md" src={demoImage} name="Medium" />
      <Avatar {...args} size="lg" src={demoImage} name="Large" />
    </div>
  ),
};

export const Radiuses: Story = {
  render: (args) => (
    <div className="flex gap-4">
      <Avatar {...args} radius="none" src={demoImage} name="None" />
      <Avatar {...args} radius="sm" src={demoImage} name="Small" />
      <Avatar {...args} radius="md" src={demoImage} name="Medium" />
      <Avatar {...args} radius="lg" src={demoImage} name="Large" />
      <Avatar {...args} radius="full" src={demoImage} name="Full" />
    </div>
  ),
};

export const Colors: Story = {
  render: (args) => (
    <div className="flex gap-4">
      <Avatar {...args} color="default" name="Default User" showFallback />
      <Avatar {...args} color="primary" name="Primary User" showFallback />
      <Avatar {...args} color="secondary" name="Secondary User" showFallback />
      <Avatar {...args} color="success" name="Success User" showFallback />
      <Avatar {...args} color="warning" name="Warning User" showFallback />
      <Avatar {...args} color="danger" name="Danger User" showFallback />
    </div>
  ),
};

export const Bordered: Story = {
  render: (args) => (
    <div className="flex gap-6 p-4 bg-neutral-50 dark:bg-neutral-900 rounded-xl">
      <Avatar {...args} isBordered color="default" src={demoImage} />
      <Avatar {...args} isBordered color="primary" src={demoImage} />
      <Avatar {...args} isBordered color="secondary" src={demoImage} />
      <Avatar {...args} isBordered color="success" src={demoImage} />
      <Avatar {...args} isBordered color="warning" src={demoImage} />
      <Avatar {...args} isBordered color="danger" src={demoImage} />
    </div>
  ),
};

export const Fallbacks: Story = {
  render: (args) => (
    <div className="flex gap-4">
      {/* Fallback Name Initials */}
      <Avatar {...args} name="Albert Einstein" color="primary" />
      <Avatar {...args} name="Marie Curie" color="secondary" />
      
      {/* Fallback Silhouette Icon */}
      <Avatar {...args} color="default" />

      {/* Fallback Custom Icon */}
      <Avatar
        {...args}
        color="success"
        icon={<FaCheck className="w-5 h-5" aria-hidden />}
      />
    </div>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <div className="flex gap-4">
      <Avatar {...args} isDisabled src={demoImage} />
      <Avatar {...args} isDisabled name="Albert Einstein" color="primary" />
      <Avatar {...args} isDisabled color="default" />
    </div>
  ),
};
