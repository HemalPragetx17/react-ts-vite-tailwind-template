import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-DDzTVtu_.js";import{t as r}from"./iframe-BzRfQavU.js";import{D as i,t as a}from"./ui-sUaI0YKE.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{o=t(n(),1),a(),s=r(),c={title:`Components/PhoneNumberInput`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`flat`,`bordered`,`underlined`,`faded`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},radius:{control:`select`,options:[`none`,`sm`,`md`,`lg`,`full`]},labelPlacement:{control:`select`,options:[`inside`,`outside`,`outside-left`,`outside-top`,`outlined`]},dropdownPosition:{control:`select`,options:[`top`,`bottom`]},countryCodeEditable:{control:`boolean`},disabled:{control:`boolean`}}},l=e=>{let[t,n]=(0,o.useState)(e.value??``);return(0,s.jsx)(`div`,{className:`w-[320px]`,children:(0,s.jsx)(i,{...e,value:t,onChange:t=>{n(t),e.onChange?.(t)}})})},u={render:e=>(0,s.jsx)(l,{...e}),args:{label:`Phone Number`,country:`in`,placeholder:`Enter Phone Number`}},d={render:()=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-8 w-[600px]`,children:[(0,s.jsxs)(`div`,{className:`flex gap-4`,children:[(0,s.jsx)(l,{label:`Flat`,variant:`flat`,country:`in`}),(0,s.jsx)(l,{label:`Bordered`,variant:`bordered`,country:`in`})]}),(0,s.jsxs)(`div`,{className:`flex gap-4`,children:[(0,s.jsx)(l,{label:`Underlined`,variant:`underlined`,country:`in`}),(0,s.jsx)(l,{label:`Faded`,variant:`faded`,country:`in`})]})]})},f={render:()=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-8 w-[600px]`,children:[(0,s.jsxs)(`div`,{className:`flex gap-4`,children:[(0,s.jsx)(l,{label:`Size sm`,size:`sm`,country:`in`}),(0,s.jsx)(l,{label:`Size md`,size:`md`,country:`in`})]}),(0,s.jsx)(`div`,{className:`flex gap-4`,children:(0,s.jsx)(l,{label:`Size lg`,size:`lg`,country:`in`})})]})},p={render:()=>(0,s.jsxs)(`div`,{className:`flex gap-8 w-[800px]`,children:[(0,s.jsxs)(`div`,{className:`flex flex-col gap-8 flex-1`,children:[(0,s.jsx)(`h4`,{className:`text-sm font-bold text-neutral-400`,children:`Separate Border`}),(0,s.jsx)(l,{label:`Radius none`,radius:`none`,country:`in`,variant:`bordered`,singleBorder:!1}),(0,s.jsx)(l,{label:`Radius sm`,radius:`sm`,country:`in`,variant:`bordered`,singleBorder:!1}),(0,s.jsx)(l,{label:`Radius md`,radius:`md`,country:`in`,variant:`bordered`,singleBorder:!1}),(0,s.jsx)(l,{label:`Radius lg`,radius:`lg`,country:`in`,variant:`bordered`,singleBorder:!1}),(0,s.jsx)(l,{label:`Radius full`,radius:`full`,country:`in`,variant:`bordered`,singleBorder:!1})]}),(0,s.jsxs)(`div`,{className:`flex flex-col gap-8 flex-1`,children:[(0,s.jsx)(`h4`,{className:`text-sm font-bold text-neutral-400`,children:`Single Border`}),(0,s.jsx)(l,{label:`Radius none`,radius:`none`,country:`in`,variant:`bordered`,singleBorder:!0}),(0,s.jsx)(l,{label:`Radius sm`,radius:`sm`,country:`in`,variant:`bordered`,singleBorder:!0}),(0,s.jsx)(l,{label:`Radius md`,radius:`md`,country:`in`,variant:`bordered`,singleBorder:!0}),(0,s.jsx)(l,{label:`Radius lg`,radius:`lg`,country:`in`,variant:`bordered`,singleBorder:!0}),(0,s.jsx)(l,{label:`Radius full`,radius:`full`,country:`in`,variant:`bordered`,singleBorder:!0})]})]})},m={render:e=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-8 w-[600px]`,children:[(0,s.jsxs)(`div`,{className:`flex gap-4 items-end`,children:[(0,s.jsx)(l,{...e,labelPlacement:`inside`,label:`Inside (Floating)`,country:`in`}),(0,s.jsx)(l,{...e,labelPlacement:`inside`,label:`Inside (static with placeholder)`,placeholder:`Enter Phone Number`,country:`in`})]}),(0,s.jsxs)(`div`,{className:`flex gap-4 items-end`,children:[(0,s.jsx)(l,{...e,labelPlacement:`outside`,label:`Outside (Floating)`,country:`in`}),(0,s.jsx)(l,{...e,labelPlacement:`outside`,label:`Outside (static with placeholder)`,placeholder:`Enter Phone Number`,country:`in`})]}),(0,s.jsxs)(`div`,{className:`flex gap-4 items-end`,children:[(0,s.jsx)(l,{...e,labelPlacement:`outlined`,label:`Outlined`,country:`in`}),(0,s.jsx)(l,{...e,labelPlacement:`outlined`,label:`Outlined (static with placeholder)`,placeholder:`Enter Phone Number`,country:`in`})]}),(0,s.jsxs)(`div`,{className:`flex gap-4 items-end`,children:[(0,s.jsx)(l,{...e,singleBorder:!0,labelPlacement:`outlined`,label:`Single Border`,country:`in`}),(0,s.jsx)(l,{...e,singleBorder:!0,labelPlacement:`outlined`,label:`Single Border (static with placeholder)`,placeholder:`Enter Phone Number`,country:`in`})]}),(0,s.jsxs)(`div`,{className:`flex gap-4 items-end`,children:[(0,s.jsx)(l,{...e,labelPlacement:`outside-top`,label:`Outside Top`,placeholder:`Enter Phone Number`,country:`in`}),(0,s.jsx)(l,{...e,labelPlacement:`outside-left`,label:`Outside Left`,placeholder:`Enter Phone Number`,country:`in`})]})]}),args:{variant:`bordered`}},h={render:()=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-8 w-[600px]`,children:[(0,s.jsxs)(`div`,{className:`flex gap-4`,children:[(0,s.jsx)(l,{label:`Flat`,variant:`flat`,singleBorder:!0,country:`in`}),(0,s.jsx)(l,{label:`Bordered`,variant:`bordered`,singleBorder:!0,country:`in`})]}),(0,s.jsxs)(`div`,{className:`flex gap-4`,children:[(0,s.jsx)(l,{label:`Underlined`,variant:`underlined`,singleBorder:!0,country:`in`}),(0,s.jsx)(l,{label:`Faded`,variant:`faded`,singleBorder:!0,country:`in`})]})]})},g={render:e=>(0,s.jsx)(l,{...e}),args:{label:`Editable Country Code`,country:`us`,countryCodeEditable:!0}},_={render:e=>(0,s.jsx)(l,{...e}),args:{label:`Flag Dropdown Disabled`,country:`in`,disableDropdown:!0}},v={render:e=>(0,s.jsx)(l,{...e}),args:{label:`Search Enabled in Dropdown`,country:`in`,enableSearch:!0}},y={render:()=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-6 w-[320px]`,children:[(0,s.jsx)(l,{label:`Only US, CA, GB`,country:`us`,onlyCountries:[`us`,`ca`,`gb`]}),(0,s.jsx)(l,{label:`Preferred IN and US at top`,country:`in`,preferredCountries:[`in`,`us`]}),(0,s.jsx)(l,{label:`Exclude IN`,country:`us`,excludeCountries:[`in`]})]})},b={render:()=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-6 w-[320px]`,children:[(0,s.jsx)(l,{label:`India (Dynamic Placeholder)`,country:`in`}),(0,s.jsx)(l,{label:`United States (Dynamic Placeholder)`,country:`us`}),(0,s.jsx)(l,{label:`France (Dynamic Placeholder)`,country:`fr`})]})},x={render:()=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-6 w-[320px]`,children:[(0,s.jsx)(l,{label:`Dropdown Bottom`,dropdownPosition:`bottom`,country:`in`}),(0,s.jsx)(l,{label:`Dropdown Top`,dropdownPosition:`top`,country:`in`})]})},S={render:e=>(0,s.jsx)(l,{...e}),args:{label:`Phone Number`,country:`in`,value:`919724582730`,disabled:!0}},C={render:e=>(0,s.jsx)(l,{...e}),args:{label:`Phone Number`,country:`in`,value:`123`,error:`Please enter a valid phone number`,touched:!0}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <PhoneInputWithState {...args} />,
  args: {
    label: "Phone Number",
    country: "in",
    placeholder: "Enter Phone Number"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8 w-[600px]">
      <div className="flex gap-4">
        <PhoneInputWithState label="Flat" variant="flat" country="in" />
        <PhoneInputWithState label="Bordered" variant="bordered" country="in" />
      </div>
      <div className="flex gap-4">
        <PhoneInputWithState label="Underlined" variant="underlined" country="in" />
        <PhoneInputWithState label="Faded" variant="faded" country="in" />
      </div>
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8 w-[600px]">
      <div className="flex gap-4">
        <PhoneInputWithState label="Size sm" size="sm" country="in" />
        <PhoneInputWithState label="Size md" size="md" country="in" />
      </div>
      <div className="flex gap-4">
        <PhoneInputWithState label="Size lg" size="lg" country="in" />
      </div>
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-8 w-[800px]">
      {/* Left side: Full Border */}
      <div className="flex flex-col gap-8 flex-1">
        <h4 className="text-sm font-bold text-neutral-400">Separate Border</h4>
        <PhoneInputWithState label="Radius none" radius="none" country="in" variant="bordered" singleBorder={false} />
        <PhoneInputWithState label="Radius sm" radius="sm" country="in" variant="bordered" singleBorder={false} />
        <PhoneInputWithState label="Radius md" radius="md" country="in" variant="bordered" singleBorder={false} />
        <PhoneInputWithState label="Radius lg" radius="lg" country="in" variant="bordered" singleBorder={false} />
        <PhoneInputWithState label="Radius full" radius="full" country="in" variant="bordered" singleBorder={false} />
      </div>

      {/* Right side: Single Border */}
      <div className="flex flex-col gap-8 flex-1">
        <h4 className="text-sm font-bold text-neutral-400">Single Border</h4>
        <PhoneInputWithState label="Radius none" radius="none" country="in" variant="bordered" singleBorder={true} />
        <PhoneInputWithState label="Radius sm" radius="sm" country="in" variant="bordered" singleBorder={true} />
        <PhoneInputWithState label="Radius md" radius="md" country="in" variant="bordered" singleBorder={true} />
        <PhoneInputWithState label="Radius lg" radius="lg" country="in" variant="bordered" singleBorder={true} />
        <PhoneInputWithState label="Radius full" radius="full" country="in" variant="bordered" singleBorder={true} />
      </div>
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-8 w-[600px]">
      <div className="flex gap-4 items-end">
        <PhoneInputWithState {...args} labelPlacement="inside" label="Inside (Floating)" country="in" />
        <PhoneInputWithState {...args} labelPlacement="inside" label="Inside (static with placeholder)" placeholder="Enter Phone Number" country="in" />
      </div>
      <div className="flex gap-4 items-end">
        <PhoneInputWithState {...args} labelPlacement="outside" label="Outside (Floating)" country="in" />
        <PhoneInputWithState {...args} labelPlacement="outside" label="Outside (static with placeholder)" placeholder="Enter Phone Number" country="in" />
      </div>
      <div className="flex gap-4 items-end">
        <PhoneInputWithState {...args} labelPlacement="outlined" label="Outlined" country="in" />
        <PhoneInputWithState {...args} labelPlacement="outlined" label="Outlined (static with placeholder)" placeholder="Enter Phone Number" country="in" />
      </div>
      <div className="flex gap-4 items-end">
        <PhoneInputWithState {...args} singleBorder={true} labelPlacement="outlined" label="Single Border" country="in" />
        <PhoneInputWithState {...args} singleBorder={true} labelPlacement="outlined" label="Single Border (static with placeholder)" placeholder="Enter Phone Number" country="in" />
      </div>
      <div className="flex gap-4 items-end">
        <PhoneInputWithState {...args} labelPlacement="outside-top" label="Outside Top" placeholder="Enter Phone Number" country="in" />
        <PhoneInputWithState {...args} labelPlacement="outside-left" label="Outside Left" placeholder="Enter Phone Number" country="in" />
      </div>
    </div>,
  args: {
    variant: "bordered"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8 w-[600px]">
      <div className="flex gap-4">
        <PhoneInputWithState label="Flat" variant="flat" singleBorder={true} country="in" />
        <PhoneInputWithState label="Bordered" variant="bordered" singleBorder={true} country="in" />
      </div>
      <div className="flex gap-4">
        <PhoneInputWithState label="Underlined" variant="underlined" singleBorder={true} country="in" />
        <PhoneInputWithState label="Faded" variant="faded" singleBorder={true} country="in" />
      </div>
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <PhoneInputWithState {...args} />,
  args: {
    label: "Editable Country Code",
    country: "us",
    countryCodeEditable: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <PhoneInputWithState {...args} />,
  args: {
    label: "Flag Dropdown Disabled",
    country: "in",
    disableDropdown: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <PhoneInputWithState {...args} />,
  args: {
    label: "Search Enabled in Dropdown",
    country: "in",
    enableSearch: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 w-[320px]">
      <PhoneInputWithState label="Only US, CA, GB" country="us" onlyCountries={["us", "ca", "gb"]} />
      <PhoneInputWithState label="Preferred IN and US at top" country="in" preferredCountries={["in", "us"]} />
      <PhoneInputWithState label="Exclude IN" country="us" excludeCountries={["in"]} />
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 w-[320px]">
      <PhoneInputWithState label="India (Dynamic Placeholder)" country="in" />
      <PhoneInputWithState label="United States (Dynamic Placeholder)" country="us" />
      <PhoneInputWithState label="France (Dynamic Placeholder)" country="fr" />
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 w-[320px]">
      <PhoneInputWithState label="Dropdown Bottom" dropdownPosition="bottom" country="in" />
      <PhoneInputWithState label="Dropdown Top" dropdownPosition="top" country="in" />
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <PhoneInputWithState {...args} />,
  args: {
    label: "Phone Number",
    country: "in",
    value: "919724582730",
    disabled: true
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <PhoneInputWithState {...args} />,
  args: {
    label: "Phone Number",
    country: "in",
    value: "123",
    error: "Please enter a valid phone number",
    touched: true
  }
}`,...C.parameters?.docs?.source}}},w=[`Default`,`Variants`,`Sizes`,`Radiuses`,`LabelPlacements`,`SingleBorderVariants`,`CountryCodeEditable`,`DisableDropdownOnly`,`WithDropdownSearch`,`CustomCountryList`,`DynamicPlaceholder`,`DropdownPosition`,`Disabled`,`ErrorState`]}))();export{g as CountryCodeEditable,y as CustomCountryList,u as Default,_ as DisableDropdownOnly,S as Disabled,x as DropdownPosition,b as DynamicPlaceholder,C as ErrorState,m as LabelPlacements,p as Radiuses,h as SingleBorderVariants,f as Sizes,d as Variants,v as WithDropdownSearch,w as __namedExportsOrder,c as default};