import type { Meta, StoryObj } from "@storybook/react";
import CustomOTPInput from "./CustomOTPInput";
import React from "react";

const meta: Meta<typeof CustomOTPInput> = {
  title: "Components/Input/CustomOTPInput",
  component: CustomOTPInput,
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
type Story = StoryObj<typeof CustomOTPInput>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = React.useState("");
    return (
      <CustomOTPInput
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
      <CustomOTPInput
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

export const WithError: Story = {
  render: (args) => {
    const [value, setValue] = React.useState("");
    return (
      <CustomOTPInput
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