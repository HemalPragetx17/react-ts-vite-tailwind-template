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

const extractMatchingBraceContent = (str: string, startIndex: number): string | null => {
  let depth = 0;
  let inString: string | null = null;
  let isEscaped = false;

  for (let i = startIndex; i < str.length; i++) {
    const char = str[i];

    if (isEscaped) {
      isEscaped = false;
      continue;
    }

    if (char === '\\') {
      isEscaped = true;
      continue;
    }

    if (inString) {
      if (char === inString) {
        inString = null;
      }
      continue;
    }

    if (char === '"' || char === "'" || char === '`') {
      inString = char;
      continue;
    }

    if (char === '{') {
      depth++;
    } else if (char === '}') {
      depth--;
      if (depth === 0) {
        return str.slice(startIndex + 1, i);
      }
    }
  }

  return null;
};

const extractMatchingParenContent = (str: string, startIndex: number): string | null => {
  let depth = 0;
  let inString: string | null = null;
  let isEscaped = false;

  for (let i = startIndex; i < str.length; i++) {
    const char = str[i];

    if (isEscaped) {
      isEscaped = false;
      continue;
    }

    if (char === '\\') {
      isEscaped = true;
      continue;
    }

    if (inString) {
      if (char === inString) {
        inString = null;
      }
      continue;
    }

    if (char === '"' || char === "'" || char === '`') {
      inString = char;
      continue;
    }

    if (char === '(') {
      depth++;
    } else if (char === ')') {
      depth--;
      if (depth === 0) {
        return str.slice(startIndex + 1, i);
      }
    }
  }

  return null;
};

const dedent = (code: string): string => {
  const lines = code.split("\n");
  const nonEmptyLines = lines.filter((l) => l.trim().length > 0);
  if (nonEmptyLines.length === 0) return code.trim();

  let minIndent = Infinity;
  for (const line of nonEmptyLines) {
    const match = line.match(/^(\s*)/);
    if (match) {
      minIndent = Math.min(minIndent, match[1].length);
    }
  }

  if (minIndent === Infinity || minIndent === 0) {
    return code.trim();
  }

  return lines
    .map((line) => (line.length >= minIndent ? line.slice(minIndent) : line))
    .join("\n")
    .trim();
};

