import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-DDzTVtu_.js";import{t as r}from"./iframe-BSsvUtib.js";import{S as i,t as a}from"./ui-C8puiJZM.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y;e((()=>{o=t(n(),1),a(),s=r(),c={title:`Components/TimePicker`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`flat`,`bordered`,`underlined`,`faded`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},radius:{control:`select`,options:[`none`,`sm`,`md`,`lg`,`full`]},color:{control:`select`,options:[`default`,`primary`,`secondary`,`success`,`warning`,`danger`]},labelPlacement:{control:`select`,options:[`inside`,`outside`,`outside-left`,`outside-top`,`outlined`]},mode:{control:`select`,options:[`normal`,`clock`]},disabled:{control:`boolean`},isClearable:{control:`boolean`}}},l=e=>{let[t,n]=(0,o.useState)(e.value??``);return(0,s.jsx)(`div`,{className:`w-[320px]`,children:(0,s.jsx)(i,{...e,value:t,onChange:t=>{n(t),e.onChange?.(t)}})})},u={render:e=>(0,s.jsx)(l,{...e}),args:{label:`Select Time`,placeholder:`Select Time`,isClearable:!0}},d={render:()=>(0,s.jsxs)(`div`,{className:`flex gap-8 w-[600px]`,children:[(0,s.jsxs)(`div`,{className:`flex flex-col gap-2 flex-1`,children:[(0,s.jsx)(`span`,{className:`text-xs font-bold text-neutral-500 uppercase tracking-wider`,children:`Mode: Normal (Scroll Lists)`}),(0,s.jsx)(l,{label:`Normal Scroll Picker`,mode:`normal`,isClearable:!0,value:`03:30 PM`})]}),(0,s.jsxs)(`div`,{className:`flex flex-col gap-2 flex-1`,children:[(0,s.jsx)(`span`,{className:`text-xs font-bold text-neutral-500 uppercase tracking-wider`,children:`Mode: Clock (Dial Selector)`}),(0,s.jsx)(l,{label:`Clock Dial Picker`,mode:`clock`,isClearable:!0,value:`03:30 PM`})]})]})},f={render:()=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-8 w-[600px]`,children:[(0,s.jsxs)(`div`,{className:`flex gap-4`,children:[(0,s.jsx)(l,{label:`Flat`,variant:`flat`,isClearable:!0}),(0,s.jsx)(l,{label:`Bordered`,variant:`bordered`,isClearable:!0})]}),(0,s.jsxs)(`div`,{className:`flex gap-4`,children:[(0,s.jsx)(l,{label:`Underlined`,variant:`underlined`,isClearable:!0}),(0,s.jsx)(l,{label:`Faded`,variant:`faded`,isClearable:!0})]})]})},p={render:()=>(0,s.jsx)(`div`,{className:`flex gap-6 w-[600px]`,children:[`sm`,`md`,`lg`].map(e=>(0,s.jsx)(l,{label:`Size ${e.toUpperCase()}`,size:e,isClearable:!0},e))})},m={render:()=>(0,s.jsx)(`div`,{className:`flex gap-4 w-[800px]`,children:[`none`,`sm`,`md`,`lg`,`full`].map(e=>(0,s.jsx)(l,{label:`${e.toUpperCase()}`,radius:e,isClearable:!0},e))})},h={render:()=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-8 w-[600px]`,children:[(0,s.jsxs)(`div`,{className:`flex gap-4`,children:[(0,s.jsx)(l,{label:`Default`,color:`default`,isClearable:!0}),(0,s.jsx)(l,{label:`Primary`,color:`primary`,isClearable:!0})]}),(0,s.jsxs)(`div`,{className:`flex gap-4`,children:[(0,s.jsx)(l,{label:`Secondary`,color:`secondary`,isClearable:!0}),(0,s.jsx)(l,{label:`Success`,color:`success`,isClearable:!0})]}),(0,s.jsxs)(`div`,{className:`flex gap-4`,children:[(0,s.jsx)(l,{label:`Warning`,color:`warning`,isClearable:!0}),(0,s.jsx)(l,{label:`Danger`,color:`danger`,isClearable:!0})]})]})},g={render:()=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-8 w-[600px]`,children:[(0,s.jsxs)(`div`,{className:`flex gap-4 items-end`,children:[(0,s.jsx)(l,{label:`Inside (Floating)`,labelPlacement:`inside`,isClearable:!0}),(0,s.jsx)(l,{label:`Inside (static with placeholder)`,labelPlacement:`inside`,isClearable:!0,placeholder:`Select Time`})]}),(0,s.jsxs)(`div`,{className:`flex gap-4 items-end`,children:[(0,s.jsx)(l,{label:`Outside (Floating)`,isClearable:!0}),(0,s.jsx)(l,{label:`Outside (static with placeholder)`,isClearable:!0,placeholder:`Select Time`})]}),(0,s.jsxs)(`div`,{className:`flex gap-4 items-end`,children:[(0,s.jsx)(l,{label:`Outlined`,labelPlacement:`outlined`,isClearable:!0}),(0,s.jsx)(l,{label:`Outlined (static with placeholder)`,labelPlacement:`outlined`,isClearable:!0,placeholder:`Select Time`})]}),(0,s.jsxs)(`div`,{className:`flex gap-4 items-end`,children:[(0,s.jsx)(l,{label:`Outside Top`,labelPlacement:`outside-top`,isClearable:!0}),(0,s.jsx)(l,{label:`Outside Left`,labelPlacement:`outside-left`,isClearable:!0})]})]})},_={render:e=>(0,s.jsx)(l,{...e}),args:{label:`Disabled Time Picker`,disabled:!0,value:`03:30 PM`}},v={render:e=>(0,s.jsx)(l,{...e}),args:{label:`Meeting Time`,error:`Time is outside office hours`,touched:!0}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <TimePickerWithState {...args} />,
  args: {
    label: "Select Time",
    placeholder: "Select Time",
    isClearable: true
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-8 w-[600px]">
      <div className="flex flex-col gap-2 flex-1">
        <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Mode: Normal (Scroll Lists)</span>
        <TimePickerWithState label="Normal Scroll Picker" mode="normal" isClearable={true} value="03:30 PM" />
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Mode: Clock (Dial Selector)</span>
        <TimePickerWithState label="Clock Dial Picker" mode="clock" isClearable={true} value="03:30 PM" />
      </div>
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8 w-[600px]">
      <div className="flex gap-4">
        <TimePickerWithState label="Flat" variant="flat" isClearable={true} />
        <TimePickerWithState label="Bordered" variant="bordered" isClearable={true} />
      </div>
      <div className="flex gap-4">
        <TimePickerWithState label="Underlined" variant="underlined" isClearable={true} />
        <TimePickerWithState label="Faded" variant="faded" isClearable={true} />
      </div>
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-6 w-[600px]">
      {(["sm", "md", "lg"] as const).map(size => <TimePickerWithState key={size} label={\`Size \${size.toUpperCase()}\`} size={size} isClearable={true} />)}
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4 w-[800px]">
      {(["none", "sm", "md", "lg", "full"] as const).map(radius => <TimePickerWithState key={radius} label={\`\${radius.toUpperCase()}\`} radius={radius} isClearable={true} />)}
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8 w-[600px]">
      <div className="flex gap-4">
        <TimePickerWithState label="Default" color="default" isClearable={true} />
        <TimePickerWithState label="Primary" color="primary" isClearable={true} />
      </div>
      <div className="flex gap-4">
        <TimePickerWithState label="Secondary" color="secondary" isClearable={true} />
        <TimePickerWithState label="Success" color="success" isClearable={true} />
      </div>
      <div className="flex gap-4">
        <TimePickerWithState label="Warning" color="warning" isClearable={true} />
        <TimePickerWithState label="Danger" color="danger" isClearable={true} />
      </div>
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8 w-[600px]">
      <div className="flex gap-4 items-end">
        <TimePickerWithState label="Inside (Floating)" labelPlacement="inside" isClearable={true} />
        <TimePickerWithState label="Inside (static with placeholder)" labelPlacement="inside" isClearable={true} placeholder="Select Time" />
      </div>
      <div className="flex gap-4 items-end">
        <TimePickerWithState label="Outside (Floating)" isClearable={true} />
        <TimePickerWithState label="Outside (static with placeholder)" isClearable={true} placeholder="Select Time" />
      </div>
      <div className="flex gap-4 items-end">
        <TimePickerWithState label="Outlined" labelPlacement="outlined" isClearable={true} />
        <TimePickerWithState label="Outlined (static with placeholder)" labelPlacement="outlined" isClearable={true} placeholder="Select Time" />
      </div>
      <div className="flex gap-4 items-end">
        <TimePickerWithState label="Outside Top" labelPlacement="outside-top" isClearable={true} />
        <TimePickerWithState label="Outside Left" labelPlacement="outside-left" isClearable={true} />
      </div>
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <TimePickerWithState {...args} />,
  args: {
    label: "Disabled Time Picker",
    disabled: true,
    value: "03:30 PM"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <TimePickerWithState {...args} />,
  args: {
    label: "Meeting Time",
    error: "Time is outside office hours",
    touched: true
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`Modes`,`Variants`,`Sizes`,`Radiuses`,`Colors`,`LabelPlacements`,`Disabled`,`ErrorState`]}))();export{h as Colors,u as Default,_ as Disabled,v as ErrorState,g as LabelPlacements,d as Modes,m as Radiuses,p as Sizes,f as Variants,y as __namedExportsOrder,c as default};