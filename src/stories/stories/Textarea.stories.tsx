import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Textarea } from "../../components/ui";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["flat", "bordered", "underlined", "faded"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    radius: {
      control: "select",
      options: ["none", "sm", "md", "lg", "full"],
    },
    labelPlacement: {
      control: "select",
      options: ["inside", "outside", "outside-left", "outside-top"],
    },
    isClearable: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    disableAutosize: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

const TextareaWithState = (args: any) => {
  const [value, setValue] = useState(args.value ?? "");
  return (
    <Textarea
      {...args}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        args.onChange?.(e);
      }}
    />
  );
};

export const Default: Story = {
  render: (args) => (
    <div className="w-[600px]">
      <TextareaWithState {...args} />
    </div>
  ),
  args: {
    label: "Description",
    placeholder: "Enter your description",
  },
};

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-col gap-8 w-[800px]">
      <div className="flex gap-4">
        <TextareaWithState {...args} variant="flat" label="Flat" />
        <TextareaWithState {...args} variant="bordered" label="Bordered" />
      </div>
      <div className="flex gap-4">
        <TextareaWithState {...args} variant="underlined" label="Underlined" />
        <TextareaWithState {...args} variant="faded" label="Faded" />
      </div>
    </div>
  ),
  args: {
    label: "Description",
    placeholder: "Enter your description",
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex gap-4 w-[800px]">
      <TextareaWithState {...args} size="sm" label="Small" placeholder="Small size" />
      <TextareaWithState {...args} size="md" label="Medium" placeholder="Medium size" />
      <TextareaWithState {...args} size="lg" label="Large" placeholder="Large size" />
    </div>
  ),
};

export const Radiuses: Story = {
  render: (args) => (
    <div className="flex gap-4 w-[800px]">
      <TextareaWithState {...args} radius="none" label="Radius None" placeholder="No radius" />
      <TextareaWithState {...args} radius="sm" label="Radius Small" placeholder="Small radius" />
      <TextareaWithState {...args} radius="md" label="Radius Medium" placeholder="Medium radius" />
      <TextareaWithState {...args} radius="lg" label="Radius Large" placeholder="Large radius" />
      <TextareaWithState {...args} radius="full" label="Radius Full" placeholder="Full radius" />
    </div>
  ),
  args: {
    variant: "bordered",
  },
};

export const LabelPlacements: Story = {
  render: (args) => (
    <div className="flex flex-col gap-8 w-[800px]">
      <div className="flex gap-4">
        <TextareaWithState {...args} labelPlacement="inside" label="Inside (Floating)" />
        <TextareaWithState {...args} labelPlacement="inside" label="Inside (Static with Placeholder)" placeholder="Enter text" />
      </div>
      <div className="flex gap-4">
        <TextareaWithState {...args} labelPlacement="outside" label="Outside (Floating)" />
        <TextareaWithState {...args} labelPlacement="outside" label="Outside (Static with Placeholder)" placeholder="Enter text" />
      </div>
      <TextareaWithState {...args} labelPlacement="outside-top" label="Outside Top (Static)" placeholder="Enter text" />
      <TextareaWithState {...args} labelPlacement="outside-left" label="Outside Left (Static)" placeholder="Enter text" />
    </div>
  ),
  args: {
    variant: "bordered",
  },
};

export const Clearable: Story = {
  render: (args) => (
    <div className="w-[600px]">
      <TextareaWithState {...args} />
    </div>
  ),
  args: {
    label: "Message",
    placeholder: "Type a message...",
    isClearable: true,
  },
};

export const Autosize: Story = {
  render: (args) => (
    <div className="flex gap-4 w-[800px]">
      <TextareaWithState {...args} label="Autosizing Textarea" />
      <TextareaWithState {...args} label="Fixed Textarea (Autosize Disabled)" disableAutosize={true} />
    </div>
  ),
  args: {
    placeholder: "Type text here...",
    minRows: 3,
    maxRows: 6,
  },
};

export const Disabled: Story = {
  render: (args) => (
    <div className="w-[600px]">
      <TextareaWithState {...args} />
    </div>
  ),
  args: {
    label: "Description",
    placeholder: "Enter description",
    disabled: true,
  },
};

export const ErrorState: Story = {
  render: (args) => (
    <div className="w-[600px]">
      <TextareaWithState {...args} />
    </div>
  ),
  args: {
    label: "Description",
    placeholder: "Enter description",
    error: "Description is required",
    touched: true,
  },
};
