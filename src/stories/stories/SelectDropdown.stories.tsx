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
      options: ["inside", "outside", "outside-left", "outside-top", "outlined"],
    },
    isMulti: { control: "boolean" },
    isClearable: { control: "boolean" },
    isDisabled: { control: "boolean" },
    isSearchable: { control: "boolean" },
    showCheckbox: { control: "boolean" },
    isLoading: { control: "boolean" },
    options: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof SelectDropdown>;

const SelectDropdownWithState = (args: any) => {
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
      console.log("🚀 ~ SelectDropdownWithState ~ name:", name);
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
  render: () => {
    const options = [
      { label: "Apple", value: "apple" },
      { label: "Banana", value: "banana" },
      { label: "Cherry", value: "cherry" },
      { label: "Dragonfruit", value: "dragonfruit" },
      { label: "Elderberry", value: "elderberry" },
    ];
    return (
      <SelectDropdownWithState
        label="Select Fruit"
        options={options}
        placeholder="Choose a fruit..."
      />
    );
  },
};

export const MultiSelect: Story = {
  render: () => {
    const options = [
      { label: "Apple", value: "apple" },
      { label: "Banana", value: "banana" },
      { label: "Cherry", value: "cherry" },
      { label: "Dragonfruit", value: "dragonfruit" },
      { label: "Elderberry", value: "elderberry" },
    ];
    return (
      <SelectDropdownWithState
        label="Select Fruits"
        options={options}
        isMulti
        placeholder="Choose fruits..."
      />
    );
  },
};

