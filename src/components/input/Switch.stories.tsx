import type { Meta, StoryObj } from "@storybook/react";
import { FaCheck, FaMoon, FaSun, FaXmark } from "react-icons/fa6";
import { useState } from "react";
import Switch from "./Switch";

const meta: Meta<typeof Switch> = {
  title: "Components/Input/Switch",
  component: Switch,
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
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

const SwitchWithState = (args: any) => {
  const [value, setValue] = useState(args.value ?? false);
  return (
    <Switch
      {...args}
      value={value}
      onChange={(val) => {
        setValue(val);
        args.onChange?.(val);
      }}
    />
  );
};

export const Default: Story = {
  render: (args) => <SwitchWithState {...args} />,
  args: {
    label: "Automatic updates",
  },
};

export const WithLabels: Story = {
  render: (args) => <SwitchWithState {...args} />,
  args: {
    label: "Bluetooth",
    activeLabel: "Enabled",
    inactiveLabel: "Disabled",
  },
};

export const Colors: Story = {
  render: (args) => (
    <div className="flex gap-8">
      <SwitchWithState {...args} color="default" label="Default" value={true} />
      <SwitchWithState {...args} color="primary" label="Primary" value={true} />
      <SwitchWithState {...args} color="secondary" label="Secondary" value={true} />
      <SwitchWithState {...args} color="success" label="Success" value={true} />
      <SwitchWithState {...args} color="warning" label="Warning" value={true} />
      <SwitchWithState {...args} color="danger" label="Danger" value={true} />
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex gap-8">
      <SwitchWithState {...args} size="sm" label="Small" value={true} />
      <SwitchWithState {...args} size="md" label="Medium" value={true} />
      <SwitchWithState {...args} size="lg" label="Large" value={true} />
    </div>
  ),
};

export const WithIcons: Story = {
  render: (args) => <SwitchWithState {...args} />,
  args: {
    label: "Dark mode",
    startContent: <FaMoon className="w-3 h-3" aria-hidden />,
    endContent: <FaSun className="w-3 h-3" aria-hidden />,
  },
};

export const ThumbIcons: Story = {
  render: (args) => <SwitchWithState {...args} />,
  args: {
    label: "Custom thumb icons",
    thumbIcon: (checked: boolean) =>
      checked ? (
        <FaCheck className="w-3 h-3" aria-hidden />
      ) : (
        <FaXmark className="w-3 h-3" aria-hidden />
      ),
  },
};

export const Disabled: Story = {
  render: (args) => (
    <div className="flex gap-8 w-[300px]">
      <SwitchWithState {...args} label="Disabled (Off)" disabled={true} value={false} />
      <SwitchWithState {...args} label="Disabled (On)" disabled={true} value={true} />
    </div>
  ),
};

export const WithError: Story = {
  render: (args) => <SwitchWithState {...args} />,
  args: {
    label: "Error Switch",
    error: "This field is required",
    touched: true,
  },
};
