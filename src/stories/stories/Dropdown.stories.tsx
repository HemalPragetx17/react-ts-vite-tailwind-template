import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, DropdownSection, Button, Avatar } from "../../components/ui";
import { FaUser, FaGear, FaArrowRightFromBracket, FaCopy, FaPen, FaTrash, FaShare } from "react-icons/fa6";
import React from "react";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
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
    showArrow: {
      control: "boolean",
    },
    closeOnSelect: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    placement: "bottom-start",
    showArrow: false,
    closeOnSelect: true,
  },
  render: (args) => (
    <Dropdown {...args}>
      <DropdownTrigger>
        <Button color="primary">Trigger Menu</Button>
      </DropdownTrigger>
      <DropdownMenu ariaLabel="Actions">
        <DropdownItem key="new">New file</DropdownItem>
        <DropdownItem key="copy">Copy link</DropdownItem>
        <DropdownItem key="edit">Edit file</DropdownItem>
        <DropdownItem key="delete" color="danger" className="text-danger">
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ),
};

export const DisabledKeys: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">Actions</Button>
      </DropdownTrigger>
      <DropdownMenu disabledKeys={["edit", "delete"]}>
        <DropdownItem key="new">New file</DropdownItem>
        <DropdownItem key="copy">Copy link</DropdownItem>
        <DropdownItem key="edit">Edit file</DropdownItem>
        <DropdownItem key="delete" color="danger" className="text-danger">
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger>
        <Button color="secondary" variant="flat">Actions</Button>
      </DropdownTrigger>
      <DropdownMenu variant="flat" color="secondary">
        <DropdownItem key="new" startContent={<FaPen className="w-3.5 h-3.5" />}>
          Edit file
        </DropdownItem>
        <DropdownItem key="copy" startContent={<FaCopy className="w-3.5 h-3.5" />}>
          Copy link
        </DropdownItem>
        <DropdownItem key="share" startContent={<FaShare className="w-3.5 h-3.5" />}>
          Share file
        </DropdownItem>
        <DropdownItem
          key="delete"
          color="danger"
          className="text-danger"
          startContent={<FaTrash className="w-3.5 h-3.5" />}
        >
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">File Options</Button>
      </DropdownTrigger>
      <DropdownMenu variant="flat" className="w-[260px]">
        <DropdownItem
          key="new"
          description="Create a new document in this folder"
          startContent={<FaPen className="text-default-500 w-4 h-4" />}
        >
          New file
        </DropdownItem>
        <DropdownItem
          key="copy"
          description="Copy the shareable link to clipboard"
          startContent={<FaCopy className="text-default-500 w-4 h-4" />}
        >
          Copy link
        </DropdownItem>
        <DropdownItem
          key="edit"
          description="Modify the existing draft file"
          startContent={<FaGear className="text-default-500 w-4 h-4" />}
        >
          Edit file
        </DropdownItem>
        <DropdownItem
          key="delete"
          color="danger"
          description="Permanently delete the document"
          startContent={<FaTrash className="w-4 h-4" />}
        >
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ),
};

export const Sections: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger>
        <Button color="default" variant="flat">My Account</Button>
      </DropdownTrigger>
      <DropdownMenu variant="flat" ariaLabel="User Actions">
        <DropdownSection title="Profile" showDivider>
          <DropdownItem key="profile" startContent={<FaUser className="w-3.5 h-3.5" />}>
            My Profile
          </DropdownItem>
          <DropdownItem key="settings" startContent={<FaGear className="w-3.5 h-3.5" />}>
            Settings
          </DropdownItem>
        </DropdownSection>
        <DropdownSection title="Actions">
          <DropdownItem
            key="logout"
            color="danger"
            startContent={<FaArrowRightFromBracket className="w-3.5 h-3.5" />}
          >
            Log Out
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  ),
};

export const SingleSelection: Story = {
  render: function SingleSelectionStory() {
    const [selected, setSelected] = React.useState<Set<string>>(new Set(["text"]));

    const selectedValue = React.useMemo(
      () => Array.from(selected).join(", ").replace("_", " "),
      [selected]
    );

    return (
      <div className="flex flex-col gap-2">
        <Dropdown>
          <DropdownTrigger>
            <Button variant="bordered" className="capitalize">
              {selectedValue || "Select Type"}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            ariaLabel="Single selection actions"
            variant="flat"
            selectionMode="single"
            selectedKeys={selected}
            onSelectionChange={setSelected}
          >
            <DropdownItem key="text">Text file</DropdownItem>
            <DropdownItem key="pdf">PDF document</DropdownItem>
            <DropdownItem key="image">Image graphic</DropdownItem>
            <DropdownItem key="video">Video compilation</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <span className="text-xs text-neutral-400">Selected value: {selectedValue}</span>
      </div>
    );
  },
};

