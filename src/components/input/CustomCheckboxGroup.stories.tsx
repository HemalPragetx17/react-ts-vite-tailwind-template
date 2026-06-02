import type { Meta, StoryObj } from "@storybook/react";
import CustomCheckboxGroup from "./CustomCheckboxGroup";
import React from "react";

const meta: Meta<typeof CustomCheckboxGroup> = {
  title: "Components/Input/CustomCheckboxGroup",
  component: CustomCheckboxGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "success", "warning", "danger"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    radius: {
      control: "select",
      options: ["none", "sm", "md", "lg", "full"],
    },
    orientation: {
      control: "radio",
      options: ["horizontal", "vertical"],
    },
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof CustomCheckboxGroup>;

const options = [
  { label: "Option 1", value: "1", description: "Description for option 1" },
  { label: "Option 2", value: "2", description: "Description for option 2" },
  { label: "Option 3", value: "3", description: "Description for option 3" },
];

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = React.useState<(string | number)[]>([]);
    return (
      <CustomCheckboxGroup
        {...args}
        value={value}
        onChange={(val) => {
          setValue(val);
          args.onChange?.(val);
        }}
      />
    );
  },
  args: {
    label: "Select options",
    options,
    color: "primary",
    size: "md",
    radius: "md",
    orientation: "vertical",
  },
};

export const Horizontal: Story = {
  render: (args) => {
    const [value, setValue] = React.useState<(string | number)[]>([]);
    return (
      <CustomCheckboxGroup
        {...args}
        value={value}
        onChange={(val) => {
          setValue(val);
          args.onChange?.(val);
        }}
      />
    );
  },
  args: {
    label: "Horizontal layout",
    options,
    orientation: "horizontal",
  },
};

export const Colors: Story = {
  render: (args) => {
    const [defaultVal, setDefaultVal] = React.useState<(string | number)[]>([]);
    const [primaryVal, setPrimaryVal] = React.useState<(string | number)[]>([]);
    const [secondaryVal, setSecondaryVal] = React.useState<(string | number)[]>([]);
    const [successVal, setSuccessVal] = React.useState<(string | number)[]>([]);
    const [warningVal, setWarningVal] = React.useState<(string | number)[]>([]);
    const [dangerVal, setDangerVal] = React.useState<(string | number)[]>([]);
    return (
      <div className="flex flex-col gap-12">
        <div className="flex gap-8">
          <CustomCheckboxGroup
            {...args}
            id="default-group"
            color="default"
            label="Default"
            options={options}
            value={defaultVal}
            onChange={setDefaultVal}
          />
          <CustomCheckboxGroup
            {...args}
            id="primary-group"
            color="primary"
            label="Primary"
            options={options}
            value={primaryVal}
            onChange={setPrimaryVal}
          />
        </div>
        <div className="flex gap-8">
          <CustomCheckboxGroup
            {...args}
            id="secondary-group"
            color="secondary"
            label="Secondary"
            options={options}
            value={secondaryVal}
            onChange={setSecondaryVal}
          />
          <CustomCheckboxGroup
            {...args}
            id="success-group"
            color="success"
            label="Success"
            options={options}
            value={successVal}
            onChange={setSuccessVal}
          />
        </div>
        <div className="flex gap-8">
          <CustomCheckboxGroup
            {...args}
            id="warning-group"
            color="warning"
            label="Warning"
            options={options}
            value={warningVal}
            onChange={setWarningVal}
          />
          <CustomCheckboxGroup
            {...args}
            id="danger-group"
            color="danger"
            label="Danger"
            options={options}
            value={dangerVal}
            onChange={setDangerVal}
          />
        </div>
      </div>
    );
  },
};

export const Sizes: Story = {
  render: (args) => {
    const [value, setValue] = React.useState<(string | number)[]>([]);
    return (
      <div className="flex gap-8">
        <CustomCheckboxGroup
          {...args}
          label="Small Size"
          size="sm"
          options={options}
          value={value}
          onChange={setValue}
        />
        <CustomCheckboxGroup
          {...args}
          label="Medium Size"
          size="md"
          options={options}
          value={value}
          onChange={setValue}
        />
        <CustomCheckboxGroup
          {...args}
          label="Large Size"
          size="lg"
          options={options}
          value={value}
          onChange={setValue}
        />
      </div>
    );
  },
};

export const Radiuses: Story = {
  render: (args) => {
    const [value, setValue] = React.useState<(string | number)[]>([]);
    return (
      <div className="flex gap-8">
        <CustomCheckboxGroup
          {...args}
          label="Radius None"
          radius="none"
          options={options}
          value={value}
          onChange={setValue}
        />
        <CustomCheckboxGroup
          {...args}
          label="Radius Small"
          radius="sm"
          options={options}
          value={value}
          onChange={setValue}
        />
        <CustomCheckboxGroup
          {...args}
          label="Radius Medium"
          radius="md"
          options={options}
          value={value}
          onChange={setValue}
        />
        <CustomCheckboxGroup
          {...args}
          label="Radius Large"
          radius="lg"
          options={options}
          value={value}
          onChange={setValue}
        />
        <CustomCheckboxGroup
          {...args}
          label="Radius Full"
          radius="full"
          options={options}
          value={value}
          onChange={setValue}
        />
      </div>
    );
  },
};

export const Icon: Story = {
  render: (args) => {
    const [value, setValue] = React.useState<(string | number)[]>(["1"]);
    return (
      <CustomCheckboxGroup
        {...args}
        value={value}
        onChange={setValue}
      />
    );
  },
  args: {
    label: "Custom Icon (Heart)",
    options,
    icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    ),
  },
};

export const DisabledOption: Story = {
  render: (args) => {
    const [value, setValue] = React.useState<(string | number)[]>([]);
    return (
      <CustomCheckboxGroup
        {...args}
        value={value}
        onChange={setValue}
      />
    );
  },
  args: {
    label: "Group with Disabled Option",
    options: [
      { label: "Active Option 1", value: "1" },
      { label: "Disabled Option 2", value: "2", disabled: true, description: "This option is disabled" },
      { label: "Active Option 3", value: "3" },
    ],
  },
};

export const WithError: Story = {
  render: (args) => {
    const [value, setValue] = React.useState<(string | number)[]>([]);
    return (
      <CustomCheckboxGroup
        {...args}
        value={value}
        onChange={setValue}
      />
    );
  },
  args: {
    label: "Checkbox Group with error",
    options,
    error: "Please select at least one option",
    touched: true,
  },
};
