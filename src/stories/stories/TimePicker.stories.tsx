import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { TimePicker as TimePickerComponent } from "../../components/ui";

const meta: Meta<typeof TimePickerComponent> = {
  title: "Components/TimePicker",
  component: TimePickerComponent,
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
type Story = StoryObj<typeof TimePickerComponent>;

const TimePicker = (args: any) => {
  const [value, setValue] = useState<any>(args.value ?? "");

  return (
    <div className="w-[320px]">
      <TimePickerComponent
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
  render: (args) => (
    <div className="w-[320px]">
      <TimePicker {...args} />
    </div>
  ),
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
        <TimePicker label="Normal Scroll Picker" mode="normal" isClearable={true} value="03:30 PM" />
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Mode: Clock (Dial Selector)</span>
        <TimePicker label="Clock Dial Picker" mode="clock" isClearable={true} value="03:30 PM" />
      </div>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-[600px]">
      <div className="flex gap-4">
        <TimePicker label="Flat" variant="flat" isClearable={true} />
        <TimePicker label="Bordered" variant="bordered" isClearable={true} />
      </div>
      <div className="flex gap-4">
        <TimePicker label="Underlined" variant="underlined" isClearable={true} />
        <TimePicker label="Faded" variant="faded" isClearable={true} />
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-6 w-[600px]">
      <TimePicker label="Size SM" size="sm" isClearable={true} />
      <TimePicker label="Size MD" size="md" isClearable={true} />
      <TimePicker label="Size LG" size="lg" isClearable={true} />
    </div>
  ),
};

export const Radiuses: Story = {
  render: () => (
    <div className="flex gap-4 w-[800px]">
      <TimePicker label="NONE" radius="none" isClearable={true} />
      <TimePicker label="SM" radius="sm" isClearable={true} />
      <TimePicker label="MD" radius="md" isClearable={true} />
      <TimePicker label="LG" radius="lg" isClearable={true} />
      <TimePicker label="FULL" radius="full" isClearable={true} />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-[600px]">
      <div className="flex gap-4">
        <TimePicker label="Default" color="default" isClearable={true} />
        <TimePicker label="Primary" color="primary" isClearable={true} />
      </div>
      <div className="flex gap-4">
        <TimePicker label="Secondary" color="secondary" isClearable={true} />
        <TimePicker label="Success" color="success" isClearable={true} />
      </div>
      <div className="flex gap-4">
        <TimePicker label="Warning" color="warning" isClearable={true} />
        <TimePicker label="Danger" color="danger" isClearable={true} />
      </div>
    </div>
  ),
};

export const LabelPlacements: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-[600px]">
      <div className="flex gap-4 items-end">
        <TimePicker label="Inside (Floating)" labelPlacement="inside" isClearable={true} />
        <TimePicker label="Inside (static with placeholder)" labelPlacement="inside" isClearable={true} placeholder="Select Time" />
      </div>
      <div className="flex gap-4 items-end">
        <TimePicker label="Outside (Floating)" isClearable={true} />
        <TimePicker label="Outside (static with placeholder)" isClearable={true} placeholder="Select Time" />
      </div>
      <div className="flex gap-4 items-end">
        <TimePicker label="Outlined" labelPlacement="outlined" isClearable={true} />
        <TimePicker label="Outlined (static with placeholder)" labelPlacement="outlined" isClearable={true} placeholder="Select Time" />
      </div>
      <div className="flex gap-4 items-end">
        <TimePicker label="Outside Top" labelPlacement="outside-top" isClearable={true} />
        <TimePicker label="Outside Left" labelPlacement="outside-left" isClearable={true} />
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <div className="w-[320px]">
      <TimePicker {...args} />
    </div>
  ),
  args: {
    label: "Disabled Time Picker",
    disabled: true,
    value: "03:30 PM",
  },
};

export const ErrorState: Story = {
  render: (args) => (
    <div className="w-[320px]">
      <TimePicker {...args} />
    </div>
  ),
  args: {
    label: "Meeting Time",
    error: "Time is outside office hours",
    touched: true,
  },
};