export const MultipleSelection: Story = {
  render: function MultipleSelectionStory() {
    const [selected, setSelected] = React.useState<Set<string>>(new Set(["text", "pdf"]));

    const selectedValue = React.useMemo(
      () => Array.from(selected).join(", ").replace("_", " "),
      [selected]
    );

    return (
      <div className="flex flex-col gap-2">
        <Dropdown>
          <DropdownTrigger>
            <Button variant="bordered" className="capitalize">
              Filter Types ({selected.size})
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            ariaLabel="Multiple selection actions"
            variant="flat"
            selectionMode="multiple"
            selectedKeys={selected}
            onSelectionChange={setSelected}
          >
            <DropdownItem key="text">Text file</DropdownItem>
            <DropdownItem key="pdf">PDF document</DropdownItem>
            <DropdownItem key="image">Image graphic</DropdownItem>
            <DropdownItem key="video">Video compilation</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <span className="text-xs text-neutral-400">Selected values: {selectedValue || "none"}</span>
      </div>
    );
  },
};

export const VariantsAndColors: Story = {
  render: function VariantsAndColorsStory() {
    const variants = ["solid", "bordered", "light", "flat", "faded", "shadow"] as const;
    const colors = ["default", "primary", "secondary", "success", "warning", "danger"] as const;
    const [variant, setVariant] = React.useState<typeof variants[number]>("flat");
    const [color, setColor] = React.useState<typeof colors[number]>("primary");

    return (
      <div className="flex flex-col gap-6 p-4">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-neutral-400 font-medium">Select Variant:</span>
            <div className="flex gap-2">
              {variants.map((v) => (
                <Button key={v} size="sm" variant={variant === v ? "solid" : "bordered"} color="default" onClick={() => setVariant(v)}>
                  {v}
                </Button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs text-neutral-400 font-medium">Select Color:</span>
            <div className="flex gap-2">
              {colors.map((c) => (
                <Button key={c} size="sm" variant={color === c ? "solid" : "bordered"} color={c} onClick={() => setColor(c)}>
                  {c}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center p-8 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <Dropdown>
            <DropdownTrigger>
              <Button color={color} variant={variant === "light" ? "light" : variant === "shadow" ? "solid" : variant}>
                Trigger Dropdown
              </Button>
            </DropdownTrigger>
            <DropdownMenu variant={variant} color={color} ariaLabel="Dynamic Menu Demo">
              <DropdownItem key="new">New file</DropdownItem>
              <DropdownItem key="copy">Copy link</DropdownItem>
              <DropdownItem key="edit">Edit file</DropdownItem>
              <DropdownItem key="delete" color="danger">Delete file</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    );
  },
};

export const AvatarTrigger: Story = {
  render: () => (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          isBordered
          color="primary"
          className="cursor-pointer hover:opacity-85 transition-opacity"
        />
      </DropdownTrigger>
      <DropdownMenu variant="flat" color="primary" ariaLabel="Profile Actions">
        <DropdownSection title="Signed in as" showDivider>
          <DropdownItem key="user-info" description="zoey@example.com" className="h-14 gap-2">
            Zoey Lang
          </DropdownItem>
        </DropdownSection>
        <DropdownSection title="Options" showDivider>
          <DropdownItem key="settings" startContent={<FaGear className="w-3.5 h-3.5" />}>
            My Settings
          </DropdownItem>
          <DropdownItem key="team_settings">Team Settings</DropdownItem>
          <DropdownItem key="analytics">Analytics</DropdownItem>
          <DropdownItem key="system">System</DropdownItem>
        </DropdownSection>
        <DropdownSection title="Danger Zone">
          <DropdownItem
            key="logout"
            color="danger"
            className="text-danger"
            startContent={<FaArrowRightFromBracket className="w-3.5 h-3.5" />}
          >
            Log Out
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  ),
};
