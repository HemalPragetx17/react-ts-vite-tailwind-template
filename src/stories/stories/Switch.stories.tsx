import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { FaCheck, FaMoon, FaSun, FaXmark } from "react-icons/fa6";
import { Switch } from "../../components/ui";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
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
      options: ["default", "outside"],
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState(false);
    return <Switch label="Automatic updates" value={value} onChange={setValue} />;
  },
};

export const WithLabels: Story = {
  render: () => {
    const [value, setValue] = useState(false);
    return (
      <Switch
        label="Bluetooth"
        activeLabel="Enabled"
        inactiveLabel="Disabled"
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const Colors: Story = {
  render: () => {
    const [defaultVal, setDefaultVal] = useState(true);
    const [primaryVal, setPrimaryVal] = useState(true);
    const [secondaryVal, setSecondaryVal] = useState(true);
    const [successVal, setSuccessVal] = useState(true);
    const [warningVal, setWarningVal] = useState(true);
    const [dangerVal, setDangerVal] = useState(true);

    return (
      <div className="flex gap-8">
        <Switch color="default" label="Default" value={defaultVal} onChange={setDefaultVal} />
        <Switch color="primary" label="Primary" value={primaryVal} onChange={setPrimaryVal} />
        <Switch color="secondary" label="Secondary" value={secondaryVal} onChange={setSecondaryVal} />
        <Switch color="success" label="Success" value={successVal} onChange={setSuccessVal} />
        <Switch color="warning" label="Warning" value={warningVal} onChange={setWarningVal} />
        <Switch color="danger" label="Danger" value={dangerVal} onChange={setDangerVal} />
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [smVal, setSmVal] = useState(true);
    const [mdVal, setMdVal] = useState(true);
    const [lgVal, setLgVal] = useState(true);

    return (
      <div className="flex gap-8">
        <Switch size="sm" label="Small" value={smVal} onChange={setSmVal} />
        <Switch size="md" label="Medium" value={mdVal} onChange={setMdVal} />
        <Switch size="lg" label="Large" value={lgVal} onChange={setLgVal} />
      </div>
    );
  },
};

export const WithIcons: Story = {
  render: () => {
    const [value, setValue] = useState(false);
    return (
      <Switch
        label="Dark mode"
        startContent={<FaMoon className="w-3 h-3" aria-hidden />}
        endContent={<FaSun className="w-3 h-3" aria-hidden />}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const ThumbIcons: Story = {
  render: () => {
    const [value, setValue] = useState(false);
    return (
      <Switch
        label="Custom thumb icons"
        thumbIcon={(checked: boolean) =>
          checked ? (
            <FaCheck className="w-3 h-3" aria-hidden />
          ) : (
            <FaXmark className="w-3 h-3" aria-hidden />
          )
        }
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <div className="flex gap-8 w-[300px]">
      <Switch label="Disabled (Off)" disabled value={false} />
      <Switch label="Disabled (On)" disabled value={true} />
    </div>
  ),
};

export const WithError: Story = {
  render: () => {
    const [value, setValue] = useState(false);
    return (
      <Switch
        label="Error Switch"
        error="This field is required"
        touched
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const OutsideVariant: Story = {
  render: () => {
    const [smVal, setSmVal] = useState(true);
    const [mdVal, setMdVal] = useState(true);
    const [lgVal, setLgVal] = useState(true);

    const [defaultVal, setDefaultVal] = useState(true);
    const [primaryVal, setPrimaryVal] = useState(true);
    const [secondaryVal, setSecondaryVal] = useState(true);
    const [successVal, setSuccessVal] = useState(true);
    const [warningVal, setWarningVal] = useState(true);
    const [dangerVal, setDangerVal] = useState(true);

    return (
      <div className="flex flex-col gap-6">
        <div className="flex gap-8">
          <Switch variant="outside" size="sm" label="Small Outside" value={smVal} onChange={setSmVal} />
          <Switch variant="outside" size="md" label="Medium Outside" value={mdVal} onChange={setMdVal} />
          <Switch variant="outside" size="lg" label="Large Outside" value={lgVal} onChange={setLgVal} />
        </div>
        <div className="flex gap-8">
          <Switch variant="outside" color="default" label="Default" value={defaultVal} onChange={setDefaultVal} />
          <Switch variant="outside" color="primary" label="Primary" value={primaryVal} onChange={setPrimaryVal} />
          <Switch variant="outside" color="secondary" label="Secondary" value={secondaryVal} onChange={setSecondaryVal} />
          <Switch variant="outside" color="success" label="Success" value={successVal} onChange={setSuccessVal} />
          <Switch variant="outside" color="warning" label="Warning" value={warningVal} onChange={setWarningVal} />
          <Switch variant="outside" color="danger" label="Danger" value={dangerVal} onChange={setDangerVal} />
        </div>
      </div>
    );
  },
};
