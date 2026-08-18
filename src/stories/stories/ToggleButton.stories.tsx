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
  render: () => {
    const [alignment, setAlignment] = React.useState<string | null>("left");
    return (
      <ToggleButtonGroup
        color="primary"
        size="md"
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
};

export const MultipleSelection: Story = {
  render: () => {
    const [formats, setFormats] = React.useState<string[]>(["bold"]);
    return (
      <ToggleButtonGroup
        color="secondary"
        size="md"
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
};

export const Colors: Story = {
  render: () => {
    const [defaultVal, setDefaultVal] = React.useState("center");
    const [primaryVal, setPrimaryVal] = React.useState("center");
    const [secondaryVal, setSecondaryVal] = React.useState("center");
    const [successVal, setSuccessVal] = React.useState("center");
    const [warningVal, setWarningVal] = React.useState("center");
    const [dangerVal, setDangerVal] = React.useState("center");

    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <span className="w-24 text-sm capitalize">default:</span>
          <ToggleButtonGroup color="default" value={defaultVal} exclusive onChange={(_e, v) => setDefaultVal(v)}>
            <ToggleButton value="left">Left</ToggleButton>
            <ToggleButton value="center">Center</ToggleButton>
            <ToggleButton value="right">Right</ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div className="flex items-center gap-4">
          <span className="w-24 text-sm capitalize">primary:</span>
          <ToggleButtonGroup color="primary" value={primaryVal} exclusive onChange={(_e, v) => setPrimaryVal(v)}>
            <ToggleButton value="left">Left</ToggleButton>
            <ToggleButton value="center">Center</ToggleButton>
            <ToggleButton value="right">Right</ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div className="flex items-center gap-4">
          <span className="w-24 text-sm capitalize">secondary:</span>
          <ToggleButtonGroup color="secondary" value={secondaryVal} exclusive onChange={(_e, v) => setSecondaryVal(v)}>
            <ToggleButton value="left">Left</ToggleButton>
            <ToggleButton value="center">Center</ToggleButton>
            <ToggleButton value="right">Right</ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div className="flex items-center gap-4">
          <span className="w-24 text-sm capitalize">success:</span>
          <ToggleButtonGroup color="success" value={successVal} exclusive onChange={(_e, v) => setSuccessVal(v)}>
            <ToggleButton value="left">Left</ToggleButton>
            <ToggleButton value="center">Center</ToggleButton>
            <ToggleButton value="right">Right</ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div className="flex items-center gap-4">
          <span className="w-24 text-sm capitalize">warning:</span>
          <ToggleButtonGroup color="warning" value={warningVal} exclusive onChange={(_e, v) => setWarningVal(v)}>
            <ToggleButton value="left">Left</ToggleButton>
            <ToggleButton value="center">Center</ToggleButton>
            <ToggleButton value="right">Right</ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div className="flex items-center gap-4">
          <span className="w-24 text-sm capitalize">danger:</span>
          <ToggleButtonGroup color="danger" value={dangerVal} exclusive onChange={(_e, v) => setDangerVal(v)}>
            <ToggleButton value="left">Left</ToggleButton>
            <ToggleButton value="center">Center</ToggleButton>
            <ToggleButton value="right">Right</ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [smVal, setSmVal] = React.useState("left");
    const [mdVal, setMdVal] = React.useState("left");
    const [lgVal, setLgVal] = React.useState("left");

    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <span className="w-24 text-sm capitalize">sm:</span>
          <ToggleButtonGroup size="sm" value={smVal} exclusive onChange={(_e, v) => setSmVal(v)}>
            <ToggleButton value="left">Left</ToggleButton>
            <ToggleButton value="center">Center</ToggleButton>
            <ToggleButton value="right">Right</ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div className="flex items-center gap-4">
          <span className="w-24 text-sm capitalize">md:</span>
          <ToggleButtonGroup size="md" value={mdVal} exclusive onChange={(_e, v) => setMdVal(v)}>
            <ToggleButton value="left">Left</ToggleButton>
            <ToggleButton value="center">Center</ToggleButton>
            <ToggleButton value="right">Right</ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div className="flex items-center gap-4">
          <span className="w-24 text-sm capitalize">lg:</span>
          <ToggleButtonGroup size="lg" value={lgVal} exclusive onChange={(_e, v) => setLgVal(v)}>
            <ToggleButton value="left">Left</ToggleButton>
            <ToggleButton value="center">Center</ToggleButton>
            <ToggleButton value="right">Right</ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
    );
  },
};

export const VerticalOrientation: Story = {
  render: () => {
    const [alignment, setAlignment] = React.useState<string | null>("left");
    return (
      <ToggleButtonGroup
        color="primary"
        size="md"
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
};

export const Disabled: Story = {
  render: () => (
    <ToggleButtonGroup
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
  ),
};
