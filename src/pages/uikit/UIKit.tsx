import React from "react";
import {
  Avatar,
  Badge,
  Breadcrumbs,
  Button,
  Checkbox,
  Chip,
  Input,
  DateInput,
  TimePicker,
  DateTimePicker,
  FileInput,
  PhoneNumberInput,
  SelectDropdown,
  Textarea,
  Spinner,
  Switch,
  Tab,
  Tabs,
  Popover,
  Radio,
} from "../../components/ui";
import { FaHeart, FaCamera, FaUser } from "react-icons/fa6";

// ─── Types ───────────────────────────────────────────────────────────────────
type ColorOption = "default" | "primary" | "secondary" | "success" | "warning" | "danger";
type ButtonVariant = "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost";
type ChipVariant = "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "dot";
type SpinnerVariant = "default" | "simple" | "gradient" | "spinner" | "wave" | "dots";

const COLORS: ColorOption[] = ["default", "primary", "secondary", "success", "warning", "danger"];
const BREADCRUMB_ITEMS = [
  { label: "Home", path: "#", isLast: false, isClickable: true },
  { label: "Music", path: "#", isLast: false, isClickable: true },
  { label: "Artist", path: "#", isLast: false, isClickable: true },
  { label: "Album", path: "#", isLast: false, isClickable: true },
  { label: "Song", path: "#", isLast: true, isClickable: false },
];
const BUTTON_VARIANTS: ButtonVariant[] = ["solid", "shadow", "bordered", "flat", "faded", "light", "ghost"];
const CHIP_VARIANTS: ChipVariant[] = ["solid", "bordered", "light", "flat", "faded", "shadow", "dot"];
const AVATAR_COLORS: ColorOption[] = ["default", "primary", "secondary", "success", "warning", "danger"];
const SPINNER_VARIANTS: SpinnerVariant[] = ["default", "simple", "gradient", "spinner", "wave", "dots"];
const RADIO_OPTIONS = [
  { label: "Buenos Aires", value: "buenos-aires" },
  { label: "Sydney", value: "sydney" },
  { label: "San Francisco", value: "san-francisco" },
  { label: "London", value: "london" },
  { label: "Tokyo", value: "tokyo" },
];

// ─── Section Wrapper ──────────────────────────────────────────────────────────
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <div className="flex items-baseline gap-3 mb-1">
      <h2 className="text-lg font-bold text-foreground">{title}</h2>
    </div>
    <hr className="border-default-200 mb-5" />
    <div className="space-y-3">{children}</div>
  </section>
);

const Row = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`flex flex-wrap items-center gap-3 ${className}`}>{children}</div>
);

const Label = ({ children }: { children: React.ReactNode }) => (
  <span className="text-xs font-medium text-default-500 uppercase tracking-wider w-16 shrink-0">{children}</span>
);