const transformStorySource = (code: string, storyContext: any) => {
  const rawCode = storyContext?.parameters?.docs?.source?.originalSource || code;
  if (!rawCode) return "";

  let cleanedCode = rawCode.trim();

  // Guard against re-transforming code that has already been formatted
  if (
    cleanedCode.includes("export default function App") ||
    (cleanedCode.includes("import ") && cleanedCode.includes("./components/ui"))
  ) {
    return cleanedCode;
  }

  // Handle CSF object syntax { render: ... } or render: ...
  const renderIdx = cleanedCode.search(/\brender\s*:\s*/);
  if (renderIdx !== -1) {
    const afterRender = cleanedCode.slice(renderIdx).replace(/^\brender\s*:\s*/, "").trim();

    if (afterRender.startsWith("function")) {
      const firstBrace = afterRender.indexOf("{");
      if (firstBrace !== -1) {
        const bodyContent = extractMatchingBraceContent(afterRender, firstBrace);
        if (bodyContent !== null) {
          cleanedCode = bodyContent.trim();
        }
      }
    } else {
      // Arrow function
      const arrowIdx = afterRender.indexOf("=>");
      if (arrowIdx !== -1) {
        let body = afterRender.slice(arrowIdx + 2).trim();

        if (body.startsWith("{")) {
          const bodyContent = extractMatchingBraceContent(body, 0);
          if (bodyContent !== null) {
            cleanedCode = bodyContent.trim();
          }
        } else if (body.startsWith("(")) {
          const parenContent = extractMatchingParenContent(body, 0);
          if (parenContent !== null) {
            cleanedCode = `return (\n  ${parenContent.trim()}\n);`;
          } else {
            cleanedCode = `return (\n  ${body}\n);`;
          }
        } else {
          // Truncate any subsequent story object properties like `, args: { ... }` or `, parameters: ...`
          const nextPropIdx = body.search(/,\s*(args|parameters|play|argTypes|decorators|tags|name)\s*:/);
          if (nextPropIdx !== -1) {
            body = body.slice(0, nextPropIdx).trim();
          }
          // Remove trailing comma, closing brace, or semicolon
          if (body.endsWith(",")) body = body.slice(0, -1).trim();
          if (body.endsWith("}")) body = body.slice(0, -1).trim();
          if (body.endsWith(",")) body = body.slice(0, -1).trim();
          if (body.endsWith(";")) body = body.slice(0, -1).trim();

          cleanedCode = `return (\n  ${body}\n);`;
        }
      }
    }
  }

  // Substitute {...args} with actual Story args if present
  if (cleanedCode.includes("{...args}") && storyContext?.args) {
    const formattedArgs = Object.entries(storyContext.args)
      .filter(([_, value]) => {
        if (value === undefined || typeof value === "function") return false;
        if (typeof value === "object" && value !== null && ("$$typeof" in value || "props" in value)) return false;
        return true;
      })
      .map(([key, value]) => {
        if (typeof value === "boolean") return value ? key : `${key}={false}`;
        if (typeof value === "string") return `${key}="${value}"`;
        return `${key}={${JSON.stringify(value)}}`;
      })
      .join("\n  ");

    cleanedCode = cleanedCode.replace("{...args}", formattedArgs ? `\n  ${formattedArgs}\n` : "");
  }

  // Dedent extracted code block to baseline indent 0
  cleanedCode = dedent(cleanedCode);

  // Ensure body has a return statement
  if (!cleanedCode.includes("return")) {
    if (cleanedCode.startsWith("{") || cleanedCode.startsWith("args:")) {
      const compName =
        storyContext?.component?.name ||
        ALL_UI_COMPONENTS.find((comp) => new RegExp(`\\b${comp}\\b`).test(cleanedCode)) ||
        "Component";
      cleanedCode = `<${compName} {...args} />`;
    }
    cleanedCode = `return (\n  ${cleanedCode}\n);`;
    cleanedCode = dedent(cleanedCode);
  }

  // Normalize React hooks
  if (cleanedCode.includes("React.useState")) {
    cleanedCode = cleanedCode.replace(/React\.useState/g, "useState");
  }
  if (cleanedCode.includes("React.useMemo")) {
    cleanedCode = cleanedCode.replace(/React\.useMemo/g, "useMemo");
  }
  if (cleanedCode.includes("React.useCallback")) {
    cleanedCode = cleanedCode.replace(/React\.useCallback/g, "useCallback");
  }
  // Normalize local wrapper component names in code snippets to base UI components
  cleanedCode = cleanedCode
    .replace(/\bMulti([A-Z][a-zA-Z0-9]+)WithState\b/g, "$1")
    .replace(/\b([A-Z][a-zA-Z0-9]+)WithState\b/g, "$1")
    .replace(/\bModalWithTrigger\b/g, "Modal")
    .replace(/\bMultiFileInput\b/g, "FileInput")
    .replace(/\bDateInputComponent\b/g, "DateInput")
    .replace(/\bFileInputComponent\b/g, "FileInput");

  // Detect all used UI components
  const usedComponents = ALL_UI_COMPONENTS.filter((comp) => {
    const regex = new RegExp(`\\b${comp}\\b`);
    return regex.test(cleanedCode) || storyContext?.component?.name === comp;
  });

  const importsLine = usedComponents.length > 0
    ? `import { ${usedComponents.join(", ")} } from "./components/ui";\n\n`
    : "";

  const reactHooks: string[] = [];
  if (cleanedCode.includes("useState")) reactHooks.push("useState");
  if (cleanedCode.includes("useMemo")) reactHooks.push("useMemo");
  if (cleanedCode.includes("useCallback")) reactHooks.push("useCallback");
  if (cleanedCode.includes("useRef")) reactHooks.push("useRef");
  if (cleanedCode.includes("useEffect")) reactHooks.push("useEffect");

  const reactImport = reactHooks.length > 0
    ? `import { ${reactHooks.join(", ")} } from "react";\n`
    : "";

  const indentedBody = cleanedCode
    .split("\n")
    .map((line: string) => (line.length > 0 ? `  ${line}` : ""))
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
        type: 'original',
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