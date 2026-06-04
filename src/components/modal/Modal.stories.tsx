import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Button from "../button/Button";
import Modal from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
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
    radius: {
      control: "select",
      options: ["none", "sm", "md", "lg"],
    },
    shadow: {
      control: "select",
      options: ["none", "sm", "md", "lg"],
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
type Story = StoryObj<typeof Modal>;

const ModalWithTrigger = (args: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="p-10">
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal
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
      </Modal>
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

export const Sizes: Story = {
  render: (args) => {
    const [openSize, setOpenSize] = useState<any>(null);
    const sizes = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "full"] as const;

    return (
      <div className="p-10 flex flex-wrap gap-4">
        {sizes.map((size) => (
          <Button key={size} onClick={() => setOpenSize(size)}>
            Open {size}
          </Button>
        ))}

        <Modal
          {...args}
          size={openSize || "md"}
          openDialog={openSize !== null}
          handleDialogClose={() => setOpenSize(null)}
          onPrimaryAction={() => setOpenSize(null)}
          onSecondaryAction={() => setOpenSize(null)}
          title={`Modal Size: ${openSize}`}
        >
          <div className="py-4">
            <p>This is a modal of size <strong>{openSize}</strong>.</p>
            <p className="mt-2 text-neutral-500">
              You can adjust the size prop to control the max width of the modal panel.
            </p>
          </div>
        </Modal>
      </div>
    );
  },
  args: {
    primaryActionText: "Confirm",
    secondaryActionText: "Cancel",
  },
};

export const Backdrops: Story = {
  render: (args) => {
    const [openBackdrop, setOpenBackdrop] = useState<any>(null);
    const backdrops = ["transparent", "opaque", "blur"] as const;

    return (
      <div className="p-10 flex flex-wrap gap-4">
        {backdrops.map((backdrop) => (
          <Button key={backdrop} onClick={() => setOpenBackdrop(backdrop)}>
            {backdrop} Backdrop
          </Button>
        ))}

        <Modal
          {...args}
          backdrop={openBackdrop || "opaque"}
          openDialog={openBackdrop !== null}
          handleDialogClose={() => setOpenBackdrop(null)}
          onPrimaryAction={() => setOpenBackdrop(null)}
          onSecondaryAction={() => setOpenBackdrop(null)}
          title={`${openBackdrop?.toUpperCase()} Backdrop`}
        >
          <div className="py-4">
            <p>This modal is showing the <strong>{openBackdrop}</strong> backdrop style.</p>
          </div>
        </Modal>
      </div>
    );
  },
  args: {
    primaryActionText: "Got it",
  },
};

export const ScrollBehaviors: Story = {
  render: (args) => {
    const [openBehavior, setOpenBehavior] = useState<any>(null);
    const behaviors = ["inside", "outside"] as const;

    return (
      <div className="p-10 flex flex-wrap gap-4">
        {behaviors.map((behavior) => (
          <Button key={behavior} onClick={() => setOpenBehavior(behavior)}>
            Scroll {behavior}
          </Button>
        ))}

        <Modal
          {...args}
          scrollBehavior={openBehavior || "inside"}
          openDialog={openBehavior !== null}
          handleDialogClose={() => setOpenBehavior(null)}
          onPrimaryAction={() => setOpenBehavior(null)}
          onSecondaryAction={() => setOpenBehavior(null)}
          title={`Scroll Behavior: ${openBehavior}`}
        >
          <div className="py-4">
            <p className="mb-4 font-semibold text-primary">
              Scroll behavior is set to "{openBehavior}".
            </p>
            {Array.from({ length: 15 }).map((_, i) => (
              <p key={i} className="mb-4 text-neutral-500">
                Paragraph {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Donec vel magna id eros dictum vulputate vel in nibh.
              </p>
            ))}
          </div>
        </Modal>
      </div>
    );
  },
  args: {
    primaryActionText: "Close",
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

export const Dismissable: Story = {
  render: (args) => {
    const [openMode, setOpenMode] = useState<"dismissable" | "non-dismissable" | null>(null);

    return (
      <div className="p-10 flex gap-4">
        <Button onClick={() => setOpenMode("dismissable")}>
          Dismissable (Click outside/Esc to close)
        </Button>
        <Button variant="bordered" onClick={() => setOpenMode("non-dismissable")}>
          Non-Dismissable (Must use buttons to close)
        </Button>

        <Modal
          {...args}
          openDialog={openMode !== null}
          isDismissable={openMode === "dismissable"}
          isKeyboardDismissDisabled={openMode !== "dismissable"}
          handleDialogClose={() => setOpenMode(null)}
          onPrimaryAction={() => setOpenMode(null)}
          onSecondaryAction={() => setOpenMode(null)}
          title={openMode === "dismissable" ? "Dismissable Modal" : "Non-Dismissable Modal"}
        >
          <div className="py-4">
            {openMode === "dismissable" ? (
              <p>You can close this modal by clicking the backdrop or pressing the Escape key.</p>
            ) : (
              <p>Clicking the backdrop or pressing Escape will NOT close this modal. You must click one of the buttons below to close it.</p>
            )}
          </div>
        </Modal>
      </div>
    );
  },
  args: {
    primaryActionText: "Got it",
  },
};

export const CloseButtonVariant: Story = {
  render: (args) => {
    const [openMode, setOpenMode] = useState<"with-btn" | "without-btn" | null>(null);

    return (
      <div className="p-10 flex gap-4">
        <Button onClick={() => setOpenMode("with-btn")}>
          With Close Button (Default)
        </Button>
        <Button variant="bordered" onClick={() => setOpenMode("without-btn")}>
          Without Close Button
        </Button>

        <Modal
          {...args}
          openDialog={openMode !== null}
          closeButton={openMode === "with-btn"}
          handleDialogClose={() => setOpenMode(null)}
          onPrimaryAction={() => setOpenMode(null)}
          onSecondaryAction={() => setOpenMode(null)}
          title={openMode === "with-btn" ? "Modal with Close Button" : "Modal without Close Button"}
        >
          <div className="py-4">
            {openMode === "with-btn" ? (
              <p>This modal has the standard 'X' close button in the top-right corner.</p>
            ) : (
              <p>This modal does not display the top-right 'X' close button.</p>
            )}
          </div>
        </Modal>
      </div>
    );
  },
  args: {
    primaryActionText: "Close",
  },
};

export const Radiuses: Story = {
  render: (args) => {
    const [openRadius, setOpenRadius] = useState<any>(null);
    const radiuses = ["none", "sm", "md", "lg"] as const;

    return (
      <div className="p-10 flex flex-wrap gap-4">
        {radiuses.map((radius) => (
          <Button key={radius} onClick={() => setOpenRadius(radius)}>
            Radius {radius.toUpperCase()}
          </Button>
        ))}

        <Modal
          {...args}
          radius={openRadius || "lg"}
          openDialog={openRadius !== null}
          handleDialogClose={() => setOpenRadius(null)}
          onPrimaryAction={() => setOpenRadius(null)}
          onSecondaryAction={() => setOpenRadius(null)}
          title={`Modal Radius: ${openRadius}`}
        >
          <div className="py-4">
            <p>This modal is showing the <strong>{openRadius}</strong> border radius style.</p>
          </div>
        </Modal>
      </div>
    );
  },
  args: {
    primaryActionText: "Confirm",
    secondaryActionText: "Cancel",
  },
};

export const Shadows: Story = {
  render: (args) => {
    const [openShadow, setOpenShadow] = useState<any>(null);
    const shadows = ["none", "sm", "md", "lg"] as const;

    return (
      <div className="p-10 flex flex-wrap gap-4">
        {shadows.map((shadow) => (
          <Button key={shadow} onClick={() => setOpenShadow(shadow)}>
            Shadow {shadow.toUpperCase()}
          </Button>
        ))}

        <Modal
          {...args}
          shadow={openShadow || "lg"}
          openDialog={openShadow !== null}
          handleDialogClose={() => setOpenShadow(null)}
          onPrimaryAction={() => setOpenShadow(null)}
          onSecondaryAction={() => setOpenShadow(null)}
          title={`Modal Shadow: ${openShadow}`}
        >
          <div className="py-4">
            <p>This modal is showing the <strong>{openShadow}</strong> shadow strength style.</p>
          </div>
        </Modal>
      </div>
    );
  },
  args: {
    primaryActionText: "Confirm",
    secondaryActionText: "Cancel",
  },
};

