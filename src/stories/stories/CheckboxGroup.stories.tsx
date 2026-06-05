import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { FaHeart } from "react-icons/fa6";
import { CheckboxGroup } from "../../components/ui";

const meta: Meta<typeof CheckboxGroup> = {
  title: "Components/CheckboxGroup",
  component: CheckboxGroup,
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
type Story = StoryObj<typeof CheckboxGroup>;

const options = [
  { label: "Option 1", value: "1", description: "Description for option 1" },
  { label: "Option 2", value: "2", description: "Description for option 2" },
  { label: "Option 3", value: "3", description: "Description for option 3" },
];

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = React.useState<(string | number)[]>([]);
    return (
      <CheckboxGroup
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
      <CheckboxGroup
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
          <CheckboxGroup
            {...args}
            id="default-group"
            color="default"
            label="Default"
            options={options}
            value={defaultVal}
            onChange={setDefaultVal}
          />
          <CheckboxGroup
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
          <CheckboxGroup
            {...args}
            id="secondary-group"
            color="secondary"
            label="Secondary"
            options={options}
            value={secondaryVal}
            onChange={setSecondaryVal}
          />
          <CheckboxGroup
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
          <CheckboxGroup
            {...args}
            id="warning-group"
            color="warning"
            label="Warning"
            options={options}
            value={warningVal}
            onChange={setWarningVal}
          />
          <CheckboxGroup
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
        <CheckboxGroup
          {...args}
          label="Small Size"
          size="sm"
          options={options}
          value={value}
          onChange={setValue}
        />
        <CheckboxGroup
          {...args}
          label="Medium Size"
          size="md"
          options={options}
          value={value}
          onChange={setValue}
        />
        <CheckboxGroup
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
        <CheckboxGroup
          {...args}
          label="Radius None"
          radius="none"
          options={options}
          value={value}
          onChange={setValue}
        />
        <CheckboxGroup
          {...args}
          label="Radius Small"
          radius="sm"
          options={options}
          value={value}
          onChange={setValue}
        />
        <CheckboxGroup
          {...args}
          label="Radius Medium"
          radius="md"
          options={options}
          value={value}
          onChange={setValue}
        />
        <CheckboxGroup
          {...args}
          label="Radius Large"
          radius="lg"
          options={options}
          value={value}
          onChange={setValue}
        />
        <CheckboxGroup
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
      <CheckboxGroup
        {...args}
        value={value}
        onChange={setValue}
      />
    );
  },
  args: {
    label: "Custom Icon (Heart)",
    options,
    icon: <FaHeart className="w-3.5 h-3.5" aria-hidden />,
  },
};

export const DisabledOption: Story = {
  render: (args) => {
    const [value, setValue] = React.useState<(string | number)[]>([]);
    return (
      <CheckboxGroup
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
      <CheckboxGroup
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
