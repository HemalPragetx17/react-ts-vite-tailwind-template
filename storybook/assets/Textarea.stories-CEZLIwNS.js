import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-DDzTVtu_.js";import{t as r}from"./iframe-sOyJkj26.js";import{k as i,t as a}from"./ui-DraYKXvF.js";var o,s,c,l,u,d,f,p,m,h,g,_,v;e((()=>{o=t(n(),1),a(),s=r(),c={title:`Components/Textarea`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`flat`,`bordered`,`underlined`,`faded`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},radius:{control:`select`,options:[`none`,`sm`,`md`,`lg`,`full`]},labelPlacement:{control:`select`,options:[`inside`,`outside`,`outside-left`,`outside-top`,`outlined`]},isClearable:{control:`boolean`},disabled:{control:`boolean`},disableAutosize:{control:`boolean`}}},l={render:()=>{let[e,t]=(0,o.useState)(``);return(0,s.jsx)(`div`,{className:`w-[600px]`,children:(0,s.jsx)(i,{label:`Description`,placeholder:`Enter your description`,value:e,onChange:e=>t(e.target.value)})})}},u={render:()=>{let[e,t]=(0,o.useState)(``),[n,r]=(0,o.useState)(``),[a,c]=(0,o.useState)(``),[l,u]=(0,o.useState)(``);return(0,s.jsxs)(`div`,{className:`flex flex-col gap-8 w-[800px]`,children:[(0,s.jsxs)(`div`,{className:`flex gap-4`,children:[(0,s.jsx)(i,{variant:`flat`,label:`Flat`,placeholder:`Enter your description`,value:e,onChange:e=>t(e.target.value)}),(0,s.jsx)(i,{variant:`bordered`,label:`Bordered`,placeholder:`Enter your description`,value:n,onChange:e=>r(e.target.value)})]}),(0,s.jsxs)(`div`,{className:`flex gap-4`,children:[(0,s.jsx)(i,{variant:`underlined`,label:`Underlined`,placeholder:`Enter your description`,value:a,onChange:e=>c(e.target.value)}),(0,s.jsx)(i,{variant:`faded`,label:`Faded`,placeholder:`Enter your description`,value:l,onChange:e=>u(e.target.value)})]})]})}},d={render:()=>{let[e,t]=(0,o.useState)(``),[n,r]=(0,o.useState)(``),[a,c]=(0,o.useState)(``);return(0,s.jsxs)(`div`,{className:`flex gap-4 w-[800px]`,children:[(0,s.jsx)(i,{size:`sm`,label:`Small`,placeholder:`Small size`,value:e,onChange:e=>t(e.target.value)}),(0,s.jsx)(i,{size:`md`,label:`Medium`,placeholder:`Medium size`,value:n,onChange:e=>r(e.target.value)}),(0,s.jsx)(i,{size:`lg`,label:`Large`,placeholder:`Large size`,value:a,onChange:e=>c(e.target.value)})]})}},f={render:()=>{let[e,t]=(0,o.useState)(``),[n,r]=(0,o.useState)(``),[a,c]=(0,o.useState)(``),[l,u]=(0,o.useState)(``),[d,f]=(0,o.useState)(``);return(0,s.jsxs)(`div`,{className:`flex gap-4 w-[800px]`,children:[(0,s.jsx)(i,{variant:`bordered`,radius:`none`,label:`Radius None`,placeholder:`No radius`,value:e,onChange:e=>t(e.target.value)}),(0,s.jsx)(i,{variant:`bordered`,radius:`sm`,label:`Radius Small`,placeholder:`Small radius`,value:n,onChange:e=>r(e.target.value)}),(0,s.jsx)(i,{variant:`bordered`,radius:`md`,label:`Radius Medium`,placeholder:`Medium radius`,value:a,onChange:e=>c(e.target.value)}),(0,s.jsx)(i,{variant:`bordered`,radius:`lg`,label:`Radius Large`,placeholder:`Large radius`,value:l,onChange:e=>u(e.target.value)}),(0,s.jsx)(i,{variant:`bordered`,radius:`full`,label:`Radius Full`,placeholder:`Full radius`,value:d,onChange:e=>f(e.target.value)})]})}},p={render:()=>{let[e,t]=(0,o.useState)(``),[n,r]=(0,o.useState)(``),[a,c]=(0,o.useState)(``),[l,u]=(0,o.useState)(``),[d,f]=(0,o.useState)(``),[p,m]=(0,o.useState)(``),[h,g]=(0,o.useState)(``),[_,v]=(0,o.useState)(``);return(0,s.jsxs)(`div`,{className:`flex flex-col gap-8 w-[800px]`,children:[(0,s.jsxs)(`div`,{className:`flex gap-4`,children:[(0,s.jsx)(i,{variant:`bordered`,labelPlacement:`inside`,label:`Inside (Floating)`,value:e,onChange:e=>t(e.target.value)}),(0,s.jsx)(i,{variant:`bordered`,labelPlacement:`inside`,label:`Inside (Static with Placeholder)`,placeholder:`Enter text`,value:n,onChange:e=>r(e.target.value)})]}),(0,s.jsxs)(`div`,{className:`flex gap-4`,children:[(0,s.jsx)(i,{variant:`bordered`,labelPlacement:`outside`,label:`Outside (Floating)`,value:a,onChange:e=>c(e.target.value)}),(0,s.jsx)(i,{variant:`bordered`,labelPlacement:`outside`,label:`Outside (Static with Placeholder)`,placeholder:`Enter text`,value:l,onChange:e=>u(e.target.value)})]}),(0,s.jsxs)(`div`,{className:`flex gap-4`,children:[(0,s.jsx)(i,{variant:`bordered`,labelPlacement:`outlined`,label:`Outlined (Floating)`,value:d,onChange:e=>f(e.target.value)}),(0,s.jsx)(i,{variant:`bordered`,labelPlacement:`outlined`,label:`Outlined (Static with Placeholder)`,placeholder:`Enter text`,value:p,onChange:e=>m(e.target.value)})]}),(0,s.jsx)(i,{variant:`bordered`,labelPlacement:`outside-top`,label:`Outside Top (Static)`,placeholder:`Enter text`,value:h,onChange:e=>g(e.target.value)}),(0,s.jsx)(i,{variant:`bordered`,labelPlacement:`outside-left`,label:`Outside Left (Static)`,placeholder:`Enter text`,value:_,onChange:e=>v(e.target.value)})]})}},m={render:()=>{let[e,t]=(0,o.useState)(``);return(0,s.jsx)(`div`,{className:`w-[600px]`,children:(0,s.jsx)(i,{label:`Message`,placeholder:`Type a message...`,isClearable:!0,value:e,onChange:e=>t(e.target.value)})})}},h={render:()=>{let[e,t]=(0,o.useState)(``),[n,r]=(0,o.useState)(``);return(0,s.jsxs)(`div`,{className:`flex gap-4 w-[800px]`,children:[(0,s.jsx)(i,{label:`Autosizing Textarea`,placeholder:`Type text here...`,minRows:3,maxRows:6,value:e,onChange:e=>t(e.target.value)}),(0,s.jsx)(i,{label:`Fixed Textarea (Autosize Disabled)`,placeholder:`Type text here...`,disableAutosize:!0,minRows:3,maxRows:6,value:n,onChange:e=>r(e.target.value)})]})}},g={render:()=>(0,s.jsx)(`div`,{className:`w-[600px]`,children:(0,s.jsx)(i,{label:`Description`,placeholder:`Enter description`,disabled:!0})})},_={render:()=>{let[e,t]=(0,o.useState)(``);return(0,s.jsx)(`div`,{className:`w-[600px]`,children:(0,s.jsx)(i,{label:`Description`,placeholder:`Enter description`,error:`Description is required`,touched:!0,value:e,onChange:e=>t(e.target.value)})})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    return <div className="w-[600px]">
        <Textarea label="Description" placeholder="Enter your description" value={value} onChange={e => setValue(e.target.value)} />
      </div>;
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [flatVal, setFlatVal] = useState("");
    const [borderedVal, setBorderedVal] = useState("");
    const [underlinedVal, setUnderlinedVal] = useState("");
    const [fadedVal, setFadedVal] = useState("");
    return <div className="flex flex-col gap-8 w-[800px]">
        <div className="flex gap-4">
          <Textarea variant="flat" label="Flat" placeholder="Enter your description" value={flatVal} onChange={e => setFlatVal(e.target.value)} />
          <Textarea variant="bordered" label="Bordered" placeholder="Enter your description" value={borderedVal} onChange={e => setBorderedVal(e.target.value)} />
        </div>
        <div className="flex gap-4">
          <Textarea variant="underlined" label="Underlined" placeholder="Enter your description" value={underlinedVal} onChange={e => setUnderlinedVal(e.target.value)} />
          <Textarea variant="faded" label="Faded" placeholder="Enter your description" value={fadedVal} onChange={e => setFadedVal(e.target.value)} />
        </div>
      </div>;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [smVal, setSmVal] = useState("");
    const [mdVal, setMdVal] = useState("");
    const [lgVal, setLgVal] = useState("");
    return <div className="flex gap-4 w-[800px]">
        <Textarea size="sm" label="Small" placeholder="Small size" value={smVal} onChange={e => setSmVal(e.target.value)} />
        <Textarea size="md" label="Medium" placeholder="Medium size" value={mdVal} onChange={e => setMdVal(e.target.value)} />
        <Textarea size="lg" label="Large" placeholder="Large size" value={lgVal} onChange={e => setLgVal(e.target.value)} />
      </div>;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [noneVal, setNoneVal] = useState("");
    const [smVal, setSmVal] = useState("");
    const [mdVal, setMdVal] = useState("");
    const [lgVal, setLgVal] = useState("");
    const [fullVal, setFullVal] = useState("");
    return <div className="flex gap-4 w-[800px]">
        <Textarea variant="bordered" radius="none" label="Radius None" placeholder="No radius" value={noneVal} onChange={e => setNoneVal(e.target.value)} />
        <Textarea variant="bordered" radius="sm" label="Radius Small" placeholder="Small radius" value={smVal} onChange={e => setSmVal(e.target.value)} />
        <Textarea variant="bordered" radius="md" label="Radius Medium" placeholder="Medium radius" value={mdVal} onChange={e => setMdVal(e.target.value)} />
        <Textarea variant="bordered" radius="lg" label="Radius Large" placeholder="Large radius" value={lgVal} onChange={e => setLgVal(e.target.value)} />
        <Textarea variant="bordered" radius="full" label="Radius Full" placeholder="Full radius" value={fullVal} onChange={e => setFullVal(e.target.value)} />
      </div>;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [in1, setIn1] = useState("");
    const [in2, setIn2] = useState("");
    const [out1, setOut1] = useState("");
    const [out2, setOut2] = useState("");
    const [outline1, setOutline1] = useState("");
    const [outline2, setOutline2] = useState("");
    const [topVal, setTopVal] = useState("");
    const [leftVal, setLeftVal] = useState("");
    return <div className="flex flex-col gap-8 w-[800px]">
        <div className="flex gap-4">
          <Textarea variant="bordered" labelPlacement="inside" label="Inside (Floating)" value={in1} onChange={e => setIn1(e.target.value)} />
          <Textarea variant="bordered" labelPlacement="inside" label="Inside (Static with Placeholder)" placeholder="Enter text" value={in2} onChange={e => setIn2(e.target.value)} />
        </div>
        <div className="flex gap-4">
          <Textarea variant="bordered" labelPlacement="outside" label="Outside (Floating)" value={out1} onChange={e => setOut1(e.target.value)} />
          <Textarea variant="bordered" labelPlacement="outside" label="Outside (Static with Placeholder)" placeholder="Enter text" value={out2} onChange={e => setOut2(e.target.value)} />
        </div>
        <div className="flex gap-4">
          <Textarea variant="bordered" labelPlacement="outlined" label="Outlined (Floating)" value={outline1} onChange={e => setOutline1(e.target.value)} />
          <Textarea variant="bordered" labelPlacement="outlined" label="Outlined (Static with Placeholder)" placeholder="Enter text" value={outline2} onChange={e => setOutline2(e.target.value)} />
        </div>
        <Textarea variant="bordered" labelPlacement="outside-top" label="Outside Top (Static)" placeholder="Enter text" value={topVal} onChange={e => setTopVal(e.target.value)} />
        <Textarea variant="bordered" labelPlacement="outside-left" label="Outside Left (Static)" placeholder="Enter text" value={leftVal} onChange={e => setLeftVal(e.target.value)} />
      </div>;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    return <div className="w-[600px]">
        <Textarea label="Message" placeholder="Type a message..." isClearable value={value} onChange={e => setValue(e.target.value)} />
      </div>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [val1, setVal1] = useState("");
    const [val2, setVal2] = useState("");
    return <div className="flex gap-4 w-[800px]">
        <Textarea label="Autosizing Textarea" placeholder="Type text here..." minRows={3} maxRows={6} value={val1} onChange={e => setVal1(e.target.value)} />
        <Textarea label="Fixed Textarea (Autosize Disabled)" placeholder="Type text here..." disableAutosize minRows={3} maxRows={6} value={val2} onChange={e => setVal2(e.target.value)} />
      </div>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-[600px]">
      <Textarea label="Description" placeholder="Enter description" disabled />
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    return <div className="w-[600px]">
        <Textarea label="Description" placeholder="Enter description" error="Description is required" touched value={value} onChange={e => setValue(e.target.value)} />
      </div>;
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`Variants`,`Sizes`,`Radiuses`,`LabelPlacements`,`Clearable`,`Autosize`,`Disabled`,`ErrorState`]}))();export{h as Autosize,m as Clearable,l as Default,g as Disabled,_ as ErrorState,p as LabelPlacements,f as Radiuses,d as Sizes,u as Variants,v as __namedExportsOrder,c as default};