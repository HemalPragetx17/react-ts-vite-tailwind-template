import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { OTPInput } from "../../components/ui";

const meta: Meta<typeof OTPInput> = {
  title: "Components/OTPInput",
  component: OTPInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    numInputs: {
      control: { type: "number", min: 1, max: 10 },
    },
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof OTPInput>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = React.useState("");
    return (
      <OTPInput
        {...args}
        value={value}
        onChange={(e: any) => {
          const val = e.target.value;
          setValue(val);
          args.onChange?.(val);
        }}
      />
    );
  },
  args: {
    label: "Enter OTP",
    numInputs: 6,
  },
};

export const FourDigits: Story = {
  render: (args) => {
    const [value, setValue] = React.useState("");
    return (
      <OTPInput
        {...args}
        value={value}
        onChange={(e: any) => {
          const val = e.target.value;
          setValue(val);
          args.onChange?.(val);
        }}
      />
    );
  },
  args: {
    label: "Enter 4-digit code",
    numInputs: 4,
  },
};

export const Sizes: Story = {
  render: (args) => {
    const [valueSm, setValueSm] = React.useState("");
    const [valueMd, setValueMd] = React.useState("");
    const [valueLg, setValueLg] = React.useState("");
    return (
      <div className="flex flex-col gap-6">
        <OTPInput
          {...args}
          label="Small Size"
          size="sm"
          value={valueSm}
          onChange={(e: any) => setValueSm(e.target.value)}
        />
        <OTPInput
          {...args}
          label="Medium Size"
          size="md"
          value={valueMd}
          onChange={(e: any) => setValueMd(e.target.value)}
        />
        <OTPInput
          {...args}
          label="Large Size"
          size="lg"
          value={valueLg}
          onChange={(e: any) => setValueLg(e.target.value)}
        />
      </div>
    );
  },
  args: {
    numInputs: 6,
  },
};

export const WithError: Story = {
  render: (args) => {
    const [value, setValue] = React.useState("");
    return (
      <OTPInput
        {...args}
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
      />
    );
  },
  args: {
    label: "OTP with error",
    numInputs: 6,
    error: "Invalid OTP code",
    touched: true,
  },
};