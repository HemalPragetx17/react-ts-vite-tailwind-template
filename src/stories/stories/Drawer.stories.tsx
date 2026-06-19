import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  useDisclosure,
} from "../../components/ui";

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    placement: {
      control: "select",
      options: ["left", "right", "top", "bottom"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "full"],
    },
    backdrop: {
      control: "select",
      options: ["transparent", "opaque", "blur"],
    },
    radius: {
      control: "select",
      options: ["none", "sm", "md", "lg"],
    },
    shadow: {
      control: "select",
      options: ["none", "sm", "md", "lg"],
    },
    isDismissable: {
      control: "boolean",
    },
    isKeyboardDismissDisabled: {
      control: "boolean",
    },
    closeButton: {
      control: "boolean",
    },
    scrollBehavior: {
      control: "select",
      options: ["inside", "outside"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

// ─── Basic Story Helper ──────────────────────────────────────────────────────

const DrawerWithTrigger = (args: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="p-10 flex flex-col items-center justify-center min-h-[300px]">
      <Button onClick={onOpen}>Open Drawer</Button>
      <Drawer {...args} isOpen={isOpen} onClose={onClose}>
        <DrawerContent>
          <DrawerHeader>Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p className="text-neutral-600 dark:text-neutral-400">
              This is the standard content of the drawer. You can customize the slide direction, size, backdrop, shadows, and click-to-dismiss behavior.
            </p>
            <p className="mt-4 text-neutral-600 dark:text-neutral-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </DrawerBody>
          <DrawerFooter>
            <Button variant="light" color="danger" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={onClose}>
              Confirm
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export const Default: Story = {
  render: (args) => <DrawerWithTrigger {...args} />,
  args: {
    placement: "right",
    size: "md",
    backdrop: "opaque",
    radius: "lg",
    shadow: "lg",
    isDismissable: true,
    isKeyboardDismissDisabled: false,
    closeButton: true,
    scrollBehavior: "inside",
  },
};

// ─── Placements Story ────────────────────────────────────────────────────────

export const Placements: Story = {
  render: (args) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [placement, setPlacement] = useState<any>("right");

    const openPlacement = (place: any) => {
      setPlacement(place);
      onOpen();
    };

    return (
      <div className="p-10 flex flex-col items-center gap-4">
        <h3 className="text-lg font-semibold mb-2 text-neutral-800 dark:text-neutral-200">
          Try Different Placements
        </h3>
        <div className="flex flex-wrap gap-3">
          <Button onClick={() => openPlacement("left")}>Left Drawer</Button>
          <Button onClick={() => openPlacement("right")}>Right Drawer</Button>
          <Button onClick={() => openPlacement("top")}>Top Drawer</Button>
          <Button onClick={() => openPlacement("bottom")}>Bottom Drawer</Button>
        </div>

        <Drawer {...args} isOpen={isOpen} onClose={onClose} placement={placement}>
          <DrawerContent>
            <DrawerHeader>Drawer placement: {placement}</DrawerHeader>
            <DrawerBody>
              <p className="text-neutral-600 dark:text-neutral-400">
                This drawer is sliding in from the <strong>{placement}</strong> edge of the window.
              </p>
            </DrawerBody>
            <DrawerFooter>
              <Button onClick={onClose}>Close</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    );
  },
  args: {
    backdrop: "opaque",
  },
};

// ─── Sizes Story ─────────────────────────────────────────────────────────────

export const Sizes: Story = {
  render: (args) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [size, setSize] = useState<any>("md");
    const [placement, setPlacement] = useState<any>("right");

    const openSize = (sz: any, place: any = "right") => {
      setSize(sz);
      setPlacement(place);
      onOpen();
    };

    const sizes = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "full"] as const;

    return (
      <div className="p-10 flex flex-col gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
            Horizontal Sizes (sliding left/right)
          </h3>
          <div className="flex flex-wrap gap-3">
            {sizes.map((sz) => (
              <Button key={sz} variant="bordered" onClick={() => openSize(sz, "right")}>
                Size {sz.toUpperCase()}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
            Vertical Sizes (sliding top/bottom)
          </h3>
          <div className="flex flex-wrap gap-3">
            {sizes.slice(0, 5).map((sz) => (
              <Button key={sz} variant="flat" color="secondary" onClick={() => openSize(sz, "bottom")}>
                Size {sz.toUpperCase()} (Bottom)
              </Button>
            ))}
            <Button variant="flat" color="secondary" onClick={() => openSize("full", "bottom")}>
              Size FULL (Bottom)
            </Button>
          </div>
        </div>

        <Drawer {...args} isOpen={isOpen} onClose={onClose} size={size} placement={placement}>
          <DrawerContent>
            <DrawerHeader>Size: {size?.toUpperCase()}</DrawerHeader>
            <DrawerBody>
              <p className="text-neutral-600 dark:text-neutral-400">
                This drawer is size <strong>{size}</strong>, placed at <strong>{placement}</strong>.
              </p>
            </DrawerBody>
            <DrawerFooter>
              <Button onClick={onClose}>Close</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    );
  },
  args: {
    backdrop: "opaque",
  },
};

// ─── Backdrops Story ─────────────────────────────────────────────────────────

export const Backdrops: Story = {
  render: (args) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [backdrop, setBackdrop] = useState<any>("opaque");

    const openBackdrop = (bd: any) => {
      setBackdrop(bd);
      onOpen();
    };

    return (
      <div className="p-10 flex flex-col items-center gap-4">
        <h3 className="text-lg font-semibold mb-2 text-neutral-800 dark:text-neutral-200">
          Try Different Backdrops
        </h3>
        <div className="flex gap-3">
          <Button onClick={() => openBackdrop("opaque")}>Opaque Backdrop</Button>
          <Button onClick={() => openBackdrop("blur")}>Blur Backdrop</Button>
          <Button onClick={() => openBackdrop("transparent")}>Transparent Backdrop</Button>
        </div>

        <Drawer {...args} isOpen={isOpen} onClose={onClose} backdrop={backdrop}>
          <DrawerContent>
            <DrawerHeader>{backdrop.toUpperCase()} Backdrop</DrawerHeader>
            <DrawerBody>
              <p className="text-neutral-600 dark:text-neutral-400">
                Notice the background overlay styling. This is currently set to <strong>{backdrop}</strong>.
              </p>
            </DrawerBody>
            <DrawerFooter>
              <Button onClick={onClose}>Close</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    );
  },
  args: {
    placement: "right",
  },
};

// ─── Render Callback Story ───────────────────────────────────────────────────

export const RenderCallback: Story = {
  render: (args) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
      <div className="p-10 flex flex-col items-center justify-center min-h-[300px]">
        <div className="text-center max-w-md">
          <h3 className="text-lg font-semibold mb-2 text-neutral-800 dark:text-neutral-200">
            Render Callback Pattern
          </h3>
          <p className="text-sm text-neutral-500 mb-4">
            Allows children of DrawerContent to be a render function that receives the internal `onClose` callback argument.
          </p>
          <Button onClick={onOpen}>Open Callback Drawer</Button>
        </div>

        <Drawer {...args} isOpen={isOpen} onClose={onClose}>
          <DrawerContent>
            {(onCloseInternal) => (
              <>
                <DrawerHeader>Render Function Drawer</DrawerHeader>
                <DrawerBody>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    This content is rendered via a child function callback, enabling child nodes to trigger closures directly via the parameter `onCloseInternal`.
                  </p>
                </DrawerBody>
                <DrawerFooter>
                  <Button variant="solid" color="danger" onClick={onCloseInternal}>
                    Close using callback
                  </Button>
                </DrawerFooter>
              </>
            )}
          </DrawerContent>
        </Drawer>
      </div>
    );
  },
  args: {
    placement: "right",
  },
};

