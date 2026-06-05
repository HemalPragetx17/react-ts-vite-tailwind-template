import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { FaHeart, FaPlus } from "react-icons/fa6";
import { Checkbox } from "../../components/ui";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
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
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: (args) => {
    const [checked, setChecked] = React.useState(false);
    return (
      <Checkbox
        {...args}
        checked={checked}
        onChange={(val) => {
          setChecked(val);
          args.onChange?.(val);
        }}
      />
    );
  },
  args: {
    label: "Checkbox",
    color: "primary",
    size: "md",
    radius: "md",
  },
};

export const WithDescription: Story = {
  render: (args) => {
    const [value, setValue] = React.useState<string[]>([]);
    return (
      <Checkbox
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
    label: "Checkbox with description",
    options: [
      { label: "Option 1", value: "1", description: "This is a description for option 1" },
      { label: "Option 2", value: "2", description: "This is a description for option 2" },
    ],
    color: "primary",
    size: "md",
  },
};

export const Colors: Story = {
  render: (args) => {
    const [values, setValues] = React.useState<Record<string, boolean>>({});
    const toggle = (color: string) => {
      setValues((prev) => ({ ...prev, [color]: !prev[color] }));
    };
    return (
      <div className="flex gap-4">
        {["default", "primary", "secondary", "success", "warning", "danger"].map((color) => (
          <Checkbox
            key={color}
            {...args}
            name={`checkbox-color-${color}`}
            color={color as any}
            label={color.charAt(0).toUpperCase() + color.slice(1)}
            checked={!!values[color]}
            onChange={() => toggle(color)}
          />
        ))}
      </div>
    );
  },
};

export const Sizes: Story = {
  render: (args) => {
    const [values, setValues] = React.useState<Record<string, boolean>>({});
    const toggle = (size: string) => {
      setValues((prev) => ({ ...prev, [size]: !prev[size] }));
    };
    return (
      <div className="flex gap-4">
        {["sm", "md", "lg"].map((size) => (
          <Checkbox
            key={size}
            {...args}
            name={`checkbox-size-${size}`}
            size={size as any}
            label={size === "sm" ? "Small" : size === "md" ? "Medium" : "Large"}
            checked={!!values[size]}
            onChange={() => toggle(size)}
          />
        ))}
      </div>
    );
  },
};

export const Radiuses: Story = {
  render: (args) => {
    const [values, setValues] = React.useState<Record<string, boolean>>({});
    const toggle = (r: string) => {
      setValues((prev) => ({ ...prev, [r]: !prev[r] }));
    };
    return (
      <div className="flex gap-4">
        {["none", "sm", "md", "lg", "full"].map((r) => (
          <Checkbox
            key={r}
            {...args}
            name={`checkbox-radius-${r}`}
            radius={r as any}
            label={r.charAt(0).toUpperCase() + r.slice(1)}
            checked={!!values[r]}
            onChange={() => toggle(r)}
          />
        ))}
      </div>
    );
  },
};

export const Indeterminate: Story = {
  render: (args) => {
    const [checked, setChecked] = React.useState(false);
    return (
      <Checkbox
        {...args}
        checked={checked}
        onChange={(val) => setChecked(val)}
      />
    );
  },
  args: {
    label: "Indeterminate",
    isIndeterminate: true,
  },
};

export const LineThrough: Story = {
  render: (args) => {
    const [checked, setChecked] = React.useState(true);
    return (
      <Checkbox
        {...args}
        checked={checked}
        onChange={(val) => setChecked(val)}
      />
    );
  },
  args: {
    label: "Line Through",
    lineThrough: true,
    checked: true,
  },
};

export const Icon: Story = {
  render: (args) => {
    const [checked1, setChecked1] = React.useState(true);
    const [checked2, setChecked2] = React.useState(true);
    return (
      <div className="flex gap-4">
        <Checkbox
          {...args}
          label="Option"
          color="primary"
          checked={checked1}
          onChange={(val) => setChecked1(val)}
          icon={<FaHeart className="w-3.5 h-3.5" aria-hidden />}
        />
        <Checkbox
          {...args}
          label="Option"
          color="warning"
          checked={checked2}
          onChange={(val) => setChecked2(val)}
          icon={<FaPlus className="w-3.5 h-3.5" aria-hidden />}
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  render: (args) => {
    const [checked, setChecked] = React.useState(false);
    return (
      <Checkbox
        {...args}
        checked={checked}
        onChange={(val) => setChecked(val)}
      />
    );
  },
  args: {
    label: "Disabled",
    disabled: true,
  },
};

export const Error: Story = {
  render: (args) => {
    const [checked, setChecked] = React.useState(false);
    return (
      <Checkbox
        {...args}
        checked={checked}
        onChange={(val) => setChecked(val)}
      />
    );
  },
  args: {
    label: "Checkbox with error",
    error: "This is an error message",
    touched: true,
  },
};
