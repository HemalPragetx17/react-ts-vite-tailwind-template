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

export const Default: Story = {
  render: () => (
    <Popover trigger={<Button>Open Popover</Button>} placement="bottom" showArrow>
      <div className="px-4 py-3 min-w-[200px]">
        <div className="text-sm font-bold mb-1">Popover Title</div>
        <div className="text-xs opacity-75">
          This is a custom popover content with some descriptive text.
        </div>
      </div>
    </Popover>
  ),
};

export const Placements: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-8 p-20">
      <Popover placement="top-start" trigger={<Button variant="flat" fullWidth>Top Start</Button>} showArrow>
        <div className="px-4 py-3 min-w-[200px]">
          <div className="text-sm font-bold mb-1">Popover Title</div>
          <div className="text-xs opacity-75">This is a custom popover content with some descriptive text.</div>
        </div>
      </Popover>
      <Popover placement="top" trigger={<Button variant="flat" fullWidth>Top</Button>} showArrow>
        <div className="px-4 py-3 min-w-[200px]">
          <div className="text-sm font-bold mb-1">Popover Title</div>
          <div className="text-xs opacity-75">This is a custom popover content with some descriptive text.</div>
        </div>
      </Popover>
      <Popover placement="top-end" trigger={<Button variant="flat" fullWidth>Top End</Button>} showArrow>
        <div className="px-4 py-3 min-w-[200px]">
          <div className="text-sm font-bold mb-1">Popover Title</div>
          <div className="text-xs opacity-75">This is a custom popover content with some descriptive text.</div>
        </div>
      </Popover>

      <Popover placement="left" trigger={<Button variant="flat" fullWidth>Left</Button>} showArrow>
        <div className="px-4 py-3 min-w-[200px]">
          <div className="text-sm font-bold mb-1">Popover Title</div>
          <div className="text-xs opacity-75">This is a custom popover content with some descriptive text.</div>
        </div>
      </Popover>
      <div />
      <Popover placement="right" trigger={<Button variant="flat" fullWidth>Right</Button>} showArrow>
        <div className="px-4 py-3 min-w-[200px]">
          <div className="text-sm font-bold mb-1">Popover Title</div>
          <div className="text-xs opacity-75">This is a custom popover content with some descriptive text.</div>
        </div>
      </Popover>

      <Popover placement="bottom-start" trigger={<Button variant="flat" fullWidth>Bottom Start</Button>} showArrow>
        <div className="px-4 py-3 min-w-[200px]">
          <div className="text-sm font-bold mb-1">Popover Title</div>
          <div className="text-xs opacity-75">This is a custom popover content with some descriptive text.</div>
        </div>
      </Popover>
      <Popover placement="bottom" trigger={<Button variant="flat" fullWidth>Bottom</Button>} showArrow>
        <div className="px-4 py-3 min-w-[200px]">
          <div className="text-sm font-bold mb-1">Popover Title</div>
          <div className="text-xs opacity-75">This is a custom popover content with some descriptive text.</div>
        </div>
      </Popover>
      <Popover placement="bottom-end" trigger={<Button variant="flat" fullWidth>Bottom End</Button>} showArrow>
        <div className="px-4 py-3 min-w-[200px]">
          <div className="text-sm font-bold mb-1">Popover Title</div>
          <div className="text-xs opacity-75">This is a custom popover content with some descriptive text.</div>
        </div>
      </Popover>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Popover color="default" trigger={<Button color="default" variant="solid">default</Button>} showArrow>
        <div className="px-4 py-3 min-w-[200px]">
          <div className="text-sm font-bold mb-1">Popover Title</div>
          <div className="text-xs opacity-75">This is a custom popover content with some descriptive text.</div>
        </div>
      </Popover>
      <Popover color="primary" trigger={<Button color="primary" variant="solid">primary</Button>} showArrow>
        <div className="px-4 py-3 min-w-[200px]">
          <div className="text-sm font-bold mb-1">Popover Title</div>
          <div className="text-xs opacity-75">This is a custom popover content with some descriptive text.</div>
        </div>
      </Popover>
      <Popover color="secondary" trigger={<Button color="secondary" variant="solid">secondary</Button>} showArrow>
        <div className="px-4 py-3 min-w-[200px]">
          <div className="text-sm font-bold mb-1">Popover Title</div>
          <div className="text-xs opacity-75">This is a custom popover content with some descriptive text.</div>
        </div>
      </Popover>
      <Popover color="success" trigger={<Button color="success" variant="solid">success</Button>} showArrow>
        <div className="px-4 py-3 min-w-[200px]">
          <div className="text-sm font-bold mb-1">Popover Title</div>
          <div className="text-xs opacity-75">This is a custom popover content with some descriptive text.</div>
        </div>
      </Popover>
      <Popover color="warning" trigger={<Button color="warning" variant="solid">warning</Button>} showArrow>
        <div className="px-4 py-3 min-w-[200px]">
          <div className="text-sm font-bold mb-1">Popover Title</div>
          <div className="text-xs opacity-75">This is a custom popover content with some descriptive text.</div>
        </div>
      </Popover>
      <Popover color="danger" trigger={<Button color="danger" variant="solid">danger</Button>} showArrow>
        <div className="px-4 py-3 min-w-[200px]">
          <div className="text-sm font-bold mb-1">Popover Title</div>
          <div className="text-xs opacity-75">This is a custom popover content with some descriptive text.</div>
        </div>
      </Popover>
      <Popover color="foreground" trigger={<Button color="default" variant="solid">foreground</Button>} showArrow>
        <div className="px-4 py-3 min-w-[200px]">
          <div className="text-sm font-bold mb-1">Popover Title</div>
          <div className="text-xs opacity-75">This is a custom popover content with some descriptive text.</div>
        </div>
      </Popover>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-4">
      <Popover size="sm" trigger={<Button variant="flat">sm</Button>} showArrow>
        <div className="px-4 py-3 min-w-[200px]">
          <div className="text-sm font-bold mb-1">Popover Title</div>
          <div className="text-xs opacity-75">This is a custom popover content with some descriptive text.</div>
        </div>
      </Popover>
      <Popover size="md" trigger={<Button variant="flat">md</Button>} showArrow>
        <div className="px-4 py-3 min-w-[200px]">
          <div className="text-sm font-bold mb-1">Popover Title</div>
          <div className="text-xs opacity-75">This is a custom popover content with some descriptive text.</div>
        </div>
      </Popover>
      <Popover size="lg" trigger={<Button variant="flat">lg</Button>} showArrow>
        <div className="px-4 py-3 min-w-[200px]">
          <div className="text-sm font-bold mb-1">Popover Title</div>
          <div className="text-xs opacity-75">This is a custom popover content with some descriptive text.</div>
        </div>
      </Popover>
    </div>
  ),
};

