import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./iframe-BzRfQavU.js";import{U as n,t as r}from"./ui-sUaI0YKE.js";var i,a,o,s,c,l,u,d,f;e((()=>{r(),i=t(),a={title:`Components/Spinner`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{color:{control:`select`,options:[`default`,`primary`,`secondary`,`success`,`warning`,`danger`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},variant:{control:`select`,options:[`default`,`simple`,`gradient`,`spinner`,`wave`,`dots`]}}},o={args:{color:`primary`,size:`md`,variant:`default`}},s={render:e=>(0,i.jsxs)(`div`,{className:`flex gap-6 items-center`,children:[(0,i.jsx)(n,{...e,size:`sm`}),(0,i.jsx)(n,{...e,size:`md`}),(0,i.jsx)(n,{...e,size:`lg`})]})},c={render:e=>(0,i.jsxs)(`div`,{className:`flex gap-6 items-center`,children:[(0,i.jsx)(n,{...e,color:`default`}),(0,i.jsx)(n,{...e,color:`primary`}),(0,i.jsx)(n,{...e,color:`secondary`}),(0,i.jsx)(n,{...e,color:`success`}),(0,i.jsx)(n,{...e,color:`warning`}),(0,i.jsx)(n,{...e,color:`danger`})]})},l={args:{color:`warning`,label:`Loading...`}},u={render:e=>(0,i.jsxs)(`div`,{className:`flex gap-6 items-center`,children:[(0,i.jsx)(n,{...e,color:`default`,label:`Default`}),(0,i.jsx)(n,{...e,color:`primary`,label:`Primary`}),(0,i.jsx)(n,{...e,color:`secondary`,label:`Secondary`}),(0,i.jsx)(n,{...e,color:`success`,label:`Success`}),(0,i.jsx)(n,{...e,color:`warning`,label:`Warning`}),(0,i.jsx)(n,{...e,color:`danger`,label:`Danger`})]})},d={render:e=>(0,i.jsxs)(`div`,{className:`flex gap-8 items-center justify-center p-4`,children:[(0,i.jsxs)(`div`,{className:`flex flex-col items-center justify-between h-20`,children:[(0,i.jsx)(n,{...e,variant:`default`}),(0,i.jsx)(`span`,{className:`text-xs font-semibold text-neutral-500 mt-2`,children:`default`})]}),(0,i.jsxs)(`div`,{className:`flex flex-col items-center justify-between h-20`,children:[(0,i.jsx)(n,{...e,variant:`simple`}),(0,i.jsx)(`span`,{className:`text-xs font-semibold text-neutral-500 mt-2`,children:`simple`})]}),(0,i.jsxs)(`div`,{className:`flex flex-col items-center justify-between h-20`,children:[(0,i.jsx)(n,{...e,variant:`gradient`}),(0,i.jsx)(`span`,{className:`text-xs font-semibold text-neutral-500 mt-2`,children:`gradient`})]}),(0,i.jsxs)(`div`,{className:`flex flex-col items-center justify-between h-20`,children:[(0,i.jsx)(n,{...e,variant:`spinner`}),(0,i.jsx)(`span`,{className:`text-xs font-semibold text-neutral-500 mt-2`,children:`spinner`})]}),(0,i.jsxs)(`div`,{className:`flex flex-col items-center justify-between h-20`,children:[(0,i.jsx)(n,{...e,variant:`wave`}),(0,i.jsx)(`span`,{className:`text-xs font-semibold text-neutral-500 mt-2`,children:`wave`})]}),(0,i.jsxs)(`div`,{className:`flex flex-col items-center justify-between h-20`,children:[(0,i.jsx)(n,{...e,variant:`dots`}),(0,i.jsx)(`span`,{className:`text-xs font-semibold text-neutral-500 mt-2`,children:`dots`})]})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    color: "primary",
    size: "md",
    variant: "default"
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex gap-6 items-center">
      <Spinner {...args} size="sm" />
      <Spinner {...args} size="md" />
      <Spinner {...args} size="lg" />
    </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex gap-6 items-center">
      <Spinner {...args} color="default" />
      <Spinner {...args} color="primary" />
      <Spinner {...args} color="secondary" />
      <Spinner {...args} color="success" />
      <Spinner {...args} color="warning" />
      <Spinner {...args} color="danger" />
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    color: "warning",
    label: "Loading..."
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex gap-6 items-center">
      <Spinner {...args} color="default" label="Default" />
      <Spinner {...args} color="primary" label="Primary" />
      <Spinner {...args} color="secondary" label="Secondary" />
      <Spinner {...args} color="success" label="Success" />
      <Spinner {...args} color="warning" label="Warning" />
      <Spinner {...args} color="danger" label="Danger" />
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex gap-8 items-center justify-center p-4">
      <div className="flex flex-col items-center justify-between h-20">
        <Spinner {...args} variant="default" />
        <span className="text-xs font-semibold text-neutral-500 mt-2">default</span>
      </div>
      <div className="flex flex-col items-center justify-between h-20">
        <Spinner {...args} variant="simple" />
        <span className="text-xs font-semibold text-neutral-500 mt-2">simple</span>
      </div>
      <div className="flex flex-col items-center justify-between h-20">
        <Spinner {...args} variant="gradient" />
        <span className="text-xs font-semibold text-neutral-500 mt-2">gradient</span>
      </div>
      <div className="flex flex-col items-center justify-between h-20">
        <Spinner {...args} variant="spinner" />
        <span className="text-xs font-semibold text-neutral-500 mt-2">spinner</span>
      </div>
      <div className="flex flex-col items-center justify-between h-20">
        <Spinner {...args} variant="wave" />
        <span className="text-xs font-semibold text-neutral-500 mt-2">wave</span>
      </div>
      <div className="flex flex-col items-center justify-between h-20">
        <Spinner {...args} variant="dots" />
        <span className="text-xs font-semibold text-neutral-500 mt-2">dots</span>
      </div>
    </div>
}`,...d.parameters?.docs?.source}}},f=[`Default`,`Sizes`,`Colors`,`WithLabel`,`LabelColors`,`Variants`]}))();export{c as Colors,o as Default,u as LabelColors,s as Sizes,d as Variants,l as WithLabel,f as __namedExportsOrder,a as default};