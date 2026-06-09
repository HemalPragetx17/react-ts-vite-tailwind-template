import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { DateTimePicker } from "../../components/ui";

const meta: Meta<typeof DateTimePicker> = {
  title: "Components/DateTimePicker",
  component: DateTimePicker,
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
type Story = StoryObj<typeof DateTimePicker>;

const DateTimePickerWithState = (args: any) => {
  const [value, setValue] = useState<Date | null>(args.value ?? null);

  return (
    <div className="w-[380px]">
      <DateTimePicker
        {...args}
        value={value}
        onChange={(val) => {
          setValue(val);
          args.onChange?.(val);
        }}
      />
      {value && (
        <p className="mt-3 text-xs text-neutral-500 font-mono bg-neutral-100 dark:bg-neutral-800 rounded px-3 py-2">
          Value: {value.toLocaleString()}
        </p>
      )}
    </div>
  );
};

export const Default: Story = {
  render: (args) => <DateTimePickerWithState {...args} />,
  args: {
    label: "Date & Time",
    placeholder: "Select date & time",
    isClearable: true,
  },
};

export const WithValue: Story = {
  render: (args) => <DateTimePickerWithState {...args} />,
  args: {
    label: "Appointment",
    isClearable: true,
    value: new Date(2026, 0, 15, 10, 30),
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-[380px]">
      <DateTimePickerWithState label="Flat" variant="flat" isClearable />
      <DateTimePickerWithState label="Bordered" variant="bordered" isClearable />
      <DateTimePickerWithState label="Underlined" variant="underlined" isClearable />
      <DateTimePickerWithState label="Faded" variant="faded" isClearable />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-[380px]">
      {(["sm", "md", "lg"] as const).map((size) => (
        <DateTimePickerWithState
          key={size}
          label={`Size ${size.toUpperCase()}`}
          size={size}
          isClearable
        />
      ))}
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-[380px]">
      {(["default", "primary", "secondary", "success", "warning", "danger"] as const).map((color) => (
        <DateTimePickerWithState
          key={color}
          label={color.charAt(0).toUpperCase() + color.slice(1)}
          color={color}
          isClearable
        />
      ))}
    </div>
  ),
};

export const LabelPlacements: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-x-10 items-end gap-y-6 w-[800px]">
      <DateTimePickerWithState label="Inside (Floating)" labelPlacement="inside" isClearable />
      <DateTimePickerWithState label="Inside (static with placeholder)" labelPlacement="inside" placeholder="Select Time" isClearable />

      <DateTimePickerWithState label="Outside (Floating)" labelPlacement="outside" isClearable />
      <DateTimePickerWithState label="Outside (static with placeholder)" labelPlacement="outside" placeholder="Select Time" isClearable />

      <DateTimePickerWithState label="Outlined" labelPlacement="outlined" isClearable />
      <DateTimePickerWithState label="Outlined (static with placeholder)" labelPlacement="outlined" placeholder="Select Time" isClearable />

      <DateTimePickerWithState label="Outside Top" labelPlacement="outside-top" placeholder="Select Time" isClearable />
      <DateTimePickerWithState label="Outside Left" labelPlacement="outside-left" placeholder="Select Time" isClearable />
    </div>
  ),
};

export const ClockMode: Story = {
  render: (args) => <DateTimePickerWithState {...args} />,
  args: {
    label: "Date & Time (Clock)",
    timeMode: "clock",
    isClearable: true,
  },
};

export const Disabled: Story = {
  render: (args) => <DateTimePickerWithState {...args} />,
  args: {
    label: "Disabled Date & Time",
    disabled: true,
    value: new Date(2026, 0, 15, 14, 0),
  },
};


export const ErrorState: Story = {
  render: (args) => <DateTimePickerWithState {...args} />,
  args: {
    label: "Appointment",
    error: "Please select a valid date and time",
    touched: true,
    isClearable: true,
  },
};
