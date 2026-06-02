import type { Meta, StoryObj } from "@storybook/react";
import CustomCheckbox from "./CustomCheckbox";
import React from "react";

const meta: Meta<typeof CustomCheckbox> = {
  title: "Components/Input/CustomCheckbox",
  component: CustomCheckbox,
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
type Story = StoryObj<typeof CustomCheckbox>;

export const Default: Story = {
  render: (args) => {
    const [checked, setChecked] = React.useState(false);
    return (
      <CustomCheckbox
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
      <CustomCheckbox
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
          <CustomCheckbox
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
          <CustomCheckbox
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
          <CustomCheckbox
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
      <CustomCheckbox
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
      <CustomCheckbox
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
        <CustomCheckbox
          {...args}
          label="Option"
          color="primary"
          checked={checked1}
          onChange={(val) => setChecked1(val)}
          icon={
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          }
        />
        <CustomCheckbox
          {...args}
          label="Option"
          color="warning"
          checked={checked2}
          onChange={(val) => setChecked2(val)}
          icon={
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" viewBox="0 0 24 24">
              <path d="M12 5v14M5 12h14" />
            </svg>
          }
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  render: (args) => {
    const [checked, setChecked] = React.useState(false);
    return (
      <CustomCheckbox
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
      <CustomCheckbox
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
