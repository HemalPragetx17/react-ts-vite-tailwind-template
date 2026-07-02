import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-DDzTVtu_.js";import{t as r}from"./iframe-BSsvUtib.js";import{Dt as i,N as a,lt as o,t as s}from"./ui-C8puiJZM.js";var c,l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{c=t(n(),1),i(),s(),l=r(),u={title:`Components/CheckboxGroup`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{color:{control:`select`,options:[`default`,`primary`,`secondary`,`success`,`warning`,`danger`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},radius:{control:`select`,options:[`none`,`sm`,`md`,`lg`,`full`]},orientation:{control:`radio`,options:[`horizontal`,`vertical`]},onChange:{action:`changed`},options:{control:!1}}},d=[{label:`Option 1`,value:`1`,description:`Description for option 1`},{label:`Option 2`,value:`2`,description:`Description for option 2`},{label:`Option 3`,value:`3`,description:`Description for option 3`}],f={render:e=>{let[t,n]=c.useState([]);return(0,l.jsx)(a,{...e,value:t,onChange:t=>{n(t),e.onChange?.(t)}})},args:{label:`Select options`,options:d,color:`primary`,size:`md`,radius:`md`,orientation:`vertical`}},p={render:e=>{let[t,n]=c.useState([]);return(0,l.jsx)(a,{...e,value:t,onChange:t=>{n(t),e.onChange?.(t)}})},args:{label:`Horizontal layout`,options:d,orientation:`horizontal`}},m={render:e=>{let[t,n]=c.useState([]),[r,i]=c.useState([]),[o,s]=c.useState([]),[u,f]=c.useState([]),[p,m]=c.useState([]),[h,g]=c.useState([]);return(0,l.jsxs)(`div`,{className:`flex flex-col gap-12`,children:[(0,l.jsxs)(`div`,{className:`flex gap-8`,children:[(0,l.jsx)(a,{...e,id:`default-group`,color:`default`,label:`Default`,options:d,value:t,onChange:n}),(0,l.jsx)(a,{...e,id:`primary-group`,color:`primary`,label:`Primary`,options:d,value:r,onChange:i})]}),(0,l.jsxs)(`div`,{className:`flex gap-8`,children:[(0,l.jsx)(a,{...e,id:`secondary-group`,color:`secondary`,label:`Secondary`,options:d,value:o,onChange:s}),(0,l.jsx)(a,{...e,id:`success-group`,color:`success`,label:`Success`,options:d,value:u,onChange:f})]}),(0,l.jsxs)(`div`,{className:`flex gap-8`,children:[(0,l.jsx)(a,{...e,id:`warning-group`,color:`warning`,label:`Warning`,options:d,value:p,onChange:m}),(0,l.jsx)(a,{...e,id:`danger-group`,color:`danger`,label:`Danger`,options:d,value:h,onChange:g})]})]})}},h={render:e=>{let[t,n]=c.useState([]);return(0,l.jsxs)(`div`,{className:`flex gap-8`,children:[(0,l.jsx)(a,{...e,label:`Small Size`,size:`sm`,options:d,value:t,onChange:n}),(0,l.jsx)(a,{...e,label:`Medium Size`,size:`md`,options:d,value:t,onChange:n}),(0,l.jsx)(a,{...e,label:`Large Size`,size:`lg`,options:d,value:t,onChange:n})]})}},g={render:e=>{let[t,n]=c.useState([]);return(0,l.jsxs)(`div`,{className:`flex gap-8`,children:[(0,l.jsx)(a,{...e,label:`Radius None`,radius:`none`,options:d,value:t,onChange:n}),(0,l.jsx)(a,{...e,label:`Radius Small`,radius:`sm`,options:d,value:t,onChange:n}),(0,l.jsx)(a,{...e,label:`Radius Medium`,radius:`md`,options:d,value:t,onChange:n}),(0,l.jsx)(a,{...e,label:`Radius Large`,radius:`lg`,options:d,value:t,onChange:n}),(0,l.jsx)(a,{...e,label:`Radius Full`,radius:`full`,options:d,value:t,onChange:n})]})}},_={render:e=>{let[t,n]=c.useState([`1`]);return(0,l.jsx)(a,{...e,value:t,onChange:n})},args:{label:`Custom Icon (Heart)`,options:d,icon:(0,l.jsx)(o,{className:`w-3.5 h-3.5`,"aria-hidden":!0})}},v={render:e=>{let[t,n]=c.useState([]);return(0,l.jsx)(a,{...e,value:t,onChange:n})},args:{label:`Group with Disabled Option`,options:[{label:`Active Option 1`,value:`1`},{label:`Disabled Option 2`,value:`2`,disabled:!0,description:`This option is disabled`},{label:`Active Option 3`,value:`3`}]}},y={render:e=>{let[t,n]=c.useState([]);return(0,l.jsx)(a,{...e,value:t,onChange:n})},args:{label:`Checkbox Group with error`,options:d,error:`Please select at least one option`,touched:!0}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<(string | number)[]>([]);
    return <CheckboxGroup {...args} value={value} onChange={val => {
      setValue(val);
      args.onChange?.(val);
    }} />;
  },
  args: {
    label: "Select options",
    options,
    color: "primary",
    size: "md",
    radius: "md",
    orientation: "vertical"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<(string | number)[]>([]);
    return <CheckboxGroup {...args} value={value} onChange={val => {
      setValue(val);
      args.onChange?.(val);
    }} />;
  },
  args: {
    label: "Horizontal layout",
    options,
    orientation: "horizontal"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [defaultVal, setDefaultVal] = React.useState<(string | number)[]>([]);
    const [primaryVal, setPrimaryVal] = React.useState<(string | number)[]>([]);
    const [secondaryVal, setSecondaryVal] = React.useState<(string | number)[]>([]);
    const [successVal, setSuccessVal] = React.useState<(string | number)[]>([]);
    const [warningVal, setWarningVal] = React.useState<(string | number)[]>([]);
    const [dangerVal, setDangerVal] = React.useState<(string | number)[]>([]);
    return <div className="flex flex-col gap-12">
        <div className="flex gap-8">
          <CheckboxGroup {...args} id="default-group" color="default" label="Default" options={options} value={defaultVal} onChange={setDefaultVal} />
          <CheckboxGroup {...args} id="primary-group" color="primary" label="Primary" options={options} value={primaryVal} onChange={setPrimaryVal} />
        </div>
        <div className="flex gap-8">
          <CheckboxGroup {...args} id="secondary-group" color="secondary" label="Secondary" options={options} value={secondaryVal} onChange={setSecondaryVal} />
          <CheckboxGroup {...args} id="success-group" color="success" label="Success" options={options} value={successVal} onChange={setSuccessVal} />
        </div>
        <div className="flex gap-8">
          <CheckboxGroup {...args} id="warning-group" color="warning" label="Warning" options={options} value={warningVal} onChange={setWarningVal} />
          <CheckboxGroup {...args} id="danger-group" color="danger" label="Danger" options={options} value={dangerVal} onChange={setDangerVal} />
        </div>
      </div>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<(string | number)[]>([]);
    return <div className="flex gap-8">
        <CheckboxGroup {...args} label="Small Size" size="sm" options={options} value={value} onChange={setValue} />
        <CheckboxGroup {...args} label="Medium Size" size="md" options={options} value={value} onChange={setValue} />
        <CheckboxGroup {...args} label="Large Size" size="lg" options={options} value={value} onChange={setValue} />
      </div>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<(string | number)[]>([]);
    return <div className="flex gap-8">
        <CheckboxGroup {...args} label="Radius None" radius="none" options={options} value={value} onChange={setValue} />
        <CheckboxGroup {...args} label="Radius Small" radius="sm" options={options} value={value} onChange={setValue} />
        <CheckboxGroup {...args} label="Radius Medium" radius="md" options={options} value={value} onChange={setValue} />
        <CheckboxGroup {...args} label="Radius Large" radius="lg" options={options} value={value} onChange={setValue} />
        <CheckboxGroup {...args} label="Radius Full" radius="full" options={options} value={value} onChange={setValue} />
      </div>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<(string | number)[]>(["1"]);
    return <CheckboxGroup {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: "Custom Icon (Heart)",
    options,
    icon: <FaHeart className="w-3.5 h-3.5" aria-hidden />
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<(string | number)[]>([]);
    return <CheckboxGroup {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: "Group with Disabled Option",
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<(string | number)[]>([]);
    return <CheckboxGroup {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: "Checkbox Group with error",
    options,
    error: "Please select at least one option",
    touched: true
  }
}`,...y.parameters?.docs?.source}}},b=[`Default`,`Horizontal`,`Colors`,`Sizes`,`Radiuses`,`Icon`,`DisabledOption`,`WithError`]}))();export{m as Colors,f as Default,v as DisabledOption,p as Horizontal,_ as Icon,g as Radiuses,h as Sizes,y as WithError,b as __namedExportsOrder,u as default};