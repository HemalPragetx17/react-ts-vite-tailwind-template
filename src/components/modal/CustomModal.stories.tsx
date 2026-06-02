import type { Meta, StoryObj } from "@storybook/react";
import CustomModal from "./CustomModal";
import React, { useState } from "react";
import CustomButton from "../button/CustomButton";

const meta: Meta<typeof CustomModal> = {
  title: "Components/CustomModal",
  component: CustomModal,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "full"],
    },
    backdrop: {
      control: "select",
      options: ["transparent", "opaque", "blur"],
    },
    scrollBehavior: {
      control: "select",
      options: ["inside", "outside"],
    },
    isDraggable: {
      control: "boolean",
    },
    isDismissable: {
      control: "boolean",
    },
    closeButton: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof CustomModal>;

const ModalWithTrigger = (args: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="p-10">
      <CustomButton onClick={() => setIsOpen(true)}>Open Modal</CustomButton>
      <CustomModal
        {...args}
        openDialog={isOpen}
        handleDialogClose={() => setIsOpen(false)}
      >
        <div className="py-4">
          <p>This is the modal content. You can put anything here!</p>
          <p className="mt-2 text-neutral-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis.
          </p>
        </div>
      </CustomModal>
    </div>
  );
};

export const Default: Story = {
  render: (args) => <ModalWithTrigger {...args} />,
  args: {
    title: "Modal Title",
    primaryActionText: "Confirm",
    secondaryActionText: "Cancel",
  },
};

export const BlurredBackdrop: Story = {
  render: (args) => <ModalWithTrigger {...args} />,
  args: {
    title: "Blurred Backdrop",
    backdrop: "blur",
    primaryActionText: "Got it",
  },
};

export const Draggable: Story = {
  render: (args) => <ModalWithTrigger {...args} />,
  args: {
    title: "Draggable Modal",
    isDraggable: true,
    primaryActionText: "Confirm",
  },
};

export const LongContent: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="p-10">
        <CustomButton onClick={() => setIsOpen(true)}>Open Long Modal</CustomButton>
        <CustomModal
          {...args}
          openDialog={isOpen}
          handleDialogClose={() => setIsOpen(false)}
        >
          <div className="py-4">
            {Array.from({ length: 20 }).map((_, i) => (
              <p key={i} className="mb-4">
                This is paragraph {i + 1} of a very long content to demonstrate scrolling behavior.
              </p>
            ))}
          </div>
        </CustomModal>
      </div>
    );
  },
  args: {
    title: "Scrolling Content",
    scrollBehavior: "inside",
    primaryActionText: "Close",
  },
};

export const FullScreen: Story = {
  render: (args) => <ModalWithTrigger {...args} />,
  args: {
    title: "Full Screen Modal",
    size: "full",
    primaryActionText: "Submit",
    secondaryActionText: "Cancel",
  },
};