export const WithCheckboxes: Story = {
  render: () => {
    const options = [
      { label: "Apple", value: "apple" },
      { label: "Banana", value: "banana" },
      { label: "Cherry", value: "cherry" },
      { label: "Dragonfruit", value: "dragonfruit" },
      { label: "Elderberry", value: "elderberry" },
    ];
    return (
      <SelectDropdownWithState
        label="Select Fruits"
        options={options}
        isMulti
        showCheckbox
        placeholder="Choose fruits..."
      />
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const options = [
      { label: "Apple", value: "apple" },
      { label: "Banana", value: "banana" },
      { label: "Cherry", value: "cherry" },
      { label: "Dragonfruit", value: "dragonfruit" },
      { label: "Elderberry", value: "elderberry" },
    ];
    return (
      <div className="flex gap-4 items-end w-[800px]">
        <SelectDropdownWithState options={options} size="sm" label="Small" placeholder="Choose fruit..." />
        <SelectDropdownWithState options={options} size="md" label="Medium" placeholder="Choose fruit..." />
        <SelectDropdownWithState options={options} size="lg" label="Large" placeholder="Choose fruit..." />
      </div>
    );
  },
};

export const Radiuses: Story = {
  render: () => {
    const options = [
      { label: "Apple", value: "apple" },
      { label: "Banana", value: "banana" },
      { label: "Cherry", value: "cherry" },
      { label: "Dragonfruit", value: "dragonfruit" },
      { label: "Elderberry", value: "elderberry" },
    ];
    return (
      <div className="flex gap-4 items-end w-[850px]">
        <SelectDropdownWithState options={options} variant="bordered" radius="none" label="Radius None" placeholder="Choose fruit..." />
        <SelectDropdownWithState options={options} variant="bordered" radius="sm" label="Radius Small" placeholder="Choose fruit..." />
        <SelectDropdownWithState options={options} variant="bordered" radius="md" label="Radius Medium" placeholder="Choose fruit..." />
        <SelectDropdownWithState options={options} variant="bordered" radius="lg" label="Radius Large" placeholder="Choose fruit..." />
        <SelectDropdownWithState options={options} variant="bordered" radius="full" label="Radius Full" placeholder="Choose fruit..." />
      </div>
    );
  },
};

export const Variants: Story = {
  render: () => {
    const options = [
      { label: "Apple", value: "apple" },
      { label: "Banana", value: "banana" },
      { label: "Cherry", value: "cherry" },
      { label: "Dragonfruit", value: "dragonfruit" },
      { label: "Elderberry", value: "elderberry" },
    ];
    return (
      <div className="flex flex-col gap-8 w-[600px]">
        <div className="flex gap-4">
          <SelectDropdownWithState options={options} variant="flat" label="Flat" labelPlacement="outside" />
          <SelectDropdownWithState options={options} variant="bordered" label="Bordered" labelPlacement="outside" />
        </div>
        <div className="flex gap-4">
          <SelectDropdownWithState options={options} variant="underlined" label="Underlined" labelPlacement="outside" />
          <SelectDropdownWithState options={options} variant="faded" label="Faded" labelPlacement="outside" />
        </div>
      </div>
    );
  },
};

export const Colors: Story = {
  render: () => {
    const options = [
      { label: "Apple", value: "apple" },
      { label: "Banana", value: "banana" },
      { label: "Cherry", value: "cherry" },
      { label: "Dragonfruit", value: "dragonfruit" },
      { label: "Elderberry", value: "elderberry" },
    ];
    return (
      <div className="flex flex-col gap-8 w-[600px]">
        <div className="flex gap-4">
          <SelectDropdownWithState options={options} isMulti color="default" label="Default" labelPlacement="outside" />
          <SelectDropdownWithState options={options} isMulti color="primary" label="Primary" labelPlacement="outside" />
        </div>
        <div className="flex gap-4">
          <SelectDropdownWithState options={options} isMulti color="secondary" label="Secondary" labelPlacement="outside" />
          <SelectDropdownWithState options={options} isMulti color="success" label="Success" labelPlacement="outside" />
        </div>
        <div className="flex gap-4">
          <SelectDropdownWithState options={options} isMulti color="warning" label="Warning" labelPlacement="outside" />
          <SelectDropdownWithState options={options} isMulti color="danger" label="Danger" labelPlacement="outside" />
        </div>
      </div>
    );
  },
};

export const LabelPlacements: Story = {
  render: () => {
    const options = [
      { label: "Apple", value: "apple" },
      { label: "Banana", value: "banana" },
      { label: "Cherry", value: "cherry" },
      { label: "Dragonfruit", value: "dragonfruit" },
      { label: "Elderberry", value: "elderberry" },
    ];
    return (
      <div className="flex flex-col gap-8 w-[600px]">
        <div className="flex gap-4 items-end">
          <SelectDropdownWithState options={options} variant="bordered" isClearable labelPlacement="inside" label="Inside (Floating)" />
          <SelectDropdownWithState options={options} variant="bordered" isClearable labelPlacement="inside" label="Inside (Static with Placeholder)" placeholder="Choose fruit..." />
        </div>
        <div className="flex gap-4 items-end">
          <SelectDropdownWithState options={options} variant="bordered" isClearable labelPlacement="outside" label="Outside (Floating)" />
          <SelectDropdownWithState options={options} variant="bordered" isClearable labelPlacement="outside" label="Outside (Static with Placeholder)" placeholder="Choose fruit..." />
        </div>
        <div className="flex gap-4 items-end">
          <SelectDropdownWithState options={options} variant="bordered" isClearable labelPlacement="outlined" label="Outlined" />
          <SelectDropdownWithState options={options} variant="bordered" isClearable labelPlacement="outlined" label="Outlined (Static with Placeholder)" placeholder="Choose fruit..." />
        </div>
        <div className="flex gap-4 items-end">
          <SelectDropdownWithState options={options} variant="bordered" labelPlacement="outside-top" label="Outside Top (Static)" placeholder="Choose fruit..." />
          <SelectDropdownWithState options={options} variant="bordered" labelPlacement="outside-left" label="Outside Left (Static)" placeholder="Choose fruit..." />
        </div>
      </div>
    );
  },
};

export const Loading: Story = {
  render: () => {
    const options = [
      { label: "Apple", value: "apple" },
      { label: "Banana", value: "banana" },
      { label: "Cherry", value: "cherry" },
      { label: "Dragonfruit", value: "dragonfruit" },
      { label: "Elderberry", value: "elderberry" },
    ];
    return (
      <SelectDropdownWithState
        label="Loading Select"
        options={options}
        isLoading
      />
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const options = [
      { label: "Apple", value: "apple" },
      { label: "Banana", value: "banana" },
      { label: "Cherry", value: "cherry" },
      { label: "Dragonfruit", value: "dragonfruit" },
      { label: "Elderberry", value: "elderberry" },
    ];
    return (
      <SelectDropdownWithState
        label="Disabled Select"
        options={options}
        isDisabled
      />
    );
  },
};

export const DisabledOption: Story = {
  render: () => {
    const options = [
      { label: "Apple", value: "apple" },
      { label: "Banana", value: "banana", isDisabled: true },
      { label: "Cherry", value: "cherry" },
      { label: "Dragonfruit", value: "dragonfruit", isDisabled: true },
      { label: "Elderberry", value: "elderberry" },
    ];
    return (
      <SelectDropdownWithState
        label="Disabled Option Select"
        options={options}
        placeholder="Choose a fruit..."
      />
    );
  },
};

export const ErrorState: Story = {
  render: () => {
    const [value, setValue] = useState("");
    const options = [
      { label: "Apple", value: "apple" },
      { label: "Banana", value: "banana" },
      { label: "Cherry", value: "cherry" },
      { label: "Dragonfruit", value: "dragonfruit" },
      { label: "Elderberry", value: "elderberry" },
    ];
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
          label="Select Fruit"
          options={options}
          field={field as any}
          form={form as any}
        />
      </div>
    );
  },
};
