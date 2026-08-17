import type { Preview } from '@storybook/react-vite'
import '../src/index.css'
import { MemoryRouter } from 'react-router-dom'
import React from 'react'
import { syncDefaultRadiusCssVariable } from '../src/components/ui/shared/radius'
import { syncCalendarRadiusCssVariable } from '../src/components/ui/shared/fieldStyles'

syncDefaultRadiusCssVariable()
syncCalendarRadiusCssVariable()

const ALL_UI_COMPONENTS = [
  "Accordion", "AccordionItem", "Avatar", "Badge", "Breadcrumbs", "Button",
  "Card", "CardHeader", "CardBody", "CardFooter", "Checkbox", "CheckboxGroup",
  "Chip", "ConfirmModal", "DateInput", "DateTimePicker", "Drawer", "DrawerBody",
  "DrawerContent", "DrawerFooter", "DrawerHeader", "Dropdown", "DropdownTrigger",
  "DropdownMenu", "DropdownItem", "DropdownSection", "FileInput", "Input",
  "Modal", "Navbar", "NavbarBrand", "NavbarContent", "NavbarItem", "OTPInput",
  "Pagination", "PhoneInput", "Popover", "Radio", "Rating", "SelectDropdown",
  "Skeleton", "Slider", "Spinner", "Switch", "Table", "TableHeader", "TableColumn",
  "TableBody", "TableRow", "TableCell", "Tab", "Tabs", "Textarea", "TextEditor",
  "TimePicker", "ToggleButton", "ToggleButtonGroup", "Tooltip"
];

const transformStorySource = (code: string, storyContext: any) => {
  if (!code) return "";

  let cleanedCode = code.trim();

  // Guard against re-transforming code that has already been formatted
  if (
    cleanedCode.includes("export default function App") ||
    (cleanedCode.includes("import ") && cleanedCode.includes("./components/ui"))
  ) {
    return cleanedCode;
  }

  // Handle CSF object syntax { render: () => ... }
  if (cleanedCode.startsWith("{") && cleanedCode.includes("render")) {
    const arrowIdx = cleanedCode.indexOf("=>");
    if (arrowIdx !== -1) {
      let body = cleanedCode.slice(arrowIdx + 2).trim();
      // Trim trailing object literal closing braces/commas safely
      if (body.endsWith(",")) body = body.slice(0, -1).trim();
      if (body.endsWith("}")) body = body.slice(0, -1).trim();
      if (body.endsWith(",")) body = body.slice(0, -1).trim();

      if (body.startsWith("{")) {
        body = body.slice(1);
        const lastBrace = body.lastIndexOf("}");
        if (lastBrace !== -1) {
          body = body.slice(0, lastBrace);
        }
        cleanedCode = body.trim();
      } else {
        if (body.startsWith("(") && body.endsWith(")")) {
          body = body.slice(1, -1).trim();
        }
        cleanedCode = `return (\n  ${body}\n);`;
      }
    }
  }

  // Ensure body has a return statement
  if (!cleanedCode.includes("return")) {
    cleanedCode = `return (\n  ${cleanedCode}\n);`;
  }

  // Normalize React.useState -> useState
  if (cleanedCode.includes("React.useState")) {
    cleanedCode = cleanedCode.replace(/React\.useState/g, "useState");
  }

  // Detect all used UI components
  const usedComponents = ALL_UI_COMPONENTS.filter((comp) => {
    const regex = new RegExp(`\\b${comp}\\b`);
    return regex.test(cleanedCode) || storyContext?.component?.name === comp;
  });

  const importsLine = usedComponents.length > 0
    ? `import { ${usedComponents.join(", ")} } from "./components/ui";\n\n`
    : "";

  const hasUseState = cleanedCode.includes("useState");
  const reactImport = hasUseState ? `import { useState } from "react";\n` : "";

  const indentedBody = cleanedCode
    .split("\n")
    .map((line) => (line.trim() ? `  ${line}` : ""))
    .join("\n");

  return `${reactImport}${importsLine}export default function App() {\n${indentedBody}\n}`;
};

const preview: Preview = {
  decorators: [
    (Story, context) => (
      <MemoryRouter initialEntries={[context.parameters.routerPath || "/"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      source: {
        format: true,
        transform: transformStorySource,
      },
    },
    a11y: {
      test: 'todo'
    }
  },
};

export default preview;