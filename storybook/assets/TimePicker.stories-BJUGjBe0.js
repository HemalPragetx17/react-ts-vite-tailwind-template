import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-DDzTVtu_.js";import{t as r}from"./iframe-sOyJkj26.js";import{O as i,t as a}from"./ui-DraYKXvF.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y;e((()=>{o=t(n(),1),a(),s=r(),c={title:`Components/TimePicker`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`flat`,`bordered`,`underlined`,`faded`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},radius:{control:`select`,options:[`none`,`sm`,`md`,`lg`,`full`]},color:{control:`select`,options:[`default`,`primary`,`secondary`,`success`,`warning`,`danger`]},labelPlacement:{control:`select`,options:[`inside`,`outside`,`outside-left`,`outside-top`,`outlined`]},mode:{control:`select`,options:[`normal`,`clock`]},disabled:{control:`boolean`},isClearable:{control:`boolean`}}},l=e=>{let[t,n]=(0,o.useState)(e.value??``);return(0,s.jsx)(`div`,{className:`w-[320px]`,children:(0,s.jsx)(i,{...e,value:t,onChange:t=>{n(t),e.onChange?.(t)}})})},u={render:()=>(0,s.jsx)(l,{label:`Select Time`,placeholder:`Select Time`,isClearable:!0})},d={render:()=>(0,s.jsxs)(`div`,{className:`flex gap-8 w-[600px]`,children:[(0,s.jsxs)(`div`,{className:`flex flex-col gap-2 flex-1`,children:[(0,s.jsx)(`span`,{className:`text-xs font-bold text-neutral-500 uppercase tracking-wider`,children:`Mode: Normal (Scroll Lists)`}),(0,s.jsx)(l,{label:`Normal Scroll Picker`,mode:`normal`,isClearable:!0,value:`03:30 PM`})]}),(0,s.jsxs)(`div`,{className:`flex flex-col gap-2 flex-1`,children:[(0,s.jsx)(`span`,{className:`text-xs font-bold text-neutral-500 uppercase tracking-wider`,children:`Mode: Clock (Dial Selector)`}),(0,s.jsx)(l,{label:`Clock Dial Picker`,mode:`clock`,isClearable:!0,value:`03:30 PM`})]})]})},f={render:()=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-8 w-[600px]`,children:[(0,s.jsxs)(`div`,{className:`flex gap-4`,children:[(0,s.jsx)(l,{label:`Flat`,variant:`flat`,isClearable:!0}),(0,s.jsx)(l,{label:`Bordered`,variant:`bordered`,isClearable:!0})]}),(0,s.jsxs)(`div`,{className:`flex gap-4`,children:[(0,s.jsx)(l,{label:`Underlined`,variant:`underlined`,isClearable:!0}),(0,s.jsx)(l,{label:`Faded`,variant:`faded`,isClearable:!0})]})]})},p={render:()=>(0,s.jsxs)(`div`,{className:`flex gap-6 w-[600px]`,children:[(0,s.jsx)(l,{label:`Size SM`,size:`sm`,isClearable:!0}),(0,s.jsx)(l,{label:`Size MD`,size:`md`,isClearable:!0}),(0,s.jsx)(l,{label:`Size LG`,size:`lg`,isClearable:!0})]})},m={render:()=>(0,s.jsxs)(`div`,{className:`flex gap-4 w-[800px]`,children:[(0,s.jsx)(l,{label:`NONE`,radius:`none`,isClearable:!0}),(0,s.jsx)(l,{label:`SM`,radius:`sm`,isClearable:!0}),(0,s.jsx)(l,{label:`MD`,radius:`md`,isClearable:!0}),(0,s.jsx)(l,{label:`LG`,radius:`lg`,isClearable:!0}),(0,s.jsx)(l,{label:`FULL`,radius:`full`,isClearable:!0})]})},h={render:()=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-8 w-[600px]`,children:[(0,s.jsxs)(`div`,{className:`flex gap-4`,children:[(0,s.jsx)(l,{label:`Default`,color:`default`,isClearable:!0}),(0,s.jsx)(l,{label:`Primary`,color:`primary`,isClearable:!0})]}),(0,s.jsxs)(`div`,{className:`flex gap-4`,children:[(0,s.jsx)(l,{label:`Secondary`,color:`secondary`,isClearable:!0}),(0,s.jsx)(l,{label:`Success`,color:`success`,isClearable:!0})]}),(0,s.jsxs)(`div`,{className:`flex gap-4`,children:[(0,s.jsx)(l,{label:`Warning`,color:`warning`,isClearable:!0}),(0,s.jsx)(l,{label:`Danger`,color:`danger`,isClearable:!0})]})]})},g={render:()=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-8 w-[600px]`,children:[(0,s.jsxs)(`div`,{className:`flex gap-4 items-end`,children:[(0,s.jsx)(l,{label:`Inside (Floating)`,labelPlacement:`inside`,isClearable:!0}),(0,s.jsx)(l,{label:`Inside (static with placeholder)`,labelPlacement:`inside`,isClearable:!0,placeholder:`Select Time`})]}),(0,s.jsxs)(`div`,{className:`flex gap-4 items-end`,children:[(0,s.jsx)(l,{label:`Outside (Floating)`,isClearable:!0}),(0,s.jsx)(l,{label:`Outside (static with placeholder)`,isClearable:!0,placeholder:`Select Time`})]}),(0,s.jsxs)(`div`,{className:`flex gap-4 items-end`,children:[(0,s.jsx)(l,{label:`Outlined`,labelPlacement:`outlined`,isClearable:!0}),(0,s.jsx)(l,{label:`Outlined (static with placeholder)`,labelPlacement:`outlined`,isClearable:!0,placeholder:`Select Time`})]}),(0,s.jsxs)(`div`,{className:`flex gap-4 items-end`,children:[(0,s.jsx)(l,{label:`Outside Top`,labelPlacement:`outside-top`,isClearable:!0}),(0,s.jsx)(l,{label:`Outside Left`,labelPlacement:`outside-left`,isClearable:!0})]})]})},_={render:()=>(0,s.jsx)(l,{label:`Disabled Time Picker`,disabled:!0,value:`03:30 PM`})},v={render:()=>(0,s.jsx)(l,{label:`Meeting Time`,error:`Time is outside office hours`,touched:!0})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <TimePickerWithState label="Select Time" placeholder="Select Time" isClearable />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-8 w-[600px]">
      <div className="flex flex-col gap-2 flex-1">
        <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Mode: Normal (Scroll Lists)</span>
        <TimePickerWithState label="Normal Scroll Picker" mode="normal" isClearable value="03:30 PM" />
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Mode: Clock (Dial Selector)</span>
        <TimePickerWithState label="Clock Dial Picker" mode="clock" isClearable value="03:30 PM" />
      </div>
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8 w-[600px]">
      <div className="flex gap-4">
        <TimePickerWithState label="Flat" variant="flat" isClearable />
        <TimePickerWithState label="Bordered" variant="bordered" isClearable />
      </div>
      <div className="flex gap-4">
        <TimePickerWithState label="Underlined" variant="underlined" isClearable />
        <TimePickerWithState label="Faded" variant="faded" isClearable />
      </div>
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-6 w-[600px]">
      <TimePickerWithState label="Size SM" size="sm" isClearable />
      <TimePickerWithState label="Size MD" size="md" isClearable />
      <TimePickerWithState label="Size LG" size="lg" isClearable />
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4 w-[800px]">
      <TimePickerWithState label="NONE" radius="none" isClearable />
      <TimePickerWithState label="SM" radius="sm" isClearable />
      <TimePickerWithState label="MD" radius="md" isClearable />
      <TimePickerWithState label="LG" radius="lg" isClearable />
      <TimePickerWithState label="FULL" radius="full" isClearable />
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8 w-[600px]">
      <div className="flex gap-4">
        <TimePickerWithState label="Default" color="default" isClearable />
        <TimePickerWithState label="Primary" color="primary" isClearable />
      </div>
      <div className="flex gap-4">
        <TimePickerWithState label="Secondary" color="secondary" isClearable />
        <TimePickerWithState label="Success" color="success" isClearable />
      </div>
      <div className="flex gap-4">
        <TimePickerWithState label="Warning" color="warning" isClearable />
        <TimePickerWithState label="Danger" color="danger" isClearable />
      </div>
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8 w-[600px]">
      <div className="flex gap-4 items-end">
        <TimePickerWithState label="Inside (Floating)" labelPlacement="inside" isClearable />
        <TimePickerWithState label="Inside (static with placeholder)" labelPlacement="inside" isClearable placeholder="Select Time" />
      </div>
      <div className="flex gap-4 items-end">
        <TimePickerWithState label="Outside (Floating)" isClearable />
        <TimePickerWithState label="Outside (static with placeholder)" isClearable placeholder="Select Time" />
      </div>
      <div className="flex gap-4 items-end">
        <TimePickerWithState label="Outlined" labelPlacement="outlined" isClearable />
        <TimePickerWithState label="Outlined (static with placeholder)" labelPlacement="outlined" isClearable placeholder="Select Time" />
      </div>
      <div className="flex gap-4 items-end">
        <TimePickerWithState label="Outside Top" labelPlacement="outside-top" isClearable />
        <TimePickerWithState label="Outside Left" labelPlacement="outside-left" isClearable />
      </div>
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <TimePickerWithState label="Disabled Time Picker" disabled value="03:30 PM" />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <TimePickerWithState label="Meeting Time" error="Time is outside office hours" touched />
}`,...v.parameters?.docs?.source}}},y=[`Default`,`Modes`,`Variants`,`Sizes`,`Radiuses`,`Colors`,`LabelPlacements`,`Disabled`,`ErrorState`]}))();export{h as Colors,u as Default,_ as Disabled,v as ErrorState,g as LabelPlacements,d as Modes,m as Radiuses,p as Sizes,f as Variants,y as __namedExportsOrder,c as default};