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

const TimePickerWithState = (props: any) => {
  const [value, setValue] = useState<any>(props.value ?? "");

  return (
    <div className="w-[320px]">
      <TimePicker
        {...props}
        value={value}
        onChange={(val: any) => {
          setValue(val);
          props.onChange?.(val);
        }}
      />
    </div>
  );
};

export const Default: Story = {
  render: () => (
    <TimePickerWithState
      label="Select Time"
      placeholder="Select Time"
      isClearable
    />
  ),
};

export const Modes: Story = {
  render: () => (
    <div className="flex gap-8 w-[600px]">
      <div className="flex flex-col gap-2 flex-1">
        <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Mode: Normal (Scroll Lists)</span>
        <TimePickerWithState label="Normal Scroll Picker" mode="normal" isClearable value="03:30 PM" />
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Mode: Clock (Dial Selector)</span>
        <TimePickerWithState label="Clock Dial Picker" mode="clock" isClearable value="03:30 PM" />
      </div>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-[600px]">
      <div className="flex gap-4">
        <TimePickerWithState label="Flat" variant="flat" isClearable />
        <TimePickerWithState label="Bordered" variant="bordered" isClearable />
      </div>
      <div className="flex gap-4">
        <TimePickerWithState label="Underlined" variant="underlined" isClearable />
        <TimePickerWithState label="Faded" variant="faded" isClearable />
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-6 w-[600px]">
      <TimePickerWithState label="Size SM" size="sm" isClearable />
      <TimePickerWithState label="Size MD" size="md" isClearable />
      <TimePickerWithState label="Size LG" size="lg" isClearable />
    </div>
  ),
};

export const Radiuses: Story = {
  render: () => (
    <div className="flex gap-4 w-[800px]">
      <TimePickerWithState label="NONE" radius="none" isClearable />
      <TimePickerWithState label="SM" radius="sm" isClearable />
      <TimePickerWithState label="MD" radius="md" isClearable />
      <TimePickerWithState label="LG" radius="lg" isClearable />
      <TimePickerWithState label="FULL" radius="full" isClearable />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-[600px]">
      <div className="flex gap-4">
        <TimePickerWithState label="Default" color="default" isClearable />
        <TimePickerWithState label="Primary" color="primary" isClearable />
      </div>
      <div className="flex gap-4">
        <TimePickerWithState label="Secondary" color="secondary" isClearable />
        <TimePickerWithState label="Success" color="success" isClearable />
      </div>
      <div className="flex gap-4">
        <TimePickerWithState label="Warning" color="warning" isClearable />
        <TimePickerWithState label="Danger" color="danger" isClearable />
      </div>
    </div>
  ),
};

export const LabelPlacements: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-[600px]">
      <div className="flex gap-4 items-end">
        <TimePickerWithState label="Inside (Floating)" labelPlacement="inside" isClearable />
        <TimePickerWithState label="Inside (static with placeholder)" labelPlacement="inside" isClearable placeholder="Select Time" />
      </div>
      <div className="flex gap-4 items-end">
        <TimePickerWithState label="Outside (Floating)" isClearable />
        <TimePickerWithState label="Outside (static with placeholder)" isClearable placeholder="Select Time" />
      </div>
      <div className="flex gap-4 items-end">
        <TimePickerWithState label="Outlined" labelPlacement="outlined" isClearable />
        <TimePickerWithState label="Outlined (static with placeholder)" labelPlacement="outlined" isClearable placeholder="Select Time" />
      </div>
      <div className="flex gap-4 items-end">
        <TimePickerWithState label="Outside Top" labelPlacement="outside-top" isClearable />
        <TimePickerWithState label="Outside Left" labelPlacement="outside-left" isClearable />
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <TimePickerWithState
      label="Disabled Time Picker"
      disabled
      value="03:30 PM"
    />
  ),
};

export const ErrorState: Story = {
  render: () => (
    <TimePickerWithState
      label="Meeting Time"
      error="Time is outside office hours"
      touched
    />
  ),
};
