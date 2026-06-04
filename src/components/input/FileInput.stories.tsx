import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import FileInput from "./file-input/FileInput";
import type { Image, FileInputProps } from "./file-input/FileInput";

const meta: Meta<typeof FileInput> = {
  title: "Components/Input/FileInput",
  component: FileInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    mode: {
      control: "select",
      options: ["normal", "profile", "dropzone", "multi"],
    },
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
      options: ["inside", "outside", "outside-left", "outside-top"],
    },
    disabled: {
      control: "boolean",
    },
    isClearable: {
      control: "boolean",
    },
    isPreviewOn: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof FileInput>;

// Wrapper with state for single file mode
const FileInputWithState = (props: FileInputProps) => {
  const [value, setValue] = useState<File | string | null>(props.value || null);

  return (
    <div className="w-[320px]">
      <FileInput
        {...props}
        value={value}
        onChange={(val) => {
          setValue(val);
          props.onChange?.(val);
        }}
      />
    </div>
  );
};

// Wrapper with state for multi-file mode
const MultiFileInputWithState = (props: FileInputProps) => {
  const [images, setImages] = useState<Image[]>(props.images || []);
  const [deleteImages, setDeleteImages] = useState<Image[]>([]);

  return (
    <div className="w-[500px]">
      <FileInput
        {...props}
        images={images}
        setImages={(imgs) => {
          setImages(imgs);
          props.setImages?.(imgs);
        }}
        deleteImages={deleteImages}
        setDeleteImages={setDeleteImages}
      />
    </div>
  );
};

export const NormalMode: Story = {
  render: (args) => <FileInputWithState {...args} />,
  args: {
    mode: "normal",
    label: "Normal File Input",
    placeholder: "No file selected",
    isClearable: true,
  },
};

export const ProfileMode: Story = {
  render: (args) => <FileInputWithState {...args} />,
  args: {
    mode: "profile",
    label: "Profile Picture",
    isPreviewOn: true,
  },
};

export const DropzoneMode: Story = {
  render: (args) => <FileInputWithState {...args} />,
  args: {
    mode: "dropzone",
    label: "Single File Dropzone",
    isPreviewOn: true,
  },
};

export const MultiMode: Story = {
  render: (args) => <MultiFileInputWithState {...args} />,
  args: {
    mode: "multi",
    label: "Multiple Files Dropzone",
    isPreviewOn: true,
  },
};

export const NormalVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-[600px]">
      <div className="flex gap-4">
        <FileInputWithState label="Flat" variant="flat" isClearable={true} />
        <FileInputWithState label="Bordered" variant="bordered" isClearable={true} />
      </div>
      <div className="flex gap-4">
        <FileInputWithState label="Underlined" variant="underlined" isClearable={true} />
        <FileInputWithState label="Faded" variant="faded" isClearable={true} />
      </div>
    </div>
  ),
};

export const NormalSizes: Story = {
  render: () => (
    <div className="flex gap-6 w-[700px] items-end">
      {(["sm", "md", "lg"] as const).map((size) => (
        <FileInputWithState
          key={size}
          label={`Size ${size.toUpperCase()}`}
          size={size}
          isClearable={true}
        />
      ))}
    </div>
  ),
};

export const NormalRadiuses: Story = {
  render: () => (
    <div className="flex gap-4 w-[800px]">
      {(["none", "sm", "md", "lg", "full"] as const).map((radius) => (
        <FileInputWithState
          key={radius}
          label={`${radius.toUpperCase()}`}
          radius={radius}
          isClearable={true}
        />
      ))}
    </div>
  ),
};

