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
  render: () => {
    const [val, setVal] = React.useState(3);
    return <Rating value={val} onChange={setVal} color="primary" size="md" count={5} />;
  },
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <span className="w-24 text-sm capitalize">default:</span>
        <Rating color="default" defaultValue={3} />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-24 text-sm capitalize">primary:</span>
        <Rating color="primary" defaultValue={3} />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-24 text-sm capitalize">secondary:</span>
        <Rating color="secondary" defaultValue={3} />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-24 text-sm capitalize">success:</span>
        <Rating color="success" defaultValue={3} />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-24 text-sm capitalize">warning:</span>
        <Rating color="warning" defaultValue={3} />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-24 text-sm capitalize">danger:</span>
        <Rating color="danger" defaultValue={3} />
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <span className="w-24 text-sm capitalize">sm:</span>
        <Rating size="sm" defaultValue={3.5} allowHalf />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-24 text-sm capitalize">md:</span>
        <Rating size="md" defaultValue={3.5} allowHalf />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-24 text-sm capitalize">lg:</span>
        <Rating size="lg" defaultValue={3.5} allowHalf />
      </div>
    </div>
  ),
};

export const AllowHalf: Story = {
  render: () => {
    const [val, setVal] = React.useState(3.5);
    return (
      <div className="flex flex-col gap-2">
        <span>Current Value: {val}</span>
        <Rating value={val} onChange={setVal} allowHalf />
      </div>
    );
  },
};

export const CustomIcon: Story = {
  render: () => {
    const [val, setVal] = React.useState(4);
    return (
      <Rating
        value={val}
        onChange={setVal}
        icon={<FaHeart />}
        color="danger"
      />
    );
  },
};

export const ReadOnly: Story = {
  render: () => <Rating defaultValue={4.5} isReadOnly allowHalf />,
};

export const Disabled: Story = {
  render: () => <Rating defaultValue={3} isDisabled />,
};

export const ProductReviewDecimal: Story = {
  render: () => (
    <div className="p-6 bg-background rounded-xl border border-default-100 max-w-[400px] w-full">
      <h4 className="text-neutral-500 font-semibold text-sm mb-4">
        Product Review (Decimal / Read-only)
      </h4>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">
            Quality
          </span>
          <div className="flex items-center gap-3">
            <Rating value={1.5} color="primary" isReadOnly allowHalf />
            <span className="text-sm font-semibold text-neutral-600 dark:text-neutral-400 w-6 text-right">
              1.5
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">
            Value for money
          </span>
          <div className="flex items-center gap-3">
            <Rating value={2.3} color="primary" isReadOnly allowHalf />
            <span className="text-sm font-semibold text-neutral-600 dark:text-neutral-400 w-6 text-right">
              2.3
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">
            Design
          </span>
          <div className="flex items-center gap-3">
            <Rating value={3.7} color="primary" isReadOnly allowHalf />
            <span className="text-sm font-semibold text-neutral-600 dark:text-neutral-400 w-6 text-right">
              3.7
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">
            Durability
          </span>
          <div className="flex items-center gap-3">
            <Rating value={4.2} color="primary" isReadOnly allowHalf />
            <span className="text-sm font-semibold text-neutral-600 dark:text-neutral-400 w-6 text-right">
              4.2
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">
            Overall
          </span>
          <div className="flex items-center gap-3">
            <Rating value={4.8} color="primary" isReadOnly allowHalf />
            <span className="text-sm font-semibold text-neutral-600 dark:text-neutral-400 w-6 text-right">
              4.8
            </span>
          </div>
        </div>
      </div>
    </div>
  ),
};
