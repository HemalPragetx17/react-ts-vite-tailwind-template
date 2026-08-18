import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { PhoneInput } from "../../components/ui";

const meta: Meta<typeof PhoneInput> = {
  title: "Components/PhoneInput",
  component: PhoneInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["flat", "bordered", "underlined", "faded"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    radius: {
      control: "select",
      options: ["none", "sm", "md", "lg", "full"],
    },
    labelPlacement: {
      control: "select",
      options: ["inside", "outside", "outside-left", "outside-top", "outlined"],
    },
    dropdownPosition: {
      control: "select",
      options: ["top", "bottom"],
    },
    countryCodeEditable: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof PhoneInput>;

const PhoneInputWithState = (args: any) => {
  const [value, setValue] = useState(args.value ?? "");

  return (
    <div className="w-[320px]">
      <PhoneInput
        {...args}
        value={value}
        onChange={(val?: string) => {
          setValue(val ?? "");
          args.onChange?.(val);
        }}
      />
    </div>
  );
};

export const Default: Story = {
  render: (args: any) => <PhoneInputWithState {...args} />,
  args: {
    label: "Phone Number",
    defaultCountry: "IN",
    placeholder: "Enter Phone Number",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-[600px]">
      <div className="flex gap-4">
        <PhoneInputWithState label="Flat" variant="flat" defaultCountry="IN" />
        <PhoneInputWithState label="Bordered" variant="bordered" defaultCountry="IN" />
      </div>
      <div className="flex gap-4">
        <PhoneInputWithState label="Underlined" variant="underlined" defaultCountry="IN" />
        <PhoneInputWithState label="Faded" variant="faded" defaultCountry="IN" />
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-[600px]">
      <div className="flex gap-4">
        <PhoneInputWithState label="Size sm" size="sm" defaultCountry="IN" />
        <PhoneInputWithState label="Size md" size="md" defaultCountry="IN" />
      </div>
      <div className="flex gap-4">
        <PhoneInputWithState label="Size lg" size="lg" defaultCountry="IN" />
      </div>
    </div>
  ),
};

export const Radiuses: Story = {
  render: () => (
    <div className="flex gap-8 w-[800px]">
      <div className="flex flex-col gap-8 flex-1">
        <PhoneInputWithState label="Radius none" radius="none" defaultCountry="IN" variant="bordered" />
        <PhoneInputWithState label="Radius sm" radius="sm" defaultCountry="IN" variant="bordered" />
        <PhoneInputWithState label="Radius md" radius="md" defaultCountry="IN" variant="bordered" />
      </div>

      <div className="flex flex-col gap-8 flex-1">
        <PhoneInputWithState label="Radius lg" radius="lg" defaultCountry="IN" variant="bordered" />
        <PhoneInputWithState label="Radius full" radius="full" defaultCountry="IN" variant="bordered" />
      </div>
    </div>
  ),
};

export const LabelPlacements: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-[600px]">
      <div className="flex gap-4 items-end">
        <PhoneInputWithState labelPlacement="inside" label="Inside (Floating)" defaultCountry="IN" />
        <PhoneInputWithState labelPlacement="inside" label="Inside (static with placeholder)" placeholder="Enter Phone Number" defaultCountry="IN" />
      </div>
      <div className="flex gap-4 items-end">
        <PhoneInputWithState labelPlacement="outside" label="Outside (Floating)" defaultCountry="IN" />
        <PhoneInputWithState labelPlacement="outside" label="Outside (static with placeholder)" placeholder="Enter Phone Number" defaultCountry="IN" />
      </div>
      <div className="flex gap-4 items-end">
        <PhoneInputWithState labelPlacement="outlined" label="Outlined" defaultCountry="IN" />
        <PhoneInputWithState labelPlacement="outlined" label="Outlined (static with placeholder)" placeholder="Enter Phone Number" defaultCountry="IN" />
      </div>
      <div className="flex gap-4 items-end">
        <PhoneInputWithState labelPlacement="outlined" label="Single Border" defaultCountry="IN" />
        <PhoneInputWithState labelPlacement="outlined" label="Single Border (static with placeholder)" placeholder="Enter Phone Number" defaultCountry="IN" />
      </div>
      <div className="flex gap-4 items-end">
        <PhoneInputWithState labelPlacement="outside-top" label="Outside Top" placeholder="Enter Phone Number" defaultCountry="IN" />
        <PhoneInputWithState labelPlacement="outside-left" label="Outside Left" placeholder="Enter Phone Number" defaultCountry="IN" />
      </div>
    </div>
  ),
};

export const CountryCodeEditable: Story = {
  render: () => (
    <PhoneInputWithState
      label="Editable Country Code"
      defaultCountry="US"
      countryCodeEditable={true}
    />
  ),
};

export const DisableDropdownOnly: Story = {
  render: (args: any) => <PhoneInputWithState {...args} />,
  args: {
    label: "Flag Dropdown Disabled",
    defaultCountry: "IN",
    disabled: true,
  },
};

export const WithDropdownSearch: Story = {
  render: (args: any) => <PhoneInputWithState {...args} />,
  args: {
    label: "Search Enabled in Dropdown",
    defaultCountry: "IN",
    enableSearch: true,
  },
};

export const DropdownPosition: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-[320px]">
      <PhoneInputWithState label="Dropdown Bottom" dropdownPosition="bottom" defaultCountry="IN" />
      <PhoneInputWithState label="Dropdown Top" dropdownPosition="top" defaultCountry="IN" />
    </div>
  ),
};

export const Disabled: Story = {
  render: (args: any) => <PhoneInputWithState {...args} />,
  args: {
    label: "Phone Number",
    defaultCountry: "IN",
    value: "+919724582730",
    disabled: true,
  },
};

export const ErrorState: Story = {
  render: (args: any) => <PhoneInputWithState {...args} />,
  args: {
    label: "Phone Number",
    defaultCountry: "IN",
    value: "123",
    error: "Please enter a valid phone number",
    touched: true,
  },
};
