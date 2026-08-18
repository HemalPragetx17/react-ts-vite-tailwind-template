import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Textarea } from "../../components/ui";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
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
    isClearable: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    disableAutosize: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <div className="w-[600px]">
        <Textarea
          label="Description"
          placeholder="Enter your description"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    );
  },
};

export const Variants: Story = {
  render: () => {
    const [flatVal, setFlatVal] = useState("");
    const [borderedVal, setBorderedVal] = useState("");
    const [underlinedVal, setUnderlinedVal] = useState("");
    const [fadedVal, setFadedVal] = useState("");

    return (
      <div className="flex flex-col gap-8 w-[800px]">
        <div className="flex gap-4">
          <Textarea variant="flat" label="Flat" placeholder="Enter your description" value={flatVal} onChange={(e) => setFlatVal(e.target.value)} />
          <Textarea variant="bordered" label="Bordered" placeholder="Enter your description" value={borderedVal} onChange={(e) => setBorderedVal(e.target.value)} />
        </div>
        <div className="flex gap-4">
          <Textarea variant="underlined" label="Underlined" placeholder="Enter your description" value={underlinedVal} onChange={(e) => setUnderlinedVal(e.target.value)} />
          <Textarea variant="faded" label="Faded" placeholder="Enter your description" value={fadedVal} onChange={(e) => setFadedVal(e.target.value)} />
        </div>
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [smVal, setSmVal] = useState("");
    const [mdVal, setMdVal] = useState("");
    const [lgVal, setLgVal] = useState("");

    return (
      <div className="flex gap-4 w-[800px]">
        <Textarea size="sm" label="Small" placeholder="Small size" value={smVal} onChange={(e) => setSmVal(e.target.value)} />
        <Textarea size="md" label="Medium" placeholder="Medium size" value={mdVal} onChange={(e) => setMdVal(e.target.value)} />
        <Textarea size="lg" label="Large" placeholder="Large size" value={lgVal} onChange={(e) => setLgVal(e.target.value)} />
      </div>
    );
  },
};

export const Radiuses: Story = {
  render: () => {
    const [noneVal, setNoneVal] = useState("");
    const [smVal, setSmVal] = useState("");
    const [mdVal, setMdVal] = useState("");
    const [lgVal, setLgVal] = useState("");
    const [fullVal, setFullVal] = useState("");

    return (
      <div className="flex gap-4 w-[800px]">
        <Textarea variant="bordered" radius="none" label="Radius None" placeholder="No radius" value={noneVal} onChange={(e) => setNoneVal(e.target.value)} />
        <Textarea variant="bordered" radius="sm" label="Radius Small" placeholder="Small radius" value={smVal} onChange={(e) => setSmVal(e.target.value)} />
        <Textarea variant="bordered" radius="md" label="Radius Medium" placeholder="Medium radius" value={mdVal} onChange={(e) => setMdVal(e.target.value)} />
        <Textarea variant="bordered" radius="lg" label="Radius Large" placeholder="Large radius" value={lgVal} onChange={(e) => setLgVal(e.target.value)} />
        <Textarea variant="bordered" radius="full" label="Radius Full" placeholder="Full radius" value={fullVal} onChange={(e) => setFullVal(e.target.value)} />
      </div>
    );
  },
};

export const LabelPlacements: Story = {
  render: () => {
    const [in1, setIn1] = useState("");
    const [in2, setIn2] = useState("");
    const [out1, setOut1] = useState("");
    const [out2, setOut2] = useState("");
    const [outline1, setOutline1] = useState("");
    const [outline2, setOutline2] = useState("");
    const [topVal, setTopVal] = useState("");
    const [leftVal, setLeftVal] = useState("");

    return (
      <div className="flex flex-col gap-8 w-[800px]">
        <div className="flex gap-4">
          <Textarea variant="bordered" labelPlacement="inside" label="Inside (Floating)" value={in1} onChange={(e) => setIn1(e.target.value)} />
          <Textarea variant="bordered" labelPlacement="inside" label="Inside (Static with Placeholder)" placeholder="Enter text" value={in2} onChange={(e) => setIn2(e.target.value)} />
        </div>
        <div className="flex gap-4">
          <Textarea variant="bordered" labelPlacement="outside" label="Outside (Floating)" value={out1} onChange={(e) => setOut1(e.target.value)} />
          <Textarea variant="bordered" labelPlacement="outside" label="Outside (Static with Placeholder)" placeholder="Enter text" value={out2} onChange={(e) => setOut2(e.target.value)} />
        </div>
        <div className="flex gap-4">
          <Textarea variant="bordered" labelPlacement="outlined" label="Outlined (Floating)" value={outline1} onChange={(e) => setOutline1(e.target.value)} />
          <Textarea variant="bordered" labelPlacement="outlined" label="Outlined (Static with Placeholder)" placeholder="Enter text" value={outline2} onChange={(e) => setOutline2(e.target.value)} />
        </div>
        <Textarea variant="bordered" labelPlacement="outside-top" label="Outside Top (Static)" placeholder="Enter text" value={topVal} onChange={(e) => setTopVal(e.target.value)} />
        <Textarea variant="bordered" labelPlacement="outside-left" label="Outside Left (Static)" placeholder="Enter text" value={leftVal} onChange={(e) => setLeftVal(e.target.value)} />
      </div>
    );
  },
};

export const Clearable: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <div className="w-[600px]">
        <Textarea
          label="Message"
          placeholder="Type a message..."
          isClearable
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    );
  },
};

export const Autosize: Story = {
  render: () => {
    const [val1, setVal1] = useState("");
    const [val2, setVal2] = useState("");

    return (
      <div className="flex gap-4 w-[800px]">
        <Textarea
          label="Autosizing Textarea"
          placeholder="Type text here..."
          minRows={3}
          maxRows={6}
          value={val1}
          onChange={(e) => setVal1(e.target.value)}
        />
        <Textarea
          label="Fixed Textarea (Autosize Disabled)"
          placeholder="Type text here..."
          disableAutosize
          minRows={3}
          maxRows={6}
          value={val2}
          onChange={(e) => setVal2(e.target.value)}
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <div className="w-[600px]">
      <Textarea
        label="Description"
        placeholder="Enter description"
        disabled
      />
    </div>
  ),
};

export const ErrorState: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <div className="w-[600px]">
        <Textarea
          label="Description"
          placeholder="Enter description"
          error="Description is required"
          touched
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    );
  },
};