// ─── Form Submission Story ───────────────────────────────────────────────────

export const FormInDrawer: Story = {
  render: (args) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      alert(`Submitted name: ${name}, email: ${email}`);
      onClose();
    };

    return (
      <div className="p-10 flex flex-col items-center justify-center min-h-[300px]">
        <Button onClick={onOpen}>Open Contact Form</Button>

        <Drawer {...args} isOpen={isOpen} onClose={onClose}>
          <DrawerContent>
            <form onSubmit={handleSubmit} className="flex flex-col h-full">
              <DrawerHeader>Create Account</DrawerHeader>
              <DrawerBody className="flex flex-col gap-4">
                <p className="text-sm text-neutral-500 mb-2">
                  Please fill out the form below. Pressing Enter will submit the form, or you can click submit.
                </p>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name-input" className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                    Full Name
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="px-3 py-2 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-transparent focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email-input" className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                    Email Address
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="px-3 py-2 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-transparent focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm"
                  />
                </div>
              </DrawerBody>
              <DrawerFooter>
                <Button variant="light" color="default" onClick={onClose} type="button">
                  Cancel
                </Button>
                <Button color="primary" type="submit">
                  Submit Form
                </Button>
              </DrawerFooter>
            </form>
          </DrawerContent>
        </Drawer>
      </div>
    );
  },
  args: {
    placement: "right",
    size: "md",
  },
};

// ─── Radiuses Story ──────────────────────────────────────────────────────────

