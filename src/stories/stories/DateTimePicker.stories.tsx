import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { DateTimePicker as DateTimePickerComponent } from "../../components/ui";

const meta: Meta<typeof DateTimePickerComponent> = {
  title: "Components/DateTimePicker",
  component: DateTimePickerComponent,
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
    disabled: { control: "boolean" },
    isClearable: { control: "boolean" },
    timeMode: {
      control: "select",
      options: ["normal", "clock"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof DateTimePickerComponent>;

const DateTimePicker = (args: any) => {
  const [value, setValue] = useState<Date | null>(args.value ?? null);

  return (
    <div className="w-[380px]">
      <DateTimePickerComponent
        {...args}
        value={value}
        onChange={(val) => {
          setValue(val);
          args.onChange?.(val);
        }}
      />
    </div>
  );
};

export const Default: Story = {
  render: (args) => (
    <div className="w-[380px]">
      <DateTimePicker {...args} />
    </div>
  ),
  args: {
    label: "Date & Time",
    placeholder: "Select date & time",
    isClearable: true,
  },
};

export const WithValue: Story = {
  render: (args) => (
    <div className="w-[380px]">
      <DateTimePicker {...args} />
    </div>
  ),
  args: {
    label: "Appointment",
    isClearable: true,
    value: new Date(2026, 0, 15, 10, 30),
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-[380px]">
      <DateTimePicker label="Flat" variant="flat" isClearable />
      <DateTimePicker label="Bordered" variant="bordered" isClearable />
      <DateTimePicker label="Underlined" variant="underlined" isClearable />
      <DateTimePicker label="Faded" variant="faded" isClearable />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-[380px]">
      <DateTimePicker label="Size SM" size="sm" isClearable />
      <DateTimePicker label="Size MD" size="md" isClearable />
      <DateTimePicker label="Size LG" size="lg" isClearable />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-[380px]">
      <DateTimePicker label="Default" color="default" isClearable />
      <DateTimePicker label="Primary" color="primary" isClearable />
      <DateTimePicker label="Secondary" color="secondary" isClearable />
      <DateTimePicker label="Success" color="success" isClearable />
      <DateTimePicker label="Warning" color="warning" isClearable />
      <DateTimePicker label="Danger" color="danger" isClearable />
    </div>
  ),
};

export const LabelPlacements: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-x-10 items-end gap-y-6 w-[800px]">
      <DateTimePicker label="Inside (Floating)" labelPlacement="inside" isClearable />
      <DateTimePicker label="Inside (static with placeholder)" labelPlacement="inside" placeholder="Select Time" isClearable />

      <DateTimePicker label="Outside (Floating)" labelPlacement="outside" isClearable />
      <DateTimePicker label="Outside (static with placeholder)" labelPlacement="outside" placeholder="Select Time" isClearable />

      <DateTimePicker label="Outlined" labelPlacement="outlined" isClearable />
      <DateTimePicker label="Outlined (static with placeholder)" labelPlacement="outlined" placeholder="Select Time" isClearable />

      <DateTimePicker label="Outside Top" labelPlacement="outside-top" placeholder="Select Time" isClearable />
      <DateTimePicker label="Outside Left" labelPlacement="outside-left" placeholder="Select Time" isClearable />
    </div>
  ),
};

export const ClockMode: Story = {
  render: (args) => (
    <div className="w-[380px]">
      <DateTimePicker {...args} />
    </div>
  ),
  args: {
    label: "Date & Time (Clock)",
    timeMode: "clock",
    isClearable: true,
  },
};

export const Disabled: Story = {
  render: (args) => (
    <div className="w-[380px]">
      <DateTimePicker {...args} />
    </div>
  ),
  args: {
    label: "Disabled Date & Time",
    disabled: true,
    value: new Date(2026, 0, 15, 14, 0),
  },
};

export const ErrorState: Story = {
  render: (args) => (
    <div className="w-[380px]">
      <DateTimePicker {...args} />
    </div>
  ),
  args: {
    label: "Appointment",
    error: "Please select a valid date and time",
    touched: true,
    isClearable: true,
  },
};
