import type { Meta, StoryObj } from "@storybook/react";
import { Button, Tooltip } from "../../components/ui";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    placement: {
      control: "select",
      options: [
        "top", "top-start", "top-end",
        "bottom", "bottom-start", "bottom-end",
        "left", "left-start", "left-end",
        "right", "right-start", "right-end"
      ],
    },
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
    shadow: {
      control: "select",
      options: ["none", "sm", "md", "lg"],
    },
    children: {
      control: false,
    },
    content: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <Tooltip content="This is a tooltip content" placement="top" showArrow>
      <Button>Hover Me</Button>
    </Tooltip>
  ),
};

export const Placements: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-8 p-20">
      <Tooltip placement="top-start" content="Top Start" showArrow>
        <Button variant="flat" fullWidth>Top Start</Button>
      </Tooltip>
      <Tooltip placement="top" content="Top" showArrow>
        <Button variant="flat" fullWidth>Top</Button>
      </Tooltip>
      <Tooltip placement="top-end" content="Top End" showArrow>
        <Button variant="flat" fullWidth>Top End</Button>
      </Tooltip>

      <Tooltip placement="left" content="Left" showArrow>
        <Button variant="flat" fullWidth>Left</Button>
      </Tooltip>
      <div />
      <Tooltip placement="right" content="Right" showArrow>
        <Button variant="flat" fullWidth>Right</Button>
      </Tooltip>

      <Tooltip placement="bottom-start" content="Bottom Start" showArrow>
        <Button variant="flat" fullWidth>Bottom Start</Button>
      </Tooltip>
      <Tooltip placement="bottom" content="Bottom" showArrow>
        <Button variant="flat" fullWidth>Bottom</Button>
      </Tooltip>
      <Tooltip placement="bottom-end" content="Bottom End" showArrow>
        <Button variant="flat" fullWidth>Bottom End</Button>
      </Tooltip>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Tooltip color="default" content="Tooltip color: default" showArrow>
        <Button color="default" variant="solid">default</Button>
      </Tooltip>
      <Tooltip color="primary" content="Tooltip color: primary" showArrow>
        <Button color="primary" variant="solid">primary</Button>
      </Tooltip>
      <Tooltip color="secondary" content="Tooltip color: secondary" showArrow>
        <Button color="secondary" variant="solid">secondary</Button>
      </Tooltip>
      <Tooltip color="success" content="Tooltip color: success" showArrow>
        <Button color="success" variant="solid">success</Button>
      </Tooltip>
      <Tooltip color="warning" content="Tooltip color: warning" showArrow>
        <Button color="warning" variant="solid">warning</Button>
      </Tooltip>
      <Tooltip color="danger" content="Tooltip color: danger" showArrow>
        <Button color="danger" variant="solid">danger</Button>
      </Tooltip>
      <Tooltip color="foreground" content="Tooltip color: foreground" showArrow>
        <Button color="default" variant="solid">foreground</Button>
      </Tooltip>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tooltip size="sm" content="Tooltip size: sm" showArrow>
        <Button variant="flat">sm</Button>
      </Tooltip>
      <Tooltip size="md" content="Tooltip size: md" showArrow>
        <Button variant="flat">md</Button>
      </Tooltip>
      <Tooltip size="lg" content="Tooltip size: lg" showArrow>
        <Button variant="flat">lg</Button>
      </Tooltip>
    </div>
  ),
};

export const Radiuses: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tooltip radius="none" content="Tooltip radius: none" showArrow>
        <Button variant="flat">none</Button>
      </Tooltip>
      <Tooltip radius="sm" content="Tooltip radius: sm" showArrow>
        <Button variant="flat">sm</Button>
      </Tooltip>
      <Tooltip radius="md" content="Tooltip radius: md" showArrow>
        <Button variant="flat">md</Button>
      </Tooltip>
      <Tooltip radius="lg" content="Tooltip radius: lg" showArrow>
        <Button variant="flat">lg</Button>
      </Tooltip>
      <Tooltip radius="full" content="Tooltip radius: full" showArrow>
        <Button variant="flat">full</Button>
      </Tooltip>
    </div>
  ),
};

export const Shadows: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tooltip shadow="none" content="Tooltip shadow: none" showArrow>
        <Button variant="flat">none</Button>
      </Tooltip>
      <Tooltip shadow="sm" content="Tooltip shadow: sm" showArrow>
        <Button variant="flat">sm</Button>
      </Tooltip>
      <Tooltip shadow="md" content="Tooltip shadow: md" showArrow>
        <Button variant="flat">md</Button>
      </Tooltip>
      <Tooltip shadow="lg" content="Tooltip shadow: lg" showArrow>
        <Button variant="flat">lg</Button>
      </Tooltip>
    </div>
  ),
};