// ─── Main Page ────────────────────────────────────────────────────────────────
const UIKit: React.FC = () => {
  const [checkboxValues, setCheckboxValues] = React.useState<Record<string, boolean>>(
    () => Object.fromEntries(COLORS.map((c) => [c, true]))
  );
  const [selectedValues, setSelectedValues] = React.useState<Record<string, string>>(() =>
    Object.fromEntries(COLORS.map((c) => [c, "sydney"]))
  );
  const [switchValues, setSwitchValues] = React.useState<Record<string, boolean>>(
    () => Object.fromEntries(COLORS.map((c) => [c, true]))
  );

  // States for editable inputs
  const [inputVal, setInputVal] = React.useState<Record<string, string>>(() => {
    const states: Record<string, string> = {};
    COLORS.forEach(c => {
      states[`${c}-flat`] = "Input flat";
      states[`${c}-bordered`] = "Input bordered";
      states[`${c}-faded`] = "Input faded";
      states[`${c}-underlined`] = "Input underlined";
      states[`${c}-disabled`] = "Input disabled";
    });
    return states;
  });

  const [fileVal, setFileVal] = React.useState<Record<string, File | string | null>>(() => {
    const states: Record<string, File | string | null> = {};
    COLORS.forEach(c => {
      states[`${c}-flat`] = "file.pdf";
      states[`${c}-bordered`] = "file.pdf";
      states[`${c}-faded`] = "file.pdf";
      states[`${c}-underlined`] = "file.pdf";
      states[`${c}-disabled`] = "file.pdf";
    });
    return states;
  });

  const [phoneVal, setPhoneVal] = React.useState<Record<string, string>>(() => {
    const states: Record<string, string> = {};
    COLORS.forEach(c => {
      states[`${c}-flat`] = "+1234567890";
      states[`${c}-bordered`] = "+1234567890";
      states[`${c}-faded`] = "+1234567890";
      states[`${c}-underlined`] = "+1234567890";
      states[`${c}-disabled`] = "+1234567890";
    });
    return states;
  });

  const [dropdownVal, setDropdownVal] = React.useState<Record<string, string>>(() => {
    const states: Record<string, string> = {};
    COLORS.forEach(c => {
      states[`${c}-flat`] = "sydney";
      states[`${c}-bordered`] = "sydney";
      states[`${c}-faded`] = "sydney";
      states[`${c}-underlined`] = "sydney";
      states[`${c}-disabled`] = "sydney";
    });
    return states;
  });

  const [textareaVal, setTextareaVal] = React.useState<Record<string, string>>(() => {
    const states: Record<string, string> = {};
    COLORS.forEach(c => {
      states[`${c}-flat`] = "Textarea flat";
      states[`${c}-bordered`] = "Textarea bordered";
      states[`${c}-faded`] = "Textarea faded";
      states[`${c}-underlined`] = "Textarea underlined";
      states[`${c}-disabled`] = "Textarea disabled";
    });
    return states;
  });

  const [dateVal, setDateVal] = React.useState<Record<string, Date | null>>(() => {
    const states: Record<string, Date | null> = {};
    COLORS.forEach(c => {
      states[`${c}-flat`] = new Date("2026-06-11");
      states[`${c}-bordered`] = new Date("2026-06-11");
      states[`${c}-faded`] = new Date("2026-06-11");
      states[`${c}-underlined`] = new Date("2026-06-11");
      states[`${c}-disabled`] = new Date("2026-06-11");
    });
    return states;
  });

  const [timeVal, setTimeVal] = React.useState<Record<string, string>>(() => {
    const states: Record<string, string> = {};
    COLORS.forEach(c => {
      states[`${c}-flat`] = "10:30 AM";
      states[`${c}-bordered`] = "10:30 AM";
      states[`${c}-faded`] = "10:30 AM";
      states[`${c}-underlined`] = "10:30 AM";
      states[`${c}-disabled`] = "10:30 AM";
    });
    return states;
  });

  const [dateTimeVal, setDateTimeVal] = React.useState<Record<string, Date | null>>(() => {
    const states: Record<string, Date | null> = {};
    COLORS.forEach(c => {
      states[`${c}-flat`] = new Date("2026-06-11T10:30:00");
      states[`${c}-bordered`] = new Date("2026-06-11T10:30:00");
      states[`${c}-faded`] = new Date("2026-06-11T10:30:00");
      states[`${c}-underlined`] = new Date("2026-06-11T10:30:00");
      states[`${c}-disabled`] = new Date("2026-06-11T10:30:00");
    });
    return states;
  });

  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-1">UI Kit</h1>
        <p className="text-default-500 text-sm">Browse all components by variant and color token.</p>
      </div>

      {/* ── AVATAR ──────────────────────────────────────────────── */}
      <Section title="Avatar">
        <Row>
          <Label>bordered</Label>
          {AVATAR_COLORS.map((color) => (
            <Avatar key={color} color={color} isBordered name={color} size="md" />
          ))}
        </Row>
        <Row>
          <Label>flat</Label>
          {AVATAR_COLORS.map((color) => (
            <Avatar key={color} color={color} name={color} size="md" />
          ))}
        </Row>
        <Row>
          <Label>icon</Label>
          {AVATAR_COLORS.map((color) => (
            <Avatar key={color} color={color} isBordered size="md" icon={<FaUser />} />
          ))}
        </Row>
      </Section>

      {/* ── BADGE ───────────────────────────────────────────────── */}
      <Section title="Badge">
        <Row>
          <Label>colors</Label>
          {COLORS.map((color) => (
            <Badge key={color} color={color} content="5">
              <Avatar color={color} name={color[0].toUpperCase()} size="md" />
            </Badge>
          ))}
        </Row>
        <Row>
          <Label>dot</Label>
          {COLORS.map((color) => (
            <Badge key={color} color={color}>
              <Avatar color={color} name={color[0].toUpperCase()} size="md" />
            </Badge>
          ))}
        </Row>
      </Section>

      {/* ── BREADCRUMBS ─────────────────────────────────────────── */}
      <Section title="Breadcrumbs">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white dark:bg-neutral-900 p-6 rounded-xl border border-default-200">
          <div>
            <Breadcrumbs items={BREADCRUMB_ITEMS} color="default" variant="bordered" />
            <Breadcrumbs items={BREADCRUMB_ITEMS} color="default" variant="light" />
            <Breadcrumbs items={BREADCRUMB_ITEMS} color="default" variant="solid" />
            <Breadcrumbs items={BREADCRUMB_ITEMS} color="default" variant="solid" isDisabled />
          </div>
          <div>
            <Breadcrumbs items={BREADCRUMB_ITEMS} color="success" variant="bordered" />
            <Breadcrumbs items={BREADCRUMB_ITEMS} color="success" variant="light" />
            <Breadcrumbs items={BREADCRUMB_ITEMS} color="success" variant="solid" />
            <Breadcrumbs items={BREADCRUMB_ITEMS} color="success" variant="solid" isDisabled />
          </div>

          <div>
            <Breadcrumbs items={BREADCRUMB_ITEMS} color="primary" variant="bordered" />
            <Breadcrumbs items={BREADCRUMB_ITEMS} color="primary" variant="light" />
            <Breadcrumbs items={BREADCRUMB_ITEMS} color="primary" variant="solid" />
            <Breadcrumbs items={BREADCRUMB_ITEMS} color="primary" variant="solid" isDisabled />
          </div>
          <div>
            <Breadcrumbs items={BREADCRUMB_ITEMS} color="warning" variant="bordered" />
            <Breadcrumbs items={BREADCRUMB_ITEMS} color="warning" variant="light" />
            <Breadcrumbs items={BREADCRUMB_ITEMS} color="warning" variant="solid" />
            <Breadcrumbs items={BREADCRUMB_ITEMS} color="warning" variant="solid" isDisabled />
          </div>

          <div>
            <Breadcrumbs items={BREADCRUMB_ITEMS} color="secondary" variant="bordered" />
            <Breadcrumbs items={BREADCRUMB_ITEMS} color="secondary" variant="light" />
            <Breadcrumbs items={BREADCRUMB_ITEMS} color="secondary" variant="solid" />
            <Breadcrumbs items={BREADCRUMB_ITEMS} color="secondary" variant="solid" isDisabled />
          </div>
          <div>
            <Breadcrumbs items={BREADCRUMB_ITEMS} color="danger" variant="bordered" />
            <Breadcrumbs items={BREADCRUMB_ITEMS} color="danger" variant="light" />
            <Breadcrumbs items={BREADCRUMB_ITEMS} color="danger" variant="solid" />
            <Breadcrumbs items={BREADCRUMB_ITEMS} color="danger" variant="solid" isDisabled />
          </div>
        </div>
      </Section>

      {/* ── BUTTONS ─────────────────────────────────────────────── */}
      <Section title="Button">
        {BUTTON_VARIANTS.map((variant) => (
          <Row key={variant}>
            <Label>{variant}</Label>
            {COLORS.map((color) => (
              <Button key={color} variant={variant} color={color} size="sm" radius="md">
                {color.charAt(0).toUpperCase() + color.slice(1)}
              </Button>
            ))}
          </Row>
        ))}
        <Row>
          <Label>disabled</Label>
          {COLORS.map((color) => (
            <Button key={color} variant="solid" color={color} size="sm" radius="md" disabled>
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </Button>
          ))}
        </Row>
        <Row>
          <Label>icon only</Label>
          {COLORS.map((color) => (
            <Button key={color} variant="solid" color={color} size="sm" radius="full" isIconOnly aria-label={color}>
              <FaHeart className="w-3.5 h-3.5" />
            </Button>
          ))}
        </Row>
        <Row>
          <Label>w/ icon</Label>
          <Button color="success" size="sm" endContent={<FaCamera className="w-3.5 h-3.5" />}>Take Photo</Button>
          <Button color="danger" variant="bordered" size="sm" startContent={<FaUser className="w-3.5 h-3.5" />}>Delete</Button>
          <Button color="primary" size="sm" isLoading>Loading</Button>
        </Row>
      </Section>

      {/* ── CHECKBOX ────────────────────────────────────────────── */}
      <Section title="Checkbox">
        <Row className="d-flex">
          <Label>toggle</Label>
          {COLORS.map((color) => (
            <Checkbox
              key={color}
              color={color}
              checked={!!checkboxValues[color]}
              onChange={(val: boolean) => setCheckboxValues(prev => ({ ...prev, [color]: val }))}
              label={color.charAt(0).toUpperCase() + color.slice(1)}
            />
          ))}
        </Row>
        <Row>
          <Label>disabled</Label>
          {COLORS.map((color) => (
            <Checkbox
              key={color}
              color={color}
              checked={true}
              onChange={() => { }}
              label={color.charAt(0).toUpperCase() + color.slice(1)}
              disabled
            />
          ))}
        </Row>
      </Section>

      {/* ── CHIP ────────────────────────────────────────────────── */}
      <Section title="Chip">
        {CHIP_VARIANTS.map((variant) => (
          <Row key={variant}>
            <Label>{variant}</Label>
            {COLORS.map((color) => (
              <Chip key={color} variant={variant} color={color} size="sm">
                {color.charAt(0).toUpperCase() + color.slice(1)}
              </Chip>
            ))}
          </Row>
        ))}
        <Row>
          <Label>closeable</Label>
          {COLORS.map((color) => (
            <Chip key={color} variant="flat" color={color} size="sm" onClose={() => { }}>
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </Chip>
          ))}
        </Row>
        <Row>
          <Label>disabled</Label>
          {COLORS.map((color) => (
            <Chip key={color} variant="solid" color={color} size="sm" isDisabled>
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </Chip>
          ))}
        </Row>
      </Section>

      {/* ── INPUT ───────────────────────────────────────────────── */}
      <Section title="Input">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-white dark:bg-neutral-900 p-6 rounded-xl border border-default-200 overflow-x-auto">
          {COLORS.map((color) => (
            <div key={color} className="space-y-4 min-w-[200px]">
              <div className="text-xs font-bold text-neutral-400 capitalize mb-1">{color}</div>
              <Input variant="flat" color={color} value={inputVal[`${color}-flat`]} onChange={(e) => setInputVal(prev => ({ ...prev, [`${color}-flat`]: e.target.value }))} size="sm" />
              <Input variant="bordered" color={color} value={inputVal[`${color}-bordered`]} onChange={(e) => setInputVal(prev => ({ ...prev, [`${color}-bordered`]: e.target.value }))} size="sm" />
              <Input variant="faded" color={color} value={inputVal[`${color}-faded`]} onChange={(e) => setInputVal(prev => ({ ...prev, [`${color}-faded`]: e.target.value }))} size="sm" />
              <Input variant="underlined" color={color} value={inputVal[`${color}-underlined`]} onChange={(e) => setInputVal(prev => ({ ...prev, [`${color}-underlined`]: e.target.value }))} size="sm" />
              <Input variant="flat" color={color} value={inputVal[`${color}-disabled`]} onChange={(e) => setInputVal(prev => ({ ...prev, [`${color}-disabled`]: e.target.value }))} size="sm" disabled />
            </div>
          ))}
        </div>
      </Section>

      {/* ── FILE INPUT ───────────────────────────────────────────── */}
      <Section title="File Input">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-white dark:bg-neutral-900 p-6 rounded-xl border border-default-200 overflow-x-auto">
          {COLORS.map((color) => (
            <div key={color} className="space-y-4 min-w-[200px]">
              <div className="text-xs font-bold text-neutral-400 capitalize mb-1">{color}</div>
              <FileInput variant="flat" color={color} value={fileVal[`${color}-flat`]} onChange={(file) => setFileVal(prev => ({ ...prev, [`${color}-flat`]: file }))} size="sm" />
              <FileInput variant="bordered" color={color} value={fileVal[`${color}-bordered`]} onChange={(file) => setFileVal(prev => ({ ...prev, [`${color}-bordered`]: file }))} size="sm" />
              <FileInput variant="faded" color={color} value={fileVal[`${color}-faded`]} onChange={(file) => setFileVal(prev => ({ ...prev, [`${color}-faded`]: file }))} size="sm" />
              <FileInput variant="underlined" color={color} value={fileVal[`${color}-underlined`]} onChange={(file) => setFileVal(prev => ({ ...prev, [`${color}-underlined`]: file }))} size="sm" />
              <FileInput variant="flat" color={color} value={fileVal[`${color}-disabled`]} onChange={(file) => setFileVal(prev => ({ ...prev, [`${color}-disabled`]: file }))} size="sm" disabled />
            </div>
          ))}
        </div>
      </Section>

      {/* ── PHONE NUMBER INPUT ────────────────────────────────────── */}
      <Section title="Phone Number Input">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-white dark:bg-neutral-900 p-6 rounded-xl border border-default-200 overflow-x-auto">
          {COLORS.map((color) => (
            <div key={color} className="space-y-4 min-w-[200px]">
              <div className="text-xs font-bold text-neutral-400 capitalize mb-1">{color}</div>
              <PhoneNumberInput variant="flat" color={color} value={phoneVal[`${color}-flat`]} onChange={(val) => setPhoneVal(prev => ({ ...prev, [`${color}-flat`]: val }))} size="sm" />
              <PhoneNumberInput variant="bordered" color={color} value={phoneVal[`${color}-bordered`]} onChange={(val) => setPhoneVal(prev => ({ ...prev, [`${color}-bordered`]: val }))} size="sm" />
              <PhoneNumberInput variant="faded" color={color} value={phoneVal[`${color}-faded`]} onChange={(val) => setPhoneVal(prev => ({ ...prev, [`${color}-faded`]: val }))} size="sm" />
              <PhoneNumberInput variant="underlined" color={color} value={phoneVal[`${color}-underlined`]} onChange={(val) => setPhoneVal(prev => ({ ...prev, [`${color}-underlined`]: val }))} size="sm" />
              <PhoneNumberInput variant="flat" color={color} value={phoneVal[`${color}-disabled`]} onChange={(val) => setPhoneVal(prev => ({ ...prev, [`${color}-disabled`]: val }))} size="sm" disabled />
            </div>
          ))}
        </div>
      </Section>

      {/* ── SELECT DROPDOWN ───────────────────────────────────────── */}
      <Section title="Select Dropdown">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-white dark:bg-neutral-900 p-6 rounded-xl border border-default-200 overflow-x-auto">
          {COLORS.map((color) => (
            <div key={color} className="space-y-4 min-w-[200px]">
              <div className="text-xs font-bold text-neutral-400 capitalize mb-1">{color}</div>
              <SelectDropdown variant="flat" color={color} options={RADIO_OPTIONS} field={{ name: `dropdown-${color}-flat`, value: dropdownVal[`${color}-flat`], onChange: () => {}, onBlur: () => {} } as any} form={{ setFieldValue: (name: string, val: string) => setDropdownVal(prev => ({ ...prev, [`${color}-flat`]: val })), setFieldTouched: () => {}, touched: {}, errors: {} } as any} size="sm" />
              <SelectDropdown variant="bordered" color={color} options={RADIO_OPTIONS} field={{ name: `dropdown-${color}-bordered`, value: dropdownVal[`${color}-bordered`], onChange: () => {}, onBlur: () => {} } as any} form={{ setFieldValue: (name: string, val: string) => setDropdownVal(prev => ({ ...prev, [`${color}-bordered`]: val })), setFieldTouched: () => {}, touched: {}, errors: {} } as any} size="sm" />
              <SelectDropdown variant="faded" color={color} options={RADIO_OPTIONS} field={{ name: `dropdown-${color}-faded`, value: dropdownVal[`${color}-faded`], onChange: () => {}, onBlur: () => {} } as any} form={{ setFieldValue: (name: string, val: string) => setDropdownVal(prev => ({ ...prev, [`${color}-faded`]: val })), setFieldTouched: () => {}, touched: {}, errors: {} } as any} size="sm" />
              <SelectDropdown variant="underlined" color={color} options={RADIO_OPTIONS} field={{ name: `dropdown-${color}-underlined`, value: dropdownVal[`${color}-underlined`], onChange: () => {}, onBlur: () => {} } as any} form={{ setFieldValue: (name: string, val: string) => setDropdownVal(prev => ({ ...prev, [`${color}-underlined`]: val })), setFieldTouched: () => {}, touched: {}, errors: {} } as any} size="sm" />
              <SelectDropdown variant="flat" color={color} options={RADIO_OPTIONS} field={{ name: `dropdown-${color}-disabled`, value: dropdownVal[`${color}-disabled`], onChange: () => {}, onBlur: () => {} } as any} form={{ setFieldValue: (name: string, val: string) => setDropdownVal(prev => ({ ...prev, [`${color}-disabled`]: val })), setFieldTouched: () => {}, touched: {}, errors: {} } as any} size="sm" isDisabled />
            </div>
          ))}
        </div>
      </Section>

      {/* ── TEXTAREA ─────────────────────────────────────────────── */}
      <Section title="Textarea">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-white dark:bg-neutral-900 p-6 rounded-xl border border-default-200 overflow-x-auto">
          {COLORS.map((color) => (
            <div key={color} className="space-y-4 min-w-[200px]">
              <div className="text-xs font-bold text-neutral-400 capitalize mb-1">{color}</div>
              <Textarea variant="flat" color={color} value={textareaVal[`${color}-flat`]} onChange={(e) => setTextareaVal(prev => ({ ...prev, [`${color}-flat`]: e.target.value }))} size="sm" />
              <Textarea variant="bordered" color={color} value={textareaVal[`${color}-bordered`]} onChange={(e) => setTextareaVal(prev => ({ ...prev, [`${color}-bordered`]: e.target.value }))} size="sm" />
              <Textarea variant="faded" color={color} value={textareaVal[`${color}-faded`]} onChange={(e) => setTextareaVal(prev => ({ ...prev, [`${color}-faded`]: e.target.value }))} size="sm" />
              <Textarea variant="underlined" color={color} value={textareaVal[`${color}-underlined`]} onChange={(e) => setTextareaVal(prev => ({ ...prev, [`${color}-underlined`]: e.target.value }))} size="sm" />
              <Textarea variant="flat" color={color} value={textareaVal[`${color}-disabled`]} onChange={(e) => setTextareaVal(prev => ({ ...prev, [`${color}-disabled`]: e.target.value }))} size="sm" disabled />
            </div>
          ))}
        </div>
      </Section>

      {/* ── DATE INPUT ───────────────────────────────────────────── */}
      <Section title="Date Input">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-white dark:bg-neutral-900 p-6 rounded-xl border border-default-200 overflow-x-auto">
          {COLORS.map((color) => (
            <div key={color} className="space-y-4 min-w-[200px]">
              <div className="text-xs font-bold text-neutral-400 capitalize mb-1">{color}</div>
              <DateInput variant="flat" color={color} value={dateVal[`${color}-flat`]} onChange={(d) => setDateVal(prev => ({ ...prev, [`${color}-flat`]: d }))} size="sm" />
              <DateInput variant="bordered" color={color} value={dateVal[`${color}-bordered`]} onChange={(d) => setDateVal(prev => ({ ...prev, [`${color}-bordered`]: d }))} size="sm" />
              <DateInput variant="faded" color={color} value={dateVal[`${color}-faded`]} onChange={(d) => setDateVal(prev => ({ ...prev, [`${color}-faded`]: d }))} size="sm" />
              <DateInput variant="underlined" color={color} value={dateVal[`${color}-underlined`]} onChange={(d) => setDateVal(prev => ({ ...prev, [`${color}-underlined`]: d }))} size="sm" />
              <DateInput variant="flat" color={color} value={dateVal[`${color}-disabled`]} onChange={(d) => setDateVal(prev => ({ ...prev, [`${color}-disabled`]: d }))} size="sm" disabled />
            </div>
          ))}
        </div>
      </Section>

      {/* ── TIME PICKER ──────────────────────────────────────────── */}
      <Section title="Time Picker">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-white dark:bg-neutral-900 p-6 rounded-xl border border-default-200 overflow-x-auto">
          {COLORS.map((color) => (
            <div key={color} className="space-y-4 min-w-[200px]">
              <div className="text-xs font-bold text-neutral-400 capitalize mb-1">{color}</div>
              <TimePicker variant="flat" color={color} value={timeVal[`${color}-flat`]} onChange={(t) => setTimeVal(prev => ({ ...prev, [`${color}-flat`]: t }))} size="sm" />
              <TimePicker variant="bordered" color={color} value={timeVal[`${color}-bordered`]} onChange={(t) => setTimeVal(prev => ({ ...prev, [`${color}-bordered`]: t }))} size="sm" />
              <TimePicker variant="faded" color={color} value={timeVal[`${color}-faded`]} onChange={(t) => setTimeVal(prev => ({ ...prev, [`${color}-faded`]: t }))} size="sm" />
              <TimePicker variant="underlined" color={color} value={timeVal[`${color}-underlined`]} onChange={(t) => setTimeVal(prev => ({ ...prev, [`${color}-underlined`]: t }))} size="sm" />
              <TimePicker variant="flat" color={color} value={timeVal[`${color}-disabled`]} onChange={(t) => setTimeVal(prev => ({ ...prev, [`${color}-disabled`]: t }))} size="sm" disabled />
            </div>
          ))}
        </div>
      </Section>

      {/* ── DATETIME PICKER ──────────────────────────────────────── */}
      <Section title="Date Time Picker">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-white dark:bg-neutral-900 p-6 rounded-xl border border-default-200 overflow-x-auto">
          {COLORS.map((color) => (
            <div key={color} className="space-y-4 min-w-[200px]">
              <div className="text-xs font-bold text-neutral-400 capitalize mb-1">{color}</div>
              <DateTimePicker variant="flat" color={color} value={dateTimeVal[`${color}-flat`]} onChange={(dt) => setDateTimeVal(prev => ({ ...prev, [`${color}-flat`]: dt }))} size="sm" />
              <DateTimePicker variant="bordered" color={color} value={dateTimeVal[`${color}-bordered`]} onChange={(dt) => setDateTimeVal(prev => ({ ...prev, [`${color}-bordered`]: dt }))} size="sm" />
              <DateTimePicker variant="faded" color={color} value={dateTimeVal[`${color}-faded`]} onChange={(dt) => setDateTimeVal(prev => ({ ...prev, [`${color}-faded`]: dt }))} size="sm" />
              <DateTimePicker variant="underlined" color={color} value={dateTimeVal[`${color}-underlined`]} onChange={(dt) => setDateTimeVal(prev => ({ ...prev, [`${color}-underlined`]: dt }))} size="sm" />
              <DateTimePicker variant="flat" color={color} value={dateTimeVal[`${color}-disabled`]} onChange={(dt) => setDateTimeVal(prev => ({ ...prev, [`${color}-disabled`]: dt }))} size="sm" disabled />
            </div>
          ))}
        </div>
      </Section>

      {/* ── POPOVER ─────────────────────────────────────────────── */}
      <Section title="Popover">
        <Row>
          {COLORS.map((color) => (
            <Popover
              key={color}
              color={color}
              showArrow
              placement="bottom"
              trigger={
                <Button color={color}>
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </Button>
              }
            >
              <div className="px-4 py-3">
                <div className="text-small font-bold">Popover Content</div>
                <div className="text-tiny">This is a beautiful {color} popover content.</div>
              </div>
            </Popover>
          ))}
          {/* Foreground Popover Variant */}
          <Popover
            color="foreground"
            showArrow
            placement="bottom"
            trigger={
              <Button variant="light" color="default">
                Foreground
              </Button>
            }
          >
            <div className="px-4 py-3">
              <div className="text-small font-bold">Popover Content</div>
              <div className="text-tiny">This is a beautiful foreground popover content.</div>
            </div>
          </Popover>
        </Row>
      </Section>

      {/* ── RADIO ────────────────────────────────────────────── */}
      <Section title="Radio">
        {COLORS.map((color) => (
          <Row key={color} className="mb-4">
            <Label>{color}</Label>
            <Radio
              color={color}
              orientation="horizontal"
              value={selectedValues[color]}
              onChange={(e) => {
                const val = e.target.value;
                setSelectedValues((prev) => ({ ...prev, [color]: val }));
              }}
              options={RADIO_OPTIONS}
            />
          </Row>
        ))}
        <Row className="mt-6">
          <Label>disabled</Label>
          <Radio
            color="primary"
            orientation="horizontal"
            value="london"
            disabled
            options={RADIO_OPTIONS}
          />
        </Row>
      </Section>

      {/* ── SPINNER ─────────────────────────────────────────────── */}
      <Section title="Spinner">
        {SPINNER_VARIANTS.map((variant) => (
          <Row key={variant}>
            <Label>{variant}</Label>
            {COLORS.map((color) => (
              <Spinner key={color} variant={variant} color={color} label={color.charAt(0).toUpperCase() + color.slice(1)} />
            ))}
          </Row>
        ))}
      </Section>

      {/* ── SWITCH ──────────────────────────────────────────────── */}
      <Section title="Switch">
        <Row>
          <Label>toggle</Label>
          {COLORS.map((color) => (
            <Switch
              key={color}
              color={color}
              value={!!switchValues[color]}
              onChange={(val: boolean) => setSwitchValues(prev => ({ ...prev, [color]: val }))}
              label={color.charAt(0).toUpperCase() + color.slice(1)}
            />
          ))}
        </Row>
        <Row>
          <Label>disabled</Label>
          {COLORS.map((color) => (
            <Switch key={color} color={color} value={true} onChange={() => { }} label={color.charAt(0).toUpperCase() + color.slice(1)} disabled />
          ))}
        </Row>
      </Section>

      {/* ── TABS ────────────────────────────────────────────────── */}
      <Section title="Tabs">
        {/* ── Block 1: default / primary / secondary / success ── */}
        <div className="grid grid-cols-3 gap-x-4 gap-y-3">
          {(["solid", "bordered", "light", "underlined"] as const).flatMap((variant) =>
            (["default", "primary", "secondary"] as ColorOption[]).map((color) => (
              <div key={`${variant}-${color}`}>
                <Tabs variant={variant} color={color} defaultSelectedKey="photos">
                  <Tab key="photos" title="Photos" />
                  <Tab key="music" title="Music" />
                  <Tab key="videos" title="Videos" />
                </Tabs>
              </div>
            ))
          )}
          {/* Disabled row */}
          {(["default", "primary", "secondary"] as ColorOption[]).map((color) => (
            <div key={`disabled-${color}`}>
              <Tabs color={color} defaultSelectedKey="photos" isDisabled>
                <Tab key="photos" title="Photos" />
                <Tab key="music" title="Music" />
                <Tab key="videos" title="Videos" />
              </Tabs>
            </div>
          ))}
        </div>

        {/* ── Block 2: warning / danger ── */}
        <div className="grid grid-cols-3 gap-x-4 gap-y-3 mt-3">
          {(["solid", "bordered", "light", "underlined"] as const).flatMap((variant) =>
            (["success", "warning", "danger"] as ColorOption[]).map((color) => (
              <div key={`${variant}-${color}`}>
                <Tabs variant={variant} color={color} defaultSelectedKey="photos">
                  <Tab key="photos" title="Photos" />
                  <Tab key="music" title="Music" />
                  <Tab key="videos" title="Videos" />
                </Tabs>
              </div>
            ))
          )}
          {/* Disabled row */}
          {(["success", "warning", "danger"] as ColorOption[]).map((color) => (
            <div key={`disabled-${color}`}>
              <Tabs color={color} defaultSelectedKey="photos" isDisabled>
                <Tab key="photos" title="Photos" />
                <Tab key="music" title="Music" />
                <Tab key="videos" title="Videos" />
              </Tabs>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default UIKit;
