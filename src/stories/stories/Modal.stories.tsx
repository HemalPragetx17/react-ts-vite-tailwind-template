import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button, Modal } from "../../components/ui";

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

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="p-10">
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal
          title="Modal Title"
          primaryActionText="Confirm"
          secondaryActionText="Cancel"
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
  },
};

export const Sizes: Story = {
  render: () => {
    const [openSize, setOpenSize] = useState<"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "full" | null>(null);

    return (
      <div className="p-10 flex flex-wrap gap-4">
        <Button onClick={() => setOpenSize("xs")}>Open XS</Button>
        <Button onClick={() => setOpenSize("sm")}>Open SM</Button>
        <Button onClick={() => setOpenSize("md")}>Open MD</Button>
        <Button onClick={() => setOpenSize("lg")}>Open LG</Button>
        <Button onClick={() => setOpenSize("xl")}>Open XL</Button>
        <Button onClick={() => setOpenSize("2xl")}>Open 2XL</Button>
        <Button onClick={() => setOpenSize("3xl")}>Open 3XL</Button>
        <Button onClick={() => setOpenSize("4xl")}>Open 4XL</Button>
        <Button onClick={() => setOpenSize("5xl")}>Open 5XL</Button>
        <Button onClick={() => setOpenSize("full")}>Open Full</Button>

        <Modal
          title={`Modal Size: ${openSize}`}
          primaryActionText="Confirm"
          secondaryActionText="Cancel"
          size={openSize || "md"}
          openDialog={openSize !== null}
          handleDialogClose={() => setOpenSize(null)}
          onPrimaryAction={() => setOpenSize(null)}
          onSecondaryAction={() => setOpenSize(null)}
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
};

export const Backdrops: Story = {
  render: () => {
    const [openBackdrop, setOpenBackdrop] = useState<"transparent" | "opaque" | "blur" | null>(null);

    return (
      <div className="p-10 flex flex-wrap gap-4">
        <Button onClick={() => setOpenBackdrop("transparent")}>Transparent Backdrop</Button>
        <Button onClick={() => setOpenBackdrop("opaque")}>Opaque Backdrop</Button>
        <Button onClick={() => setOpenBackdrop("blur")}>Blur Backdrop</Button>

        <Modal
          title={`${openBackdrop?.toUpperCase()} Backdrop`}
          primaryActionText="Got it"
          backdrop={openBackdrop || "opaque"}
          openDialog={openBackdrop !== null}
          handleDialogClose={() => setOpenBackdrop(null)}
          onPrimaryAction={() => setOpenBackdrop(null)}
          onSecondaryAction={() => setOpenBackdrop(null)}
        >
          <div className="py-4">
            <p>This modal is showing the <strong>{openBackdrop}</strong> backdrop style.</p>
          </div>
        </Modal>
      </div>
    );
  },
};

export const ScrollBehaviors: Story = {
  render: () => {
    const [openBehavior, setOpenBehavior] = useState<"inside" | "outside" | null>(null);

    return (
      <div className="p-10 flex flex-wrap gap-4">
        <Button onClick={() => setOpenBehavior("inside")}>Scroll Inside</Button>
        <Button onClick={() => setOpenBehavior("outside")}>Scroll Outside</Button>

        <Modal
          title={`Scroll Behavior: ${openBehavior}`}
          primaryActionText="Close"
          scrollBehavior={openBehavior || "inside"}
          openDialog={openBehavior !== null}
          handleDialogClose={() => setOpenBehavior(null)}
          onPrimaryAction={() => setOpenBehavior(null)}
          onSecondaryAction={() => setOpenBehavior(null)}
        >
          <div className="py-4">
            <p className="mb-4 font-semibold text-primary">
              Scroll behavior is set to "{openBehavior}".
            </p>
            <p className="mb-4 text-neutral-500">
              Paragraph 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec vel magna id eros dictum vulputate vel in nibh.
            </p>
            <p className="mb-4 text-neutral-500">
              Paragraph 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="mb-4 text-neutral-500">
              Paragraph 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p className="mb-4 text-neutral-500">
              Paragraph 4: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
            </p>
          </div>
        </Modal>
      </div>
    );
  },
};

export const Draggable: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="p-10">
        <Button onClick={() => setIsOpen(true)}>Open Draggable Modal</Button>
        <Modal
          title="Draggable Modal"
          isDraggable={true}
          primaryActionText="Confirm"
          openDialog={isOpen}
          handleDialogClose={() => setIsOpen(false)}
        >
          <div className="py-4">
            <p>This is a draggable modal content. You can drag the header to move the modal around.</p>
          </div>
        </Modal>
      </div>
    );
  },
};

