import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
  FaAlignJustify,
  FaBold,
  FaItalic,
  FaUnderline,
} from "react-icons/fa6";
import { ToggleButton, ToggleButtonGroup } from "../../components/ui";

const meta: Meta<typeof ToggleButtonGroup> = {
  title: "Components/ToggleButton",
  component: ToggleButtonGroup,
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
    exclusive: {
      control: "boolean",
    },
    isDisabled: {
      control: "boolean",
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    fullWidth: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ToggleButtonGroup>;

export const ExclusiveSelection: Story = {
  render: (args) => {
    const [alignment, setAlignment] = React.useState<string | null>("left");
    return (
      <ToggleButtonGroup
        {...args}
        value={alignment}
        exclusive
        onChange={(_e, val) => setAlignment(val)}
      >
        <ToggleButton value="left" aria-label="align left">
          <FaAlignLeft className="w-4 h-4" />
        </ToggleButton>
        <ToggleButton value="center" aria-label="align center">
          <FaAlignCenter className="w-4 h-4" />
        </ToggleButton>
        <ToggleButton value="right" aria-label="align right">
          <FaAlignRight className="w-4 h-4" />
        </ToggleButton>
        <ToggleButton value="justify" aria-label="align justify">
          <FaAlignJustify className="w-4 h-4" />
        </ToggleButton>
      </ToggleButtonGroup>
    );
  },
  args: {
    color: "primary",
    size: "md",
  },
};

export const MultipleSelection: Story = {
  render: (args) => {
    const [formats, setFormats] = React.useState<string[]>(["bold"]);
    return (
      <ToggleButtonGroup
        {...args}
        value={formats}
        onChange={(_e, val) => setFormats(val)}
      >
        <ToggleButton value="bold" aria-label="bold">
          <FaBold className="w-4 h-4" />
        </ToggleButton>
        <ToggleButton value="italic" aria-label="italic">
          <FaItalic className="w-4 h-4" />
        </ToggleButton>
        <ToggleButton value="underlined" aria-label="underlined">
          <FaUnderline className="w-4 h-4" />
        </ToggleButton>
      </ToggleButtonGroup>
    );
  },
  args: {
    color: "secondary",
    size: "md",
  },
};

export const Colors: Story = {
  render: (args) => {
    const [val, setVal] = React.useState("center");
    return (
      <div className="flex flex-col gap-4">
        {(["default", "primary", "secondary", "success", "warning", "danger"] as const).map((color) => (
          <div key={color} className="flex items-center gap-4">
            <span className="w-24 text-sm capitalize">{color}:</span>
            <ToggleButtonGroup
              {...args}
              color={color}
              value={val}
              exclusive
              onChange={(_e, v) => setVal(v)}
            >
              <ToggleButton value="left">Left</ToggleButton>
              <ToggleButton value="center">Center</ToggleButton>
              <ToggleButton value="right">Right</ToggleButton>
            </ToggleButtonGroup>
          </div>
        ))}
      </div>
    );
  },
};

export const Sizes: Story = {
  render: (args) => {
    const [val, setVal] = React.useState("left");
    return (
      <div className="flex flex-col gap-4">
        {(["sm", "md", "lg"] as const).map((size) => (
          <div key={size} className="flex items-center gap-4">
            <span className="w-24 text-sm capitalize">{size}:</span>
            <ToggleButtonGroup
              {...args}
              size={size}
              value={val}
              exclusive
              onChange={(_e, v) => setVal(v)}
            >
              <ToggleButton value="left">Left</ToggleButton>
              <ToggleButton value="center">Center</ToggleButton>
              <ToggleButton value="right">Right</ToggleButton>
            </ToggleButtonGroup>
          </div>
        ))}
      </div>
    );
  },
};

export const VerticalOrientation: Story = {
  render: (args) => {
    const [alignment, setAlignment] = React.useState<string | null>("left");
    return (
      <ToggleButtonGroup
        {...args}
        value={alignment}
        exclusive
        orientation="vertical"
        onChange={(_e, val) => setAlignment(val)}
      >
        <ToggleButton value="left" aria-label="align left">
          <FaAlignLeft className="w-4 h-4" />
        </ToggleButton>
        <ToggleButton value="center" aria-label="align center">
          <FaAlignCenter className="w-4 h-4" />
        </ToggleButton>
        <ToggleButton value="right" aria-label="align right">
          <FaAlignRight className="w-4 h-4" />
        </ToggleButton>
      </ToggleButtonGroup>
    );
  },
  args: {
    color: "primary",
    size: "md",
  },
};

export const Disabled: Story = {
  render: (args) => {
    return (
      <ToggleButtonGroup
        {...args}
        value="bold"
        isDisabled
        onChange={() => {}}
      >
        <ToggleButton value="bold" aria-label="bold">
          <FaBold className="w-4 h-4" />
        </ToggleButton>
        <ToggleButton value="italic" aria-label="italic">
          <FaItalic className="w-4 h-4" />
        </ToggleButton>
        <ToggleButton value="underlined" aria-label="underlined">
          <FaUnderline className="w-4 h-4" />
        </ToggleButton>
      </ToggleButtonGroup>
    );
  },
};
