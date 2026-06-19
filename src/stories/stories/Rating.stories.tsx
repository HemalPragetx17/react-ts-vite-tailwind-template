import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { FaHeart } from "react-icons/fa6";
import { Rating } from "../../components/ui";

const meta: Meta<typeof Rating> = {
  title: "Components/Rating",
  component: Rating,
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
    count: {
      control: { type: "number", min: 1, max: 10, step: 1 },
    },
    value: {
      control: { type: "number", min: 0, max: 10, step: 0.5 },
    },
    allowHalf: {
      control: "boolean",
    },
    isDisabled: {
      control: "boolean",
    },
    isReadOnly: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const Default: Story = {
  render: (args) => {
    const [val, setVal] = React.useState(3);
    return <Rating {...args} value={val} onChange={setVal} />;
  },
  args: {
    color: "primary",
    size: "md",
    count: 5,
  },
};

export const Colors: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      {["default", "primary", "secondary", "success", "warning", "danger"].map((color) => (
        <div key={color} className="flex items-center gap-4">
          <span className="w-24 text-sm capitalize">{color}:</span>
          <Rating {...args} color={color as any} defaultValue={3} />
        </div>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      {["sm", "md", "lg"].map((size) => (
        <div key={size} className="flex items-center gap-4">
          <span className="w-24 text-sm capitalize">{size}:</span>
          <Rating {...args} size={size as any} defaultValue={3.5} allowHalf />
        </div>
      ))}
    </div>
  ),
};

export const AllowHalf: Story = {
  render: (args) => {
    const [val, setVal] = React.useState(3.5);
    return (
      <div className="flex flex-col gap-2">
        <span>Current Value: {val}</span>
        <Rating {...args} value={val} onChange={setVal} allowHalf />
      </div>
    );
  },
};

export const CustomIcon: Story = {
  render: (args) => {
    const [val, setVal] = React.useState(4);
    return (
      <Rating
        {...args}
        value={val}
        onChange={setVal}
        icon={<FaHeart />}
        color="danger"
      />
    );
  },
};

export const ReadOnly: Story = {
  args: {
    defaultValue: 4.5,
    isReadOnly: true,
    allowHalf: true,
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: 3,
    isDisabled: true,
  },
};

export const ProductReviewDecimal: Story = {
  render: (args) => {
    const reviews = [
      { label: "Quality", value: 1.5 },
      { label: "Value for money", value: 2.3 },
      { label: "Design", value: 3.7 },
      { label: "Durability", value: 4.2 },
      { label: "Overall", value: 4.8 },
    ];

    return (
      <div className="p-6 bg-background rounded-xl border border-default-100 max-w-[400px] w-full">
        <h4 className="text-neutral-500 font-semibold text-sm mb-4">
          Product Review (Decimal / Read-only)
        </h4>
        <div className="flex flex-col gap-3">
          {reviews.map((rev) => (
            <div key={rev.label} className="flex items-center justify-between">
              <span className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">
                {rev.label}
              </span>
              <div className="flex items-center gap-3">
                <Rating
                  {...args}
                  value={rev.value}
                  color="primary"
                  isReadOnly
                  allowHalf
                />
                <span className="text-sm font-semibold text-neutral-600 dark:text-neutral-400 w-6 text-right">
                  {rev.value.toFixed(1)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};
