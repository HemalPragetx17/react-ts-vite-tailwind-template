import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Avatar, Badge } from "../../components/ui";


const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
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
      options: ["solid", "flat", "faded", "shadow"],
    },
    placement: {
      control: "select",
      options: ["top-right", "top-left", "bottom-right", "bottom-left"],
    },
    shape: {
      control: "select",
      options: ["circle", "rectangle"],
    },
    isInvisible: {
      control: "boolean",
    },
    showOutline: {
      control: "boolean",
    },
    isOneChar: {
      control: "boolean",
    },
    children: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

const avatarBoxChild = (
  <Avatar
    size="md"
    radius="lg"
    name="Jane Doe"
    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=128&h=128&q=80"
  />
);

const avatarChild = (
  <Avatar
    size="md"
    name="Jane Doe"
    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=128&h=128&q=80"
  />
);

export const Default: Story = {
  args: {
    content: "5",
    color: "danger",
    children: avatarBoxChild,
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex gap-10 items-center">
      <Badge {...args} size="sm" content="5">
        {avatarBoxChild}
      </Badge>
      <Badge {...args} size="md" content="5">
        {avatarBoxChild}
      </Badge>
      <Badge {...args} size="lg" content="5">
        {avatarBoxChild}
      </Badge>
    </div>
  ),
};

export const Colors: Story = {
  render: (args) => (
    <div className="flex gap-8">
      <Badge {...args} color="default" content="1">
        {avatarBoxChild}
      </Badge>
      <Badge {...args} color="primary" content="1">
        {avatarBoxChild}
      </Badge>
      <Badge {...args} color="secondary" content="1">
        {avatarBoxChild}
      </Badge>
      <Badge {...args} color="success" content="1">
        {avatarBoxChild}
      </Badge>
      <Badge {...args} color="warning" content="1">
        {avatarBoxChild}
      </Badge>
      <Badge {...args} color="danger" content="1">
        {avatarBoxChild}
      </Badge>
    </div>
  ),
};

const avatarSolid = (
  <Avatar
    size="md"
    radius="lg"
    name="Solid Variant"
    src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=128&h=128&q=80"
  />
);

const avatarFlat = (
  <Avatar
    size="md"
    radius="lg"
    name="Flat Variant"
    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=128&h=128&q=80"
  />
);

const avatarFaded = (
  <Avatar
    size="md"
    radius="lg"
    name="Faded Variant"
    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=128&h=128&q=80"
  />
);

const avatarShadow = (
  <Avatar
    size="md"
    radius="lg"
    name="Shadow Variant"
    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=128&h=128&q=80"
  />
);

export const Variants: Story = {
  render: (args) => (
    <div className="flex gap-8">
      <Badge {...args} variant="solid" color="warning" content="5">
        {avatarSolid}
      </Badge>
      <Badge {...args} variant="flat" color="warning" content="5">
        {avatarFlat}
      </Badge>
      <Badge {...args} variant="faded" color="warning" content="5">
        {avatarFaded}
      </Badge>
      <Badge {...args} variant="shadow" color="warning" content="5">
        {avatarShadow}
      </Badge>
    </div>
  ),
};

export const Placements: Story = {
  render: (args) => (
    <div className="grid grid-cols-2 gap-10 p-4">
      <Badge {...args} placement="top-left" content="New">
        {avatarBoxChild}
      </Badge>
      <Badge {...args} placement="top-right" content="New">
        {avatarBoxChild}
      </Badge>
      <Badge {...args} placement="bottom-left" content="New">
        {avatarBoxChild}
      </Badge>
      <Badge {...args} placement="bottom-right" content="New">
        {avatarBoxChild}
      </Badge>
    </div>
  ),
};

export const Dot: Story = {
  args: {
    color: "success",
    children: avatarBoxChild,
  },
};

export const Shapes: Story = {
  render: (args) => (
    <div className="flex gap-12 p-4">
      {/* Rectangle Shape */}
      <Badge {...args} shape="rectangle" color="danger" content="5">
        {avatarBoxChild}
      </Badge>
      
      {/* Circle Shape — offset sits diagonally aligned to the circle perimeter */}
      <Badge {...args} shape="circle" color="danger" content="5">
        {avatarChild}
      </Badge>
    </div>
  ),
};

export const Invisible: Story = {
  render: () => {
    const [invisible, setInvisible] = React.useState(false);
    return (
      <div className="flex flex-col gap-4 items-center">
        <Badge content="4" color="danger" isInvisible={invisible}>
          {avatarBoxChild}
        </Badge>
        <button
          onClick={() => setInvisible(!invisible)}
          className="px-3 py-1.5 text-xs font-semibold bg-neutral-200 dark:bg-neutral-800 rounded-md hover:opacity-90 transition"
        >
          Toggle Invisible
        </button>
      </div>
    );
  },
};
