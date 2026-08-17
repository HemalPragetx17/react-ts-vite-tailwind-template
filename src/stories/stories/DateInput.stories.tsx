import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { DateInput as DateInputComponent } from "../../components/ui";

const meta: Meta<typeof DateInputComponent> = {
  title: "Components/DateInput",
  component: DateInputComponent,
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
    disabled: {
      control: "boolean",
    },
    selectsRange: {
      control: "boolean",
    },
    isClearable: {
      control: "boolean",
    },
    enableMonthYearPicker: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof DateInputComponent>;

const DateInput = (args: any) => {
  const [value, setValue] = useState<any>(args.value ?? "");

  return (
    <div className="w-[320px]">
      <DateInputComponent
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
      <DateInput {...args} />
    </div>
  ),
  args: {
    label: "Select Date",
    placeholder: "Select Date",
    isClearable: true,
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-[600px]">
      <div className="flex gap-4">
        <DateInput label="Flat" variant="flat" isClearable={true} />
        <DateInput label="Bordered" variant="bordered" isClearable={true} />
      </div>
      <div className="flex gap-4">
        <DateInput label="Underlined" variant="underlined" isClearable={true} />
        <DateInput label="Faded" variant="faded" isClearable={true} />
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-6 w-[600px]">
      <DateInput label="Size SM" size="sm" isClearable={true} />
      <DateInput label="Size MD" size="md" isClearable={true} />
      <DateInput label="Size LG" size="lg" isClearable={true} />
    </div>
  ),
};

export const Radiuses: Story = {
  render: () => (
    <div className="flex gap-4 w-[800px]">
      <DateInput label="NONE" radius="none" isClearable={true} />
      <DateInput label="SM" radius="sm" isClearable={true} />
      <DateInput label="MD" radius="md" isClearable={true} />
      <DateInput label="LG" radius="lg" isClearable={true} />
      <DateInput label="FULL" radius="full" isClearable={true} />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-[600px]">
      <div className="flex gap-4">
        <DateInput label="Default" color="default" isClearable={true} />
        <DateInput label="Primary" color="primary" isClearable={true} />
      </div>
      <div className="flex gap-4">
        <DateInput label="Secondary" color="secondary" isClearable={true} />
        <DateInput label="Success" color="success" isClearable={true} />
      </div>
      <div className="flex gap-4">
        <DateInput label="Warning" color="warning" isClearable={true} />
        <DateInput label="Danger" color="danger" isClearable={true} />
      </div>
    </div>
  ),
};

export const LabelPlacements: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-[600px]">
      <div className="flex gap-4 items-end">
        <DateInput label="Inside (Floating)" labelPlacement="inside" isClearable={true} />
        <DateInput label="Inside (static with placeholder)" labelPlacement="inside" isClearable={true} placeholder="Select Date" />
      </div>
      <div className="flex gap-4 items-end">
        <DateInput label="Outside (Floating)" isClearable={true} />
        <DateInput label="Outside (static with placeholder)" isClearable={true} placeholder="Select Date" />
      </div>
      <div className="flex gap-4 items-end">
        <DateInput label="Outlined" labelPlacement="outlined" isClearable={true} />
        <DateInput label="Outlined (static with placeholder)" labelPlacement="outlined" isClearable={true} placeholder="Select Date" />
      </div>
      <div className="flex gap-4 items-end">
        <DateInput label="Outside Top" labelPlacement="outside-top" isClearable={true} />
        <DateInput label="Outside Left" labelPlacement="outside-left" isClearable={true} />
      </div>
    </div>
  ),
};

export const RangePicker: Story = {
  render: (args) => (
    <div className="w-[320px]">
      <DateInput {...args} />
    </div>
  ),
  args: {
    label: "Select Range",
    selectsRange: true,
    isClearable: true,
  },
};

export const Disabled: Story = {
  render: (args) => (
    <div className="w-[320px]">
      <DateInput {...args} />
    </div>
  ),
  args: {
    label: "Disabled Date Picker",
    disabled: true,
    value: "2026-05-26",
  },
};

export const ErrorState: Story = {
  render: (args) => (
    <div className="w-[320px]">
      <DateInput {...args} />
    </div>
  ),
  args: {
    label: "Birth Date",
    error: "You must be at least 18 years old",
    touched: true,
  },
};
