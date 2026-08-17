import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-DDzTVtu_.js";import{t as r}from"./iframe-Ucf_MO8K.js";import{N as i,t as a}from"./ui-B7sYvh9B.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{o=t(n(),1),a(),s=r(),c={title:`Components/PhoneInput`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`flat`,`bordered`,`underlined`,`faded`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},radius:{control:`select`,options:[`none`,`sm`,`md`,`lg`,`full`]},labelPlacement:{control:`select`,options:[`inside`,`outside`,`outside-left`,`outside-top`,`outlined`]},dropdownPosition:{control:`select`,options:[`top`,`bottom`]},countryCodeEditable:{control:`boolean`},disabled:{control:`boolean`}}},l=e=>{let[t,n]=(0,o.useState)(e.value??``);return(0,s.jsx)(`div`,{className:`w-[320px]`,children:(0,s.jsx)(i,{...e,value:t,onChange:t=>{n(t??``),e.onChange?.(t)}})})},u={render:e=>(0,s.jsx)(l,{...e}),args:{label:`Phone Number`,defaultCountry:`IN`,placeholder:`Enter Phone Number`}},d={render:()=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-8 w-[600px]`,children:[(0,s.jsxs)(`div`,{className:`flex gap-4`,children:[(0,s.jsx)(l,{label:`Flat`,variant:`flat`,defaultCountry:`IN`}),(0,s.jsx)(l,{label:`Bordered`,variant:`bordered`,defaultCountry:`IN`})]}),(0,s.jsxs)(`div`,{className:`flex gap-4`,children:[(0,s.jsx)(l,{label:`Underlined`,variant:`underlined`,defaultCountry:`IN`}),(0,s.jsx)(l,{label:`Faded`,variant:`faded`,defaultCountry:`IN`})]})]})},f={render:()=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-8 w-[600px]`,children:[(0,s.jsxs)(`div`,{className:`flex gap-4`,children:[(0,s.jsx)(l,{label:`Size sm`,size:`sm`,defaultCountry:`IN`}),(0,s.jsx)(l,{label:`Size md`,size:`md`,defaultCountry:`IN`})]}),(0,s.jsx)(`div`,{className:`flex gap-4`,children:(0,s.jsx)(l,{label:`Size lg`,size:`lg`,defaultCountry:`IN`})})]})},p={render:()=>(0,s.jsxs)(`div`,{className:`flex gap-8 w-[800px]`,children:[(0,s.jsxs)(`div`,{className:`flex flex-col gap-8 flex-1`,children:[(0,s.jsx)(`h4`,{className:`text-sm font-bold text-neutral-400`,children:`Separate Border`}),(0,s.jsx)(l,{label:`Radius none`,radius:`none`,defaultCountry:`IN`,variant:`bordered`}),(0,s.jsx)(l,{label:`Radius sm`,radius:`sm`,defaultCountry:`IN`,variant:`bordered`}),(0,s.jsx)(l,{label:`Radius md`,radius:`md`,defaultCountry:`IN`,variant:`bordered`}),(0,s.jsx)(l,{label:`Radius lg`,radius:`lg`,defaultCountry:`IN`,variant:`bordered`}),(0,s.jsx)(l,{label:`Radius full`,radius:`full`,defaultCountry:`IN`,variant:`bordered`})]}),(0,s.jsxs)(`div`,{className:`flex flex-col gap-8 flex-1`,children:[(0,s.jsx)(`h4`,{className:`text-sm font-bold text-neutral-400`,children:`Single Border`}),(0,s.jsx)(l,{label:`Radius none`,radius:`none`,defaultCountry:`IN`,variant:`bordered`}),(0,s.jsx)(l,{label:`Radius sm`,radius:`sm`,defaultCountry:`IN`,variant:`bordered`}),(0,s.jsx)(l,{label:`Radius md`,radius:`md`,defaultCountry:`IN`,variant:`bordered`}),(0,s.jsx)(l,{label:`Radius lg`,radius:`lg`,defaultCountry:`IN`,variant:`bordered`}),(0,s.jsx)(l,{label:`Radius full`,radius:`full`,defaultCountry:`IN`,variant:`bordered`})]})]})},m={render:e=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-8 w-[600px]`,children:[(0,s.jsxs)(`div`,{className:`flex gap-4 items-end`,children:[(0,s.jsx)(l,{...e,labelPlacement:`inside`,label:`Inside (Floating)`,defaultCountry:`IN`}),(0,s.jsx)(l,{...e,labelPlacement:`inside`,label:`Inside (static with placeholder)`,placeholder:`Enter Phone Number`,defaultCountry:`IN`})]}),(0,s.jsxs)(`div`,{className:`flex gap-4 items-end`,children:[(0,s.jsx)(l,{...e,labelPlacement:`outside`,label:`Outside (Floating)`,defaultCountry:`IN`}),(0,s.jsx)(l,{...e,labelPlacement:`outside`,label:`Outside (static with placeholder)`,placeholder:`Enter Phone Number`,defaultCountry:`IN`})]}),(0,s.jsxs)(`div`,{className:`flex gap-4 items-end`,children:[(0,s.jsx)(l,{...e,labelPlacement:`outlined`,label:`Outlined`,defaultCountry:`IN`}),(0,s.jsx)(l,{...e,labelPlacement:`outlined`,label:`Outlined (static with placeholder)`,placeholder:`Enter Phone Number`,defaultCountry:`IN`})]}),(0,s.jsxs)(`div`,{className:`flex gap-4 items-end`,children:[(0,s.jsx)(l,{...e,labelPlacement:`outlined`,label:`Single Border`,defaultCountry:`IN`}),(0,s.jsx)(l,{...e,labelPlacement:`outlined`,label:`Single Border (static with placeholder)`,placeholder:`Enter Phone Number`,defaultCountry:`IN`})]}),(0,s.jsxs)(`div`,{className:`flex gap-4 items-end`,children:[(0,s.jsx)(l,{...e,labelPlacement:`outside-top`,label:`Outside Top`,placeholder:`Enter Phone Number`,defaultCountry:`IN`}),(0,s.jsx)(l,{...e,labelPlacement:`outside-left`,label:`Outside Left`,placeholder:`Enter Phone Number`,defaultCountry:`IN`})]})]}),args:{variant:`bordered`}},h={render:()=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-8 w-[600px]`,children:[(0,s.jsxs)(`div`,{className:`flex gap-4`,children:[(0,s.jsx)(l,{label:`Flat`,variant:`flat`,defaultCountry:`IN`}),(0,s.jsx)(l,{label:`Bordered`,variant:`bordered`,defaultCountry:`IN`})]}),(0,s.jsxs)(`div`,{className:`flex gap-4`,children:[(0,s.jsx)(l,{label:`Underlined`,variant:`underlined`,defaultCountry:`IN`}),(0,s.jsx)(l,{label:`Faded`,variant:`faded`,defaultCountry:`IN`})]})]})},g={render:e=>(0,s.jsx)(l,{...e}),args:{label:`Editable Country Code`,defaultCountry:`US`,countryCodeEditable:!0}},_={render:e=>(0,s.jsx)(l,{...e}),args:{label:`Flag Dropdown Disabled`,defaultCountry:`IN`,disabled:!0}},v={render:e=>(0,s.jsx)(l,{...e}),args:{label:`Search Enabled in Dropdown`,defaultCountry:`IN`,enableSearch:!0}},y={render:()=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-6 w-[320px]`,children:[(0,s.jsx)(l,{label:`India (Dynamic Placeholder)`,defaultCountry:`IN`}),(0,s.jsx)(l,{label:`United States (Dynamic Placeholder)`,defaultCountry:`US`}),(0,s.jsx)(l,{label:`France (Dynamic Placeholder)`,defaultCountry:`FR`})]})},b={render:()=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-6 w-[320px]`,children:[(0,s.jsx)(l,{label:`Dropdown Bottom`,dropdownPosition:`bottom`,defaultCountry:`IN`}),(0,s.jsx)(l,{label:`Dropdown Top`,dropdownPosition:`top`,defaultCountry:`IN`})]})},x={render:e=>(0,s.jsx)(l,{...e}),args:{label:`Phone Number`,defaultCountry:`IN`,value:`+919724582730`,disabled:!0}},S={render:e=>(0,s.jsx)(l,{...e}),args:{label:`Phone Number`,defaultCountry:`IN`,value:`123`,error:`Please enter a valid phone number`,touched:!0}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: (args: any) => <PhoneInputWithState {...args} />,
  args: {
    label: "Phone Number",
    defaultCountry: "IN",
    placeholder: "Enter Phone Number"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8 w-[600px]">
      <div className="flex gap-4">
        <PhoneInputWithState label="Flat" variant="flat" defaultCountry="IN" />
        <PhoneInputWithState label="Bordered" variant="bordered" defaultCountry="IN" />
      </div>
      <div className="flex gap-4">
        <PhoneInputWithState label="Underlined" variant="underlined" defaultCountry="IN" />
        <PhoneInputWithState label="Faded" variant="faded" defaultCountry="IN" />
      </div>
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8 w-[600px]">
      <div className="flex gap-4">
        <PhoneInputWithState label="Size sm" size="sm" defaultCountry="IN" />
        <PhoneInputWithState label="Size md" size="md" defaultCountry="IN" />
      </div>
      <div className="flex gap-4">
        <PhoneInputWithState label="Size lg" size="lg" defaultCountry="IN" />
      </div>
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-8 w-[800px]">
      {/* Left side: Full Border */}
      <div className="flex flex-col gap-8 flex-1">
        <h4 className="text-sm font-bold text-neutral-400">Separate Border</h4>
        <PhoneInputWithState label="Radius none" radius="none" defaultCountry="IN" variant="bordered" />
        <PhoneInputWithState label="Radius sm" radius="sm" defaultCountry="IN" variant="bordered" />
        <PhoneInputWithState label="Radius md" radius="md" defaultCountry="IN" variant="bordered" />
        <PhoneInputWithState label="Radius lg" radius="lg" defaultCountry="IN" variant="bordered" />
        <PhoneInputWithState label="Radius full" radius="full" defaultCountry="IN" variant="bordered" />
      </div>

      {/* Right side: Single Border */}
      <div className="flex flex-col gap-8 flex-1">
        <h4 className="text-sm font-bold text-neutral-400">Single Border</h4>
        <PhoneInputWithState label="Radius none" radius="none" defaultCountry="IN" variant="bordered" />
        <PhoneInputWithState label="Radius sm" radius="sm" defaultCountry="IN" variant="bordered" />
        <PhoneInputWithState label="Radius md" radius="md" defaultCountry="IN" variant="bordered" />
        <PhoneInputWithState label="Radius lg" radius="lg" defaultCountry="IN" variant="bordered" />
        <PhoneInputWithState label="Radius full" radius="full" defaultCountry="IN" variant="bordered" />
      </div>
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: any) => <div className="flex flex-col gap-8 w-[600px]">
      <div className="flex gap-4 items-end">
        <PhoneInputWithState {...args} labelPlacement="inside" label="Inside (Floating)" defaultCountry="IN" />
        <PhoneInputWithState {...args} labelPlacement="inside" label="Inside (static with placeholder)" placeholder="Enter Phone Number" defaultCountry="IN" />
      </div>
      <div className="flex gap-4 items-end">
        <PhoneInputWithState {...args} labelPlacement="outside" label="Outside (Floating)" defaultCountry="IN" />
        <PhoneInputWithState {...args} labelPlacement="outside" label="Outside (static with placeholder)" placeholder="Enter Phone Number" defaultCountry="IN" />
      </div>
      <div className="flex gap-4 items-end">
        <PhoneInputWithState {...args} labelPlacement="outlined" label="Outlined" defaultCountry="IN" />
        <PhoneInputWithState {...args} labelPlacement="outlined" label="Outlined (static with placeholder)" placeholder="Enter Phone Number" defaultCountry="IN" />
      </div>
      <div className="flex gap-4 items-end">
        <PhoneInputWithState {...args} labelPlacement="outlined" label="Single Border" defaultCountry="IN" />
        <PhoneInputWithState {...args} labelPlacement="outlined" label="Single Border (static with placeholder)" placeholder="Enter Phone Number" defaultCountry="IN" />
      </div>
      <div className="flex gap-4 items-end">
        <PhoneInputWithState {...args} labelPlacement="outside-top" label="Outside Top" placeholder="Enter Phone Number" defaultCountry="IN" />
        <PhoneInputWithState {...args} labelPlacement="outside-left" label="Outside Left" placeholder="Enter Phone Number" defaultCountry="IN" />
      </div>
    </div>,
  args: {
    variant: "bordered"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8 w-[600px]">
      <div className="flex gap-4">
        <PhoneInputWithState label="Flat" variant="flat" defaultCountry="IN" />
        <PhoneInputWithState label="Bordered" variant="bordered" defaultCountry="IN" />
      </div>
      <div className="flex gap-4">
        <PhoneInputWithState label="Underlined" variant="underlined" defaultCountry="IN" />
        <PhoneInputWithState label="Faded" variant="faded" defaultCountry="IN" />
      </div>
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: (args: any) => <PhoneInputWithState {...args} />,
  args: {
    label: "Editable Country Code",
    defaultCountry: "US",
    countryCodeEditable: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: (args: any) => <PhoneInputWithState {...args} />,
  args: {
    label: "Flag Dropdown Disabled",
    defaultCountry: "IN",
    disabled: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: (args: any) => <PhoneInputWithState {...args} />,
  args: {
    label: "Search Enabled in Dropdown",
    defaultCountry: "IN",
    enableSearch: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 w-[320px]">
      <PhoneInputWithState label="India (Dynamic Placeholder)" defaultCountry="IN" />
      <PhoneInputWithState label="United States (Dynamic Placeholder)" defaultCountry="US" />
      <PhoneInputWithState label="France (Dynamic Placeholder)" defaultCountry="FR" />
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 w-[320px]">
      <PhoneInputWithState label="Dropdown Bottom" dropdownPosition="bottom" defaultCountry="IN" />
      <PhoneInputWithState label="Dropdown Top" dropdownPosition="top" defaultCountry="IN" />
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: (args: any) => <PhoneInputWithState {...args} />,
  args: {
    label: "Phone Number",
    defaultCountry: "IN",
    value: "+919724582730",
    disabled: true
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: (args: any) => <PhoneInputWithState {...args} />,
  args: {
    label: "Phone Number",
    defaultCountry: "IN",
    value: "123",
    error: "Please enter a valid phone number",
    touched: true
  }
}`,...S.parameters?.docs?.source}}},C=[`Default`,`Variants`,`Sizes`,`Radiuses`,`LabelPlacements`,`SingleBorderVariants`,`CountryCodeEditable`,`DisableDropdownOnly`,`WithDropdownSearch`,`DynamicPlaceholder`,`DropdownPosition`,`Disabled`,`ErrorState`]}))();export{g as CountryCodeEditable,u as Default,_ as DisableDropdownOnly,x as Disabled,b as DropdownPosition,y as DynamicPlaceholder,S as ErrorState,m as LabelPlacements,p as Radiuses,h as SingleBorderVariants,f as Sizes,d as Variants,v as WithDropdownSearch,C as __namedExportsOrder,c as default};