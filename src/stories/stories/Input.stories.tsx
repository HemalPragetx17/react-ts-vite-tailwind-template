import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { FaDollarSign, FaEnvelope, FaMagnifyingGlass } from "react-icons/fa6";
import { Input } from "../../components/ui";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
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
    isPasswordToggle: {
      control: "boolean",
    },
    isClearable: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

const InputWithState = (args: any) => {
  const [value, setValue] = useState(args.value ?? "");
  return (
    <Input
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
  render: (args) => <InputWithState {...args} />,
  args: {
    label: "Email",
    placeholder: "Enter your email",
    type: "email",
  },
};

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-col gap-8 w-[800px]">
      <div className="flex gap-4">
        <InputWithState {...args} variant="flat" label="Flat" />
        <InputWithState {...args} variant="bordered" label="Bordered" />
      </div>
      <div className="flex gap-4">
        <InputWithState {...args} variant="underlined" label="Underlined" />
        <InputWithState {...args} variant="faded" label="Faded" />
      </div>
    </div>
  ),
  args: {
    placeholder: "Enter your name",
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex gap-4 w-[800px]">
      <InputWithState {...args} size="sm" label="Small" placeholder="Enter small input" />
      <InputWithState {...args} size="md" label="Medium" placeholder="Enter medium input" />
      <InputWithState {...args} size="lg" label="Large" placeholder="Enter large input" />
    </div>
  ),
};

export const Radiuses: Story = {
  render: (args) => (
    <div className="flex gap-4 w-[800px]">
      <InputWithState {...args} radius="none" label="Radius None" placeholder="No border radius" />
      <InputWithState {...args} radius="sm" label="Radius Small" placeholder="Small border radius" />
      <InputWithState {...args} radius="md" label="Radius Medium" placeholder="Medium border radius" />
      <InputWithState {...args} radius="lg" label="Radius Large" placeholder="Large border radius" />
      <InputWithState {...args} radius="full" label="Radius Full" placeholder="Full border radius" />
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
        <InputWithState {...args} labelPlacement="inside" label="Inside (Floating)" />
        <InputWithState {...args} labelPlacement="inside" label="Inside (static with placeholder)" placeholder="Enter value" />
      </div>
      <div className="flex gap-4">
        <InputWithState {...args} labelPlacement="outside" label="Outside (Floating)" />
        <InputWithState {...args} labelPlacement="outside" label="Outside (static with placeholder)" placeholder="Enter value" />
      </div>
      <InputWithState {...args} labelPlacement="outside-top" label="Outside Top" placeholder="Enter value" />
      <InputWithState {...args} labelPlacement="outside-left" label="Outside Left" placeholder="Enter value" />
    </div>
  ),
  args: {
    variant: "bordered",
  },
};

export const Password: Story = {
  render: (args) => <InputWithState {...args} />,
  args: {
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
    isPasswordToggle: true,
  },
};

export const WithIcons: Story = {
  render: (args) => (
    <div className="flex flex-col gap-6 w-[800px]">
      <div className="flex gap-4">
        <InputWithState
          {...args}
          label="Search"
          placeholder="Search users..."
          startContent={<FaMagnifyingGlass className="w-4 h-4 text-neutral-400" aria-hidden />}
        />
        <InputWithState
          {...args}
          label="Email"
          placeholder="you@example.com"
          type="email"
          startContent={<FaEnvelope className="w-4 h-4 text-neutral-400" aria-hidden />}
        />
      </div>
      <div className="flex gap-4">
        <InputWithState
          {...args}
          label="Price (Start)"
          placeholder="0.00"
          startContent={<FaDollarSign className="w-4 h-4 text-neutral-400" aria-hidden />}
        />
        <InputWithState
          {...args}
          label="Price (End)"
          placeholder="0.00"
          endContent={<span className="text-neutral-400 text-sm">USD</span>}
        />
        <InputWithState
          {...args}
          label="Price (Both)"
          placeholder="0.00"
          startContent={<FaDollarSign className="w-4 h-4 text-neutral-400" aria-hidden />}
          endContent={<span className="text-neutral-400 text-sm">USD</span>}
        />
      </div>
    </div>
  ),
};

export const Clearable: Story = {
  render: (args) => <InputWithState {...args} />,
  args: {
    label: "Clearable Input",
    placeholder: "Type something...",
    isClearable: true,
  },
};

export const Disabled: Story = {
  render: (args) => <InputWithState {...args} />,
  args: {
    label: "Disabled Input",
    placeholder: "This input is disabled",
    disabled: true,
    value: "Read-only value",
  },
};

export const ErrorState: Story = {
  render: (args) => <InputWithState {...args} />,
  args: {
    label: "Email",
    placeholder: "Enter your email",
    error: "Invalid email address",
    touched: true,
    value: "invalid-email",
  },
};
