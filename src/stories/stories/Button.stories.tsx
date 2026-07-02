import type { Meta, StoryObj } from "@storybook/react";
import { FaCamera, FaHeart, FaUser } from "react-icons/fa6";
import { Button, Spinner } from "../../components/ui";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "bordered", "light", "flat", "faded", "shadow", "ghost"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "danger"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    radius: {
      control: "select",
      options: ["none", "sm", "md", "lg", "full"],
    },
    isLoading: {
      control: "boolean",
    },
    spinner: {
      control: false,
    },
    fullWidth: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    isIconOnly: {
      control: "boolean",
    },
    startContent: {
      control: false,
    },
    endContent: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};


export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button {...args} variant="solid">Solid</Button>
      <Button {...args} variant="bordered">Bordered</Button>
      <Button {...args} variant="light">Light</Button>
      <Button {...args} variant="flat">Flat</Button>
      <Button {...args} variant="faded">Faded</Button>
      <Button {...args} variant="shadow">Shadow</Button>
      <Button {...args} variant="ghost">Ghost</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="md">Medium</Button>
      <Button {...args} size="lg">Large</Button>
    </div>
  ),
};

export const Radiuses: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Button {...args} radius="full">Full</Button>
      <Button {...args} radius="lg">Large</Button>
      <Button {...args} radius="md">Medium</Button>
      <Button {...args} radius="sm">Small</Button>
      <Button {...args} radius="none">None</Button>
    </div>
  ),
};

export const Colors: Story = {
  render: (args) => (
    <>
    {(["solid", "bordered", "light", "flat", "faded", "shadow", "ghost"] as const).map((variant) => (
      <div key={variant} className="flex flex-wrap gap-4 items-center mb-5">
        <Button {...args} variant={variant} color="default">Default</Button>
        <Button {...args} variant={variant} color="primary">Primary</Button>
        <Button {...args} variant={variant} color="secondary">Secondary</Button>
        <Button {...args} variant={variant} color="success">Success</Button>
        <Button {...args} variant={variant} color="warning">Warning</Button>
        <Button {...args} variant={variant} color="danger">Danger</Button>
      </div>
    ))}
    </>
  ),
};

export const StartAndEndContent: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Button
        {...args}
        color="success"
        endContent={<FaCamera className="w-4 h-4" aria-hidden />}
      >
        Take a photo
      </Button>
      <Button
        {...args}
        color="danger"
        variant="bordered"
        startContent={<FaUser className="w-4 h-4" aria-hidden />}
      >
        Delete user
      </Button>
    </div>
  ),
};

export const Loading: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Button {...args} isLoading color="primary">
        Loading
      </Button>
      <Button
        {...args}
        isLoading
        color="primary"
        spinner={<Spinner variant="simple" size="sm" color="current" />}
      >
        Click me
      </Button>
    </div>
  ),
};

export const FullWidth: Story = {
  args: {
    children: "Full Width Button",
    color: "primary",
    fullWidth: true,
  },
  parameters: {
    layout: "padded",
  },
};

export const IconOnly: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Button {...args} isIconOnly aria-label="Like" color="danger">
        <FaHeart className="w-4 h-4" aria-hidden />
      </Button>
      <Button {...args} isIconOnly aria-label="Take a photo" color="warning" variant="faded">
        <FaCamera className="w-4 h-4" aria-hidden />
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};