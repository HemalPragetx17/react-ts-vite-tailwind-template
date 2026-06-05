import type { Meta, StoryObj } from "@storybook/react";
import { FaImage, FaMusic } from "react-icons/fa6";
import { Tab, Tabs } from "../../components/ui";

const tabIconClass = "w-4 h-4";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "bordered", "light", "underlined"],
    },
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "success", "warning", "danger"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    radius: {
      control: "select",
      options: ["none", "sm", "md", "lg", "full"],
    },
    placement: {
      control: "select",
      options: ["top", "bottom", "start", "end"],
    },
    isVertical: {
      control: "boolean",
    },
    isDisabled: {
      control: "boolean",
    },
    disabledKeys: {
      control: "object",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const defaultItems = [
  { id: "photos", label: "Photos", content: <div className="p-4">Photos content here</div> },
  { id: "music", label: "Music", content: <div className="p-4">Music content here</div> },
  { id: "videos", label: "Videos", content: <div className="p-4">Videos content here</div> },
];

export const Default: Story = {
  args: {
    items: defaultItems,
  },
};

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4 w-[600px]">
      <div className="flex gap-4">
        <Tabs {...args} variant="solid" items={defaultItems} />
        <Tabs {...args} variant="bordered" items={defaultItems} />
      </div>
      <div className="flex gap-4">
        <Tabs {...args} variant="light" items={defaultItems} />
        <Tabs {...args} variant="underlined" items={defaultItems} />
      </div>
    </div>
  ),
};

export const Colors: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4 w-[600px]">
      <div className="flex gap-4">
        <Tabs {...args} color="default" items={defaultItems} />
        <Tabs {...args} color="primary" items={defaultItems} />
      </div>
      <div className="flex gap-4">
        <Tabs {...args} color="secondary" items={defaultItems} />
        <Tabs {...args} color="success" items={defaultItems} />
      </div>
      <div className="flex gap-4">
        <Tabs {...args} color="warning" items={defaultItems} />
        <Tabs {...args} color="danger" items={defaultItems} />
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex gap-4 w-[800px]">
      <Tabs {...args} size="sm" items={defaultItems} />
      <Tabs {...args} size="md" items={defaultItems} />
      <Tabs {...args} size="lg" items={defaultItems} />
    </div>
  ),
};

export const Radiuses: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4 w-[600px]">
      <div className="flex gap-4">
        <Tabs {...args} radius="none" items={defaultItems} />
        <Tabs {...args} radius="sm" items={defaultItems} />
      </div>
      <div className="flex gap-4">
        <Tabs {...args} radius="md" items={defaultItems} />
        <Tabs {...args} radius="lg" items={defaultItems} />
      </div>
      <Tabs {...args} radius="full" items={defaultItems} />
    </div>
  ),
};

export const Vertical: Story = {
  args: {
    items: defaultItems,
    isVertical: true,
    variant: "solid",
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      {
        id: "photos",
        label: "Photos",
        icon: <FaImage className={tabIconClass} aria-hidden />,
        content: <div className="p-4">Photos content</div>,
      },
      {
        id: "music",
        label: "Music",
        icon: <FaMusic className={tabIconClass} aria-hidden />,
        content: <div className="p-4">Music content</div>,
      },
    ],
  },
};

export const WithCount: Story = {
  args: {
    items: [
      { id: "all", label: "All", count: 24, content: <div className="p-4">All items</div> },
      { id: "active", label: "Active", count: 12, content: <div className="p-4">Active items</div> },
      { id: "archived", label: "Archived", count: 5, content: <div className="p-4">Archived items</div> },
    ],
  },
};

export const Disabled: Story = {
  args: {
    items: defaultItems,
    isDisabled: true,
  },
};

export const DisabledKeys: Story = {
  args: {
    items: defaultItems,
    disabledKeys: ["music"],
  },
};

export const Compound: Story = {
  render: (args) => (
    <Tabs {...args} defaultSelectedKey="music">
      <Tab
        key="photos"
        title="Photos"
        icon={<FaImage className={tabIconClass} aria-hidden />}
      >
        <div className="p-4 text-neutral-600 dark:text-neutral-300">
          This is the Photos tab panel. You can easily pass React children here.
        </div>
      </Tab>
      <Tab
        key="music"
        title="Music"
        icon={<FaMusic className={tabIconClass} aria-hidden />}
        count={5}
      >
        <div className="p-4 text-neutral-600 dark:text-neutral-300">
          This is the Music tab panel. This tab also has an optional count badge.
        </div>
      </Tab>
      <Tab key="videos" title="Videos" disabled>
        <div className="p-4 text-neutral-600 dark:text-neutral-300">
          This is the Videos tab panel. This tab is disabled.
        </div>
      </Tab>
    </Tabs>
  ),
};
