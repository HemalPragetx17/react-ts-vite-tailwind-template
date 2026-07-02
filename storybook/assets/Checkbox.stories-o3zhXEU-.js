import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-DDzTVtu_.js";import{t as r}from"./iframe-BSsvUtib.js";import{Dt as i,P as a,lt as o,t as s,vt as c}from"./ui-C8puiJZM.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S;e((()=>{l=t(n(),1),i(),s(),u=r(),d={title:`Components/Checkbox`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{color:{control:`select`,options:[`default`,`primary`,`secondary`,`success`,`warning`,`danger`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},radius:{control:`select`,options:[`none`,`sm`,`md`,`lg`,`full`]},onChange:{action:`changed`},options:{control:!1}}},f={render:e=>{let[t,n]=l.useState(!1);return(0,u.jsx)(a,{...e,checked:t,onChange:t=>{n(t),e.onChange?.(t)}})},args:{label:`Checkbox`,color:`primary`,size:`md`,radius:`md`}},p={render:e=>{let[t,n]=l.useState([]);return(0,u.jsx)(a,{...e,value:t,onChange:t=>{n(t),e.onChange?.(t)}})},args:{label:`Checkbox with description`,options:[{label:`Option 1`,value:`1`,description:`This is a description for option 1`},{label:`Option 2`,value:`2`,description:`This is a description for option 2`}],color:`primary`,size:`md`}},m={render:e=>{let[t,n]=l.useState({}),r=e=>{n(t=>({...t,[e]:!t[e]}))};return(0,u.jsx)(`div`,{className:`flex gap-4`,children:[`default`,`primary`,`secondary`,`success`,`warning`,`danger`].map(n=>(0,u.jsx)(a,{...e,name:`checkbox-color-${n}`,color:n,label:n.charAt(0).toUpperCase()+n.slice(1),checked:!!t[n],onChange:()=>r(n)},n))})}},h={render:e=>{let[t,n]=l.useState({}),r=e=>{n(t=>({...t,[e]:!t[e]}))};return(0,u.jsx)(`div`,{className:`flex gap-4`,children:[`sm`,`md`,`lg`].map(n=>(0,u.jsx)(a,{...e,name:`checkbox-size-${n}`,size:n,label:n===`sm`?`Small`:n===`md`?`Medium`:`Large`,checked:!!t[n],onChange:()=>r(n)},n))})}},g={render:e=>{let[t,n]=l.useState({}),r=e=>{n(t=>({...t,[e]:!t[e]}))};return(0,u.jsx)(`div`,{className:`flex gap-4`,children:[`none`,`sm`,`md`,`lg`,`full`].map(n=>(0,u.jsx)(a,{...e,name:`checkbox-radius-${n}`,radius:n,label:n.charAt(0).toUpperCase()+n.slice(1),checked:!!t[n],onChange:()=>r(n)},n))})}},_={render:e=>{let[t,n]=l.useState(!1);return(0,u.jsx)(a,{...e,checked:t,onChange:e=>n(e)})},args:{label:`Indeterminate`,isIndeterminate:!0}},v={render:e=>{let[t,n]=l.useState(!0);return(0,u.jsx)(a,{...e,checked:t,onChange:e=>n(e)})},args:{label:`Line Through`,lineThrough:!0,checked:!0}},y={render:e=>{let[t,n]=l.useState(!0),[r,i]=l.useState(!0);return(0,u.jsxs)(`div`,{className:`flex gap-4`,children:[(0,u.jsx)(a,{...e,label:`Option`,color:`primary`,checked:t,onChange:e=>n(e),icon:(0,u.jsx)(o,{className:`w-3.5 h-3.5`,"aria-hidden":!0})}),(0,u.jsx)(a,{...e,label:`Option`,color:`warning`,checked:r,onChange:e=>i(e),icon:(0,u.jsx)(c,{className:`w-3.5 h-3.5`,"aria-hidden":!0})})]})}},b={render:e=>{let[t,n]=l.useState(!1);return(0,u.jsx)(a,{...e,checked:t,onChange:e=>n(e)})},args:{label:`Disabled`,disabled:!0}},x={render:e=>{let[t,n]=l.useState(!1);return(0,u.jsx)(a,{...e,checked:t,onChange:e=>n(e)})},args:{label:`Checkbox with error`,error:`This is an error message`,touched:!0}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = React.useState(false);
    return <Checkbox {...args} checked={checked} onChange={(val: boolean) => {
      setChecked(val);
      args.onChange?.(val);
    }} />;
  },
  args: {
    label: "Checkbox",
    color: "primary",
    size: "md",
    radius: "md"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<string[]>([]);
    return <Checkbox {...args} value={value} onChange={(val: any) => {
      setValue(val);
      args.onChange?.(val);
    }} />;
  },
  args: {
    label: "Checkbox with description",
    options: [{
      label: "Option 1",
      value: "1",
      description: "This is a description for option 1"
    }, {
      label: "Option 2",
      value: "2",
      description: "This is a description for option 2"
    }],
    color: "primary",
    size: "md"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [values, setValues] = React.useState<Record<string, boolean>>({});
    const toggle = (color: string) => {
      setValues(prev => ({
        ...prev,
        [color]: !prev[color]
      }));
    };
    return <div className="flex gap-4">
        {["default", "primary", "secondary", "success", "warning", "danger"].map(color => <Checkbox key={color} {...args} name={\`checkbox-color-\${color}\`} color={color as any} label={color.charAt(0).toUpperCase() + color.slice(1)} checked={!!values[color]} onChange={() => toggle(color)} />)}
      </div>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [values, setValues] = React.useState<Record<string, boolean>>({});
    const toggle = (size: string) => {
      setValues(prev => ({
        ...prev,
        [size]: !prev[size]
      }));
    };
    return <div className="flex gap-4">
        {["sm", "md", "lg"].map(size => <Checkbox key={size} {...args} name={\`checkbox-size-\${size}\`} size={size as any} label={size === "sm" ? "Small" : size === "md" ? "Medium" : "Large"} checked={!!values[size]} onChange={() => toggle(size)} />)}
      </div>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [values, setValues] = React.useState<Record<string, boolean>>({});
    const toggle = (r: string) => {
      setValues(prev => ({
        ...prev,
        [r]: !prev[r]
      }));
    };
    return <div className="flex gap-4">
        {["none", "sm", "md", "lg", "full"].map(r => <Checkbox key={r} {...args} name={\`checkbox-radius-\${r}\`} radius={r as any} label={r.charAt(0).toUpperCase() + r.slice(1)} checked={!!values[r]} onChange={() => toggle(r)} />)}
      </div>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = React.useState(false);
    return <Checkbox {...args} checked={checked} onChange={(val: boolean) => setChecked(val)} />;
  },
  args: {
    label: "Indeterminate",
    isIndeterminate: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = React.useState(true);
    return <Checkbox {...args} checked={checked} onChange={(val: boolean) => setChecked(val)} />;
  },
  args: {
    label: "Line Through",
    lineThrough: true,
    checked: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [checked1, setChecked1] = React.useState(true);
    const [checked2, setChecked2] = React.useState(true);
    return <div className="flex gap-4">
        <Checkbox {...args} label="Option" color="primary" checked={checked1} onChange={(val: boolean) => setChecked1(val)} icon={<FaHeart className="w-3.5 h-3.5" aria-hidden />} />
        <Checkbox {...args} label="Option" color="warning" checked={checked2} onChange={(val: boolean) => setChecked2(val)} icon={<FaPlus className="w-3.5 h-3.5" aria-hidden />} />
      </div>;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = React.useState(false);
    return <Checkbox {...args} checked={checked} onChange={(val: boolean) => setChecked(val)} />;
  },
  args: {
    label: "Disabled",
    disabled: true
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = React.useState(false);
    return <Checkbox {...args} checked={checked} onChange={(val: boolean) => setChecked(val)} />;
  },
  args: {
    label: "Checkbox with error",
    error: "This is an error message",
    touched: true
  }
}`,...x.parameters?.docs?.source}}},S=[`Default`,`WithDescription`,`Colors`,`Sizes`,`Radiuses`,`Indeterminate`,`LineThrough`,`Icon`,`Disabled`,`Error`]}))();export{m as Colors,f as Default,b as Disabled,x as Error,y as Icon,_ as Indeterminate,v as LineThrough,g as Radiuses,h as Sizes,p as WithDescription,S as __namedExportsOrder,d as default};