export const Radiuses: Story = {
  render: () => (
    <div className="flex gap-4">
      <Popover radius="none" trigger={<Button variant="flat">none</Button>} showArrow>
        <div className="px-4 py-3 min-w-[200px]">
          <div className="text-sm font-bold mb-1">Popover Title</div>
          <div className="text-xs opacity-75">This is a custom popover content with some descriptive text.</div>
        </div>
      </Popover>
      <Popover radius="sm" trigger={<Button variant="flat">sm</Button>} showArrow>
        <div className="px-4 py-3 min-w-[200px]">
          <div className="text-sm font-bold mb-1">Popover Title</div>
          <div className="text-xs opacity-75">This is a custom popover content with some descriptive text.</div>
        </div>
      </Popover>
      <Popover radius="md" trigger={<Button variant="flat">md</Button>} showArrow>
        <div className="px-4 py-3 min-w-[200px]">
          <div className="text-sm font-bold mb-1">Popover Title</div>
          <div className="text-xs opacity-75">This is a custom popover content with some descriptive text.</div>
        </div>
      </Popover>
      <Popover radius="lg" trigger={<Button variant="flat">lg</Button>} showArrow>
        <div className="px-4 py-3 min-w-[200px]">
          <div className="text-sm font-bold mb-1">Popover Title</div>
          <div className="text-xs opacity-75">This is a custom popover content with some descriptive text.</div>
        </div>
      </Popover>
      <Popover radius="full" trigger={<Button variant="flat">full</Button>} showArrow>
        <div className="px-4 py-3 min-w-[200px]">
          <div className="text-sm font-bold mb-1">Popover Title</div>
          <div className="text-xs opacity-75">This is a custom popover content with some descriptive text.</div>
        </div>
      </Popover>
    </div>
  ),
};

export const Shadows: Story = {
  render: () => (
    <div className="flex gap-4">
      <Popover shadow="none" trigger={<Button variant="flat">none</Button>} showArrow>
        <div className="px-4 py-3 min-w-[200px]">
          <div className="text-sm font-bold mb-1">Popover Title</div>
          <div className="text-xs opacity-75">This is a custom popover content with some descriptive text.</div>
        </div>
      </Popover>
      <Popover shadow="sm" trigger={<Button variant="flat">sm</Button>} showArrow>
        <div className="px-4 py-3 min-w-[200px]">
          <div className="text-sm font-bold mb-1">Popover Title</div>
          <div className="text-xs opacity-75">This is a custom popover content with some descriptive text.</div>
        </div>
      </Popover>
      <Popover shadow="md" trigger={<Button variant="flat">md</Button>} showArrow>
        <div className="px-4 py-3 min-w-[200px]">
          <div className="text-sm font-bold mb-1">Popover Title</div>
          <div className="text-xs opacity-75">This is a custom popover content with some descriptive text.</div>
        </div>
      </Popover>
      <Popover shadow="lg" trigger={<Button variant="flat">lg</Button>} showArrow>
        <div className="px-4 py-3 min-w-[200px]">
          <div className="text-sm font-bold mb-1">Popover Title</div>
          <div className="text-xs opacity-75">This is a custom popover content with some descriptive text.</div>
        </div>
      </Popover>
    </div>
  ),
};

export const Backdrops: Story = {
  render: () => (
    <div className="flex gap-4">
      <Popover backdrop="transparent" trigger={<Button variant="bordered">Transparent</Button>}>
        <div className="px-4 py-3 min-w-[200px]">
          <div className="text-sm font-bold mb-1">Popover Title</div>
          <div className="text-xs opacity-75">This is a custom popover content with some descriptive text.</div>
        </div>
      </Popover>
      <Popover backdrop="opaque" trigger={<Button variant="bordered">Opaque</Button>}>
        <div className="px-4 py-3 min-w-[200px]">
          <div className="text-sm font-bold mb-1">Popover Title</div>
          <div className="text-xs opacity-75">This is a custom popover content with some descriptive text.</div>
        </div>
      </Popover>
      <Popover backdrop="blur" trigger={<Button variant="bordered">Blur</Button>}>
        <div className="px-4 py-3 min-w-[200px]">
          <div className="text-sm font-bold mb-1">Popover Title</div>
          <div className="text-xs opacity-75">This is a custom popover content with some descriptive text.</div>
        </div>
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
  render: () => (
    <Popover
      trigger={
        <Avatar
          size="md"
          name="John Doe"
          color="primary"
          isBordered
          className="cursor-pointer hover:opacity-90 transition-opacity"
        />
      }
      showArrow
    >
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
    </Popover>
  ),
};
