import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-DDzTVtu_.js";import{t as r}from"./iframe-BzRfQavU.js";import{Dt as i,Et as a,bt as o,ht as s,nt as c,t as l,w as u}from"./ui-sUaI0YKE.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{d=t(n(),1),i(),l(),f=r(),p={title:`Components/Switch`,component:u,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`]},color:{control:`select`,options:[`default`,`primary`,`secondary`,`success`,`warning`,`danger`]},variant:{control:`select`,options:[`default`,`outside`]},disabled:{control:`boolean`}}},m=e=>{let[t,n]=(0,d.useState)(e.value??!1);return(0,f.jsx)(u,{...e,value:t,onChange:t=>{n(t),e.onChange?.(t)}})},h={render:e=>(0,f.jsx)(m,{...e}),args:{label:`Automatic updates`}},g={render:e=>(0,f.jsx)(m,{...e}),args:{label:`Bluetooth`,activeLabel:`Enabled`,inactiveLabel:`Disabled`}},_={render:e=>(0,f.jsxs)(`div`,{className:`flex gap-8`,children:[(0,f.jsx)(m,{...e,color:`default`,label:`Default`,value:!0}),(0,f.jsx)(m,{...e,color:`primary`,label:`Primary`,value:!0}),(0,f.jsx)(m,{...e,color:`secondary`,label:`Secondary`,value:!0}),(0,f.jsx)(m,{...e,color:`success`,label:`Success`,value:!0}),(0,f.jsx)(m,{...e,color:`warning`,label:`Warning`,value:!0}),(0,f.jsx)(m,{...e,color:`danger`,label:`Danger`,value:!0})]})},v={render:e=>(0,f.jsxs)(`div`,{className:`flex gap-8`,children:[(0,f.jsx)(m,{...e,size:`sm`,label:`Small`,value:!0}),(0,f.jsx)(m,{...e,size:`md`,label:`Medium`,value:!0}),(0,f.jsx)(m,{...e,size:`lg`,label:`Large`,value:!0})]})},y={render:e=>(0,f.jsx)(m,{...e}),args:{label:`Dark mode`,startContent:(0,f.jsx)(s,{className:`w-3 h-3`,"aria-hidden":!0}),endContent:(0,f.jsx)(o,{className:`w-3 h-3`,"aria-hidden":!0})}},b={render:e=>(0,f.jsx)(m,{...e}),args:{label:`Custom thumb icons`,thumbIcon:e=>e?(0,f.jsx)(c,{className:`w-3 h-3`,"aria-hidden":!0}):(0,f.jsx)(a,{className:`w-3 h-3`,"aria-hidden":!0})}},x={render:e=>(0,f.jsxs)(`div`,{className:`flex gap-8 w-[300px]`,children:[(0,f.jsx)(m,{...e,label:`Disabled (Off)`,disabled:!0,value:!1}),(0,f.jsx)(m,{...e,label:`Disabled (On)`,disabled:!0,value:!0})]})},S={render:e=>(0,f.jsx)(m,{...e}),args:{label:`Error Switch`,error:`This field is required`,touched:!0}},C={render:e=>(0,f.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,f.jsxs)(`div`,{className:`flex gap-8`,children:[(0,f.jsx)(m,{...e,variant:`outside`,size:`sm`,label:`Small Outside`,value:!0}),(0,f.jsx)(m,{...e,variant:`outside`,size:`md`,label:`Medium Outside`,value:!0}),(0,f.jsx)(m,{...e,variant:`outside`,size:`lg`,label:`Large Outside`,value:!0})]}),(0,f.jsxs)(`div`,{className:`flex gap-8`,children:[(0,f.jsx)(m,{...e,variant:`outside`,color:`default`,label:`Default`,value:!0}),(0,f.jsx)(m,{...e,variant:`outside`,color:`primary`,label:`Primary`,value:!0}),(0,f.jsx)(m,{...e,variant:`outside`,color:`secondary`,label:`Secondary`,value:!0}),(0,f.jsx)(m,{...e,variant:`outside`,color:`success`,label:`Success`,value:!0}),(0,f.jsx)(m,{...e,variant:`outside`,color:`warning`,label:`Warning`,value:!0}),(0,f.jsx)(m,{...e,variant:`outside`,color:`danger`,label:`Danger`,value:!0})]})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <SwitchWithState {...args} />,
  args: {
    label: "Automatic updates"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <SwitchWithState {...args} />,
  args: {
    label: "Bluetooth",
    activeLabel: "Enabled",
    inactiveLabel: "Disabled"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex gap-8">
      <SwitchWithState {...args} color="default" label="Default" value={true} />
      <SwitchWithState {...args} color="primary" label="Primary" value={true} />
      <SwitchWithState {...args} color="secondary" label="Secondary" value={true} />
      <SwitchWithState {...args} color="success" label="Success" value={true} />
      <SwitchWithState {...args} color="warning" label="Warning" value={true} />
      <SwitchWithState {...args} color="danger" label="Danger" value={true} />
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex gap-8">
      <SwitchWithState {...args} size="sm" label="Small" value={true} />
      <SwitchWithState {...args} size="md" label="Medium" value={true} />
      <SwitchWithState {...args} size="lg" label="Large" value={true} />
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <SwitchWithState {...args} />,
  args: {
    label: "Dark mode",
    startContent: <FaMoon className="w-3 h-3" aria-hidden />,
    endContent: <FaSun className="w-3 h-3" aria-hidden />
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <SwitchWithState {...args} />,
  args: {
    label: "Custom thumb icons",
    thumbIcon: (checked: boolean) => checked ? <FaCheck className="w-3 h-3" aria-hidden /> : <FaXmark className="w-3 h-3" aria-hidden />
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex gap-8 w-[300px]">
      <SwitchWithState {...args} label="Disabled (Off)" disabled={true} value={false} />
      <SwitchWithState {...args} label="Disabled (On)" disabled={true} value={true} />
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <SwitchWithState {...args} />,
  args: {
    label: "Error Switch",
    error: "This field is required",
    touched: true
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-6">
      <div className="flex gap-8">
        <SwitchWithState {...args} variant="outside" size="sm" label="Small Outside" value={true} />
        <SwitchWithState {...args} variant="outside" size="md" label="Medium Outside" value={true} />
        <SwitchWithState {...args} variant="outside" size="lg" label="Large Outside" value={true} />
      </div>
      <div className="flex gap-8">
        <SwitchWithState {...args} variant="outside" color="default" label="Default" value={true} />
        <SwitchWithState {...args} variant="outside" color="primary" label="Primary" value={true} />
        <SwitchWithState {...args} variant="outside" color="secondary" label="Secondary" value={true} />
        <SwitchWithState {...args} variant="outside" color="success" label="Success" value={true} />
        <SwitchWithState {...args} variant="outside" color="warning" label="Warning" value={true} />
        <SwitchWithState {...args} variant="outside" color="danger" label="Danger" value={true} />
      </div>
    </div>
}`,...C.parameters?.docs?.source}}},w=[`Default`,`WithLabels`,`Colors`,`Sizes`,`WithIcons`,`ThumbIcons`,`Disabled`,`WithError`,`OutsideVariant`]}))();export{_ as Colors,h as Default,x as Disabled,C as OutsideVariant,v as Sizes,b as ThumbIcons,S as WithError,y as WithIcons,g as WithLabels,w as __namedExportsOrder,p as default};