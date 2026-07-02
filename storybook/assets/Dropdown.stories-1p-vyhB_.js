import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-DDzTVtu_.js";import{t as r}from"./iframe-BSsvUtib.js";import{$ as i,Ct as a,Dt as o,H as s,K as c,_t as l,a as u,at as d,ct as f,i as p,n as m,o as h,r as g,t as _,xt as v,yt as y}from"./ui-C8puiJZM.js";var b,x,S,C,w,T,E,D,O,k,A,j,M;e((()=>{_(),o(),b=t(n(),1),x=r(),S={title:`Components/Dropdown`,component:m,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{placement:{control:`select`,options:[`top`,`top-start`,`top-end`,`bottom`,`bottom-start`,`bottom-end`,`left`,`left-start`,`left-end`,`right`,`right-start`,`right-end`]},showArrow:{control:`boolean`},closeOnSelect:{control:`boolean`}}},C={args:{placement:`bottom-start`,showArrow:!1,closeOnSelect:!0},render:e=>(0,x.jsxs)(m,{...e,children:[(0,x.jsx)(h,{children:(0,x.jsx)(s,{color:`primary`,children:`Trigger Menu`})}),(0,x.jsxs)(p,{ariaLabel:`Actions`,children:[(0,x.jsx)(g,{children:`New file`},`new`),(0,x.jsx)(g,{children:`Copy link`},`copy`),(0,x.jsx)(g,{children:`Edit file`},`edit`),(0,x.jsx)(g,{color:`danger`,className:`text-danger`,children:`Delete file`},`delete`)]})]})},w={render:()=>(0,x.jsxs)(m,{children:[(0,x.jsx)(h,{children:(0,x.jsx)(s,{variant:`bordered`,children:`Actions`})}),(0,x.jsxs)(p,{disabledKeys:[`edit`,`delete`],children:[(0,x.jsx)(g,{children:`New file`},`new`),(0,x.jsx)(g,{children:`Copy link`},`copy`),(0,x.jsx)(g,{children:`Edit file`},`edit`),(0,x.jsx)(g,{color:`danger`,className:`text-danger`,children:`Delete file`},`delete`)]})]})},T={render:()=>(0,x.jsxs)(m,{children:[(0,x.jsx)(h,{children:(0,x.jsx)(s,{color:`secondary`,variant:`flat`,children:`Actions`})}),(0,x.jsxs)(p,{variant:`flat`,color:`secondary`,children:[(0,x.jsx)(g,{startContent:(0,x.jsx)(l,{className:`w-3.5 h-3.5`}),children:`Edit file`},`new`),(0,x.jsx)(g,{startContent:(0,x.jsx)(d,{className:`w-3.5 h-3.5`}),children:`Copy link`},`copy`),(0,x.jsx)(g,{startContent:(0,x.jsx)(y,{className:`w-3.5 h-3.5`}),children:`Share file`},`share`),(0,x.jsx)(g,{color:`danger`,className:`text-danger`,startContent:(0,x.jsx)(v,{className:`w-3.5 h-3.5`}),children:`Delete file`},`delete`)]})]})},E={render:()=>(0,x.jsxs)(m,{children:[(0,x.jsx)(h,{children:(0,x.jsx)(s,{variant:`bordered`,children:`File Options`})}),(0,x.jsxs)(p,{variant:`flat`,className:`w-[260px]`,children:[(0,x.jsx)(g,{description:`Create a new document in this folder`,startContent:(0,x.jsx)(l,{className:`text-default-500 w-4 h-4`}),children:`New file`},`new`),(0,x.jsx)(g,{description:`Copy the shareable link to clipboard`,startContent:(0,x.jsx)(d,{className:`text-default-500 w-4 h-4`}),children:`Copy link`},`copy`),(0,x.jsx)(g,{description:`Modify the existing draft file`,startContent:(0,x.jsx)(f,{className:`text-default-500 w-4 h-4`}),children:`Edit file`},`edit`),(0,x.jsx)(g,{color:`danger`,description:`Permanently delete the document`,startContent:(0,x.jsx)(v,{className:`w-4 h-4`}),children:`Delete file`},`delete`)]})]})},D={render:()=>(0,x.jsxs)(m,{children:[(0,x.jsx)(h,{children:(0,x.jsx)(s,{color:`default`,variant:`flat`,children:`My Account`})}),(0,x.jsxs)(p,{variant:`flat`,ariaLabel:`User Actions`,children:[(0,x.jsxs)(u,{title:`Profile`,showDivider:!0,children:[(0,x.jsx)(g,{startContent:(0,x.jsx)(a,{className:`w-3.5 h-3.5`}),children:`My Profile`},`profile`),(0,x.jsx)(g,{startContent:(0,x.jsx)(f,{className:`w-3.5 h-3.5`}),children:`Settings`},`settings`)]}),(0,x.jsx)(u,{title:`Actions`,children:(0,x.jsx)(g,{color:`danger`,startContent:(0,x.jsx)(i,{className:`w-3.5 h-3.5`}),children:`Log Out`},`logout`)})]})]})},O={render:function(){let[e,t]=b.useState(new Set([`text`])),n=b.useMemo(()=>Array.from(e).join(`, `).replace(`_`,` `),[e]);return(0,x.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,x.jsxs)(m,{children:[(0,x.jsx)(h,{children:(0,x.jsx)(s,{variant:`bordered`,className:`capitalize`,children:n||`Select Type`})}),(0,x.jsxs)(p,{ariaLabel:`Single selection actions`,variant:`flat`,selectionMode:`single`,selectedKeys:e,onSelectionChange:t,children:[(0,x.jsx)(g,{children:`Text file`},`text`),(0,x.jsx)(g,{children:`PDF document`},`pdf`),(0,x.jsx)(g,{children:`Image graphic`},`image`),(0,x.jsx)(g,{children:`Video compilation`},`video`)]})]}),(0,x.jsxs)(`span`,{className:`text-xs text-neutral-400`,children:[`Selected value: `,n]})]})}},k={render:function(){let[e,t]=b.useState(new Set([`text`,`pdf`])),n=b.useMemo(()=>Array.from(e).join(`, `).replace(`_`,` `),[e]);return(0,x.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,x.jsxs)(m,{children:[(0,x.jsx)(h,{children:(0,x.jsxs)(s,{variant:`bordered`,className:`capitalize`,children:[`Filter Types (`,e.size,`)`]})}),(0,x.jsxs)(p,{ariaLabel:`Multiple selection actions`,variant:`flat`,selectionMode:`multiple`,selectedKeys:e,onSelectionChange:t,children:[(0,x.jsx)(g,{children:`Text file`},`text`),(0,x.jsx)(g,{children:`PDF document`},`pdf`),(0,x.jsx)(g,{children:`Image graphic`},`image`),(0,x.jsx)(g,{children:`Video compilation`},`video`)]})]}),(0,x.jsxs)(`span`,{className:`text-xs text-neutral-400`,children:[`Selected values: `,n||`none`]})]})}},A={render:function(){let e=[`solid`,`bordered`,`light`,`flat`,`faded`,`shadow`],t=[`default`,`primary`,`secondary`,`success`,`warning`,`danger`],[n,r]=b.useState(`flat`),[i,a]=b.useState(`primary`);return(0,x.jsxs)(`div`,{className:`flex flex-col gap-6 p-4`,children:[(0,x.jsxs)(`div`,{className:`flex flex-wrap gap-4 items-center`,children:[(0,x.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,x.jsx)(`span`,{className:`text-xs text-neutral-400 font-medium`,children:`Select Variant:`}),(0,x.jsx)(`div`,{className:`flex gap-2`,children:e.map(e=>(0,x.jsx)(s,{size:`sm`,variant:n===e?`solid`:`bordered`,color:`default`,onClick:()=>r(e),children:e},e))})]}),(0,x.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,x.jsx)(`span`,{className:`text-xs text-neutral-400 font-medium`,children:`Select Color:`}),(0,x.jsx)(`div`,{className:`flex gap-2`,children:t.map(e=>(0,x.jsx)(s,{size:`sm`,variant:i===e?`solid`:`bordered`,color:e,onClick:()=>a(e),children:e},e))})]})]}),(0,x.jsx)(`div`,{className:`flex items-center justify-center p-8 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800`,children:(0,x.jsxs)(m,{children:[(0,x.jsx)(h,{children:(0,x.jsx)(s,{color:i,variant:n===`light`?`light`:n===`shadow`?`solid`:n,children:`Trigger Dropdown`})}),(0,x.jsxs)(p,{variant:n,color:i,ariaLabel:`Dynamic Menu Demo`,children:[(0,x.jsx)(g,{children:`New file`},`new`),(0,x.jsx)(g,{children:`Copy link`},`copy`),(0,x.jsx)(g,{children:`Edit file`},`edit`),(0,x.jsx)(g,{color:`danger`,children:`Delete file`},`delete`)]})]})})]})}},j={render:()=>(0,x.jsxs)(m,{placement:`bottom-end`,children:[(0,x.jsx)(h,{children:(0,x.jsx)(c,{src:`https://i.pravatar.cc/150?u=a042581f4e29026704d`,isBordered:!0,color:`primary`,className:`cursor-pointer hover:opacity-85 transition-opacity`})}),(0,x.jsxs)(p,{variant:`flat`,color:`primary`,ariaLabel:`Profile Actions`,children:[(0,x.jsx)(u,{title:`Signed in as`,showDivider:!0,children:(0,x.jsx)(g,{description:`zoey@example.com`,className:`h-14 gap-2`,children:`Zoey Lang`},`user-info`)}),(0,x.jsxs)(u,{title:`Options`,showDivider:!0,children:[(0,x.jsx)(g,{startContent:(0,x.jsx)(f,{className:`w-3.5 h-3.5`}),children:`My Settings`},`settings`),(0,x.jsx)(g,{children:`Team Settings`},`team_settings`),(0,x.jsx)(g,{children:`Analytics`},`analytics`),(0,x.jsx)(g,{children:`System`},`system`)]}),(0,x.jsx)(u,{title:`Danger Zone`,children:(0,x.jsx)(g,{color:`danger`,className:`text-danger`,startContent:(0,x.jsx)(i,{className:`w-3.5 h-3.5`}),children:`Log Out`},`logout`)})]})]})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    placement: "bottom-start",
    showArrow: false,
    closeOnSelect: true
  },
  render: args => <Dropdown {...args}>
      <DropdownTrigger>
        <Button color="primary">Trigger Menu</Button>
      </DropdownTrigger>
      <DropdownMenu ariaLabel="Actions">
        <DropdownItem key="new">New file</DropdownItem>
        <DropdownItem key="copy">Copy link</DropdownItem>
        <DropdownItem key="edit">Edit file</DropdownItem>
        <DropdownItem key="delete" color="danger" className="text-danger">
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">Actions</Button>
      </DropdownTrigger>
      <DropdownMenu disabledKeys={["edit", "delete"]}>
        <DropdownItem key="new">New file</DropdownItem>
        <DropdownItem key="copy">Copy link</DropdownItem>
        <DropdownItem key="edit">Edit file</DropdownItem>
        <DropdownItem key="delete" color="danger" className="text-danger">
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <Dropdown>
      <DropdownTrigger>
        <Button color="secondary" variant="flat">Actions</Button>
      </DropdownTrigger>
      <DropdownMenu variant="flat" color="secondary">
        <DropdownItem key="new" startContent={<FaPen className="w-3.5 h-3.5" />}>
          Edit file
        </DropdownItem>
        <DropdownItem key="copy" startContent={<FaCopy className="w-3.5 h-3.5" />}>
          Copy link
        </DropdownItem>
        <DropdownItem key="share" startContent={<FaShare className="w-3.5 h-3.5" />}>
          Share file
        </DropdownItem>
        <DropdownItem key="delete" color="danger" className="text-danger" startContent={<FaTrash className="w-3.5 h-3.5" />}>
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">File Options</Button>
      </DropdownTrigger>
      <DropdownMenu variant="flat" className="w-[260px]">
        <DropdownItem key="new" description="Create a new document in this folder" startContent={<FaPen className="text-default-500 w-4 h-4" />}>
          New file
        </DropdownItem>
        <DropdownItem key="copy" description="Copy the shareable link to clipboard" startContent={<FaCopy className="text-default-500 w-4 h-4" />}>
          Copy link
        </DropdownItem>
        <DropdownItem key="edit" description="Modify the existing draft file" startContent={<FaGear className="text-default-500 w-4 h-4" />}>
          Edit file
        </DropdownItem>
        <DropdownItem key="delete" color="danger" description="Permanently delete the document" startContent={<FaTrash className="w-4 h-4" />}>
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <Dropdown>
      <DropdownTrigger>
        <Button color="default" variant="flat">My Account</Button>
      </DropdownTrigger>
      <DropdownMenu variant="flat" ariaLabel="User Actions">
        <DropdownSection title="Profile" showDivider>
          <DropdownItem key="profile" startContent={<FaUser className="w-3.5 h-3.5" />}>
            My Profile
          </DropdownItem>
          <DropdownItem key="settings" startContent={<FaGear className="w-3.5 h-3.5" />}>
            Settings
          </DropdownItem>
        </DropdownSection>
        <DropdownSection title="Actions">
          <DropdownItem key="logout" color="danger" startContent={<FaArrowRightFromBracket className="w-3.5 h-3.5" />}>
            Log Out
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: function SingleSelectionStory() {
    const [selected, setSelected] = React.useState<Set<string>>(new Set(["text"]));
    const selectedValue = React.useMemo(() => Array.from(selected).join(", ").replace("_", " "), [selected]);
    return <div className="flex flex-col gap-2">
        <Dropdown>
          <DropdownTrigger>
            <Button variant="bordered" className="capitalize">
              {selectedValue || "Select Type"}
            </Button>
          </DropdownTrigger>
          <DropdownMenu ariaLabel="Single selection actions" variant="flat" selectionMode="single" selectedKeys={selected} onSelectionChange={setSelected}>
            <DropdownItem key="text">Text file</DropdownItem>
            <DropdownItem key="pdf">PDF document</DropdownItem>
            <DropdownItem key="image">Image graphic</DropdownItem>
            <DropdownItem key="video">Video compilation</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <span className="text-xs text-neutral-400">Selected value: {selectedValue}</span>
      </div>;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: function MultipleSelectionStory() {
    const [selected, setSelected] = React.useState<Set<string>>(new Set(["text", "pdf"]));
    const selectedValue = React.useMemo(() => Array.from(selected).join(", ").replace("_", " "), [selected]);
    return <div className="flex flex-col gap-2">
        <Dropdown>
          <DropdownTrigger>
            <Button variant="bordered" className="capitalize">
              Filter Types ({selected.size})
            </Button>
          </DropdownTrigger>
          <DropdownMenu ariaLabel="Multiple selection actions" variant="flat" selectionMode="multiple" selectedKeys={selected} onSelectionChange={setSelected}>
            <DropdownItem key="text">Text file</DropdownItem>
            <DropdownItem key="pdf">PDF document</DropdownItem>
            <DropdownItem key="image">Image graphic</DropdownItem>
            <DropdownItem key="video">Video compilation</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <span className="text-xs text-neutral-400">Selected values: {selectedValue || "none"}</span>
      </div>;
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: function VariantsAndColorsStory() {
    const variants = ["solid", "bordered", "light", "flat", "faded", "shadow"] as const;
    const colors = ["default", "primary", "secondary", "success", "warning", "danger"] as const;
    const [variant, setVariant] = React.useState<typeof variants[number]>("flat");
    const [color, setColor] = React.useState<typeof colors[number]>("primary");
    return <div className="flex flex-col gap-6 p-4">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-neutral-400 font-medium">Select Variant:</span>
            <div className="flex gap-2">
              {variants.map(v => <Button key={v} size="sm" variant={variant === v ? "solid" : "bordered"} color="default" onClick={() => setVariant(v)}>
                  {v}
                </Button>)}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs text-neutral-400 font-medium">Select Color:</span>
            <div className="flex gap-2">
              {colors.map(c => <Button key={c} size="sm" variant={color === c ? "solid" : "bordered"} color={c} onClick={() => setColor(c)}>
                  {c}
                </Button>)}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center p-8 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <Dropdown>
            <DropdownTrigger>
              <Button color={color} variant={variant === "light" ? "light" : variant === "shadow" ? "solid" : variant}>
                Trigger Dropdown
              </Button>
            </DropdownTrigger>
            <DropdownMenu variant={variant} color={color} ariaLabel="Dynamic Menu Demo">
              <DropdownItem key="new">New file</DropdownItem>
              <DropdownItem key="copy">Copy link</DropdownItem>
              <DropdownItem key="edit">Edit file</DropdownItem>
              <DropdownItem key="delete" color="danger">Delete file</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>;
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" isBordered color="primary" className="cursor-pointer hover:opacity-85 transition-opacity" />
      </DropdownTrigger>
      <DropdownMenu variant="flat" color="primary" ariaLabel="Profile Actions">
        <DropdownSection title="Signed in as" showDivider>
          <DropdownItem key="user-info" description="zoey@example.com" className="h-14 gap-2">
            Zoey Lang
          </DropdownItem>
        </DropdownSection>
        <DropdownSection title="Options" showDivider>
          <DropdownItem key="settings" startContent={<FaGear className="w-3.5 h-3.5" />}>
            My Settings
          </DropdownItem>
          <DropdownItem key="team_settings">Team Settings</DropdownItem>
          <DropdownItem key="analytics">Analytics</DropdownItem>
          <DropdownItem key="system">System</DropdownItem>
        </DropdownSection>
        <DropdownSection title="Danger Zone">
          <DropdownItem key="logout" color="danger" className="text-danger" startContent={<FaArrowRightFromBracket className="w-3.5 h-3.5" />}>
            Log Out
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
}`,...j.parameters?.docs?.source}}},M=[`Default`,`DisabledKeys`,`WithIcons`,`WithDescription`,`Sections`,`SingleSelection`,`MultipleSelection`,`VariantsAndColors`,`AvatarTrigger`]}))();export{j as AvatarTrigger,C as Default,w as DisabledKeys,k as MultipleSelection,D as Sections,O as SingleSelection,A as VariantsAndColors,E as WithDescription,T as WithIcons,M as __namedExportsOrder,S as default};