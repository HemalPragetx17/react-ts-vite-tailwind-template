import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import CustomSwitch from "./CustomSwitch";

const meta: Meta<typeof CustomSwitch> = {
  title: "Components/Input/CustomSwitch",
  component: CustomSwitch,
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
type Story = StoryObj<typeof CustomSwitch>;

const SwitchWithState = (args: any) => {
  const [value, setValue] = useState(args.value ?? false);
  return (
    <CustomSwitch
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
    startContent: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    ),
    endContent: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    ),
  },
};

export const ThumbIcons: Story = {
  render: (args) => <SwitchWithState {...args} />,
  args: {
    label: "Custom thumb icons",
    thumbIcon: (checked: boolean) => (
      checked ? (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ) : (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      )
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