export const Radiuses: Story = {
  render: (args) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [radius, setRadius] = useState<any>("lg");

    const openRadius = (rd: any) => {
      setRadius(rd);
      onOpen();
    };

    return (
      <div className="p-10 flex flex-col items-center gap-4">
        <h3 className="text-lg font-semibold mb-2 text-neutral-800 dark:text-neutral-200">
          Try Different Border Radiuses
        </h3>
        <div className="flex flex-wrap gap-3">
          <Button onClick={() => openRadius("none")}>Radius None</Button>
          <Button onClick={() => openRadius("sm")}>Radius SM</Button>
          <Button onClick={() => openRadius("md")}>Radius MD</Button>
          <Button onClick={() => openRadius("lg")}>Radius LG</Button>
        </div>

        <Drawer {...args} isOpen={isOpen} onClose={onClose} radius={radius}>
          <DrawerContent>
            <DrawerHeader>Radius: {radius.toUpperCase()}</DrawerHeader>
            <DrawerBody>
              <p className="text-neutral-600 dark:text-neutral-400">
                This drawer is showing the <strong>{radius}</strong> border radius style. Note how the corners on the opening edge are rounded.
              </p>
            </DrawerBody>
            <DrawerFooter>
              <Button onClick={onClose}>Close</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    );
  },
  args: {
    placement: "right",
  },
};

// ─── Shadows Story ───────────────────────────────────────────────────────────

export const Shadows: Story = {
  render: (args) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [shadow, setShadow] = useState<any>("lg");

    const openShadow = (sh: any) => {
      setShadow(sh);
      onOpen();
    };

    return (
      <div className="p-10 flex flex-col items-center gap-4">
        <h3 className="text-lg font-semibold mb-2 text-neutral-800 dark:text-neutral-200">
          Try Different Shadows
        </h3>
        <div className="flex flex-wrap gap-3">
          <Button onClick={() => openShadow("none")}>Shadow None</Button>
          <Button onClick={() => openShadow("sm")}>Shadow SM</Button>
          <Button onClick={() => openShadow("md")}>Shadow MD</Button>
          <Button onClick={() => openShadow("lg")}>Shadow LG</Button>
        </div>

        <Drawer {...args} isOpen={isOpen} onClose={onClose} shadow={shadow}>
          <DrawerContent>
            <DrawerHeader>Shadow: {shadow.toUpperCase()}</DrawerHeader>
            <DrawerBody>
              <p className="text-neutral-600 dark:text-neutral-400">
                This drawer is showing the <strong>{shadow}</strong> shadow strength style.
              </p>
            </DrawerBody>
            <DrawerFooter>
              <Button onClick={onClose}>Close</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    );
  },
  args: {
    placement: "right",
    backdrop: "transparent",
  },
};

// ─── Dismissable Control Story ───────────────────────────────────────────────

export const Dismissable: Story = {
  render: (args) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isDismissable, setIsDismissable] = useState(true);

    const openDismissable = (dismissable: boolean) => {
      setIsDismissable(dismissable);
      onOpen();
    };

    return (
      <div className="p-10 flex flex-col items-center gap-4">
        <h3 className="text-lg font-semibold mb-2 text-neutral-800 dark:text-neutral-200">
          Backdrop Click Dismiss Control
        </h3>
        <div className="flex gap-3">
          <Button onClick={() => openDismissable(true)}>Dismissable (Default)</Button>
          <Button variant="bordered" onClick={() => openDismissable(false)}>
            Non-Dismissable
          </Button>
        </div>

        <Drawer {...args} isOpen={isOpen} onClose={onClose} isDismissable={isDismissable}>
          <DrawerContent>
            <DrawerHeader>{isDismissable ? "Dismissable" : "Non-Dismissable"} Drawer</DrawerHeader>
            <DrawerBody>
              {isDismissable ? (
                <p className="text-neutral-600 dark:text-neutral-400">
                  You can close this drawer by clicking anywhere on the backdrop overlay.
                </p>
              ) : (
                <p className="text-neutral-600 dark:text-neutral-400">
                  Clicking the backdrop will NOT close this drawer. You must click one of the buttons inside the drawer (like the close button in the top-right corner) to close it.
                </p>
              )}
            </DrawerBody>
            <DrawerFooter>
              <Button onClick={onClose}>Close</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    );
  },
  args: {
    placement: "right",
  },
};

// ─── Keyboard Dismiss Control Story ──────────────────────────────────────────

