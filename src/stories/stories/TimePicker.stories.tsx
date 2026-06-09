import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { TimePicker } from "../../components/ui";

const meta: Meta<typeof TimePicker> = {
  title: "Components/TimePicker",
  component: TimePicker,
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
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "success", "warning", "danger"],
    },
    labelPlacement: {
      control: "select",
      options: ["inside", "outside", "outside-left", "outside-top", "outlined"],
    },
    mode: {
      control: "select",
      options: ["normal", "clock"],
    },
    disabled: {
      control: "boolean",
    },
    isClearable: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof TimePicker>;

const TimePickerWithState = (args: any) => {
  const [value, setValue] = useState<any>(args.value ?? "");

  return (
    <div className="w-[320px]">
      <TimePicker
        {...args}
        value={value}
        onChange={(val: any) => {
          setValue(val);
          args.onChange?.(val);
        }}
      />
    </div>
  );
};

export const Default: Story = {
  render: (args) => <TimePickerWithState {...args} />,
  args: {
    label: "Select Time",
    placeholder: "Select Time",
    isClearable: true,
  },
};

export const Modes: Story = {
  render: () => (
    <div className="flex gap-8 w-[600px]">
      <div className="flex flex-col gap-2 flex-1">
        <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Mode: Normal (Scroll Lists)</span>
        <TimePickerWithState label="Normal Scroll Picker" mode="normal" isClearable={true} value="03:30 PM" />
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Mode: Clock (Dial Selector)</span>
        <TimePickerWithState label="Clock Dial Picker" mode="clock" isClearable={true} value="03:30 PM" />
      </div>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-[600px]">
      <div className="flex gap-4">
        <TimePickerWithState label="Flat" variant="flat" isClearable={true} />
        <TimePickerWithState label="Bordered" variant="bordered" isClearable={true} />
      </div>
      <div className="flex gap-4">
        <TimePickerWithState label="Underlined" variant="underlined" isClearable={true} />
        <TimePickerWithState label="Faded" variant="faded" isClearable={true} />
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-6 w-[600px]">
      {(["sm", "md", "lg"] as const).map((size) => (
        <TimePickerWithState
          key={size}
          label={`Size ${size.toUpperCase()}`}
          size={size}
          isClearable={true}
        />
      ))}
    </div>
  ),
};

export const Radiuses: Story = {
  render: () => (
    <div className="flex gap-4 w-[800px]">
      {(["none", "sm", "md", "lg", "full"] as const).map((radius) => (
        <TimePickerWithState
          key={radius}
          label={`${radius.toUpperCase()}`}
          radius={radius}
          isClearable={true}
        />
      ))}
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-[600px]">
      <div className="flex gap-4">
        <TimePickerWithState label="Default" color="default" isClearable={true} />
        <TimePickerWithState label="Primary" color="primary" isClearable={true} />
      </div>
      <div className="flex gap-4">
        <TimePickerWithState label="Secondary" color="secondary" isClearable={true} />
        <TimePickerWithState label="Success" color="success" isClearable={true} />
      </div>
      <div className="flex gap-4">
        <TimePickerWithState label="Warning" color="warning" isClearable={true} />
        <TimePickerWithState label="Danger" color="danger" isClearable={true} />
      </div>
    </div>
  ),
};

export const LabelPlacements: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-[600px]">
      <div className="flex gap-4 items-end">
        <TimePickerWithState label="Inside (Floating)" labelPlacement="inside" isClearable={true} />
        <TimePickerWithState label="Inside (static with placeholder)" labelPlacement="inside" isClearable={true} placeholder="Select Time" />
      </div>
      <div className="flex gap-4 items-end">
        <TimePickerWithState label="Outside (Floating)" isClearable={true} />
        <TimePickerWithState label="Outside (static with placeholder)" isClearable={true} placeholder="Select Time" />
      </div>
      <div className="flex gap-4 items-end">
        <TimePickerWithState label="Outlined" labelPlacement="outlined" isClearable={true} />
        <TimePickerWithState label="Outlined (static with placeholder)" labelPlacement="outlined" isClearable={true} placeholder="Select Time" />
      </div>
      <div className="flex gap-4 items-end">
        <TimePickerWithState label="Outside Top" labelPlacement="outside-top" isClearable={true} />
        <TimePickerWithState label="Outside Left" labelPlacement="outside-left" isClearable={true} />
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  render: (args) => <TimePickerWithState {...args} />,
  args: {
    label: "Disabled Time Picker",
    disabled: true,
    value: "03:30 PM",
  },
};

export const ErrorState: Story = {
  render: (args) => <TimePickerWithState {...args} />,
  args: {
    label: "Meeting Time",
    error: "Time is outside office hours",
    touched: true,
  },
};
