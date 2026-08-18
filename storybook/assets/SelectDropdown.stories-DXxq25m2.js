import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-DDzTVtu_.js";import{t as r}from"./iframe-sOyJkj26.js";import{j as i,t as a}from"./ui-DraYKXvF.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;e((()=>{o=t(n(),1),a(),s=r(),c={title:`Components/SelectDropdown`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`flat`,`bordered`,`underlined`,`faded`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},radius:{control:`select`,options:[`none`,`sm`,`md`,`lg`,`full`]},color:{control:`select`,options:[`default`,`primary`,`secondary`,`success`,`warning`,`danger`]},labelPlacement:{control:`select`,options:[`inside`,`outside`,`outside-left`,`outside-top`,`outlined`]},isMulti:{control:`boolean`},isClearable:{control:`boolean`},isDisabled:{control:`boolean`},isSearchable:{control:`boolean`},showCheckbox:{control:`boolean`},isLoading:{control:`boolean`},options:{control:!1}}},l=e=>{let[t,n]=(0,o.useState)(e.isMulti?[]:``),r={name:e.name||`select`,value:t,onChange:()=>{},onBlur:()=>{}},a={setFieldValue:(t,r)=>{console.log(`🚀 ~ SelectDropdownWithState ~ name:`,t),n(r),e.onChange?.(r)},setFieldTouched:()=>{},touched:{},errors:{}};return(0,s.jsx)(`div`,{className:`w-[300px]`,children:(0,s.jsx)(i,{...e,field:r,form:a})})},u={render:()=>(0,s.jsx)(l,{label:`Select Fruit`,options:[{label:`Apple`,value:`apple`},{label:`Banana`,value:`banana`},{label:`Cherry`,value:`cherry`},{label:`Dragonfruit`,value:`dragonfruit`},{label:`Elderberry`,value:`elderberry`}],placeholder:`Choose a fruit...`})},d={render:()=>(0,s.jsx)(l,{label:`Select Fruits`,options:[{label:`Apple`,value:`apple`},{label:`Banana`,value:`banana`},{label:`Cherry`,value:`cherry`},{label:`Dragonfruit`,value:`dragonfruit`},{label:`Elderberry`,value:`elderberry`}],isMulti:!0,placeholder:`Choose fruits...`})},f={render:()=>(0,s.jsx)(l,{label:`Select Fruits`,options:[{label:`Apple`,value:`apple`},{label:`Banana`,value:`banana`},{label:`Cherry`,value:`cherry`},{label:`Dragonfruit`,value:`dragonfruit`},{label:`Elderberry`,value:`elderberry`}],isMulti:!0,showCheckbox:!0,placeholder:`Choose fruits...`})},p={render:()=>{let e=[{label:`Apple`,value:`apple`},{label:`Banana`,value:`banana`},{label:`Cherry`,value:`cherry`},{label:`Dragonfruit`,value:`dragonfruit`},{label:`Elderberry`,value:`elderberry`}];return(0,s.jsxs)(`div`,{className:`flex gap-4 items-end w-[800px]`,children:[(0,s.jsx)(l,{options:e,size:`sm`,label:`Small`,placeholder:`Choose fruit...`}),(0,s.jsx)(l,{options:e,size:`md`,label:`Medium`,placeholder:`Choose fruit...`}),(0,s.jsx)(l,{options:e,size:`lg`,label:`Large`,placeholder:`Choose fruit...`})]})}},m={render:()=>{let e=[{label:`Apple`,value:`apple`},{label:`Banana`,value:`banana`},{label:`Cherry`,value:`cherry`},{label:`Dragonfruit`,value:`dragonfruit`},{label:`Elderberry`,value:`elderberry`}];return(0,s.jsxs)(`div`,{className:`flex gap-4 items-end w-[850px]`,children:[(0,s.jsx)(l,{options:e,variant:`bordered`,radius:`none`,label:`Radius None`,placeholder:`Choose fruit...`}),(0,s.jsx)(l,{options:e,variant:`bordered`,radius:`sm`,label:`Radius Small`,placeholder:`Choose fruit...`}),(0,s.jsx)(l,{options:e,variant:`bordered`,radius:`md`,label:`Radius Medium`,placeholder:`Choose fruit...`}),(0,s.jsx)(l,{options:e,variant:`bordered`,radius:`lg`,label:`Radius Large`,placeholder:`Choose fruit...`}),(0,s.jsx)(l,{options:e,variant:`bordered`,radius:`full`,label:`Radius Full`,placeholder:`Choose fruit...`})]})}},h={render:()=>{let e=[{label:`Apple`,value:`apple`},{label:`Banana`,value:`banana`},{label:`Cherry`,value:`cherry`},{label:`Dragonfruit`,value:`dragonfruit`},{label:`Elderberry`,value:`elderberry`}];return(0,s.jsxs)(`div`,{className:`flex flex-col gap-8 w-[600px]`,children:[(0,s.jsxs)(`div`,{className:`flex gap-4`,children:[(0,s.jsx)(l,{options:e,variant:`flat`,label:`Flat`,labelPlacement:`outside`}),(0,s.jsx)(l,{options:e,variant:`bordered`,label:`Bordered`,labelPlacement:`outside`})]}),(0,s.jsxs)(`div`,{className:`flex gap-4`,children:[(0,s.jsx)(l,{options:e,variant:`underlined`,label:`Underlined`,labelPlacement:`outside`}),(0,s.jsx)(l,{options:e,variant:`faded`,label:`Faded`,labelPlacement:`outside`})]})]})}},g={render:()=>{let e=[{label:`Apple`,value:`apple`},{label:`Banana`,value:`banana`},{label:`Cherry`,value:`cherry`},{label:`Dragonfruit`,value:`dragonfruit`},{label:`Elderberry`,value:`elderberry`}];return(0,s.jsxs)(`div`,{className:`flex flex-col gap-8 w-[600px]`,children:[(0,s.jsxs)(`div`,{className:`flex gap-4`,children:[(0,s.jsx)(l,{options:e,isMulti:!0,color:`default`,label:`Default`,labelPlacement:`outside`}),(0,s.jsx)(l,{options:e,isMulti:!0,color:`primary`,label:`Primary`,labelPlacement:`outside`})]}),(0,s.jsxs)(`div`,{className:`flex gap-4`,children:[(0,s.jsx)(l,{options:e,isMulti:!0,color:`secondary`,label:`Secondary`,labelPlacement:`outside`}),(0,s.jsx)(l,{options:e,isMulti:!0,color:`success`,label:`Success`,labelPlacement:`outside`})]}),(0,s.jsxs)(`div`,{className:`flex gap-4`,children:[(0,s.jsx)(l,{options:e,isMulti:!0,color:`warning`,label:`Warning`,labelPlacement:`outside`}),(0,s.jsx)(l,{options:e,isMulti:!0,color:`danger`,label:`Danger`,labelPlacement:`outside`})]})]})}},_={render:()=>{let e=[{label:`Apple`,value:`apple`},{label:`Banana`,value:`banana`},{label:`Cherry`,value:`cherry`},{label:`Dragonfruit`,value:`dragonfruit`},{label:`Elderberry`,value:`elderberry`}];return(0,s.jsxs)(`div`,{className:`flex flex-col gap-8 w-[600px]`,children:[(0,s.jsxs)(`div`,{className:`flex gap-4 items-end`,children:[(0,s.jsx)(l,{options:e,variant:`bordered`,isClearable:!0,labelPlacement:`inside`,label:`Inside (Floating)`}),(0,s.jsx)(l,{options:e,variant:`bordered`,isClearable:!0,labelPlacement:`inside`,label:`Inside (Static with Placeholder)`,placeholder:`Choose fruit...`})]}),(0,s.jsxs)(`div`,{className:`flex gap-4 items-end`,children:[(0,s.jsx)(l,{options:e,variant:`bordered`,isClearable:!0,labelPlacement:`outside`,label:`Outside (Floating)`}),(0,s.jsx)(l,{options:e,variant:`bordered`,isClearable:!0,labelPlacement:`outside`,label:`Outside (Static with Placeholder)`,placeholder:`Choose fruit...`})]}),(0,s.jsxs)(`div`,{className:`flex gap-4 items-end`,children:[(0,s.jsx)(l,{options:e,variant:`bordered`,isClearable:!0,labelPlacement:`outlined`,label:`Outlined`}),(0,s.jsx)(l,{options:e,variant:`bordered`,isClearable:!0,labelPlacement:`outlined`,label:`Outlined (Static with Placeholder)`,placeholder:`Choose fruit...`})]}),(0,s.jsxs)(`div`,{className:`flex gap-4 items-end`,children:[(0,s.jsx)(l,{options:e,variant:`bordered`,labelPlacement:`outside-top`,label:`Outside Top (Static)`,placeholder:`Choose fruit...`}),(0,s.jsx)(l,{options:e,variant:`bordered`,labelPlacement:`outside-left`,label:`Outside Left (Static)`,placeholder:`Choose fruit...`})]})]})}},v={render:()=>(0,s.jsx)(l,{label:`Loading Select`,options:[{label:`Apple`,value:`apple`},{label:`Banana`,value:`banana`},{label:`Cherry`,value:`cherry`},{label:`Dragonfruit`,value:`dragonfruit`},{label:`Elderberry`,value:`elderberry`}],isLoading:!0})},y={render:()=>(0,s.jsx)(l,{label:`Disabled Select`,options:[{label:`Apple`,value:`apple`},{label:`Banana`,value:`banana`},{label:`Cherry`,value:`cherry`},{label:`Dragonfruit`,value:`dragonfruit`},{label:`Elderberry`,value:`elderberry`}],isDisabled:!0})},b={render:()=>(0,s.jsx)(l,{label:`Disabled Option Select`,options:[{label:`Apple`,value:`apple`},{label:`Banana`,value:`banana`,isDisabled:!0},{label:`Cherry`,value:`cherry`},{label:`Dragonfruit`,value:`dragonfruit`,isDisabled:!0},{label:`Elderberry`,value:`elderberry`}],placeholder:`Choose a fruit...`})},x={render:()=>{let[e,t]=(0,o.useState)(``);return(0,s.jsx)(`div`,{className:`w-[300px]`,children:(0,s.jsx)(i,{label:`Select Fruit`,options:[{label:`Apple`,value:`apple`},{label:`Banana`,value:`banana`},{label:`Cherry`,value:`cherry`},{label:`Dragonfruit`,value:`dragonfruit`},{label:`Elderberry`,value:`elderberry`}],field:{name:`select`,value:e},form:{setFieldValue:(e,n)=>t(n),setFieldTouched:()=>{},touched:{select:!0},errors:{select:`Please select an option`}}})})}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const options = [{
      label: "Apple",
      value: "apple"
    }, {
      label: "Banana",
      value: "banana"
    }, {
      label: "Cherry",
      value: "cherry"
    }, {
      label: "Dragonfruit",
      value: "dragonfruit"
    }, {
      label: "Elderberry",
      value: "elderberry"
    }];
    return <SelectDropdownWithState label="Select Fruit" options={options} placeholder="Choose a fruit..." />;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const options = [{
      label: "Apple",
      value: "apple"
    }, {
      label: "Banana",
      value: "banana"
    }, {
      label: "Cherry",
      value: "cherry"
    }, {
      label: "Dragonfruit",
      value: "dragonfruit"
    }, {
      label: "Elderberry",
      value: "elderberry"
    }];
    return <SelectDropdownWithState label="Select Fruits" options={options} isMulti placeholder="Choose fruits..." />;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const options = [{
      label: "Apple",
      value: "apple"
    }, {
      label: "Banana",
      value: "banana"
    }, {
      label: "Cherry",
      value: "cherry"
    }, {
      label: "Dragonfruit",
      value: "dragonfruit"
    }, {
      label: "Elderberry",
      value: "elderberry"
    }];
    return <SelectDropdownWithState label="Select Fruits" options={options} isMulti showCheckbox placeholder="Choose fruits..." />;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const options = [{
      label: "Apple",
      value: "apple"
    }, {
      label: "Banana",
      value: "banana"
    }, {
      label: "Cherry",
      value: "cherry"
    }, {
      label: "Dragonfruit",
      value: "dragonfruit"
    }, {
      label: "Elderberry",
      value: "elderberry"
    }];
    return <div className="flex gap-4 items-end w-[800px]">
        <SelectDropdownWithState options={options} size="sm" label="Small" placeholder="Choose fruit..." />
        <SelectDropdownWithState options={options} size="md" label="Medium" placeholder="Choose fruit..." />
        <SelectDropdownWithState options={options} size="lg" label="Large" placeholder="Choose fruit..." />
      </div>;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const options = [{
      label: "Apple",
      value: "apple"
    }, {
      label: "Banana",
      value: "banana"
    }, {
      label: "Cherry",
      value: "cherry"
    }, {
      label: "Dragonfruit",
      value: "dragonfruit"
    }, {
      label: "Elderberry",
      value: "elderberry"
    }];
    return <div className="flex gap-4 items-end w-[850px]">
        <SelectDropdownWithState options={options} variant="bordered" radius="none" label="Radius None" placeholder="Choose fruit..." />
        <SelectDropdownWithState options={options} variant="bordered" radius="sm" label="Radius Small" placeholder="Choose fruit..." />
        <SelectDropdownWithState options={options} variant="bordered" radius="md" label="Radius Medium" placeholder="Choose fruit..." />
        <SelectDropdownWithState options={options} variant="bordered" radius="lg" label="Radius Large" placeholder="Choose fruit..." />
        <SelectDropdownWithState options={options} variant="bordered" radius="full" label="Radius Full" placeholder="Choose fruit..." />
      </div>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const options = [{
      label: "Apple",
      value: "apple"
    }, {
      label: "Banana",
      value: "banana"
    }, {
      label: "Cherry",
      value: "cherry"
    }, {
      label: "Dragonfruit",
      value: "dragonfruit"
    }, {
      label: "Elderberry",
      value: "elderberry"
    }];
    return <div className="flex flex-col gap-8 w-[600px]">
        <div className="flex gap-4">
          <SelectDropdownWithState options={options} variant="flat" label="Flat" labelPlacement="outside" />
          <SelectDropdownWithState options={options} variant="bordered" label="Bordered" labelPlacement="outside" />
        </div>
        <div className="flex gap-4">
          <SelectDropdownWithState options={options} variant="underlined" label="Underlined" labelPlacement="outside" />
          <SelectDropdownWithState options={options} variant="faded" label="Faded" labelPlacement="outside" />
        </div>
      </div>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const options = [{
      label: "Apple",
      value: "apple"
    }, {
      label: "Banana",
      value: "banana"
    }, {
      label: "Cherry",
      value: "cherry"
    }, {
      label: "Dragonfruit",
      value: "dragonfruit"
    }, {
      label: "Elderberry",
      value: "elderberry"
    }];
    return <div className="flex flex-col gap-8 w-[600px]">
        <div className="flex gap-4">
          <SelectDropdownWithState options={options} isMulti color="default" label="Default" labelPlacement="outside" />
          <SelectDropdownWithState options={options} isMulti color="primary" label="Primary" labelPlacement="outside" />
        </div>
        <div className="flex gap-4">
          <SelectDropdownWithState options={options} isMulti color="secondary" label="Secondary" labelPlacement="outside" />
          <SelectDropdownWithState options={options} isMulti color="success" label="Success" labelPlacement="outside" />
        </div>
        <div className="flex gap-4">
          <SelectDropdownWithState options={options} isMulti color="warning" label="Warning" labelPlacement="outside" />
          <SelectDropdownWithState options={options} isMulti color="danger" label="Danger" labelPlacement="outside" />
        </div>
      </div>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const options = [{
      label: "Apple",
      value: "apple"
    }, {
      label: "Banana",
      value: "banana"
    }, {
      label: "Cherry",
      value: "cherry"
    }, {
      label: "Dragonfruit",
      value: "dragonfruit"
    }, {
      label: "Elderberry",
      value: "elderberry"
    }];
    return <div className="flex flex-col gap-8 w-[600px]">
        <div className="flex gap-4 items-end">
          <SelectDropdownWithState options={options} variant="bordered" isClearable labelPlacement="inside" label="Inside (Floating)" />
          <SelectDropdownWithState options={options} variant="bordered" isClearable labelPlacement="inside" label="Inside (Static with Placeholder)" placeholder="Choose fruit..." />
        </div>
        <div className="flex gap-4 items-end">
          <SelectDropdownWithState options={options} variant="bordered" isClearable labelPlacement="outside" label="Outside (Floating)" />
          <SelectDropdownWithState options={options} variant="bordered" isClearable labelPlacement="outside" label="Outside (Static with Placeholder)" placeholder="Choose fruit..." />
        </div>
        <div className="flex gap-4 items-end">
          <SelectDropdownWithState options={options} variant="bordered" isClearable labelPlacement="outlined" label="Outlined" />
          <SelectDropdownWithState options={options} variant="bordered" isClearable labelPlacement="outlined" label="Outlined (Static with Placeholder)" placeholder="Choose fruit..." />
        </div>
        <div className="flex gap-4 items-end">
          <SelectDropdownWithState options={options} variant="bordered" labelPlacement="outside-top" label="Outside Top (Static)" placeholder="Choose fruit..." />
          <SelectDropdownWithState options={options} variant="bordered" labelPlacement="outside-left" label="Outside Left (Static)" placeholder="Choose fruit..." />
        </div>
      </div>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const options = [{
      label: "Apple",
      value: "apple"
    }, {
      label: "Banana",
      value: "banana"
    }, {
      label: "Cherry",
      value: "cherry"
    }, {
      label: "Dragonfruit",
      value: "dragonfruit"
    }, {
      label: "Elderberry",
      value: "elderberry"
    }];
    return <SelectDropdownWithState label="Loading Select" options={options} isLoading />;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const options = [{
      label: "Apple",
      value: "apple"
    }, {
      label: "Banana",
      value: "banana"
    }, {
      label: "Cherry",
      value: "cherry"
    }, {
      label: "Dragonfruit",
      value: "dragonfruit"
    }, {
      label: "Elderberry",
      value: "elderberry"
    }];
    return <SelectDropdownWithState label="Disabled Select" options={options} isDisabled />;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const options = [{
      label: "Apple",
      value: "apple"
    }, {
      label: "Banana",
      value: "banana",
      isDisabled: true
    }, {
      label: "Cherry",
      value: "cherry"
    }, {
      label: "Dragonfruit",
      value: "dragonfruit",
      isDisabled: true
    }, {
      label: "Elderberry",
      value: "elderberry"
    }];
    return <SelectDropdownWithState label="Disabled Option Select" options={options} placeholder="Choose a fruit..." />;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    const options = [{
      label: "Apple",
      value: "apple"
    }, {
      label: "Banana",
      value: "banana"
    }, {
      label: "Cherry",
      value: "cherry"
    }, {
      label: "Dragonfruit",
      value: "dragonfruit"
    }, {
      label: "Elderberry",
      value: "elderberry"
    }];
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
        <SelectDropdown label="Select Fruit" options={options} field={field as any} form={form as any} />
      </div>;
  }
}`,...x.parameters?.docs?.source}}},S=[`Default`,`MultiSelect`,`WithCheckboxes`,`Sizes`,`Radiuses`,`Variants`,`Colors`,`LabelPlacements`,`Loading`,`Disabled`,`DisabledOption`,`ErrorState`]}))();export{g as Colors,u as Default,y as Disabled,b as DisabledOption,x as ErrorState,_ as LabelPlacements,v as Loading,d as MultiSelect,m as Radiuses,p as Sizes,h as Variants,f as WithCheckboxes,S as __namedExportsOrder,c as default};