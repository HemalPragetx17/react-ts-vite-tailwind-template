import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { FileInput as FileInputComponent } from "../../components/ui";
import type { FileInputProps, Image } from "../../components/ui/input/fileInput/FileInput";

const meta: Meta<typeof FileInputComponent> = {
  title: "Components/FileInput",
  component: FileInputComponent,
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
      options: ["inside", "outside", "outside-left", "outside-top", "outlined"],
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
type Story = StoryObj<typeof FileInputComponent>;

// Wrapper with state for single file mode
const FileInput = (props: FileInputProps) => {
  const [value, setValue] = useState<File | string | null>(props.value || null);

  return (
    <div className="w-[320px]">
      <FileInputComponent
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
const MultiFileInput = (props: FileInputProps) => {
  const [images, setImages] = useState<Image[]>(props.images || []);
  const [deleteImages, setDeleteImages] = useState<Image[]>([]);

  return (
    <div className="w-[500px]">
      <FileInputComponent
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
  render: (args) => <FileInput {...args} />,
  args: {
    mode: "normal",
    label: "Normal File Input",
    placeholder: "No file selected",
    isClearable: true,
  },
};

export const ProfileMode: Story = {
  render: (args) => <FileInput {...args} />,
  args: {
    mode: "profile",
    label: "Profile Picture",
    isPreviewOn: true,
  },
};

export const DropzoneMode: Story = {
  render: (args) => <FileInput {...args} />,
  args: {
    mode: "dropzone",
    label: "Single File Dropzone",
    isPreviewOn: true,
  },
};

export const MultiMode: Story = {
  render: (args) => <MultiFileInput {...args} />,
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
        <FileInput label="Flat" variant="flat" isClearable={true} />
        <FileInput label="Bordered" variant="bordered" isClearable={true} />
      </div>
      <div className="flex gap-4">
        <FileInput label="Underlined" variant="underlined" isClearable={true} />
        <FileInput label="Faded" variant="faded" isClearable={true} />
      </div>
    </div>
  ),
};

export const NormalSizes: Story = {
  render: () => (
    <div className="flex gap-6 w-[700px] items-end">
      <FileInput label="Size SM" size="sm" isClearable={true} />
      <FileInput label="Size MD" size="md" isClearable={true} />
      <FileInput label="Size LG" size="lg" isClearable={true} />
    </div>
  ),
};

export const NormalRadiuses: Story = {
  render: () => (
    <div className="flex gap-4 w-[800px]">
      <FileInput label="NONE" radius="none" isClearable={true} />
      <FileInput label="SM" radius="sm" isClearable={true} />
      <FileInput label="MD" radius="md" isClearable={true} />
      <FileInput label="LG" radius="lg" isClearable={true} />
      <FileInput label="FULL" radius="full" isClearable={true} />
    </div>
  ),
};

export const NormalLabelPlacements: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-[600px]">
      <div className="flex gap-4 items-end">
        <FileInput label="Inside (Floating)" labelPlacement="inside" isClearable={true} />
        <FileInput label="Inside (static with placeholder)" labelPlacement="inside" isClearable={true} placeholder="Select file" />
      </div>
      <div className="flex gap-4 items-end">
        <FileInput label="Outside (Floating)" isClearable={true} />
        <FileInput label="Outside (static with placeholder)" isClearable={true} placeholder="Select file" />
      </div>
      <div className="flex gap-4 items-end">
        <FileInput label="Outlined" labelPlacement="outlined" isClearable={true} />
        <FileInput label="Outlined (static with placeholder)" labelPlacement="outlined" isClearable={true} placeholder="Select file" />
      </div>
      <div className="flex gap-4 items-end">
        <FileInput label="Outside Top" labelPlacement="outside-top" isClearable={true} />
        <FileInput label="Outside Left" labelPlacement="outside-left" isClearable={true} />
      </div>
    </div>
  ),
};

export const ProfileSizesAndRadiuses: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-[800px]">
      <div className="flex gap-6 items-end">
        <FileInput label="Profile SM" mode="profile" size="sm" />
        <FileInput label="Profile MD" mode="profile" size="md" />
        <FileInput label="Profile LG" mode="profile" size="lg" />
      </div>
      <div className="flex gap-6 items-end">
        <FileInput label="Radius None" mode="profile" size="sm" radius="none" />
        <FileInput label="Radius SM" mode="profile" size="sm" radius="sm" />
        <FileInput label="Radius MD" mode="profile" size="sm" radius="md" />
        <FileInput label="Radius LG" mode="profile" size="sm" radius="lg" />
        <FileInput label="Radius Full" mode="profile" size="sm" radius="full" />
      </div>
    </div>
  ),
};

export const DropzoneSizesAndRadiuses: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-[800px]">
      <div className="flex gap-6 items-end">
        <FileInput label="Dropzone SM" mode="dropzone" size="sm" />
        <FileInput label="Dropzone MD" mode="dropzone" size="md" />
        <FileInput label="Dropzone LG" mode="dropzone" size="lg" />
      </div>
      <div className="flex gap-6 items-end">
        <FileInput label="Radius None" mode="dropzone" size="sm" radius="none" />
        <FileInput label="Radius SM" mode="dropzone" size="sm" radius="sm" />
        <FileInput label="Radius MD" mode="dropzone" size="sm" radius="md" />
        <FileInput label="Radius LG" mode="dropzone" size="sm" radius="lg" />
        <FileInput label="Radius Full" mode="dropzone" size="sm" radius="full" />
      </div>
    </div>
  ),
};

export const MultiSizesAndRadiuses: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-[800px]">
      <div className="flex gap-6 items-end">
        <MultiFileInput label="Multi SM" mode="multi" size="sm" />
        <MultiFileInput label="Multi MD" mode="multi" size="md" />
        <MultiFileInput label="Multi LG" mode="multi" size="lg" />
      </div>
      <div className="flex gap-6 items-end">
        <MultiFileInput label="Radius None" mode="multi" size="sm" radius="none" />
        <MultiFileInput label="Radius SM" mode="multi" size="sm" radius="sm" />
        <MultiFileInput label="Radius MD" mode="multi" size="sm" radius="md" />
        <MultiFileInput label="Radius LG" mode="multi" size="sm" radius="lg" />
        <MultiFileInput label="Radius Full" mode="multi" size="sm" radius="full" />
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-[600px]">
      <div className="flex gap-4 items-end">
        <FileInput label="Normal Mode" mode="normal" disabled={true} />
        <FileInput label="Profile Mode" mode="profile" disabled={true} />
      </div>
      <div className="flex gap-4 items-end">
        <FileInput label="Dropzone Mode" mode="dropzone" disabled={true} />
        <MultiFileInput label="Multi Mode" mode="multi" disabled={true} />
      </div>
    </div>
  ),
};

export const ErrorState: Story = {
  render: (args) => <FileInput {...args} />,
  args: {
    label: "Resume File",
    error: "File size exceeds 5MB limit",
    touched: true,
  },
};
