import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, Button, Popover } from "../../components/ui";

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
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
    backdrop: {
      control: "select",
      options: ["transparent", "opaque", "blur"],
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
    triggerMode: {
      control: "select",
      options: ["click", "hover"],
    },
    trigger: {
      control: false,
    },
    children: {
      control: false,
    }
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

const PopoverContent = () => (
  <div className="px-4 py-3 min-w-[200px]">
    <div className="text-sm font-bold mb-1">Popover Title</div>
    <div className="text-xs opacity-75">
      This is a custom popover content with some descriptive text.
    </div>
  </div>
);

export const Default: Story = {
  args: {
    trigger: <Button>Open Popover</Button>,
    children: <PopoverContent />,
    placement: "bottom",
    showArrow: true,
  },
};

export const Placements: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-8 p-20">
      <Popover placement="top-start" trigger={<Button variant="flat" fullWidth>Top Start</Button>} showArrow>
        <PopoverContent />
      </Popover>
      <Popover placement="top" trigger={<Button variant="flat" fullWidth>Top</Button>} showArrow>
        <PopoverContent />
      </Popover>
      <Popover placement="top-end" trigger={<Button variant="flat" fullWidth>Top End</Button>} showArrow>
        <PopoverContent />
      </Popover>

      <Popover placement="left" trigger={<Button variant="flat" fullWidth>Left</Button>} showArrow>
        <PopoverContent />
      </Popover>
      <div />
      <Popover placement="right" trigger={<Button variant="flat" fullWidth>Right</Button>} showArrow>
        <PopoverContent />
      </Popover>

      <Popover placement="bottom-start" trigger={<Button variant="flat" fullWidth>Bottom Start</Button>} showArrow>
        <PopoverContent />
      </Popover>
      <Popover placement="bottom" trigger={<Button variant="flat" fullWidth>Bottom</Button>} showArrow>
        <PopoverContent />
      </Popover>
      <Popover placement="bottom-end" trigger={<Button variant="flat" fullWidth>Bottom End</Button>} showArrow>
        <PopoverContent />
      </Popover>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      {(["default", "primary", "secondary", "success", "warning", "danger", "foreground"] as const).map((color) => {
        // Button only supports these specific colors
        const buttonColor = (["default", "primary", "secondary", "success", "warning", "danger"].includes(color)
          ? color
          : "default") as any;

        return (
          <Popover key={color} color={color} trigger={<Button color={buttonColor} variant="solid">{color}</Button>} showArrow>
            <PopoverContent />
          </Popover>
        );
      })}
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-4">
      {(["sm", "md", "lg"] as const).map((size) => (
        <Popover key={size} size={size} trigger={<Button variant="flat">{size}</Button>} showArrow>
          <PopoverContent />
        </Popover>
      ))}
    </div>
  ),
};

export const Radiuses: Story = {
  render: () => (
    <div className="flex gap-4">
      {(["none", "sm", "md", "lg", "full"] as const).map((radius) => (
        <Popover key={radius} radius={radius} trigger={<Button variant="flat">{radius}</Button>} showArrow>
          <PopoverContent />
        </Popover>
      ))}
    </div>
  ),
};

export const Shadows: Story = {
  render: () => (
    <div className="flex gap-4">
      {(["none", "sm", "md", "lg"] as const).map((shadow) => (
        <Popover key={shadow} shadow={shadow} trigger={<Button variant="flat">{shadow}</Button>} showArrow>
          <PopoverContent />
        </Popover>
      ))}
    </div>
  ),
};

export const Backdrops: Story = {
  render: () => (
    <div className="flex gap-4">
      <Popover backdrop="transparent" trigger={<Button variant="bordered">Transparent</Button>}>
        <PopoverContent />
      </Popover>
      <Popover backdrop="opaque" trigger={<Button variant="bordered">Opaque</Button>}>
        <PopoverContent />
      </Popover>
      <Popover backdrop="blur" trigger={<Button variant="bordered">Blur</Button>}>
        <PopoverContent />
      </Popover>
    </div>
  ),
};

export const TriggerModes: Story = {
  render: () => (
    <div className="flex gap-4">
      <Popover triggerMode="click" trigger={<Button>Click Me</Button>} showArrow>
        <div className="p-4 text-sm">Opened on click</div>
      </Popover>
      <Popover triggerMode="hover" trigger={<Button variant="flat">Hover Me</Button>} showArrow>
        <div className="p-4 text-sm">Opened on hover</div>
      </Popover>
    </div>
  ),
};

export const CustomContent: Story = {
  args: {
    trigger: (
      <Avatar
        size="md"
        name="John Doe"
        color="primary"
        isBordered
        className="cursor-pointer hover:opacity-90 transition-opacity"
      />
    ),
    showArrow: true,
    children: (
      <div className="p-2 w-64">
        <div className="flex items-center gap-3 p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg cursor-pointer transition-colors">
          <Avatar name="John Doe" color="primary" size="md" />
          <div>
            <div className="text-sm font-bold">John Doe</div>
            <div className="text-xs text-neutral-500">Software Engineer</div>
          </div>
        </div>
        <div className="h-px bg-neutral-200 dark:bg-neutral-800 my-2" />
        <div className="space-y-1">
          <div className="px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md cursor-pointer transition-colors">Settings</div>
          <div className="px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md cursor-pointer transition-colors">Help & Feedback</div>
          <div className="px-3 py-2 text-sm text-danger hover:bg-danger/10 rounded-md cursor-pointer transition-colors font-medium">Log Out</div>
        </div>
      </div>
    ),
  },
};
