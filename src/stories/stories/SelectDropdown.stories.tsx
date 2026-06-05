import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { SelectDropdown } from "../../components/ui";

const meta: Meta<typeof SelectDropdown> = {
  title: "Components/SelectDropdown",
  component: SelectDropdown,
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
    isMulti: { control: "boolean" },
    isClearable: { control: "boolean" },
    isDisabled: { control: "boolean" },
    isSearchable: { control: "boolean" },
    showCheckbox: { control: "boolean" },
    isLoading: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof SelectDropdown>;

const options = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
  { label: "Dragonfruit", value: "dragonfruit" },
  { label: "Elderberry", value: "elderberry" },
];

const SelectWithState = (args: any) => {
  const [value, setValue] = useState(args.isMulti ? [] : "");

  // Mock Formik props
  const field = {
    name: args.name || "select",
    value: value,
    onChange: () => { },
    onBlur: () => { },
  };

  const form = {
    setFieldValue: (name: string, val: any) => {
      console.log("🚀 ~ SelectWithState ~ name:", name)
      setValue(val);
      args.onChange?.(val);
    },
    setFieldTouched: () => { },
    touched: {},
    errors: {},
  };

  return (
    <div className="w-[300px]">
      <SelectDropdown
        {...args}
        field={field as any}
        form={form as any}
      />
    </div>
  );
};

export const Default: Story = {
  render: (args) => <SelectWithState {...args} />,
  args: {
    label: "Select Fruit",
    options,
    placeholder: "Choose a fruit...",
  },
};

export const MultiSelect: Story = {
  render: (args) => <SelectWithState {...args} />,
  args: {
    label: "Select Fruits",
    options,
    isMulti: true,
    placeholder: "Choose fruits...",
  },
};

export const WithCheckboxes: Story = {
  render: (args) => <SelectWithState {...args} />,
  args: {
    label: "Select Fruits",
    options,
    isMulti: true,
    showCheckbox: true,
    placeholder: "Choose fruits...",
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex gap-4 items-end w-[800px]">
      <SelectWithState {...args} size="sm" label="Small" placeholder="Choose fruit..." />
      <SelectWithState {...args} size="md" label="Medium" placeholder="Choose fruit..." />
      <SelectWithState {...args} size="lg" label="Large" placeholder="Choose fruit..." />
    </div>
  ),
  args: {
    options,
  },
};

export const Radiuses: Story = {
  render: (args) => (
    <div className="flex gap-4 items-end w-[850px]">
      <SelectWithState {...args} radius="none" label="Radius None" placeholder="Choose fruit..." />
      <SelectWithState {...args} radius="sm" label="Radius Small" placeholder="Choose fruit..." />
      <SelectWithState {...args} radius="md" label="Radius Medium" placeholder="Choose fruit..." />
      <SelectWithState {...args} radius="lg" label="Radius Large" placeholder="Choose fruit..." />
      <SelectWithState {...args} radius="full" label="Radius Full" placeholder="Choose fruit..." />
    </div>
  ),
  args: {
    options,
    variant: "bordered",
  },
};

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-col gap-8 w-[600px]">
      <div className="flex gap-4">
        <SelectWithState {...args} variant="flat" label="Flat" labelPlacement="outside" />
        <SelectWithState {...args} variant="bordered" label="Bordered" labelPlacement="outside" />
      </div>
      <div className="flex gap-4">
        <SelectWithState {...args} variant="underlined" label="Underlined" labelPlacement="outside" />
        <SelectWithState {...args} variant="faded" label="Faded" labelPlacement="outside" />
      </div>
    </div>
  ),
  args: {
    options,
  },
};

export const Colors: Story = {
  render: (args) => (
    <div className="flex flex-col gap-8 w-[600px]">
      <div className="flex gap-4">
        <SelectWithState {...args} color="default" label="Default" labelPlacement="outside" />
        <SelectWithState {...args} color="primary" label="Primary" labelPlacement="outside" />
      </div>
      <div className="flex gap-4">
        <SelectWithState {...args} color="secondary" label="Secondary" labelPlacement="outside" />
        <SelectWithState {...args} color="success" label="Success" labelPlacement="outside" />
      </div>
      <div className="flex gap-4">
        <SelectWithState {...args} color="warning" label="Warning" labelPlacement="outside" />
        <SelectWithState {...args} color="danger" label="Danger" labelPlacement="outside" />
      </div>
    </div>
  ),
  args: {
    options,
    isMulti: true,
  },
};

export const LabelPlacements: Story = {
  render: (args) => (
    <div className="flex flex-col gap-8 w-[600px]">
      <div className="flex gap-4 items-end">
        <SelectWithState {...args} isClearable labelPlacement="inside" label="Inside (Floating)" />
        <SelectWithState {...args} isClearable labelPlacement="inside" label="Inside (Static with Placeholder)" placeholder="Choose fruit..." />
      </div>
      <div className="flex gap-4 items-end">
        <SelectWithState {...args} isClearable labelPlacement="outside" label="Outside (Floating)" />
        <SelectWithState {...args} isClearable labelPlacement="outside" label="Outside (Static with Placeholder)" placeholder="Choose fruit..." />
      </div>
      <div className="flex gap-4 items-end">
        <SelectWithState {...args} labelPlacement="outside-top" label="Outside Top (Static)" placeholder="Choose fruit..." />
        <SelectWithState {...args} labelPlacement="outside-left" label="Outside Left (Static)" placeholder="Choose fruit..." />
      </div>
    </div>
  ),
  args: {
    options,
    variant: "bordered",
  },
};

export const Loading: Story = {
  render: (args) => <SelectWithState {...args} />,
  args: {
    label: "Loading Select",
    options,
    isLoading: true,
  },
};

export const Disabled: Story = {
  render: (args) => <SelectWithState {...args} />,
  args: {
    label: "Disabled Select",
    options,
    isDisabled: true,
  },
};

export const DisabledOption: Story = {
  render: (args) => <SelectWithState {...args} />,
  args: {
    label: "Disabled Option Select",
    options: options.map((opt, idx) => ({
      ...opt,
      isDisabled: idx === 1 || idx === 3,
    })),
    placeholder: "Choose a fruit...",
  },
};

export const ErrorState: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    const field = { name: "select", value };
    const form = {
      setFieldValue: (_: string, val: any) => setValue(val),
      setFieldTouched: () => { },
      touched: { select: true },
      errors: { select: "Please select an option" },
    };
    return (
      <div className="w-[300px]">
        <SelectDropdown
          {...args}
          field={field as any}
          form={form as any}
        />
      </div>
    );
  },
  args: {
    label: "Select Fruit",
    options,
  },
};
