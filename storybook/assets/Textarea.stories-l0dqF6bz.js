import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-DDzTVtu_.js";import{t as r}from"./iframe-BzRfQavU.js";import{C as i,t as a}from"./ui-sUaI0YKE.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y;e((()=>{o=t(n(),1),a(),s=r(),c={title:`Components/Textarea`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`flat`,`bordered`,`underlined`,`faded`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},radius:{control:`select`,options:[`none`,`sm`,`md`,`lg`,`full`]},labelPlacement:{control:`select`,options:[`inside`,`outside`,`outside-left`,`outside-top`,`outlined`]},isClearable:{control:`boolean`},disabled:{control:`boolean`},disableAutosize:{control:`boolean`}}},l=e=>{let[t,n]=(0,o.useState)(e.value??``);return(0,s.jsx)(i,{...e,value:t,onChange:t=>{n(t.target.value),e.onChange?.(t)}})},u={render:e=>(0,s.jsx)(`div`,{className:`w-[600px]`,children:(0,s.jsx)(l,{...e})}),args:{label:`Description`,placeholder:`Enter your description`}},d={render:e=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-8 w-[800px]`,children:[(0,s.jsxs)(`div`,{className:`flex gap-4`,children:[(0,s.jsx)(l,{...e,variant:`flat`,label:`Flat`}),(0,s.jsx)(l,{...e,variant:`bordered`,label:`Bordered`})]}),(0,s.jsxs)(`div`,{className:`flex gap-4`,children:[(0,s.jsx)(l,{...e,variant:`underlined`,label:`Underlined`}),(0,s.jsx)(l,{...e,variant:`faded`,label:`Faded`})]})]}),args:{label:`Description`,placeholder:`Enter your description`}},f={render:e=>(0,s.jsxs)(`div`,{className:`flex gap-4 w-[800px]`,children:[(0,s.jsx)(l,{...e,size:`sm`,label:`Small`,placeholder:`Small size`}),(0,s.jsx)(l,{...e,size:`md`,label:`Medium`,placeholder:`Medium size`}),(0,s.jsx)(l,{...e,size:`lg`,label:`Large`,placeholder:`Large size`})]})},p={render:e=>(0,s.jsxs)(`div`,{className:`flex gap-4 w-[800px]`,children:[(0,s.jsx)(l,{...e,radius:`none`,label:`Radius None`,placeholder:`No radius`}),(0,s.jsx)(l,{...e,radius:`sm`,label:`Radius Small`,placeholder:`Small radius`}),(0,s.jsx)(l,{...e,radius:`md`,label:`Radius Medium`,placeholder:`Medium radius`}),(0,s.jsx)(l,{...e,radius:`lg`,label:`Radius Large`,placeholder:`Large radius`}),(0,s.jsx)(l,{...e,radius:`full`,label:`Radius Full`,placeholder:`Full radius`})]}),args:{variant:`bordered`}},m={render:e=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-8 w-[800px]`,children:[(0,s.jsxs)(`div`,{className:`flex gap-4`,children:[(0,s.jsx)(l,{...e,labelPlacement:`inside`,label:`Inside (Floating)`}),(0,s.jsx)(l,{...e,labelPlacement:`inside`,label:`Inside (Static with Placeholder)`,placeholder:`Enter text`})]}),(0,s.jsxs)(`div`,{className:`flex gap-4`,children:[(0,s.jsx)(l,{...e,labelPlacement:`outside`,label:`Outside (Floating)`}),(0,s.jsx)(l,{...e,labelPlacement:`outside`,label:`Outside (Static with Placeholder)`,placeholder:`Enter text`})]}),(0,s.jsxs)(`div`,{className:`flex gap-4`,children:[(0,s.jsx)(l,{...e,labelPlacement:`outlined`,label:`Outlined (Floating)`}),(0,s.jsx)(l,{...e,labelPlacement:`outlined`,label:`Outlined (Static with Placeholder)`,placeholder:`Enter text`})]}),(0,s.jsx)(l,{...e,labelPlacement:`outside-top`,label:`Outside Top (Static)`,placeholder:`Enter text`}),(0,s.jsx)(l,{...e,labelPlacement:`outside-left`,label:`Outside Left (Static)`,placeholder:`Enter text`})]}),args:{variant:`bordered`}},h={render:e=>(0,s.jsx)(`div`,{className:`w-[600px]`,children:(0,s.jsx)(l,{...e})}),args:{label:`Message`,placeholder:`Type a message...`,isClearable:!0}},g={render:e=>(0,s.jsxs)(`div`,{className:`flex gap-4 w-[800px]`,children:[(0,s.jsx)(l,{...e,label:`Autosizing Textarea`}),(0,s.jsx)(l,{...e,label:`Fixed Textarea (Autosize Disabled)`,disableAutosize:!0})]}),args:{placeholder:`Type text here...`,minRows:3,maxRows:6}},_={render:e=>(0,s.jsx)(`div`,{className:`w-[600px]`,children:(0,s.jsx)(l,{...e})}),args:{label:`Description`,placeholder:`Enter description`,disabled:!0}},v={render:e=>(0,s.jsx)(`div`,{className:`w-[600px]`,children:(0,s.jsx)(l,{...e})}),args:{label:`Description`,placeholder:`Enter description`,error:`Description is required`,touched:!0}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <div className="w-[600px]">
      <TextareaWithState {...args} />
    </div>,
  args: {
    label: "Description",
    placeholder: "Enter your description"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-8 w-[800px]">
      <div className="flex gap-4">
        <TextareaWithState {...args} variant="flat" label="Flat" />
        <TextareaWithState {...args} variant="bordered" label="Bordered" />
      </div>
      <div className="flex gap-4">
        <TextareaWithState {...args} variant="underlined" label="Underlined" />
        <TextareaWithState {...args} variant="faded" label="Faded" />
      </div>
    </div>,
  args: {
    label: "Description",
    placeholder: "Enter your description"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4 w-[800px]">
      <TextareaWithState {...args} size="sm" label="Small" placeholder="Small size" />
      <TextareaWithState {...args} size="md" label="Medium" placeholder="Medium size" />
      <TextareaWithState {...args} size="lg" label="Large" placeholder="Large size" />
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4 w-[800px]">
      <TextareaWithState {...args} radius="none" label="Radius None" placeholder="No radius" />
      <TextareaWithState {...args} radius="sm" label="Radius Small" placeholder="Small radius" />
      <TextareaWithState {...args} radius="md" label="Radius Medium" placeholder="Medium radius" />
      <TextareaWithState {...args} radius="lg" label="Radius Large" placeholder="Large radius" />
      <TextareaWithState {...args} radius="full" label="Radius Full" placeholder="Full radius" />
    </div>,
  args: {
    variant: "bordered"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-8 w-[800px]">
      <div className="flex gap-4">
        <TextareaWithState {...args} labelPlacement="inside" label="Inside (Floating)" />
        <TextareaWithState {...args} labelPlacement="inside" label="Inside (Static with Placeholder)" placeholder="Enter text" />
      </div>
      <div className="flex gap-4">
        <TextareaWithState {...args} labelPlacement="outside" label="Outside (Floating)" />
        <TextareaWithState {...args} labelPlacement="outside" label="Outside (Static with Placeholder)" placeholder="Enter text" />
      </div>
      <div className="flex gap-4">
        <TextareaWithState {...args} labelPlacement="outlined" label="Outlined (Floating)" />
        <TextareaWithState {...args} labelPlacement="outlined" label="Outlined (Static with Placeholder)" placeholder="Enter text" />
      </div>
      <TextareaWithState {...args} labelPlacement="outside-top" label="Outside Top (Static)" placeholder="Enter text" />
      <TextareaWithState {...args} labelPlacement="outside-left" label="Outside Left (Static)" placeholder="Enter text" />
    </div>,
  args: {
    variant: "bordered"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <div className="w-[600px]">
      <TextareaWithState {...args} />
    </div>,
  args: {
    label: "Message",
    placeholder: "Type a message...",
    isClearable: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4 w-[800px]">
      <TextareaWithState {...args} label="Autosizing Textarea" />
      <TextareaWithState {...args} label="Fixed Textarea (Autosize Disabled)" disableAutosize={true} />
    </div>,
  args: {
    placeholder: "Type text here...",
    minRows: 3,
    maxRows: 6
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <div className="w-[600px]">
      <TextareaWithState {...args} />
    </div>,
  args: {
    label: "Description",
    placeholder: "Enter description",
    disabled: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <div className="w-[600px]">
      <TextareaWithState {...args} />
    </div>,
  args: {
    label: "Description",
    placeholder: "Enter description",
    error: "Description is required",
    touched: true
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`Variants`,`Sizes`,`Radiuses`,`LabelPlacements`,`Clearable`,`Autosize`,`Disabled`,`ErrorState`]}))();export{g as Autosize,h as Clearable,u as Default,_ as Disabled,v as ErrorState,m as LabelPlacements,p as Radiuses,f as Sizes,d as Variants,y as __namedExportsOrder,c as default};