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
    items: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => {
    const items = [
      { id: "photos", label: "Photos", content: <div className="p-4">Photos content here</div> },
      { id: "music", label: "Music", content: <div className="p-4">Music content here</div> },
      { id: "videos", label: "Videos", content: <div className="p-4">Videos content here</div> },
    ];
    return <Tabs items={items} />;
  },
};

export const Variants: Story = {
  render: () => {
    const items = [
      { id: "photos", label: "Photos", content: <div className="p-4">Photos content here</div> },
      { id: "music", label: "Music", content: <div className="p-4">Music content here</div> },
      { id: "videos", label: "Videos", content: <div className="p-4">Videos content here</div> },
    ];
    return (
      <div className="flex flex-col gap-4 w-[600px]">
        <div className="flex gap-4">
          <Tabs variant="solid" items={items} />
          <Tabs variant="bordered" items={items} />
        </div>
        <div className="flex gap-4">
          <Tabs variant="light" items={items} />
          <Tabs variant="underlined" items={items} />
        </div>
      </div>
    );
  },
};

export const Colors: Story = {
  render: () => {
    const items = [
      { id: "photos", label: "Photos", content: <div className="p-4">Photos content here</div> },
      { id: "music", label: "Music", content: <div className="p-4">Music content here</div> },
      { id: "videos", label: "Videos", content: <div className="p-4">Videos content here</div> },
    ];
    return (
      <div className="flex flex-col gap-4 w-[600px]">
        <div className="flex gap-4">
          <Tabs color="default" items={items} />
          <Tabs color="primary" items={items} />
        </div>
        <div className="flex gap-4">
          <Tabs color="secondary" items={items} />
          <Tabs color="success" items={items} />
        </div>
        <div className="flex gap-4">
          <Tabs color="warning" items={items} />
          <Tabs color="danger" items={items} />
        </div>
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const items = [
      { id: "photos", label: "Photos", content: <div className="p-4">Photos content here</div> },
      { id: "music", label: "Music", content: <div className="p-4">Music content here</div> },
      { id: "videos", label: "Videos", content: <div className="p-4">Videos content here</div> },
    ];
    return (
      <div className="flex gap-4 w-[800px]">
        <Tabs size="sm" items={items} />
        <Tabs size="md" items={items} />
        <Tabs size="lg" items={items} />
      </div>
    );
  },
};

export const Radiuses: Story = {
  render: () => {
    const items = [
      { id: "photos", label: "Photos", content: <div className="p-4">Photos content here</div> },
      { id: "music", label: "Music", content: <div className="p-4">Music content here</div> },
      { id: "videos", label: "Videos", content: <div className="p-4">Videos content here</div> },
    ];
    return (
      <div className="flex flex-col gap-4 w-[600px]">
        <div className="flex gap-4">
          <Tabs radius="none" items={items} />
          <Tabs radius="sm" items={items} />
        </div>
        <div className="flex gap-4">
          <Tabs radius="md" items={items} />
          <Tabs radius="lg" items={items} />
        </div>
        <Tabs radius="full" items={items} />
      </div>
    );
  },
};

export const Vertical: Story = {
  render: () => {
    const items = [
      { id: "photos", label: "Photos", content: <div className="p-4">Photos content here</div> },
      { id: "music", label: "Music", content: <div className="p-4">Music content here</div> },
      { id: "videos", label: "Videos", content: <div className="p-4">Videos content here</div> },
    ];
    return <Tabs items={items} isVertical variant="solid" />;
  },
};

export const WithIcons: Story = {
  render: () => {
    const items = [
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
    ];
    return <Tabs items={items} />;
  },
};

export const WithCount: Story = {
  render: () => {
    const items = [
      { id: "all", label: "All", count: 24, content: <div className="p-4">All items</div> },
      { id: "active", label: "Active", count: 12, content: <div className="p-4">Active items</div> },
      { id: "archived", label: "Archived", count: 5, content: <div className="p-4">Archived items</div> },
    ];
    return <Tabs items={items} />;
  },
};

export const Disabled: Story = {
  render: () => {
    const items = [
      { id: "photos", label: "Photos", content: <div className="p-4">Photos content here</div> },
      { id: "music", label: "Music", content: <div className="p-4">Music content here</div> },
      { id: "videos", label: "Videos", content: <div className="p-4">Videos content here</div> },
    ];
    return <Tabs items={items} isDisabled />;
  },
};

export const DisabledKeys: Story = {
  render: () => {
    const items = [
      { id: "photos", label: "Photos", content: <div className="p-4">Photos content here</div> },
      { id: "music", label: "Music", content: <div className="p-4">Music content here</div> },
      { id: "videos", label: "Videos", content: <div className="p-4">Videos content here</div> },
    ];
    return <Tabs items={items} disabledKeys={["music"]} />;
  },
};

export const Compound: Story = {
  render: () => (
    <Tabs defaultSelectedKey="music">
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
