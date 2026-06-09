import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { PhoneNumberInput } from "../../components/ui";

const meta: Meta<typeof PhoneNumberInput> = {
  title: "Components/PhoneNumberInput",
  component: PhoneNumberInput,
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
type Story = StoryObj<typeof PhoneNumberInput>;

const PhoneInputWithState = (args: any) => {
  const [value, setValue] = useState(args.value ?? "");

  return (
    <div className="w-[320px]">
      <PhoneNumberInput
        {...args}
        value={value}
        onChange={(val) => {
          setValue(val);
          args.onChange?.(val);
        }}
      />
    </div>
  );
};

export const Default: Story = {
  render: (args) => <PhoneInputWithState {...args} />,
  args: {
    label: "Phone Number",
    country: "in",
    placeholder: "Enter Phone Number",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-[600px]">
      <div className="flex gap-4">
        <PhoneInputWithState label="Flat" variant="flat" country="in" />
        <PhoneInputWithState label="Bordered" variant="bordered" country="in" />
      </div>
      <div className="flex gap-4">
        <PhoneInputWithState label="Underlined" variant="underlined" country="in" />
        <PhoneInputWithState label="Faded" variant="faded" country="in" />
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-[600px]">
      <div className="flex gap-4">
        <PhoneInputWithState label="Size sm" size="sm" country="in" />
        <PhoneInputWithState label="Size md" size="md" country="in" />
      </div>
      <div className="flex gap-4">
        <PhoneInputWithState label="Size lg" size="lg" country="in" />
      </div>
    </div>
  ),
};

export const Radiuses: Story = {
  render: () => (
    <div className="flex gap-8 w-[800px]">
      {/* Left side: Full Border */}
      <div className="flex flex-col gap-8 flex-1">
        <h4 className="text-sm font-bold text-neutral-400">Separate Border</h4>
        <PhoneInputWithState label="Radius none" radius="none" country="in" variant="bordered" singleBorder={false} />
        <PhoneInputWithState label="Radius sm" radius="sm" country="in" variant="bordered" singleBorder={false} />
        <PhoneInputWithState label="Radius md" radius="md" country="in" variant="bordered" singleBorder={false} />
        <PhoneInputWithState label="Radius lg" radius="lg" country="in" variant="bordered" singleBorder={false} />
        <PhoneInputWithState label="Radius full" radius="full" country="in" variant="bordered" singleBorder={false} />
      </div>

      {/* Right side: Single Border */}
      <div className="flex flex-col gap-8 flex-1">
        <h4 className="text-sm font-bold text-neutral-400">Single Border</h4>
        <PhoneInputWithState label="Radius none" radius="none" country="in" variant="bordered" singleBorder={true} />
        <PhoneInputWithState label="Radius sm" radius="sm" country="in" variant="bordered" singleBorder={true} />
        <PhoneInputWithState label="Radius md" radius="md" country="in" variant="bordered" singleBorder={true} />
        <PhoneInputWithState label="Radius lg" radius="lg" country="in" variant="bordered" singleBorder={true} />
        <PhoneInputWithState label="Radius full" radius="full" country="in" variant="bordered" singleBorder={true} />
      </div>
    </div>
  ),
};

export const LabelPlacements: Story = {
  render: (args) => (
    <div className="flex flex-col gap-8 w-[600px]">
      <div className="flex gap-4 items-end">
        <PhoneInputWithState {...args} size="md" labelPlacement="inside" label="Inside (Floating)" country="in" />
        <PhoneInputWithState {...args} size="md" labelPlacement="inside" label="Inside (static with placeholder)" placeholder="Enter Phone Number" country="in" />
      </div>
      <div className="flex gap-4 items-end">
        <PhoneInputWithState {...args} labelPlacement="outside" label="Outside (Floating)" country="in" />
        <PhoneInputWithState {...args} labelPlacement="outside" label="Outside (static with placeholder)" placeholder="Enter Phone Number" country="in" />
      </div>
      <div className="flex gap-4 items-end">
        <PhoneInputWithState {...args} labelPlacement="outlined" label="Outlined" country="in" />
        <PhoneInputWithState {...args} labelPlacement="outlined" label="Outlined (static with placeholder)" placeholder="Enter Phone Number" country="in" />
      </div>
      <div className="flex gap-4 items-end">
        <PhoneInputWithState {...args} singleBorder={true} labelPlacement="outlined" label="Single Border" country="in" />
        <PhoneInputWithState {...args} singleBorder={true} labelPlacement="outlined" label="Single Border (static with placeholder)" placeholder="Enter Phone Number" country="in" />
      </div>
      <div className="flex gap-4 items-end">
        <PhoneInputWithState {...args} labelPlacement="outside-top" label="Outside Top" placeholder="Enter Phone Number" country="in" />
        <PhoneInputWithState {...args} labelPlacement="outside-left" label="Outside Left" placeholder="Enter Phone Number" country="in" />
      </div>
    </div>
  ),
  args: {
    variant: "bordered",
  },
};

export const SingleBorderVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-[600px]">
      <div className="flex gap-4">
        <PhoneInputWithState label="Flat" variant="flat" singleBorder={true} country="in" />
        <PhoneInputWithState label="Bordered" variant="bordered" singleBorder={true} country="in" />
      </div>
      <div className="flex gap-4">
        <PhoneInputWithState label="Underlined" variant="underlined" singleBorder={true} country="in" />
        <PhoneInputWithState label="Faded" variant="faded" singleBorder={true} country="in" />
      </div>
    </div>
  ),
};

export const CountryCodeEditable: Story = {
  render: (args) => <PhoneInputWithState {...args} />,
  args: {
    label: "Editable Country Code",
    country: "us",
    countryCodeEditable: true,
  },
};

export const DisableDropdownOnly: Story = {
  render: (args) => <PhoneInputWithState {...args} />,
  args: {
    label: "Flag Dropdown Disabled",
    country: "in",
    disableDropdown: true,
  },
};

export const WithDropdownSearch: Story = {
  render: (args) => <PhoneInputWithState {...args} />,
  args: {
    label: "Search Enabled in Dropdown",
    country: "in",
    enableSearch: true,
  },
};

export const CustomCountryList: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-[320px]">
      <PhoneInputWithState
        label="Only US, CA, GB"
        country="us"
        onlyCountries={["us", "ca", "gb"]}
      />
      <PhoneInputWithState
        label="Preferred IN and US at top"
        country="in"
        preferredCountries={["in", "us"]}
      />
      <PhoneInputWithState
        label="Exclude IN"
        country="us"
        excludeCountries={["in"]}
      />
    </div>
  ),
};

export const DynamicPlaceholder: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-[320px]">
      <PhoneInputWithState label="India (Dynamic Placeholder)" country="in" />
      <PhoneInputWithState label="United States (Dynamic Placeholder)" country="us" />
      <PhoneInputWithState label="France (Dynamic Placeholder)" country="fr" />
    </div>
  ),
};

export const DropdownPosition: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-[320px]">
      <PhoneInputWithState label="Dropdown Bottom" dropdownPosition="bottom" country="in" />
      <PhoneInputWithState label="Dropdown Top" dropdownPosition="top" country="in" />
    </div>
  ),
};

export const Disabled: Story = {
  render: (args) => <PhoneInputWithState {...args} />,
  args: {
    label: "Phone Number",
    country: "in",
    value: "919724582730",
    disabled: true,
  },
};

export const ErrorState: Story = {
  render: (args) => <PhoneInputWithState {...args} />,
  args: {
    label: "Phone Number",
    country: "in",
    value: "123",
    error: "Please enter a valid phone number",
    touched: true,
  },
};