import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-DDzTVtu_.js";import{t as r}from"./iframe-fS8lWa8-.js";import{Dt as i,k as a,ot as o,pt as s,st as c,t as l}from"./ui-B0lacm4L.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{u=t(n(),1),i(),l(),d=r(),f={title:`Components/Input`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`flat`,`bordered`,`underlined`,`faded`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},radius:{control:`select`,options:[`none`,`sm`,`md`,`lg`,`full`]},labelPlacement:{control:`select`,options:[`inside`,`outside`,`outside-left`,`outside-top`,`outlined`]},isPasswordToggle:{control:`boolean`},isClearable:{control:`boolean`},disabled:{control:`boolean`}}},p=e=>{let[t,n]=(0,u.useState)(e.value??``);return(0,d.jsx)(a,{...e,value:t,onChange:t=>{n(t.target.value),e.onChange?.(t)}})},m={render:e=>(0,d.jsx)(p,{...e}),args:{label:`Email`,placeholder:`Enter your email`,type:`email`}},h={render:e=>(0,d.jsxs)(`div`,{className:`flex flex-col gap-8 w-[800px]`,children:[(0,d.jsxs)(`div`,{className:`flex gap-4`,children:[(0,d.jsx)(p,{...e,variant:`flat`,label:`Flat`}),(0,d.jsx)(p,{...e,variant:`bordered`,label:`Bordered`})]}),(0,d.jsxs)(`div`,{className:`flex gap-4`,children:[(0,d.jsx)(p,{...e,variant:`underlined`,label:`Underlined`}),(0,d.jsx)(p,{...e,variant:`faded`,label:`Faded`})]})]}),args:{placeholder:`Enter your name`}},g={render:e=>(0,d.jsxs)(`div`,{className:`flex gap-4 w-[800px]`,children:[(0,d.jsx)(p,{...e,size:`sm`,label:`Small`,placeholder:`Enter small input`}),(0,d.jsx)(p,{...e,size:`md`,label:`Medium`,placeholder:`Enter medium input`}),(0,d.jsx)(p,{...e,size:`lg`,label:`Large`,placeholder:`Enter large input`})]})},_={render:e=>(0,d.jsxs)(`div`,{className:`flex gap-4 w-[800px]`,children:[(0,d.jsx)(p,{...e,radius:`none`,label:`Radius None`,placeholder:`No border radius`}),(0,d.jsx)(p,{...e,radius:`sm`,label:`Radius Small`,placeholder:`Small border radius`}),(0,d.jsx)(p,{...e,radius:`md`,label:`Radius Medium`,placeholder:`Medium border radius`}),(0,d.jsx)(p,{...e,radius:`lg`,label:`Radius Large`,placeholder:`Large border radius`}),(0,d.jsx)(p,{...e,radius:`full`,label:`Radius Full`,placeholder:`Full border radius`})]}),args:{variant:`bordered`}},v={render:e=>(0,d.jsxs)(`div`,{className:`flex flex-col gap-8 w-[800px]`,children:[(0,d.jsxs)(`div`,{className:`flex gap-4`,children:[(0,d.jsx)(p,{...e,labelPlacement:`inside`,label:`Inside (Floating)`}),(0,d.jsx)(p,{...e,labelPlacement:`inside`,label:`Inside (static with placeholder)`,placeholder:`Enter value`})]}),(0,d.jsxs)(`div`,{className:`flex gap-4`,children:[(0,d.jsx)(p,{...e,labelPlacement:`outside`,label:`Outside (Floating)`}),(0,d.jsx)(p,{...e,labelPlacement:`outside`,label:`Outside (static with placeholder)`,placeholder:`Enter value`})]}),(0,d.jsxs)(`div`,{className:`flex gap-4`,children:[(0,d.jsx)(p,{...e,labelPlacement:`outlined`,label:`Outlined`}),(0,d.jsx)(p,{...e,labelPlacement:`outlined`,label:`Outlined (static with placeholder)`,placeholder:`Enter value`})]}),(0,d.jsx)(p,{...e,labelPlacement:`outside-top`,label:`Outside Top`,placeholder:`Enter value`}),(0,d.jsx)(p,{...e,labelPlacement:`outside-left`,label:`Outside Left`,placeholder:`Enter value`})]}),args:{variant:`bordered`}},y={render:e=>(0,d.jsx)(p,{...e}),args:{label:`Password`,placeholder:`Enter your password`,type:`password`,isPasswordToggle:!0}},b={render:e=>(0,d.jsxs)(`div`,{className:`flex flex-col gap-6 w-[800px]`,children:[(0,d.jsxs)(`div`,{className:`flex gap-4`,children:[(0,d.jsx)(p,{...e,label:`Search`,placeholder:`Search users...`,startContent:(0,d.jsx)(s,{className:`w-4 h-4 text-neutral-400`,"aria-hidden":!0})}),(0,d.jsx)(p,{...e,label:`Email`,placeholder:`you@example.com`,type:`email`,startContent:(0,d.jsx)(c,{className:`w-4 h-4 text-neutral-400`,"aria-hidden":!0})})]}),(0,d.jsxs)(`div`,{className:`flex gap-4`,children:[(0,d.jsx)(p,{...e,label:`Price (Start)`,placeholder:`0.00`,startContent:(0,d.jsx)(o,{className:`w-4 h-4 text-neutral-400`,"aria-hidden":!0})}),(0,d.jsx)(p,{...e,label:`Price (End)`,placeholder:`0.00`,endContent:(0,d.jsx)(`span`,{className:`text-neutral-400 text-sm`,children:`USD`})}),(0,d.jsx)(p,{...e,label:`Price (Both)`,placeholder:`0.00`,startContent:(0,d.jsx)(o,{className:`w-4 h-4 text-neutral-400`,"aria-hidden":!0}),endContent:(0,d.jsx)(`span`,{className:`text-neutral-400 text-sm`,children:`USD`})})]})]})},x={render:e=>(0,d.jsx)(p,{...e}),args:{label:`Clearable Input`,placeholder:`Type something...`,isClearable:!0}},S={render:e=>(0,d.jsx)(p,{...e}),args:{label:`Disabled Input`,placeholder:`This input is disabled`,disabled:!0,value:`Read-only value`}},C={render:e=>(0,d.jsx)(p,{...e}),args:{label:`Email`,placeholder:`Enter your email`,error:`Invalid email address`,touched:!0,value:`invalid-email`}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    label: "Email",
    placeholder: "Enter your email",
    type: "email"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-8 w-[800px]">
      <div className="flex gap-4">
        <InputWithState {...args} variant="flat" label="Flat" />
        <InputWithState {...args} variant="bordered" label="Bordered" />
      </div>
      <div className="flex gap-4">
        <InputWithState {...args} variant="underlined" label="Underlined" />
        <InputWithState {...args} variant="faded" label="Faded" />
      </div>
    </div>,
  args: {
    placeholder: "Enter your name"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4 w-[800px]">
      <InputWithState {...args} size="sm" label="Small" placeholder="Enter small input" />
      <InputWithState {...args} size="md" label="Medium" placeholder="Enter medium input" />
      <InputWithState {...args} size="lg" label="Large" placeholder="Enter large input" />
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4 w-[800px]">
      <InputWithState {...args} radius="none" label="Radius None" placeholder="No border radius" />
      <InputWithState {...args} radius="sm" label="Radius Small" placeholder="Small border radius" />
      <InputWithState {...args} radius="md" label="Radius Medium" placeholder="Medium border radius" />
      <InputWithState {...args} radius="lg" label="Radius Large" placeholder="Large border radius" />
      <InputWithState {...args} radius="full" label="Radius Full" placeholder="Full border radius" />
    </div>,
  args: {
    variant: "bordered"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-8 w-[800px]">
      <div className="flex gap-4">
        <InputWithState {...args} labelPlacement="inside" label="Inside (Floating)" />
        <InputWithState {...args} labelPlacement="inside" label="Inside (static with placeholder)" placeholder="Enter value" />
      </div>
      <div className="flex gap-4">
        <InputWithState {...args} labelPlacement="outside" label="Outside (Floating)" />
        <InputWithState {...args} labelPlacement="outside" label="Outside (static with placeholder)" placeholder="Enter value" />
      </div>
      <div className="flex gap-4">
        <InputWithState {...args} labelPlacement="outlined" label="Outlined" />
        <InputWithState {...args} labelPlacement="outlined" label="Outlined (static with placeholder)" placeholder="Enter value" />
      </div>
      <InputWithState {...args} labelPlacement="outside-top" label="Outside Top" placeholder="Enter value" />
      <InputWithState {...args} labelPlacement="outside-left" label="Outside Left" placeholder="Enter value" />
    </div>,
  args: {
    variant: "bordered"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
    isPasswordToggle: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-6 w-[800px]">
      <div className="flex gap-4">
        <InputWithState {...args} label="Search" placeholder="Search users..." startContent={<FaMagnifyingGlass className="w-4 h-4 text-neutral-400" aria-hidden />} />
        <InputWithState {...args} label="Email" placeholder="you@example.com" type="email" startContent={<FaEnvelope className="w-4 h-4 text-neutral-400" aria-hidden />} />
      </div>
      <div className="flex gap-4">
        <InputWithState {...args} label="Price (Start)" placeholder="0.00" startContent={<FaDollarSign className="w-4 h-4 text-neutral-400" aria-hidden />} />
        <InputWithState {...args} label="Price (End)" placeholder="0.00" endContent={<span className="text-neutral-400 text-sm">USD</span>} />
        <InputWithState {...args} label="Price (Both)" placeholder="0.00" startContent={<FaDollarSign className="w-4 h-4 text-neutral-400" aria-hidden />} endContent={<span className="text-neutral-400 text-sm">USD</span>} />
      </div>
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    label: "Clearable Input",
    placeholder: "Type something...",
    isClearable: true
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    label: "Disabled Input",
    placeholder: "This input is disabled",
    disabled: true,
    value: "Read-only value"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    label: "Email",
    placeholder: "Enter your email",
    error: "Invalid email address",
    touched: true,
    value: "invalid-email"
  }
}`,...C.parameters?.docs?.source}}},w=[`Default`,`Variants`,`Sizes`,`Radiuses`,`LabelPlacements`,`Password`,`WithIcons`,`Clearable`,`Disabled`,`ErrorState`]}))();export{x as Clearable,m as Default,S as Disabled,C as ErrorState,v as LabelPlacements,y as Password,_ as Radiuses,g as Sizes,h as Variants,b as WithIcons,w as __namedExportsOrder,f as default};