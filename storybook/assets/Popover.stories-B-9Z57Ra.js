import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./iframe-BSsvUtib.js";import{H as n,K as r,b as i,t as a}from"./ui-C8puiJZM.js";var o,s,c,l,u,d,f,p,m,h,g,_,v;e((()=>{a(),o=t(),s={title:`Components/Popover`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{placement:{control:`select`,options:[`top`,`top-start`,`top-end`,`bottom`,`bottom-start`,`bottom-end`,`left`,`left-start`,`left-end`,`right`,`right-start`,`right-end`]},color:{control:`select`,options:[`default`,`primary`,`secondary`,`success`,`warning`,`danger`,`foreground`]},backdrop:{control:`select`,options:[`transparent`,`opaque`,`blur`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},radius:{control:`select`,options:[`none`,`sm`,`md`,`lg`,`full`]},shadow:{control:`select`,options:[`none`,`sm`,`md`,`lg`]},triggerMode:{control:`select`,options:[`click`,`hover`]},trigger:{control:!1},children:{control:!1}}},c=()=>(0,o.jsxs)(`div`,{className:`px-4 py-3 min-w-[200px]`,children:[(0,o.jsx)(`div`,{className:`text-sm font-bold mb-1`,children:`Popover Title`}),(0,o.jsx)(`div`,{className:`text-xs opacity-75`,children:`This is a custom popover content with some descriptive text.`})]}),l={args:{trigger:(0,o.jsx)(n,{children:`Open Popover`}),children:(0,o.jsx)(c,{}),placement:`bottom`,showArrow:!0}},u={render:()=>(0,o.jsxs)(`div`,{className:`grid grid-cols-3 gap-8 p-20`,children:[(0,o.jsx)(i,{placement:`top-start`,trigger:(0,o.jsx)(n,{variant:`flat`,fullWidth:!0,children:`Top Start`}),showArrow:!0,children:(0,o.jsx)(c,{})}),(0,o.jsx)(i,{placement:`top`,trigger:(0,o.jsx)(n,{variant:`flat`,fullWidth:!0,children:`Top`}),showArrow:!0,children:(0,o.jsx)(c,{})}),(0,o.jsx)(i,{placement:`top-end`,trigger:(0,o.jsx)(n,{variant:`flat`,fullWidth:!0,children:`Top End`}),showArrow:!0,children:(0,o.jsx)(c,{})}),(0,o.jsx)(i,{placement:`left`,trigger:(0,o.jsx)(n,{variant:`flat`,fullWidth:!0,children:`Left`}),showArrow:!0,children:(0,o.jsx)(c,{})}),(0,o.jsx)(`div`,{}),(0,o.jsx)(i,{placement:`right`,trigger:(0,o.jsx)(n,{variant:`flat`,fullWidth:!0,children:`Right`}),showArrow:!0,children:(0,o.jsx)(c,{})}),(0,o.jsx)(i,{placement:`bottom-start`,trigger:(0,o.jsx)(n,{variant:`flat`,fullWidth:!0,children:`Bottom Start`}),showArrow:!0,children:(0,o.jsx)(c,{})}),(0,o.jsx)(i,{placement:`bottom`,trigger:(0,o.jsx)(n,{variant:`flat`,fullWidth:!0,children:`Bottom`}),showArrow:!0,children:(0,o.jsx)(c,{})}),(0,o.jsx)(i,{placement:`bottom-end`,trigger:(0,o.jsx)(n,{variant:`flat`,fullWidth:!0,children:`Bottom End`}),showArrow:!0,children:(0,o.jsx)(c,{})})]})},d={render:()=>(0,o.jsx)(`div`,{className:`flex flex-wrap gap-4`,children:[`default`,`primary`,`secondary`,`success`,`warning`,`danger`,`foreground`].map(e=>(0,o.jsx)(i,{color:e,trigger:(0,o.jsx)(n,{color:[`default`,`primary`,`secondary`,`success`,`warning`,`danger`].includes(e)?e:`default`,variant:`solid`,children:e}),showArrow:!0,children:(0,o.jsx)(c,{})},e))})},f={render:()=>(0,o.jsx)(`div`,{className:`flex gap-4`,children:[`sm`,`md`,`lg`].map(e=>(0,o.jsx)(i,{size:e,trigger:(0,o.jsx)(n,{variant:`flat`,children:e}),showArrow:!0,children:(0,o.jsx)(c,{})},e))})},p={render:()=>(0,o.jsx)(`div`,{className:`flex gap-4`,children:[`none`,`sm`,`md`,`lg`,`full`].map(e=>(0,o.jsx)(i,{radius:e,trigger:(0,o.jsx)(n,{variant:`flat`,children:e}),showArrow:!0,children:(0,o.jsx)(c,{})},e))})},m={render:()=>(0,o.jsx)(`div`,{className:`flex gap-4`,children:[`none`,`sm`,`md`,`lg`].map(e=>(0,o.jsx)(i,{shadow:e,trigger:(0,o.jsx)(n,{variant:`flat`,children:e}),showArrow:!0,children:(0,o.jsx)(c,{})},e))})},h={render:()=>(0,o.jsxs)(`div`,{className:`flex gap-4`,children:[(0,o.jsx)(i,{backdrop:`transparent`,trigger:(0,o.jsx)(n,{variant:`bordered`,children:`Transparent`}),children:(0,o.jsx)(c,{})}),(0,o.jsx)(i,{backdrop:`opaque`,trigger:(0,o.jsx)(n,{variant:`bordered`,children:`Opaque`}),children:(0,o.jsx)(c,{})}),(0,o.jsx)(i,{backdrop:`blur`,trigger:(0,o.jsx)(n,{variant:`bordered`,children:`Blur`}),children:(0,o.jsx)(c,{})})]})},g={render:()=>(0,o.jsxs)(`div`,{className:`flex gap-4`,children:[(0,o.jsx)(i,{triggerMode:`click`,trigger:(0,o.jsx)(n,{children:`Click Me`}),showArrow:!0,children:(0,o.jsx)(`div`,{className:`p-4 text-sm`,children:`Opened on click`})}),(0,o.jsx)(i,{triggerMode:`hover`,trigger:(0,o.jsx)(n,{variant:`flat`,children:`Hover Me`}),showArrow:!0,children:(0,o.jsx)(`div`,{className:`p-4 text-sm`,children:`Opened on hover`})})]})},_={args:{trigger:(0,o.jsx)(r,{size:`md`,name:`John Doe`,color:`primary`,isBordered:!0,className:`cursor-pointer hover:opacity-90 transition-opacity`}),showArrow:!0,children:(0,o.jsxs)(`div`,{className:`p-2 w-64`,children:[(0,o.jsxs)(`div`,{className:`flex items-center gap-3 p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg cursor-pointer transition-colors`,children:[(0,o.jsx)(r,{name:`John Doe`,color:`primary`,size:`md`}),(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`div`,{className:`text-sm font-bold`,children:`John Doe`}),(0,o.jsx)(`div`,{className:`text-xs text-neutral-500`,children:`Software Engineer`})]})]}),(0,o.jsx)(`div`,{className:`h-px bg-neutral-200 dark:bg-neutral-800 my-2`}),(0,o.jsxs)(`div`,{className:`space-y-1`,children:[(0,o.jsx)(`div`,{className:`px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md cursor-pointer transition-colors`,children:`Settings`}),(0,o.jsx)(`div`,{className:`px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md cursor-pointer transition-colors`,children:`Help & Feedback`}),(0,o.jsx)(`div`,{className:`px-3 py-2 text-sm text-danger hover:bg-danger/10 rounded-md cursor-pointer transition-colors font-medium`,children:`Log Out`})]})]})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button>Open Popover</Button>,
    children: <PopoverContent />,
    placement: "bottom",
    showArrow: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-3 gap-8 p-20">
      <Popover placement="top-start" trigger={<Button variant="flat" fullWidth>Top Start</Button>} showArrow>
        <PopoverContent />
      </Popover>
      <Popover placement="top" trigger={<Button variant="flat" fullWidth>Top</Button>} showArrow>
        <PopoverContent />
      </Popover>
      <Popover placement="top-end" trigger={<Button variant="flat" fullWidth>Top End</Button>} showArrow>
        <PopoverContent />
      </Popover>

      <Popover placement="left" trigger={<Button variant="flat" fullWidth>Left</Button>} showArrow>
        <PopoverContent />
      </Popover>
      <div />
      <Popover placement="right" trigger={<Button variant="flat" fullWidth>Right</Button>} showArrow>
        <PopoverContent />
      </Popover>

      <Popover placement="bottom-start" trigger={<Button variant="flat" fullWidth>Bottom Start</Button>} showArrow>
        <PopoverContent />
      </Popover>
      <Popover placement="bottom" trigger={<Button variant="flat" fullWidth>Bottom</Button>} showArrow>
        <PopoverContent />
      </Popover>
      <Popover placement="bottom-end" trigger={<Button variant="flat" fullWidth>Bottom End</Button>} showArrow>
        <PopoverContent />
      </Popover>
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">
      {(["default", "primary", "secondary", "success", "warning", "danger", "foreground"] as const).map(color => {
      // Button only supports these specific colors
      const buttonColor = (["default", "primary", "secondary", "success", "warning", "danger"].includes(color) ? color : "default") as any;
      return <Popover key={color} color={color} trigger={<Button color={buttonColor} variant="solid">{color}</Button>} showArrow>
            <PopoverContent />
          </Popover>;
    })}
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      {(["sm", "md", "lg"] as const).map(size => <Popover key={size} size={size} trigger={<Button variant="flat">{size}</Button>} showArrow>
          <PopoverContent />
        </Popover>)}
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      {(["none", "sm", "md", "lg", "full"] as const).map(radius => <Popover key={radius} radius={radius} trigger={<Button variant="flat">{radius}</Button>} showArrow>
          <PopoverContent />
        </Popover>)}
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      {(["none", "sm", "md", "lg"] as const).map(shadow => <Popover key={shadow} shadow={shadow} trigger={<Button variant="flat">{shadow}</Button>} showArrow>
          <PopoverContent />
        </Popover>)}
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      <Popover backdrop="transparent" trigger={<Button variant="bordered">Transparent</Button>}>
        <PopoverContent />
      </Popover>
      <Popover backdrop="opaque" trigger={<Button variant="bordered">Opaque</Button>}>
        <PopoverContent />
      </Popover>
      <Popover backdrop="blur" trigger={<Button variant="bordered">Blur</Button>}>
        <PopoverContent />
      </Popover>
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      <Popover triggerMode="click" trigger={<Button>Click Me</Button>} showArrow>
        <div className="p-4 text-sm">Opened on click</div>
      </Popover>
      <Popover triggerMode="hover" trigger={<Button variant="flat">Hover Me</Button>} showArrow>
        <div className="p-4 text-sm">Opened on hover</div>
      </Popover>
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Avatar size="md" name="John Doe" color="primary" isBordered className="cursor-pointer hover:opacity-90 transition-opacity" />,
    showArrow: true,
    children: <div className="p-2 w-64">
        <div className="flex items-center gap-3 p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg cursor-pointer transition-colors">
          <Avatar name="John Doe" color="primary" size="md" />
          <div>
            <div className="text-sm font-bold">John Doe</div>
            <div className="text-xs text-neutral-500">Software Engineer</div>
          </div>
        </div>
        <div className="h-px bg-neutral-200 dark:bg-neutral-800 my-2" />
        <div className="space-y-1">
          <div className="px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md cursor-pointer transition-colors">Settings</div>
          <div className="px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md cursor-pointer transition-colors">Help & Feedback</div>
          <div className="px-3 py-2 text-sm text-danger hover:bg-danger/10 rounded-md cursor-pointer transition-colors font-medium">Log Out</div>
        </div>
      </div>
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`Placements`,`Colors`,`Sizes`,`Radiuses`,`Shadows`,`Backdrops`,`TriggerModes`,`CustomContent`]}))();export{h as Backdrops,d as Colors,_ as CustomContent,l as Default,u as Placements,p as Radiuses,m as Shadows,f as Sizes,g as TriggerModes,v as __namedExportsOrder,s as default};