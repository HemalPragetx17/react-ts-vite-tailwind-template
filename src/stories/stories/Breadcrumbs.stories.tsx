import type { Meta, StoryObj } from "@storybook/react";
import {
  FaCompactDisc,
  FaHouse,
  FaMusic,
  FaUser,
  FaVolumeHigh,
} from "react-icons/fa6";
import { Breadcrumbs } from "../../components/ui";

const meta: Meta<typeof Breadcrumbs> = {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "success", "warning", "danger"],
    },
    variant: {
      control: "select",
      options: ["solid", "bordered", "light"],
    },
    underline: {
      control: "select",
      options: ["none", "hover", "always", "active", "focus"],
    },
    radius: {
      control: "select",
      options: ["none", "sm", "md", "lg", "full"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

const breadcrumbIconClass = "w-3.5 h-3.5 text-neutral-500";

const staticItems = [
  { label: "Home", path: "/", isLast: false, isClickable: true },
  { label: "Products", path: "/products", isLast: false, isClickable: true },
  { label: "Electronics", path: "/products/electronics", isLast: true, isClickable: false },
];

const musicItems = [
  { label: "Home", path: "/", isLast: false, isClickable: true },
  { label: "Music", path: "/music", isLast: false, isClickable: true },
  { label: "Artist", path: "/music/artist", isLast: false, isClickable: true },
  { label: "Album", path: "/music/artist/album", isLast: false, isClickable: true },
  { label: "Song", path: "/music/artist/album/song", isLast: true, isClickable: false },
];

const itemsWithIcons = [
  { label: "Home", path: "/", isLast: false, isClickable: true, startContent: <FaHouse className={breadcrumbIconClass} aria-hidden /> },
  { label: "Music", path: "/music", isLast: false, isClickable: true, startContent: <FaMusic className={breadcrumbIconClass} aria-hidden /> },
  { label: "Artist", path: "/music/artist", isLast: false, isClickable: true, startContent: <FaUser className={breadcrumbIconClass} aria-hidden /> },
  { label: "Album", path: "/music/artist/album", isLast: false, isClickable: true, startContent: <FaCompactDisc className={breadcrumbIconClass} aria-hidden /> },
  { label: "Song", path: "/music/artist/album/song", isLast: true, isClickable: false, startContent: <FaVolumeHigh className={breadcrumbIconClass} aria-hidden /> },
];

export const Default: Story = {
  args: {
    items: staticItems,
  },
};

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <div>
        <span className="text-xs font-semibold text-neutral-500 block mb-1">Solid</span>
        <Breadcrumbs {...args} variant="solid" items={staticItems} />
      </div>
      <div>
        <span className="text-xs font-semibold text-neutral-500 block mb-1">Bordered</span>
        <Breadcrumbs {...args} variant="bordered" items={staticItems} />
      </div>
      <div>
        <span className="text-xs font-semibold text-neutral-500 block mb-1">Light</span>
        <Breadcrumbs {...args} variant="light" items={staticItems} />
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <div>
        <span className="text-xs font-semibold text-neutral-500 block mb-1">Small (sm)</span>
        <Breadcrumbs {...args} size="sm" items={staticItems} />
      </div>
      <div>
        <span className="text-xs font-semibold text-neutral-500 block mb-1">Medium (md)</span>
        <Breadcrumbs {...args} size="md" items={staticItems} />
      </div>
      <div>
        <span className="text-xs font-semibold text-neutral-500 block mb-1">Large (lg)</span>
        <Breadcrumbs {...args} size="lg" items={staticItems} />
      </div>
    </div>
  ),
};

export const Colors: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <div>
        <span className="text-xs font-semibold text-neutral-500 block mb-1">Default</span>
        <Breadcrumbs {...args} color="default" items={staticItems} />
      </div>
      <div>
        <span className="text-xs font-semibold text-neutral-500 block mb-1">Primary</span>
        <Breadcrumbs {...args} color="primary" items={staticItems} />
      </div>
      <div>
        <span className="text-xs font-semibold text-neutral-500 block mb-1">Secondary</span>
        <Breadcrumbs {...args} color="secondary" items={staticItems} />
      </div>
      <div>
        <span className="text-xs font-semibold text-neutral-500 block mb-1">Success</span>
        <Breadcrumbs {...args} color="success" items={staticItems} />
      </div>
      <div>
        <span className="text-xs font-semibold text-neutral-500 block mb-1">Warning</span>
        <Breadcrumbs {...args} color="warning" items={staticItems} />
      </div>
      <div>
        <span className="text-xs font-semibold text-neutral-500 block mb-1">Danger</span>
        <Breadcrumbs {...args} color="danger" items={staticItems} />
      </div>
    </div>
  ),
};

export const Radiuses: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <div>
        <span className="text-xs font-semibold text-neutral-500 block mb-1">None</span>
        <Breadcrumbs {...args} radius="none" variant="solid" items={staticItems} />
      </div>
      <div>
        <span className="text-xs font-semibold text-neutral-500 block mb-1">Small (sm)</span>
        <Breadcrumbs {...args} radius="sm" variant="solid" items={staticItems} />
      </div>
      <div>
        <span className="text-xs font-semibold text-neutral-500 block mb-1">Medium (md)</span>
        <Breadcrumbs {...args} radius="md" variant="solid" items={staticItems} />
      </div>
      <div>
        <span className="text-xs font-semibold text-neutral-500 block mb-1">Large (lg)</span>
        <Breadcrumbs {...args} radius="lg" variant="solid" items={staticItems} />
      </div>
      <div>
        <span className="text-xs font-semibold text-neutral-500 block mb-1">Full</span>
        <Breadcrumbs {...args} radius="full" variant="solid" items={staticItems} />
      </div>
    </div>
  ),
};

export const Underlines: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <div>
        <span className="text-xs font-semibold text-neutral-500 block mb-1">None</span>
        <Breadcrumbs {...args} underline="none" items={staticItems} />
      </div>
      <div>
        <span className="text-xs font-semibold text-neutral-500 block mb-1">Hover</span>
        <Breadcrumbs {...args} underline="hover" items={staticItems} />
      </div>
      <div>
        <span className="text-xs font-semibold text-neutral-500 block mb-1">Always</span>
        <Breadcrumbs {...args} underline="always" items={staticItems} />
      </div>
      <div>
        <span className="text-xs font-semibold text-neutral-500 block mb-1">Active</span>
        <Breadcrumbs {...args} underline="active" items={staticItems} />
      </div>
      <div>
        <span className="text-xs font-semibold text-neutral-500 block mb-1">Focus</span>
        <Breadcrumbs {...args} underline="focus" items={staticItems} />
      </div>
    </div>
  ),
};

export const CustomSeparator: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <div>
        <span className="text-xs font-semibold text-neutral-500 block mb-1">Slash Separator (/)</span>
        <Breadcrumbs {...args} separator="/" items={musicItems} />
      </div>
    </div>
  ),
};

export const StartAndEndContent: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <div>
        <span className="text-xs font-semibold text-neutral-500 block mb-1">Start Content (Icons)</span>
        <Breadcrumbs {...args} items={itemsWithIcons} />
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <div>
        <span className="text-xs font-semibold text-neutral-500 block mb-1">Disabled Breadcrumbs</span>
        <Breadcrumbs {...args} isDisabled items={musicItems} />
      </div>
    </div>
  ),
};

