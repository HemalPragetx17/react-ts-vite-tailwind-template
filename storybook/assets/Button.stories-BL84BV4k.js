import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./iframe-BzRfQavU.js";import{Ct as n,Dt as r,H as i,U as a,lt as o,t as s,tt as c}from"./ui-sUaI0YKE.js";var l,u,d,f,p,m,h,g,_,v,y,b,x;e((()=>{r(),s(),l=t(),u={title:`Components/Button`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`solid`,`bordered`,`light`,`flat`,`faded`,`shadow`,`ghost`]},color:{control:`select`,options:[`primary`,`secondary`,`success`,`warning`,`danger`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},radius:{control:`select`,options:[`none`,`sm`,`md`,`lg`,`full`]},isLoading:{control:`boolean`},spinner:{control:!1},fullWidth:{control:`boolean`},disabled:{control:`boolean`},isIconOnly:{control:`boolean`},startContent:{control:!1},endContent:{control:!1}}},d={args:{children:`Button`}},f={render:e=>(0,l.jsxs)(`div`,{className:`flex flex-wrap gap-4 items-center`,children:[(0,l.jsx)(i,{...e,variant:`solid`,children:`Solid`}),(0,l.jsx)(i,{...e,variant:`bordered`,children:`Bordered`}),(0,l.jsx)(i,{...e,variant:`light`,children:`Light`}),(0,l.jsx)(i,{...e,variant:`flat`,children:`Flat`}),(0,l.jsx)(i,{...e,variant:`faded`,children:`Faded`}),(0,l.jsx)(i,{...e,variant:`shadow`,children:`Shadow`}),(0,l.jsx)(i,{...e,variant:`ghost`,children:`Ghost`})]})},p={render:e=>(0,l.jsxs)(`div`,{className:`flex gap-4 items-center`,children:[(0,l.jsx)(i,{...e,size:`sm`,children:`Small`}),(0,l.jsx)(i,{...e,size:`md`,children:`Medium`}),(0,l.jsx)(i,{...e,size:`lg`,children:`Large`})]})},m={render:e=>(0,l.jsxs)(`div`,{className:`flex gap-4 items-center`,children:[(0,l.jsx)(i,{...e,radius:`full`,children:`Full`}),(0,l.jsx)(i,{...e,radius:`lg`,children:`Large`}),(0,l.jsx)(i,{...e,radius:`md`,children:`Medium`}),(0,l.jsx)(i,{...e,radius:`sm`,children:`Small`}),(0,l.jsx)(i,{...e,radius:`none`,children:`None`})]})},h={render:e=>(0,l.jsx)(l.Fragment,{children:[`solid`,`bordered`,`light`,`flat`,`faded`,`shadow`,`ghost`].map(t=>(0,l.jsxs)(`div`,{className:`flex flex-wrap gap-4 items-center mb-5`,children:[(0,l.jsx)(i,{...e,variant:t,color:`default`,children:`Default`}),(0,l.jsx)(i,{...e,variant:t,color:`primary`,children:`Primary`}),(0,l.jsx)(i,{...e,variant:t,color:`secondary`,children:`Secondary`}),(0,l.jsx)(i,{...e,variant:t,color:`success`,children:`Success`}),(0,l.jsx)(i,{...e,variant:t,color:`warning`,children:`Warning`}),(0,l.jsx)(i,{...e,variant:t,color:`danger`,children:`Danger`})]},t))})},g={render:e=>(0,l.jsxs)(`div`,{className:`flex gap-4 items-center`,children:[(0,l.jsx)(i,{...e,color:`success`,endContent:(0,l.jsx)(c,{className:`w-4 h-4`,"aria-hidden":!0}),children:`Take a photo`}),(0,l.jsx)(i,{...e,color:`danger`,variant:`bordered`,startContent:(0,l.jsx)(n,{className:`w-4 h-4`,"aria-hidden":!0}),children:`Delete user`})]})},_={render:e=>(0,l.jsxs)(`div`,{className:`flex gap-4 items-center`,children:[(0,l.jsx)(i,{...e,isLoading:!0,color:`primary`,children:`Loading`}),(0,l.jsx)(i,{...e,isLoading:!0,color:`primary`,spinner:(0,l.jsx)(a,{variant:`simple`,size:`sm`,color:`current`}),children:`Click me`})]})},v={args:{children:`Full Width Button`,color:`primary`,fullWidth:!0},parameters:{layout:`padded`}},y={render:e=>(0,l.jsxs)(`div`,{className:`flex gap-4 items-center`,children:[(0,l.jsx)(i,{...e,isIconOnly:!0,"aria-label":`Like`,color:`danger`,children:(0,l.jsx)(o,{className:`w-4 h-4`,"aria-hidden":!0})}),(0,l.jsx)(i,{...e,isIconOnly:!0,"aria-label":`Take a photo`,color:`warning`,variant:`faded`,children:(0,l.jsx)(c,{className:`w-4 h-4`,"aria-hidden":!0})})]})},b={args:{children:`Disabled Button`,disabled:!0}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Button"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap gap-4 items-center">
      <Button {...args} variant="solid">Solid</Button>
      <Button {...args} variant="bordered">Bordered</Button>
      <Button {...args} variant="light">Light</Button>
      <Button {...args} variant="flat">Flat</Button>
      <Button {...args} variant="faded">Faded</Button>
      <Button {...args} variant="shadow">Shadow</Button>
      <Button {...args} variant="ghost">Ghost</Button>
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4 items-center">
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="md">Medium</Button>
      <Button {...args} size="lg">Large</Button>
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4 items-center">
      <Button {...args} radius="full">Full</Button>
      <Button {...args} radius="lg">Large</Button>
      <Button {...args} radius="md">Medium</Button>
      <Button {...args} radius="sm">Small</Button>
      <Button {...args} radius="none">None</Button>
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <>
    {(["solid", "bordered", "light", "flat", "faded", "shadow", "ghost"] as const).map(variant => <div key={variant} className="flex flex-wrap gap-4 items-center mb-5">
        <Button {...args} variant={variant} color="default">Default</Button>
        <Button {...args} variant={variant} color="primary">Primary</Button>
        <Button {...args} variant={variant} color="secondary">Secondary</Button>
        <Button {...args} variant={variant} color="success">Success</Button>
        <Button {...args} variant={variant} color="warning">Warning</Button>
        <Button {...args} variant={variant} color="danger">Danger</Button>
      </div>)}
    </>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4 items-center">
      <Button {...args} color="success" endContent={<FaCamera className="w-4 h-4" aria-hidden />}>
        Take a photo
      </Button>
      <Button {...args} color="danger" variant="bordered" startContent={<FaUser className="w-4 h-4" aria-hidden />}>
        Delete user
      </Button>
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4 items-center">
      <Button {...args} isLoading color="primary">
        Loading
      </Button>
      <Button {...args} isLoading color="primary" spinner={<Spinner variant="simple" size="sm" color="current" />}>
        Click me
      </Button>
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Full Width Button",
    color: "primary",
    fullWidth: true
  },
  parameters: {
    layout: "padded"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4 items-center">
      <Button {...args} isIconOnly aria-label="Like" color="danger">
        <FaHeart className="w-4 h-4" aria-hidden />
      </Button>
      <Button {...args} isIconOnly aria-label="Take a photo" color="warning" variant="faded">
        <FaCamera className="w-4 h-4" aria-hidden />
      </Button>
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Disabled Button",
    disabled: true
  }
}`,...b.parameters?.docs?.source}}},x=[`Default`,`Variants`,`Sizes`,`Radiuses`,`Colors`,`StartAndEndContent`,`Loading`,`FullWidth`,`IconOnly`,`Disabled`]}))();export{h as Colors,d as Default,b as Disabled,v as FullWidth,y as IconOnly,_ as Loading,m as Radiuses,p as Sizes,g as StartAndEndContent,f as Variants,x as __namedExportsOrder,u as default};