import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-DDzTVtu_.js";import{t as r}from"./iframe-sOyJkj26.js";import{A as i,Et as a,Mt as o,Nt as s,ct as c,t as l,xt as u}from"./ui-DraYKXvF.js";var d,f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{d=t(n(),1),s(),l(),f=r(),p={title:`Components/Switch`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`]},color:{control:`select`,options:[`default`,`primary`,`secondary`,`success`,`warning`,`danger`]},variant:{control:`select`,options:[`default`,`outside`]},disabled:{control:`boolean`}}},m={render:()=>{let[e,t]=(0,d.useState)(!1);return(0,f.jsx)(i,{label:`Automatic updates`,value:e,onChange:t})}},h={render:()=>{let[e,t]=(0,d.useState)(!1);return(0,f.jsx)(i,{label:`Bluetooth`,activeLabel:`Enabled`,inactiveLabel:`Disabled`,value:e,onChange:t})}},g={render:()=>{let[e,t]=(0,d.useState)(!0),[n,r]=(0,d.useState)(!0),[a,o]=(0,d.useState)(!0),[s,c]=(0,d.useState)(!0),[l,u]=(0,d.useState)(!0),[p,m]=(0,d.useState)(!0);return(0,f.jsxs)(`div`,{className:`flex gap-8`,children:[(0,f.jsx)(i,{color:`default`,label:`Default`,value:e,onChange:t}),(0,f.jsx)(i,{color:`primary`,label:`Primary`,value:n,onChange:r}),(0,f.jsx)(i,{color:`secondary`,label:`Secondary`,value:a,onChange:o}),(0,f.jsx)(i,{color:`success`,label:`Success`,value:s,onChange:c}),(0,f.jsx)(i,{color:`warning`,label:`Warning`,value:l,onChange:u}),(0,f.jsx)(i,{color:`danger`,label:`Danger`,value:p,onChange:m})]})}},_={render:()=>{let[e,t]=(0,d.useState)(!0),[n,r]=(0,d.useState)(!0),[a,o]=(0,d.useState)(!0);return(0,f.jsxs)(`div`,{className:`flex gap-8`,children:[(0,f.jsx)(i,{size:`sm`,label:`Small`,value:e,onChange:t}),(0,f.jsx)(i,{size:`md`,label:`Medium`,value:n,onChange:r}),(0,f.jsx)(i,{size:`lg`,label:`Large`,value:a,onChange:o})]})}},v={render:()=>{let[e,t]=(0,d.useState)(!1);return(0,f.jsx)(i,{label:`Dark mode`,startContent:(0,f.jsx)(u,{className:`w-3 h-3`,"aria-hidden":!0}),endContent:(0,f.jsx)(a,{className:`w-3 h-3`,"aria-hidden":!0}),value:e,onChange:t})}},y={render:()=>{let[e,t]=(0,d.useState)(!1);return(0,f.jsx)(i,{label:`Custom thumb icons`,thumbIcon:e=>e?(0,f.jsx)(c,{className:`w-3 h-3`,"aria-hidden":!0}):(0,f.jsx)(o,{className:`w-3 h-3`,"aria-hidden":!0}),value:e,onChange:t})}},b={render:()=>(0,f.jsxs)(`div`,{className:`flex gap-8 w-[300px]`,children:[(0,f.jsx)(i,{label:`Disabled (Off)`,disabled:!0,value:!1}),(0,f.jsx)(i,{label:`Disabled (On)`,disabled:!0,value:!0})]})},x={render:()=>{let[e,t]=(0,d.useState)(!1);return(0,f.jsx)(i,{label:`Error Switch`,error:`This field is required`,touched:!0,value:e,onChange:t})}},S={render:()=>{let[e,t]=(0,d.useState)(!0),[n,r]=(0,d.useState)(!0),[a,o]=(0,d.useState)(!0),[s,c]=(0,d.useState)(!0),[l,u]=(0,d.useState)(!0),[p,m]=(0,d.useState)(!0),[h,g]=(0,d.useState)(!0),[_,v]=(0,d.useState)(!0),[y,b]=(0,d.useState)(!0);return(0,f.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,f.jsxs)(`div`,{className:`flex gap-8`,children:[(0,f.jsx)(i,{variant:`outside`,size:`sm`,label:`Small Outside`,value:e,onChange:t}),(0,f.jsx)(i,{variant:`outside`,size:`md`,label:`Medium Outside`,value:n,onChange:r}),(0,f.jsx)(i,{variant:`outside`,size:`lg`,label:`Large Outside`,value:a,onChange:o})]}),(0,f.jsxs)(`div`,{className:`flex gap-8`,children:[(0,f.jsx)(i,{variant:`outside`,color:`default`,label:`Default`,value:s,onChange:c}),(0,f.jsx)(i,{variant:`outside`,color:`primary`,label:`Primary`,value:l,onChange:u}),(0,f.jsx)(i,{variant:`outside`,color:`secondary`,label:`Secondary`,value:p,onChange:m}),(0,f.jsx)(i,{variant:`outside`,color:`success`,label:`Success`,value:h,onChange:g}),(0,f.jsx)(i,{variant:`outside`,color:`warning`,label:`Warning`,value:_,onChange:v}),(0,f.jsx)(i,{variant:`outside`,color:`danger`,label:`Danger`,value:y,onChange:b})]})]})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(false);
    return <Switch label="Automatic updates" value={value} onChange={setValue} />;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(false);
    return <Switch label="Bluetooth" activeLabel="Enabled" inactiveLabel="Disabled" value={value} onChange={setValue} />;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [defaultVal, setDefaultVal] = useState(true);
    const [primaryVal, setPrimaryVal] = useState(true);
    const [secondaryVal, setSecondaryVal] = useState(true);
    const [successVal, setSuccessVal] = useState(true);
    const [warningVal, setWarningVal] = useState(true);
    const [dangerVal, setDangerVal] = useState(true);
    return <div className="flex gap-8">
        <Switch color="default" label="Default" value={defaultVal} onChange={setDefaultVal} />
        <Switch color="primary" label="Primary" value={primaryVal} onChange={setPrimaryVal} />
        <Switch color="secondary" label="Secondary" value={secondaryVal} onChange={setSecondaryVal} />
        <Switch color="success" label="Success" value={successVal} onChange={setSuccessVal} />
        <Switch color="warning" label="Warning" value={warningVal} onChange={setWarningVal} />
        <Switch color="danger" label="Danger" value={dangerVal} onChange={setDangerVal} />
      </div>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [smVal, setSmVal] = useState(true);
    const [mdVal, setMdVal] = useState(true);
    const [lgVal, setLgVal] = useState(true);
    return <div className="flex gap-8">
        <Switch size="sm" label="Small" value={smVal} onChange={setSmVal} />
        <Switch size="md" label="Medium" value={mdVal} onChange={setMdVal} />
        <Switch size="lg" label="Large" value={lgVal} onChange={setLgVal} />
      </div>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(false);
    return <Switch label="Dark mode" startContent={<FaMoon className="w-3 h-3" aria-hidden />} endContent={<FaSun className="w-3 h-3" aria-hidden />} value={value} onChange={setValue} />;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(false);
    return <Switch label="Custom thumb icons" thumbIcon={(checked: boolean) => checked ? <FaCheck className="w-3 h-3" aria-hidden /> : <FaXmark className="w-3 h-3" aria-hidden />} value={value} onChange={setValue} />;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-8 w-[300px]">
      <Switch label="Disabled (Off)" disabled value={false} />
      <Switch label="Disabled (On)" disabled value={true} />
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(false);
    return <Switch label="Error Switch" error="This field is required" touched value={value} onChange={setValue} />;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [smVal, setSmVal] = useState(true);
    const [mdVal, setMdVal] = useState(true);
    const [lgVal, setLgVal] = useState(true);
    const [defaultVal, setDefaultVal] = useState(true);
    const [primaryVal, setPrimaryVal] = useState(true);
    const [secondaryVal, setSecondaryVal] = useState(true);
    const [successVal, setSuccessVal] = useState(true);
    const [warningVal, setWarningVal] = useState(true);
    const [dangerVal, setDangerVal] = useState(true);
    return <div className="flex flex-col gap-6">
        <div className="flex gap-8">
          <Switch variant="outside" size="sm" label="Small Outside" value={smVal} onChange={setSmVal} />
          <Switch variant="outside" size="md" label="Medium Outside" value={mdVal} onChange={setMdVal} />
          <Switch variant="outside" size="lg" label="Large Outside" value={lgVal} onChange={setLgVal} />
        </div>
        <div className="flex gap-8">
          <Switch variant="outside" color="default" label="Default" value={defaultVal} onChange={setDefaultVal} />
          <Switch variant="outside" color="primary" label="Primary" value={primaryVal} onChange={setPrimaryVal} />
          <Switch variant="outside" color="secondary" label="Secondary" value={secondaryVal} onChange={setSecondaryVal} />
          <Switch variant="outside" color="success" label="Success" value={successVal} onChange={setSuccessVal} />
          <Switch variant="outside" color="warning" label="Warning" value={warningVal} onChange={setWarningVal} />
          <Switch variant="outside" color="danger" label="Danger" value={dangerVal} onChange={setDangerVal} />
        </div>
      </div>;
  }
}`,...S.parameters?.docs?.source}}},C=[`Default`,`WithLabels`,`Colors`,`Sizes`,`WithIcons`,`ThumbIcons`,`Disabled`,`WithError`,`OutsideVariant`]}))();export{g as Colors,m as Default,b as Disabled,S as OutsideVariant,_ as Sizes,y as ThumbIcons,x as WithError,v as WithIcons,h as WithLabels,C as __namedExportsOrder,p as default};