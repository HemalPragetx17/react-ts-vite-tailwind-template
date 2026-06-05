import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { DateInput } from "../../components/ui";

const meta: Meta<typeof DateInput> = {
  title: "Components/DateInput",
  component: DateInput,
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
      options: ["inside", "outside", "outside-left", "outside-top"],
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
type Story = StoryObj<typeof DateInput>;

const DatePickerWithState = (args: any) => {
  const [value, setValue] = useState<any>(args.value ?? "");

  return (
    <div className="w-[320px]">
      <DateInput
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
  render: (args) => <DatePickerWithState {...args} />,
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
        <DatePickerWithState label="Flat" variant="flat" isClearable={true} />
        <DatePickerWithState label="Bordered" variant="bordered" isClearable={true} />
      </div>
      <div className="flex gap-4">
        <DatePickerWithState label="Underlined" variant="underlined" isClearable={true} />
        <DatePickerWithState label="Faded" variant="faded" isClearable={true} />
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-6 w-[600px]">
      {(["sm", "md", "lg"] as const).map((size) => (
        <DatePickerWithState
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
        <DatePickerWithState
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
        <DatePickerWithState label="Default" color="default" isClearable={true} />
        <DatePickerWithState label="Primary" color="primary" isClearable={true} />
      </div>
      <div className="flex gap-4">
        <DatePickerWithState label="Secondary" color="secondary" isClearable={true} />
        <DatePickerWithState label="Success" color="success" isClearable={true} />
      </div>
      <div className="flex gap-4">
        <DatePickerWithState label="Warning" color="warning" isClearable={true} />
        <DatePickerWithState label="Danger" color="danger" isClearable={true} />
      </div>
    </div>
  ),
};

export const LabelPlacements: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-[600px]">
      <div className="flex gap-4 items-end">
        <DatePickerWithState label="Inside (Floating)" labelPlacement="inside" isClearable={true} />
        <DatePickerWithState label="Inside (static with placeholder)" labelPlacement="inside" isClearable={true} placeholder="Select Date" />
      </div>
      <div className="flex gap-4 items-end">
        <DatePickerWithState label="Outside (Floating)" isClearable={true} />
        <DatePickerWithState label="Outside (static with placeholder)" isClearable={true} placeholder="Select Date" />
      </div>
      <div className="flex gap-4 items-end">
        <DatePickerWithState label="Outside Top" labelPlacement="outside-top" isClearable={true} />
        <DatePickerWithState label="Outside Left" labelPlacement="outside-left" isClearable={true} />
      </div>
    </div>
  ),
};

export const RangePicker: Story = {
  render: (args) => <DatePickerWithState {...args} />,
  args: {
    label: "Select Range",
    selectsRange: true,
    isClearable: true,
  },
};

export const Disabled: Story = {
  render: (args) => <DatePickerWithState {...args} />,
  args: {
    label: "Disabled Date Picker",
    disabled: true,
    value: "2026-05-26",
  },
};

export const ErrorState: Story = {
  render: (args) => <DatePickerWithState {...args} />,
  args: {
    label: "Birth Date",
    error: "You must be at least 18 years old",
    touched: true,
  },
};
