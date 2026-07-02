import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-DDzTVtu_.js";import{t as r}from"./iframe-BSsvUtib.js";import{T as i,t as a}from"./ui-C8puiJZM.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{o=t(n(),1),a(),s=r(),c={title:`Components/SelectDropdown`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`flat`,`bordered`,`underlined`,`faded`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},radius:{control:`select`,options:[`none`,`sm`,`md`,`lg`,`full`]},color:{control:`select`,options:[`default`,`primary`,`secondary`,`success`,`warning`,`danger`]},labelPlacement:{control:`select`,options:[`inside`,`outside`,`outside-left`,`outside-top`,`outlined`]},isMulti:{control:`boolean`},isClearable:{control:`boolean`},isDisabled:{control:`boolean`},isSearchable:{control:`boolean`},showCheckbox:{control:`boolean`},isLoading:{control:`boolean`},options:{control:!1}}},l=[{label:`Apple`,value:`apple`},{label:`Banana`,value:`banana`},{label:`Cherry`,value:`cherry`},{label:`Dragonfruit`,value:`dragonfruit`},{label:`Elderberry`,value:`elderberry`}],u=e=>{let[t,n]=(0,o.useState)(e.isMulti?[]:``),r={name:e.name||`select`,value:t,onChange:()=>{},onBlur:()=>{}},a={setFieldValue:(t,r)=>{console.log(`🚀 ~ SelectWithState ~ name:`,t),n(r),e.onChange?.(r)},setFieldTouched:()=>{},touched:{},errors:{}};return(0,s.jsx)(`div`,{className:`w-[300px]`,children:(0,s.jsx)(i,{...e,field:r,form:a})})},d={render:e=>(0,s.jsx)(u,{...e}),args:{label:`Select Fruit`,options:l,placeholder:`Choose a fruit...`}},f={render:e=>(0,s.jsx)(u,{...e}),args:{label:`Select Fruits`,options:l,isMulti:!0,placeholder:`Choose fruits...`}},p={render:e=>(0,s.jsx)(u,{...e}),args:{label:`Select Fruits`,options:l,isMulti:!0,showCheckbox:!0,placeholder:`Choose fruits...`}},m={render:e=>(0,s.jsxs)(`div`,{className:`flex gap-4 items-end w-[800px]`,children:[(0,s.jsx)(u,{...e,size:`sm`,label:`Small`,placeholder:`Choose fruit...`}),(0,s.jsx)(u,{...e,size:`md`,label:`Medium`,placeholder:`Choose fruit...`}),(0,s.jsx)(u,{...e,size:`lg`,label:`Large`,placeholder:`Choose fruit...`})]}),args:{options:l}},h={render:e=>(0,s.jsxs)(`div`,{className:`flex gap-4 items-end w-[850px]`,children:[(0,s.jsx)(u,{...e,radius:`none`,label:`Radius None`,placeholder:`Choose fruit...`}),(0,s.jsx)(u,{...e,radius:`sm`,label:`Radius Small`,placeholder:`Choose fruit...`}),(0,s.jsx)(u,{...e,radius:`md`,label:`Radius Medium`,placeholder:`Choose fruit...`}),(0,s.jsx)(u,{...e,radius:`lg`,label:`Radius Large`,placeholder:`Choose fruit...`}),(0,s.jsx)(u,{...e,radius:`full`,label:`Radius Full`,placeholder:`Choose fruit...`})]}),args:{options:l,variant:`bordered`}},g={render:e=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-8 w-[600px]`,children:[(0,s.jsxs)(`div`,{className:`flex gap-4`,children:[(0,s.jsx)(u,{...e,variant:`flat`,label:`Flat`,labelPlacement:`outside`}),(0,s.jsx)(u,{...e,variant:`bordered`,label:`Bordered`,labelPlacement:`outside`})]}),(0,s.jsxs)(`div`,{className:`flex gap-4`,children:[(0,s.jsx)(u,{...e,variant:`underlined`,label:`Underlined`,labelPlacement:`outside`}),(0,s.jsx)(u,{...e,variant:`faded`,label:`Faded`,labelPlacement:`outside`})]})]}),args:{options:l}},_={render:e=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-8 w-[600px]`,children:[(0,s.jsxs)(`div`,{className:`flex gap-4`,children:[(0,s.jsx)(u,{...e,color:`default`,label:`Default`,labelPlacement:`outside`}),(0,s.jsx)(u,{...e,color:`primary`,label:`Primary`,labelPlacement:`outside`})]}),(0,s.jsxs)(`div`,{className:`flex gap-4`,children:[(0,s.jsx)(u,{...e,color:`secondary`,label:`Secondary`,labelPlacement:`outside`}),(0,s.jsx)(u,{...e,color:`success`,label:`Success`,labelPlacement:`outside`})]}),(0,s.jsxs)(`div`,{className:`flex gap-4`,children:[(0,s.jsx)(u,{...e,color:`warning`,label:`Warning`,labelPlacement:`outside`}),(0,s.jsx)(u,{...e,color:`danger`,label:`Danger`,labelPlacement:`outside`})]})]}),args:{options:l,isMulti:!0}},v={render:e=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-8 w-[600px]`,children:[(0,s.jsxs)(`div`,{className:`flex gap-4 items-end`,children:[(0,s.jsx)(u,{...e,isClearable:!0,labelPlacement:`inside`,label:`Inside (Floating)`}),(0,s.jsx)(u,{...e,isClearable:!0,labelPlacement:`inside`,label:`Inside (Static with Placeholder)`,placeholder:`Choose fruit...`})]}),(0,s.jsxs)(`div`,{className:`flex gap-4 items-end`,children:[(0,s.jsx)(u,{...e,isClearable:!0,labelPlacement:`outside`,label:`Outside (Floating)`}),(0,s.jsx)(u,{...e,isClearable:!0,labelPlacement:`outside`,label:`Outside (Static with Placeholder)`,placeholder:`Choose fruit...`})]}),(0,s.jsxs)(`div`,{className:`flex gap-4 items-end`,children:[(0,s.jsx)(u,{...e,isClearable:!0,labelPlacement:`outlined`,label:`Outlined`}),(0,s.jsx)(u,{...e,isClearable:!0,labelPlacement:`outlined`,label:`Outlined (Static with Placeholder)`,placeholder:`Choose fruit...`})]}),(0,s.jsxs)(`div`,{className:`flex gap-4 items-end`,children:[(0,s.jsx)(u,{...e,labelPlacement:`outside-top`,label:`Outside Top (Static)`,placeholder:`Choose fruit...`}),(0,s.jsx)(u,{...e,labelPlacement:`outside-left`,label:`Outside Left (Static)`,placeholder:`Choose fruit...`})]})]}),args:{options:l,variant:`bordered`}},y={render:e=>(0,s.jsx)(u,{...e}),args:{label:`Loading Select`,options:l,isLoading:!0}},b={render:e=>(0,s.jsx)(u,{...e}),args:{label:`Disabled Select`,options:l,isDisabled:!0}},x={render:e=>(0,s.jsx)(u,{...e}),args:{label:`Disabled Option Select`,options:l.map((e,t)=>({...e,isDisabled:t===1||t===3})),placeholder:`Choose a fruit...`}},S={render:e=>{let[t,n]=(0,o.useState)(``),r={name:`select`,value:t},a={setFieldValue:(e,t)=>n(t),setFieldTouched:()=>{},touched:{select:!0},errors:{select:`Please select an option`}};return(0,s.jsx)(`div`,{className:`w-[300px]`,children:(0,s.jsx)(i,{...e,field:r,form:a})})},args:{label:`Select Fruit`,options:l}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <SelectWithState {...args} />,
  args: {
    label: "Select Fruit",
    options,
    placeholder: "Choose a fruit..."
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <SelectWithState {...args} />,
  args: {
    label: "Select Fruits",
    options,
    isMulti: true,
    placeholder: "Choose fruits..."
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <SelectWithState {...args} />,
  args: {
    label: "Select Fruits",
    options,
    isMulti: true,
    showCheckbox: true,
    placeholder: "Choose fruits..."
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4 items-end w-[800px]">
      <SelectWithState {...args} size="sm" label="Small" placeholder="Choose fruit..." />
      <SelectWithState {...args} size="md" label="Medium" placeholder="Choose fruit..." />
      <SelectWithState {...args} size="lg" label="Large" placeholder="Choose fruit..." />
    </div>,
  args: {
    options
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4 items-end w-[850px]">
      <SelectWithState {...args} radius="none" label="Radius None" placeholder="Choose fruit..." />
      <SelectWithState {...args} radius="sm" label="Radius Small" placeholder="Choose fruit..." />
      <SelectWithState {...args} radius="md" label="Radius Medium" placeholder="Choose fruit..." />
      <SelectWithState {...args} radius="lg" label="Radius Large" placeholder="Choose fruit..." />
      <SelectWithState {...args} radius="full" label="Radius Full" placeholder="Choose fruit..." />
    </div>,
  args: {
    options,
    variant: "bordered"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-8 w-[600px]">
      <div className="flex gap-4">
        <SelectWithState {...args} variant="flat" label="Flat" labelPlacement="outside" />
        <SelectWithState {...args} variant="bordered" label="Bordered" labelPlacement="outside" />
      </div>
      <div className="flex gap-4">
        <SelectWithState {...args} variant="underlined" label="Underlined" labelPlacement="outside" />
        <SelectWithState {...args} variant="faded" label="Faded" labelPlacement="outside" />
      </div>
    </div>,
  args: {
    options
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-8 w-[600px]">
      <div className="flex gap-4">
        <SelectWithState {...args} color="default" label="Default" labelPlacement="outside" />
        <SelectWithState {...args} color="primary" label="Primary" labelPlacement="outside" />
      </div>
      <div className="flex gap-4">
        <SelectWithState {...args} color="secondary" label="Secondary" labelPlacement="outside" />
        <SelectWithState {...args} color="success" label="Success" labelPlacement="outside" />
      </div>
      <div className="flex gap-4">
        <SelectWithState {...args} color="warning" label="Warning" labelPlacement="outside" />
        <SelectWithState {...args} color="danger" label="Danger" labelPlacement="outside" />
      </div>
    </div>,
  args: {
    options,
    isMulti: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-8 w-[600px]">
      <div className="flex gap-4 items-end">
        <SelectWithState {...args} isClearable labelPlacement="inside" label="Inside (Floating)" />
        <SelectWithState {...args} isClearable labelPlacement="inside" label="Inside (Static with Placeholder)" placeholder="Choose fruit..." />
      </div>
      <div className="flex gap-4 items-end">
        <SelectWithState {...args} isClearable labelPlacement="outside" label="Outside (Floating)" />
        <SelectWithState {...args} isClearable labelPlacement="outside" label="Outside (Static with Placeholder)" placeholder="Choose fruit..." />
      </div>
      <div className="flex gap-4 items-end">
        <SelectWithState {...args} isClearable labelPlacement="outlined" label="Outlined" />
        <SelectWithState {...args} isClearable labelPlacement="outlined" label="Outlined (Static with Placeholder)" placeholder="Choose fruit..." />
      </div>
      <div className="flex gap-4 items-end">
        <SelectWithState {...args} labelPlacement="outside-top" label="Outside Top (Static)" placeholder="Choose fruit..." />
        <SelectWithState {...args} labelPlacement="outside-left" label="Outside Left (Static)" placeholder="Choose fruit..." />
      </div>
    </div>,
  args: {
    options,
    variant: "bordered"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <SelectWithState {...args} />,
  args: {
    label: "Loading Select",
    options,
    isLoading: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <SelectWithState {...args} />,
  args: {
    label: "Disabled Select",
    options,
    isDisabled: true
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <SelectWithState {...args} />,
  args: {
    label: "Disabled Option Select",
    options: options.map((opt, idx) => ({
      ...opt,
      isDisabled: idx === 1 || idx === 3
    })),
    placeholder: "Choose a fruit..."
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("");
    const field = {
      name: "select",
      value
    };
    const form = {
      setFieldValue: (_: string, val: any) => setValue(val),
      setFieldTouched: () => {},
      touched: {
        select: true
      },
      errors: {
        select: "Please select an option"
      }
    };
    return <div className="w-[300px]">
        <SelectDropdown {...args} field={field as any} form={form as any} />
      </div>;
  },
  args: {
    label: "Select Fruit",
    options
  }
}`,...S.parameters?.docs?.source}}},C=[`Default`,`MultiSelect`,`WithCheckboxes`,`Sizes`,`Radiuses`,`Variants`,`Colors`,`LabelPlacements`,`Loading`,`Disabled`,`DisabledOption`,`ErrorState`]}))();export{_ as Colors,d as Default,b as Disabled,x as DisabledOption,S as ErrorState,v as LabelPlacements,y as Loading,f as MultiSelect,h as Radiuses,m as Sizes,g as Variants,p as WithCheckboxes,C as __namedExportsOrder,c as default};