export const KeyboardDismiss: Story = {
  render: (args) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isKeyboardDismissDisabled, setIsKeyboardDismissDisabled] = useState(false);

    const openKeyboardDismiss = (disabled: boolean) => {
      setIsKeyboardDismissDisabled(disabled);
      onOpen();
    };

    return (
      <div className="p-10 flex flex-col items-center gap-4">
        <h3 className="text-lg font-semibold mb-2 text-neutral-800 dark:text-neutral-200">
          Keyboard Escape Key Dismiss Control
        </h3>
        <div className="flex gap-3">
          <Button onClick={() => openKeyboardDismiss(false)}>Escape Key Enabled (Default)</Button>
          <Button variant="bordered" onClick={() => openKeyboardDismiss(true)}>
            Escape Key Disabled
          </Button>
        </div>

        <Drawer
          {...args}
          isOpen={isOpen}
          onClose={onClose}
          isKeyboardDismissDisabled={isKeyboardDismissDisabled}
        >
          <DrawerContent>
            <DrawerHeader>
              Escape Key {isKeyboardDismissDisabled ? "Disabled" : "Enabled"}
            </DrawerHeader>
            <DrawerBody>
              {isKeyboardDismissDisabled ? (
                <p className="text-neutral-600 dark:text-neutral-400">
                  Pressing the <strong>Escape</strong> key will NOT close this drawer. You must close it using the buttons.
                </p>
              ) : (
                <p className="text-neutral-600 dark:text-neutral-400">
                  Press the <strong>Escape</strong> key on your keyboard to close this drawer.
                </p>
              )}
            </DrawerBody>
            <DrawerFooter>
              <Button onClick={onClose}>Close</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    );
  },
  args: {
    placement: "right",
  },
};

// ─── Custom Motion Story ─────────────────────────────────────────────────────

export const CustomMotion: Story = {
  render: (args) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [motionType, setMotionType] = useState<"left-to-right" | "right-to-left" | "top-to-bottom" | "bottom-to-top">("left-to-right");

    const motionConfigs = {
      "left-to-right": {
        placement: "left" as const,
        motionProps: {
          variants: {
            initial: { x: "-100%" },
            animate: { x: 0, transition: { type: "spring" as const, stiffness: 300, damping: 30 } },
            exit: { x: "100vw", transition: { duration: 0.35, ease: "easeIn" as const } }
          }
        }
      },
      "right-to-left": {
        placement: "right" as const,
        motionProps: {
          variants: {
            initial: { x: "100%" },
            animate: { x: 0, transition: { type: "spring" as const, stiffness: 300, damping: 30 } },
            exit: { x: "-100vw", transition: { duration: 0.35, ease: "easeIn" as const } }
          }
        }
      },
      "top-to-bottom": {
        placement: "top" as const,
        motionProps: {
          variants: {
            initial: { y: "-100%" },
            animate: { y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 30 } },
            exit: { y: "100vh", transition: { duration: 0.35, ease: "easeIn" as const } }
          }
        }
      },
      "bottom-to-top": {
        placement: "bottom" as const,
        motionProps: {
          variants: {
            initial: { y: "100%" },
            animate: { y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 30 } },
            exit: { y: "-100vh", transition: { duration: 0.35, ease: "easeIn" as const } }
          }
        }
      }
    };

    const openMotion = (type: typeof motionType) => {
      setMotionType(type);
      onOpen();
    };

    const currentConfig = motionConfigs[motionType];

    return (
      <div className="p-10 flex flex-col items-center justify-center min-h-[300px]">
        <div className="text-center max-w-md mb-6">
          <h3 className="text-lg font-semibold mb-2 text-neutral-800 dark:text-neutral-200">
            Custom Motion Presets
          </h3>
          <p className="text-sm text-neutral-500 mb-4">
            Showcase using <code>motionProps</code> to override entrance/exit animations. Open the drawer with one of the buttons below to see the different custom motion trajectories.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button onClick={() => openMotion("left-to-right")}>Left to Right</Button>
            <Button onClick={() => openMotion("right-to-left")}>Right to Left</Button>
            <Button onClick={() => openMotion("top-to-bottom")}>Top to Bottom</Button>
            <Button onClick={() => openMotion("bottom-to-top")}>Bottom to Top</Button>
          </div>
        </div>

        <Drawer
          {...args}
          isOpen={isOpen}
          onClose={onClose}
          placement={currentConfig.placement}
          motionProps={currentConfig.motionProps}
        >
          <DrawerContent>
            <DrawerHeader>Custom Motion: {motionType.replace(/-/g, " ")}</DrawerHeader>
            <DrawerBody>
              <p className="text-neutral-600 dark:text-neutral-400">
                This drawer enters from the standard position and exits in a custom direction using custom motion variants!
              </p>
              <div className="mt-4 text-neutral-500 text-xs">
                Custom configuration:
                <pre className="mt-2 p-3 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-800 dark:text-neutral-200 overflow-x-auto text-[10px] leading-relaxed">
                  {JSON.stringify(currentConfig.motionProps.variants, null, 2)}
                </pre>
              </div>
            </DrawerBody>
            <DrawerFooter>
              <Button onClick={onClose}>Close & Animate</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    );
  },
  args: {
    size: "md",
  },
};