export const NormalLabelPlacements: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-[600px]">
      <div className="flex gap-4 items-end">
        <FileInputWithState label="Inside (Floating)" labelPlacement="inside" isClearable={true} />
        <FileInputWithState label="Inside (static with placeholder)" labelPlacement="inside" isClearable={true} placeholder="Select file" />
      </div>
      <div className="flex gap-4 items-end">
        <FileInputWithState label="Outside (Floating)" isClearable={true} />
        <FileInputWithState label="Outside (static with placeholder)" isClearable={true} placeholder="Select file" />
      </div>
      <div className="flex gap-4 items-end">
        <FileInputWithState label="Outside Top" labelPlacement="outside-top" isClearable={true} />
        <FileInputWithState label="Outside Left" labelPlacement="outside-left" isClearable={true} />
      </div>
    </div>
  ),
};

export const ProfileSizesAndRadiuses: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-[800px]">
      <div className="flex gap-6 items-end">
        <FileInputWithState label="Profile SM" mode="profile" size="sm" />
        <FileInputWithState label="Profile MD" mode="profile" size="md" />
        <FileInputWithState label="Profile LG" mode="profile" size="lg" />
      </div>
      <div className="flex gap-6 items-end">
        <FileInputWithState label="Radius None" mode="profile" size="sm" radius="none" />
        <FileInputWithState label="Radius SM" mode="profile" size="sm" radius="sm" />
        <FileInputWithState label="Radius MD" mode="profile" size="sm" radius="md" />
        <FileInputWithState label="Radius LG" mode="profile" size="sm" radius="lg" />
        <FileInputWithState label="Radius Full" mode="profile" size="sm" radius="full" />
      </div>
    </div>
  ),
};

export const DropzoneSizesAndRadiuses: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-[800px]">
      <div className="flex gap-6 items-end">
        <FileInputWithState label="Dropzone SM" mode="dropzone" size="sm" />
        <FileInputWithState label="Dropzone MD" mode="dropzone" size="md" />
        <FileInputWithState label="Dropzone LG" mode="dropzone" size="lg" />
      </div>
      <div className="flex gap-6 items-end">
        <FileInputWithState label="Radius None" mode="dropzone" size="sm" radius="none" />
        <FileInputWithState label="Radius SM" mode="dropzone" size="sm" radius="sm" />
        <FileInputWithState label="Radius MD" mode="dropzone" size="sm" radius="md" />
        <FileInputWithState label="Radius LG" mode="dropzone" size="sm" radius="lg" />
        <FileInputWithState label="Radius Full" mode="dropzone" size="sm" radius="full" />
      </div>
    </div>
  ),
};

export const MultiSizesAndRadiuses: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-[800px]">
      <div className="flex gap-6 items-end">
        <MultiFileInputWithState label="Multi SM" mode="multi" size="sm" />
        <MultiFileInputWithState label="Multi MD" mode="multi" size="md" />
        <MultiFileInputWithState label="Multi LG" mode="multi" size="lg" />
      </div>
      <div className="flex gap-6 items-end">
        <MultiFileInputWithState label="Radius None" mode="multi" size="sm" radius="none" />
        <MultiFileInputWithState label="Radius SM" mode="multi" size="sm" radius="sm" />
        <MultiFileInputWithState label="Radius MD" mode="multi" size="sm" radius="md" />
        <MultiFileInputWithState label="Radius LG" mode="multi" size="sm" radius="lg" />
        <MultiFileInputWithState label="Radius Full" mode="multi" size="sm" radius="full" />
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-[600px]">
      <div className="flex gap-4 items-end">
        <FileInputWithState label="Normal Mode" mode="normal" disabled={true} />
        <FileInputWithState label="Profile Mode" mode="profile" disabled={true} />
      </div>
      <div className="flex gap-4 items-end">
        <FileInputWithState label="Dropzone Mode" mode="dropzone" disabled={true} />
        <MultiFileInputWithState label="Multi Mode" mode="multi" disabled={true} />
      </div>
    </div>
  ),
};

export const ErrorState: Story = {
  render: (args) => <FileInputWithState {...args} />,
  args: {
    label: "Resume File",
    error: "File size exceeds 5MB limit",
    touched: true,
  },
};
