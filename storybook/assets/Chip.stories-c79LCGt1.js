import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./iframe-BSsvUtib.js";import{Dt as n,V as r,lt as i,t as a,tt as o}from"./ui-C8puiJZM.js";var s,c,l,u,d,f,p,m,h,g,_;e((()=>{n(),a(),s=t(),c={title:`Components/Chip`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`solid`,`bordered`,`light`,`flat`,`faded`,`shadow`,`dot`]},color:{control:`select`,options:[`default`,`primary`,`secondary`,`success`,`warning`,`danger`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},radius:{control:`select`,options:[`none`,`sm`,`md`,`lg`,`full`]},isDisabled:{control:`boolean`}}},l={args:{children:`Chip`}},u={render:e=>(0,s.jsxs)(`div`,{className:`flex justify-center items-center gap-4 w-[800px]`,children:[(0,s.jsx)(r,{...e,color:`default`,children:`Default`}),(0,s.jsx)(r,{...e,color:`primary`,children:`Primary`}),(0,s.jsx)(r,{...e,color:`secondary`,children:`Secondary`}),(0,s.jsx)(r,{...e,color:`success`,children:`Success`}),(0,s.jsx)(r,{...e,color:`warning`,children:`Warning`}),(0,s.jsx)(r,{...e,color:`danger`,children:`Danger`})]})},d={render:e=>(0,s.jsxs)(`div`,{className:`flex justify-center items-center gap-4 w-[800px]`,children:[(0,s.jsx)(r,{...e,variant:`solid`,children:`Solid`}),(0,s.jsx)(r,{...e,variant:`bordered`,children:`Bordered`}),(0,s.jsx)(r,{...e,variant:`light`,children:`Light`}),(0,s.jsx)(r,{...e,variant:`flat`,children:`Flat`}),(0,s.jsx)(r,{...e,variant:`faded`,children:`Faded`}),(0,s.jsx)(r,{...e,variant:`shadow`,children:`Shadow`}),(0,s.jsx)(r,{...e,variant:`dot`,children:`Dot`})]})},f={render:e=>(0,s.jsxs)(`div`,{className:`flex justify-center items-center gap-4 w-[800px]`,children:[(0,s.jsx)(r,{...e,size:`sm`,children:`Small`}),(0,s.jsx)(r,{...e,size:`md`,children:`Medium`}),(0,s.jsx)(r,{...e,size:`lg`,children:`Large`})]})},p={render:e=>(0,s.jsxs)(`div`,{className:`flex justify-center items-center gap-4 w-[800px]`,children:[(0,s.jsx)(r,{...e,radius:`none`,children:`None`}),(0,s.jsx)(r,{...e,radius:`sm`,children:`Small`}),(0,s.jsx)(r,{...e,radius:`md`,children:`Medium`}),(0,s.jsx)(r,{...e,radius:`lg`,children:`Large`}),(0,s.jsx)(r,{...e,radius:`full`,children:`Full`})]})},m={render:e=>(0,s.jsxs)(`div`,{className:`flex gap-4 items-center`,children:[(0,s.jsx)(r,{...e,color:`success`,endContent:(0,s.jsx)(o,{className:`w-4 h-4`,"aria-hidden":!0}),children:`Take a photo`}),(0,s.jsx)(r,{...e,color:`danger`,variant:`bordered`,startContent:(0,s.jsx)(i,{className:`w-4 h-4`,"aria-hidden":!0}),children:`Delete user`})]})},h={args:{children:`Closable`,color:`primary`,onClose:()=>console.log(`Close clicked`)}},g={args:{children:`Disabled`,color:`primary`,isDisabled:!0}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Chip"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex justify-center items-center gap-4 w-[800px]">
      <Chip {...args} color="default">Default</Chip>
      <Chip {...args} color="primary">Primary</Chip>
      <Chip {...args} color="secondary">Secondary</Chip>
      <Chip {...args} color="success">Success</Chip>
      <Chip {...args} color="warning">Warning</Chip>
      <Chip {...args} color="danger">Danger</Chip>
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex justify-center items-center gap-4 w-[800px]">
      <Chip {...args} variant="solid">Solid</Chip>
      <Chip {...args} variant="bordered">Bordered</Chip>
      <Chip {...args} variant="light">Light</Chip>
      <Chip {...args} variant="flat">Flat</Chip>
      <Chip {...args} variant="faded">Faded</Chip>
      <Chip {...args} variant="shadow">Shadow</Chip>
      <Chip {...args} variant="dot">Dot</Chip>
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex justify-center items-center gap-4 w-[800px]">
      <Chip {...args} size="sm">Small</Chip>
      <Chip {...args} size="md">Medium</Chip>
      <Chip {...args} size="lg">Large</Chip>
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex justify-center items-center gap-4 w-[800px]">
      <Chip {...args} radius="none">None</Chip>
      <Chip {...args} radius="sm">Small</Chip>
      <Chip {...args} radius="md">Medium</Chip>
      <Chip {...args} radius="lg">Large</Chip>
      <Chip {...args} radius="full">Full</Chip>
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4 items-center">
      <Chip {...args} color="success" endContent={<FaCamera className="w-4 h-4" aria-hidden />}>
        Take a photo
      </Chip>
      <Chip {...args} color="danger" variant="bordered" startContent={<FaHeart className="w-4 h-4" aria-hidden />}>
        Delete user
      </Chip>
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Closable",
    color: "primary",
    onClose: () => console.log("Close clicked")
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Disabled",
    color: "primary",
    isDisabled: true
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`Colors`,`Variants`,`Sizes`,`Radiuses`,`StartAndEndContent`,`Closable`,`Disabled`]}))();export{h as Closable,u as Colors,l as Default,g as Disabled,p as Radiuses,f as Sizes,m as StartAndEndContent,d as Variants,_ as __namedExportsOrder,c as default};