import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Radio } from "../../components/ui";

const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "success", "warning", "danger"],
    },
    orientation: {
      control: "radio",
      options: ["horizontal", "vertical"],
    },
    disabled: {
      control: "boolean",
    },
    onChange: { action: "changed" },
    options: {
      control: false,
    },
  }
};

export default meta;
type Story = StoryObj<typeof Radio>;

const options = [
  { label: "Option 1", value: "1", description: "Description for option 1" },
  { label: "Option 2", value: "2", description: "Description for option 2" },
  { label: "Option 3", value: "3", description: "Description for option 3" },
];

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = React.useState("");
    return (
      <Radio
        {...args}
        value={value}
        onChange={(e) => {
          const val = e.target.value;
          setValue(val);
          args.onChange?.(e);
        }}
      />
    );
  },
  args: {
    label: "Select an option",
    options,
    color: "primary",
    orientation: "vertical",
  },
};

export const Horizontal: Story = {
  render: (args) => {
    const [value, setValue] = React.useState("");
    return (
      <Radio
        {...args}
        value={value}
        onChange={(e) => {
          const val = e.target.value;
          setValue(val);
          args.onChange?.(e);
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
    const [defaultVal, setDefaultVal] = React.useState("");
    const [primaryVal, setPrimaryVal] = React.useState("");
    const [secondaryVal, setSecondaryVal] = React.useState("");
    const [successVal, setSuccessVal] = React.useState("");
    const [warningVal, setWarningVal] = React.useState("");
    const [dangerVal, setDangerVal] = React.useState("");
    return (
      <div className="flex flex-col gap-12">
        <div className="flex gap-8">
          <Radio
            {...args}
            name="default-radio"
            color="default"
            label="Default"
            options={options}
            value={defaultVal}
            onChange={(e) => setDefaultVal(e.target.value)}
          />
          <Radio
            {...args}
            name="primary-radio"
            color="primary"
            label="Primary"
            options={options}
            value={primaryVal}
            onChange={(e) => setPrimaryVal(e.target.value)}
          />
        </div>
        <div className="flex gap-8">
          <Radio
            {...args}
            name="secondary-radio"
            color="secondary"
            label="Secondary"
            options={options}
            value={secondaryVal}
            onChange={(e) => setSecondaryVal(e.target.value)}
          />
          <Radio
            {...args}
            name="success-radio"
            color="success"
            label="Success"
            options={options}
            value={successVal}
            onChange={(e) => setSuccessVal(e.target.value)}
          />
        </div>
        <div className="flex gap-8">
          <Radio
            {...args}
            name="warning-radio"
            color="warning"
            label="Warning"
            options={options}
            value={warningVal}
            onChange={(e) => setWarningVal(e.target.value)}
          />
          <Radio
            {...args}
            name="danger-radio"
            color="danger"
            label="Danger"
            options={options}
            value={dangerVal}
            onChange={(e) => setDangerVal(e.target.value)}
          />
        </div>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: (args) => {
    const [value, setValue] = React.useState("1");
    return (
      <Radio
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
  args: {
    label: "Disabled Radio Group",
    options,
    disabled: true,
  },
};

export const OptionDisabled: Story = {
  render: (args) => {
    const [value, setValue] = React.useState("");
    return (
      <Radio
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
  args: {
    label: "Individual Option Disabled",
    options: [
      { label: "Active Option 1", value: "1" },
      { label: "Disabled Option 2", value: "2", disabled: true, description: "This option is disabled" },
      { label: "Active Option 3", value: "3" },
    ],
  },
};

export const WithError: Story = {
  render: (args) => {
    const [value, setValue] = React.useState("");
    return (
      <Radio
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
  args: {
    label: "Radio Group with error",
    options,
    error: "Please select an option",
    touched: true,
  },
};