export const Dismissable: Story = {
  render: () => {
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
          title={openMode === "dismissable" ? "Dismissable Modal" : "Non-Dismissable Modal"}
          primaryActionText="Got it"
          openDialog={openMode !== null}
          isDismissable={openMode === "dismissable"}
          isKeyboardDismissDisabled={openMode !== "dismissable"}
          handleDialogClose={() => setOpenMode(null)}
          onPrimaryAction={() => setOpenMode(null)}
          onSecondaryAction={() => setOpenMode(null)}
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
};

export const CloseButtonVariant: Story = {
  render: () => {
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
          title={openMode === "with-btn" ? "Modal with Close Button" : "Modal without Close Button"}
          primaryActionText="Close"
          openDialog={openMode !== null}
          closeButton={openMode === "with-btn"}
          handleDialogClose={() => setOpenMode(null)}
          onPrimaryAction={() => setOpenMode(null)}
          onSecondaryAction={() => setOpenMode(null)}
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
};

export const Radiuses: Story = {
  render: () => {
    const [openRadius, setOpenRadius] = useState<"none" | "sm" | "md" | "lg" | null>(null);

    return (
      <div className="p-10 flex flex-wrap gap-4">
        <Button onClick={() => setOpenRadius("none")}>Radius NONE</Button>
        <Button onClick={() => setOpenRadius("sm")}>Radius SM</Button>
        <Button onClick={() => setOpenRadius("md")}>Radius MD</Button>
        <Button onClick={() => setOpenRadius("lg")}>Radius LG</Button>

        <Modal
          title={`Modal Radius: ${openRadius}`}
          primaryActionText="Confirm"
          secondaryActionText="Cancel"
          radius={openRadius || "lg"}
          openDialog={openRadius !== null}
          handleDialogClose={() => setOpenRadius(null)}
          onPrimaryAction={() => setOpenRadius(null)}
          onSecondaryAction={() => setOpenRadius(null)}
        >
          <div className="py-4">
            <p>This modal is showing the <strong>{openRadius}</strong> border radius style.</p>
          </div>
        </Modal>
      </div>
    );
  },
};

export const Shadows: Story = {
  render: () => {
    const [openShadow, setOpenShadow] = useState<"none" | "sm" | "md" | "lg" | null>(null);

    return (
      <div className="p-10 flex flex-wrap gap-4">
        <Button onClick={() => setOpenShadow("none")}>Shadow NONE</Button>
        <Button onClick={() => setOpenShadow("sm")}>Shadow SM</Button>
        <Button onClick={() => setOpenShadow("md")}>Shadow MD</Button>
        <Button onClick={() => setOpenShadow("lg")}>Shadow LG</Button>

        <Modal
          title={`Modal Shadow: ${openShadow}`}
          primaryActionText="Confirm"
          secondaryActionText="Cancel"
          shadow={openShadow || "lg"}
          openDialog={openShadow !== null}
          handleDialogClose={() => setOpenShadow(null)}
          onPrimaryAction={() => setOpenShadow(null)}
          onSecondaryAction={() => setOpenShadow(null)}
        >
          <div className="py-4">
            <p>This modal is showing the <strong>{openShadow}</strong> shadow strength style.</p>
          </div>
        </Modal>
      </div>
    );
  },
};
