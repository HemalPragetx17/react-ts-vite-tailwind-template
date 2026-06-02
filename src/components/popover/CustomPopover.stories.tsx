import type { Meta, StoryObj } from "@storybook/react";
import CustomPopover from "./CustomPopover";
import CustomButton from "../button/CustomButton";

const meta: Meta<typeof CustomPopover> = {
  title: "Components/Popover",
  component: CustomPopover,
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
    triggerMode: {
      control: "select",
      options: ["click", "hover"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof CustomPopover>;

const PopoverContent = () => (
  <div className="px-4 py-3 min-w-[200px]">
    <div className="text-sm font-bold mb-1">Popover Title</div>
    <div className="text-xs text-neutral-500 dark:text-neutral-400">
      This is a custom popover content with some descriptive text.
    </div>
  </div>
);

export const Default: Story = {
  args: {
    trigger: <CustomButton>Open Popover</CustomButton>,
    children: <PopoverContent />,
    placement: "bottom",
    showArrow: true,
  },
};

export const Placements: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-8 p-20">
      <CustomPopover placement="top-start" trigger={<CustomButton variant="flat">Top Start</CustomButton>} showArrow>
        <PopoverContent />
      </CustomPopover>
      <CustomPopover placement="top" trigger={<CustomButton variant="flat">Top</CustomButton>} showArrow>
        <PopoverContent />
      </CustomPopover>
      <CustomPopover placement="top-end" trigger={<CustomButton variant="flat">Top End</CustomButton>} showArrow>
        <PopoverContent />
      </CustomPopover>

      <CustomPopover placement="left" trigger={<CustomButton variant="flat">Left</CustomButton>} showArrow>
        <PopoverContent />
      </CustomPopover>
      <div />
      <CustomPopover placement="right" trigger={<CustomButton variant="flat">Right</CustomButton>} showArrow>
        <PopoverContent />
      </CustomPopover>

      <CustomPopover placement="bottom-start" trigger={<CustomButton variant="flat">Bottom Start</CustomButton>} showArrow>
        <PopoverContent />
      </CustomPopover>
      <CustomPopover placement="bottom" trigger={<CustomButton variant="flat">Bottom</CustomButton>} showArrow>
        <PopoverContent />
      </CustomPopover>
      <CustomPopover placement="bottom-end" trigger={<CustomButton variant="flat">Bottom End</CustomButton>} showArrow>
        <PopoverContent />
      </CustomPopover>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      {(["default", "primary", "secondary", "success", "warning", "danger", "foreground"] as const).map((color) => {
        // CustomButton only supports these specific colors
        const buttonColor = (["primary", "secondary", "success", "warning", "danger"].includes(color) 
          ? color 
          : "primary") as any;
          
        return (
          <CustomPopover key={color} color={color} trigger={<CustomButton color={buttonColor} variant="flat">{color}</CustomButton>} showArrow>
            <PopoverContent />
          </CustomPopover>
        );
      })}
    </div>
  ),
};

export const Backdrops: Story = {
  render: () => (
    <div className="flex gap-4">
      <CustomPopover backdrop="transparent" trigger={<CustomButton variant="bordered">Transparent</CustomButton>}>
        <PopoverContent />
      </CustomPopover>
      <CustomPopover backdrop="opaque" trigger={<CustomButton variant="bordered">Opaque</CustomButton>}>
        <PopoverContent />
      </CustomPopover>
      <CustomPopover backdrop="blur" trigger={<CustomButton variant="bordered">Blur</CustomButton>}>
        <PopoverContent />
      </CustomPopover>
    </div>
  ),
};

export const TriggerModes: Story = {
  render: () => (
    <div className="flex gap-4">
      <CustomPopover triggerMode="click" trigger={<CustomButton>Click Me</CustomButton>} showArrow>
        <div className="p-4 text-sm">Opened on click</div>
      </CustomPopover>
      <CustomPopover triggerMode="hover" trigger={<CustomButton variant="flat">Hover Me</CustomButton>} showArrow>
        <div className="p-4 text-sm">Opened on hover</div>
      </CustomPopover>
    </div>
  ),
};

export const CustomContent: Story = {
  args: {
    trigger: <CustomButton variant="bordered">User Profile</CustomButton>,
    showArrow: true,
    children: (
      <div className="p-2 w-64">
        <div className="flex items-center gap-3 p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg cursor-pointer transition-colors">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">JD</div>
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
