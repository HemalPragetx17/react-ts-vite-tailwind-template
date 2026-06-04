import type { Meta, StoryObj } from "@storybook/react";
import { FaChevronDown, FaMinus, FaPlus } from "react-icons/fa6";
import Avatar from "../avatar/Avatar";
import { Accordion, AccordionItem } from "./Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["light", "shadow", "bordered", "splitted"],
    },
    selectionMode: {
      control: "select",
      options: ["single", "multiple"],
    },
    isDisabled: {
      control: "boolean",
    },
    hideIndicator: {
      control: "boolean",
    },
    showDivider: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const defaultContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export const Default: Story = {
  render: (args) => (
    <div className="w-[500px]">
      <Accordion {...args}>
        <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
          {defaultContent}
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
          {defaultContent}
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
          {defaultContent}
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-col gap-8 w-[600px] max-w-full">
      <div>
        <h4 className="text-sm font-semibold text-neutral-500 mb-3">Light (Default)</h4>
        <Accordion {...args} variant="light">
          <AccordionItem key="1" title="Accordion 1" subtitle="Press to expand">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="2" title="Accordion 2" subtitle="Press to expand">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="3" title="Accordion 3" subtitle="Press to expand">
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-neutral-500 mb-3">Shadow</h4>
        <Accordion {...args} variant="shadow">
          <AccordionItem key="1" title="Accordion 1" subtitle="Press to expand">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="2" title="Accordion 2" subtitle="Press to expand">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="3" title="Accordion 3" subtitle="Press to expand">
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-neutral-500 mb-3">Bordered</h4>
        <Accordion {...args} variant="bordered">
          <AccordionItem key="1" title="Accordion 1" subtitle="Press to expand">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="2" title="Accordion 2" subtitle="Press to expand">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="3" title="Accordion 3" subtitle="Press to expand">
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-neutral-500 mb-3">Splitted</h4>
        <Accordion {...args} variant="splitted">
          <AccordionItem key="1" title="Accordion 1" subtitle="Press to expand">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="2" title="Accordion 2" subtitle="Press to expand">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="3" title="Accordion 3" subtitle="Press to expand">
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  ),
};

export const SelectionModes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-8 w-[500px]">
      <div>
        <h4 className="text-sm font-semibold text-neutral-500 mb-3">Single Selection Mode (Default)</h4>
        <Accordion {...args} selectionMode="single" defaultSelectedKeys={["1"]}>
          <AccordionItem key="1" title="Accordion 1">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="2" title="Accordion 2">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="3" title="Accordion 3">
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-neutral-500 mb-3">Multiple Selection Mode</h4>
        <Accordion {...args} selectionMode="multiple" defaultSelectedKeys={["1", "2"]}>
          <AccordionItem key="1" title="Accordion 1">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="2" title="Accordion 2">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="3" title="Accordion 3">
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  ),
};

export const StartContent: Story = {
  render: (args) => (
    <div className="w-[500px]">
      <Accordion {...args} variant="splitted">
        <AccordionItem
          key="1"
          title="Chansoo Landgren"
          subtitle="3 active tasks"
          startContent={
            <Avatar
              radius="lg"
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=128&h=128&q=80"
            />
          }
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="2"
          title="Zoey Lang"
          subtitle="Technical Lead"
          startContent={
            <Avatar
              radius="lg"
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=128&h=128&q=80"
            />
          }
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="3"
          title="Jane Doe"
          subtitle="Product Manager"
          startContent={
            <Avatar
              radius="lg"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=128&h=128&q=80"
            />
          }
        >
          {defaultContent}
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const CustomIndicator: Story = {
  render: (args) => (
    <div className="w-[500px]">
      <Accordion {...args}>
        <AccordionItem
          key="1"
          title="Custom Anchor Arrow"
          indicator={({ isExpanded }) => (
            <FaChevronDown
              className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? "rotate-180" : "rotate-0"}`}
              aria-hidden
            />
          )}
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="2"
          title="Plus & Minus State"
          indicator={({ isExpanded }) =>
            isExpanded ? (
              <FaMinus className="w-5 h-5" aria-hidden />
            ) : (
              <FaPlus className="w-5 h-5" aria-hidden />
            )
          }
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="3"
          title="No Indicator Icon"
          hideIndicator
        >
          {defaultContent}
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const DisabledItems: Story = {
  render: (args) => (
    <div className="w-[500px]">
      <Accordion {...args} defaultSelectedKeys={["2"]}>
        <AccordionItem key="1" title="Accordion 1" isDisabled>
          {defaultContent}
        </AccordionItem>
        <AccordionItem key="2" title="Accordion 2">
          {defaultContent}
        </AccordionItem>
        <AccordionItem key="3" title="Accordion 3" isDisabled>
          {defaultContent}
        </AccordionItem>
      </Accordion>
    </div>
  ),
};
