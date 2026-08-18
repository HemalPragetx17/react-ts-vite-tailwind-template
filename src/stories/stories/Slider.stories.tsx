import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { FaVolumeLow, FaVolumeHigh } from "react-icons/fa6";
import { Slider } from "../../components/ui";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "success", "warning", "danger", "foreground"],
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
      control: "select",
      options: ["horizontal", "vertical"],
    },
    showSteps: {
      control: "boolean",
    },
    showTooltip: {
      control: "boolean",
    },
    isDisabled: {
      control: "boolean",
    },
    hideValue: {
      control: "boolean",
    },
    hideThumb: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  render: () => {
    const [val, setVal] = React.useState<number | number[]>(30);
    return (
      <div className="w-80 max-w-full">
        <Slider label="Brightness" minValue={0} maxValue={100} step={1} value={val} onChange={setVal} />
      </div>
    );
  },
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-80 max-w-full">
      <Slider color="default" label="Default" defaultValue={40} />
      <Slider color="primary" label="Primary" defaultValue={40} />
      <Slider color="secondary" label="Secondary" defaultValue={40} />
      <Slider color="success" label="Success" defaultValue={40} />
      <Slider color="warning" label="Warning" defaultValue={40} />
      <Slider color="danger" label="Danger" defaultValue={40} />
      <Slider color="foreground" label="Foreground" defaultValue={40} />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-80 max-w-full">
      <Slider size="sm" label="SM Size" defaultValue={50} />
      <Slider size="md" label="MD Size" defaultValue={50} />
      <Slider size="lg" label="LG Size" defaultValue={50} />
    </div>
  ),
};

export const RangeSlider: Story = {
  render: () => {
    const [val, setVal] = React.useState<number | number[]>([20, 80]);
    return (
      <div className="w-80 max-w-full">
        <Slider label="Price Range" minValue={0} maxValue={100} step={1} value={val} onChange={setVal} />
      </div>
    );
  },
};

export const WithMarks: Story = {
  render: () => (
    <div className="w-80 max-w-full py-4">
      <Slider
        label="Temperature"
        minValue={0}
        maxValue={100}
        defaultValue={20}
        marks={[
          { value: 0, label: "0°C" },
          { value: 50, label: "50°C" },
          { value: 100, label: "100°C" },
        ]}
      />
    </div>
  ),
};

export const ShowSteps: Story = {
  render: () => (
    <div className="w-80 max-w-full">
      <Slider
        label="Steps"
        minValue={0}
        maxValue={10}
        step={1}
        showSteps
        defaultValue={3}
      />
    </div>
  ),
};

export const WithTooltip: Story = {
  render: () => (
    <div className="w-80 max-w-full pt-8">
      <Slider
        label="Volume"
        minValue={0}
        maxValue={100}
        showTooltip
        defaultValue={70}
        startContent={<FaVolumeLow className="text-neutral-400" />}
        endContent={<FaVolumeHigh className="text-neutral-400" />}
      />
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-64 gap-8 justify-center">
      <Slider
        orientation="vertical"
        label="Volume"
        defaultValue={60}
      />
      <Slider
        orientation="vertical"
        label="Bass"
        color="secondary"
        defaultValue={[30, 70]}
      />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="w-80 max-w-full">
      <Slider
        label="Disabled Slider"
        isDisabled
        defaultValue={40}
      />
    </div>
  ),
};
