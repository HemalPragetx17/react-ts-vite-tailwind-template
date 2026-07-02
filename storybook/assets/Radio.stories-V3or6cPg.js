import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-DDzTVtu_.js";import{t as r}from"./iframe-BzRfQavU.js";import{E as i,t as a}from"./ui-sUaI0YKE.js";var o,s,c,l,u,d,f,p,m,h,g;e((()=>{o=t(n(),1),a(),s=r(),c={title:`Components/Radio`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{color:{control:`select`,options:[`default`,`primary`,`secondary`,`success`,`warning`,`danger`]},orientation:{control:`radio`,options:[`horizontal`,`vertical`]},disabled:{control:`boolean`},onChange:{action:`changed`},options:{control:!1}}},l=[{label:`Option 1`,value:`1`,description:`Description for option 1`},{label:`Option 2`,value:`2`,description:`Description for option 2`},{label:`Option 3`,value:`3`,description:`Description for option 3`}],u={render:e=>{let[t,n]=o.useState(``);return(0,s.jsx)(i,{...e,value:t,onChange:t=>{let r=t.target.value;n(r),e.onChange?.(t)}})},args:{label:`Select an option`,options:l,color:`primary`,orientation:`vertical`}},d={render:e=>{let[t,n]=o.useState(``);return(0,s.jsx)(i,{...e,value:t,onChange:t=>{let r=t.target.value;n(r),e.onChange?.(t)}})},args:{label:`Horizontal layout`,options:l,orientation:`horizontal`}},f={render:e=>{let[t,n]=o.useState(``),[r,a]=o.useState(``),[c,u]=o.useState(``),[d,f]=o.useState(``),[p,m]=o.useState(``),[h,g]=o.useState(``);return(0,s.jsxs)(`div`,{className:`flex flex-col gap-12`,children:[(0,s.jsxs)(`div`,{className:`flex gap-8`,children:[(0,s.jsx)(i,{...e,name:`default-radio`,color:`default`,label:`Default`,options:l,value:t,onChange:e=>n(e.target.value)}),(0,s.jsx)(i,{...e,name:`primary-radio`,color:`primary`,label:`Primary`,options:l,value:r,onChange:e=>a(e.target.value)})]}),(0,s.jsxs)(`div`,{className:`flex gap-8`,children:[(0,s.jsx)(i,{...e,name:`secondary-radio`,color:`secondary`,label:`Secondary`,options:l,value:c,onChange:e=>u(e.target.value)}),(0,s.jsx)(i,{...e,name:`success-radio`,color:`success`,label:`Success`,options:l,value:d,onChange:e=>f(e.target.value)})]}),(0,s.jsxs)(`div`,{className:`flex gap-8`,children:[(0,s.jsx)(i,{...e,name:`warning-radio`,color:`warning`,label:`Warning`,options:l,value:p,onChange:e=>m(e.target.value)}),(0,s.jsx)(i,{...e,name:`danger-radio`,color:`danger`,label:`Danger`,options:l,value:h,onChange:e=>g(e.target.value)})]})]})}},p={render:e=>{let[t,n]=o.useState(`1`);return(0,s.jsx)(i,{...e,value:t,onChange:e=>n(e.target.value)})},args:{label:`Disabled Radio Group`,options:l,disabled:!0}},m={render:e=>{let[t,n]=o.useState(``);return(0,s.jsx)(i,{...e,value:t,onChange:e=>n(e.target.value)})},args:{label:`Individual Option Disabled`,options:[{label:`Active Option 1`,value:`1`},{label:`Disabled Option 2`,value:`2`,disabled:!0,description:`This option is disabled`},{label:`Active Option 3`,value:`3`}]}},h={render:e=>{let[t,n]=o.useState(``);return(0,s.jsx)(i,{...e,value:t,onChange:e=>n(e.target.value)})},args:{label:`Radio Group with error`,options:l,error:`Please select an option`,touched:!0}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState("");
    return <Radio {...args} value={value} onChange={e => {
      const val = e.target.value;
      setValue(val);
      args.onChange?.(e);
    }} />;
  },
  args: {
    label: "Select an option",
    options,
    color: "primary",
    orientation: "vertical"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState("");
    return <Radio {...args} value={value} onChange={e => {
      const val = e.target.value;
      setValue(val);
      args.onChange?.(e);
    }} />;
  },
  args: {
    label: "Horizontal layout",
    options,
    orientation: "horizontal"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [defaultVal, setDefaultVal] = React.useState("");
    const [primaryVal, setPrimaryVal] = React.useState("");
    const [secondaryVal, setSecondaryVal] = React.useState("");
    const [successVal, setSuccessVal] = React.useState("");
    const [warningVal, setWarningVal] = React.useState("");
    const [dangerVal, setDangerVal] = React.useState("");
    return <div className="flex flex-col gap-12">
        <div className="flex gap-8">
          <Radio {...args} name="default-radio" color="default" label="Default" options={options} value={defaultVal} onChange={e => setDefaultVal(e.target.value)} />
          <Radio {...args} name="primary-radio" color="primary" label="Primary" options={options} value={primaryVal} onChange={e => setPrimaryVal(e.target.value)} />
        </div>
        <div className="flex gap-8">
          <Radio {...args} name="secondary-radio" color="secondary" label="Secondary" options={options} value={secondaryVal} onChange={e => setSecondaryVal(e.target.value)} />
          <Radio {...args} name="success-radio" color="success" label="Success" options={options} value={successVal} onChange={e => setSuccessVal(e.target.value)} />
        </div>
        <div className="flex gap-8">
          <Radio {...args} name="warning-radio" color="warning" label="Warning" options={options} value={warningVal} onChange={e => setWarningVal(e.target.value)} />
          <Radio {...args} name="danger-radio" color="danger" label="Danger" options={options} value={dangerVal} onChange={e => setDangerVal(e.target.value)} />
        </div>
      </div>;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState("1");
    return <Radio {...args} value={value} onChange={e => setValue(e.target.value)} />;
  },
  args: {
    label: "Disabled Radio Group",
    options,
    disabled: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState("");
    return <Radio {...args} value={value} onChange={e => setValue(e.target.value)} />;
  },
  args: {
    label: "Individual Option Disabled",
    options: [{
      label: "Active Option 1",
      value: "1"
    }, {
      label: "Disabled Option 2",
      value: "2",
      disabled: true,
      description: "This option is disabled"
    }, {
      label: "Active Option 3",
      value: "3"
    }]
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState("");
    return <Radio {...args} value={value} onChange={e => setValue(e.target.value)} />;
  },
  args: {
    label: "Radio Group with error",
    options,
    error: "Please select an option",
    touched: true
  }
}`,...h.parameters?.docs?.source}}},g=[`Default`,`Horizontal`,`Colors`,`Disabled`,`OptionDisabled`,`WithError`]}))();export{f as Colors,u as Default,p as Disabled,d as Horizontal,m as OptionDisabled,h as WithError,g as __namedExportsOrder,c as default};