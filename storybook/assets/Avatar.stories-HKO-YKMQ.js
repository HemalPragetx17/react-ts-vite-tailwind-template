import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./iframe-fS8lWa8-.js";import{Dt as n,K as r,nt as i,t as a}from"./ui-B0lacm4L.js";var o,s,c,l,u,d,f,p,m,h,g;e((()=>{n(),a(),o=t(),s={title:`Components/Avatar`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`]},radius:{control:`select`,options:[`none`,`sm`,`md`,`lg`,`full`]},color:{control:`select`,options:[`default`,`primary`,`secondary`,`success`,`warning`,`danger`]},isBordered:{control:`boolean`},isDisabled:{control:`boolean`},showFallback:{control:`boolean`},src:{control:!1}}},c=`https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&h=256&q=80`,l={args:{src:c,name:`Jane Doe`,size:`md`,radius:`full`}},u={render:e=>(0,o.jsxs)(`div`,{className:`flex items-end gap-4`,children:[(0,o.jsx)(r,{...e,size:`sm`,src:c,name:`Small`}),(0,o.jsx)(r,{...e,size:`md`,src:c,name:`Medium`}),(0,o.jsx)(r,{...e,size:`lg`,src:c,name:`Large`})]})},d={render:e=>(0,o.jsxs)(`div`,{className:`flex gap-4`,children:[(0,o.jsx)(r,{...e,radius:`none`,src:c,name:`None`}),(0,o.jsx)(r,{...e,radius:`sm`,src:c,name:`Small`}),(0,o.jsx)(r,{...e,radius:`md`,src:c,name:`Medium`}),(0,o.jsx)(r,{...e,radius:`lg`,src:c,name:`Large`}),(0,o.jsx)(r,{...e,radius:`full`,src:c,name:`Full`})]})},f={render:e=>(0,o.jsxs)(`div`,{className:`flex gap-4`,children:[(0,o.jsx)(r,{...e,color:`default`,name:`Default User`,showFallback:!0}),(0,o.jsx)(r,{...e,color:`primary`,name:`Primary User`,showFallback:!0}),(0,o.jsx)(r,{...e,color:`secondary`,name:`Secondary User`,showFallback:!0}),(0,o.jsx)(r,{...e,color:`success`,name:`Success User`,showFallback:!0}),(0,o.jsx)(r,{...e,color:`warning`,name:`Warning User`,showFallback:!0}),(0,o.jsx)(r,{...e,color:`danger`,name:`Danger User`,showFallback:!0})]})},p={render:e=>(0,o.jsxs)(`div`,{className:`flex gap-6 p-4 bg-neutral-50 dark:bg-neutral-900 rounded-xl`,children:[(0,o.jsx)(r,{...e,isBordered:!0,color:`default`,src:c}),(0,o.jsx)(r,{...e,isBordered:!0,color:`primary`,src:c}),(0,o.jsx)(r,{...e,isBordered:!0,color:`secondary`,src:c}),(0,o.jsx)(r,{...e,isBordered:!0,color:`success`,src:c}),(0,o.jsx)(r,{...e,isBordered:!0,color:`warning`,src:c}),(0,o.jsx)(r,{...e,isBordered:!0,color:`danger`,src:c})]})},m={render:e=>(0,o.jsxs)(`div`,{className:`flex gap-4`,children:[(0,o.jsx)(r,{...e,name:`Albert Einstein`,color:`primary`}),(0,o.jsx)(r,{...e,name:`Marie Curie`,color:`secondary`}),(0,o.jsx)(r,{...e,color:`default`}),(0,o.jsx)(r,{...e,color:`success`,icon:(0,o.jsx)(i,{className:`w-5 h-5`,"aria-hidden":!0})})]})},h={render:e=>(0,o.jsxs)(`div`,{className:`flex gap-4`,children:[(0,o.jsx)(r,{...e,isDisabled:!0,src:c}),(0,o.jsx)(r,{...e,isDisabled:!0,name:`Albert Einstein`,color:`primary`}),(0,o.jsx)(r,{...e,isDisabled:!0,color:`default`})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    src: demoImage,
    name: "Jane Doe",
    size: "md",
    radius: "full"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex items-end gap-4">
      <Avatar {...args} size="sm" src={demoImage} name="Small" />
      <Avatar {...args} size="md" src={demoImage} name="Medium" />
      <Avatar {...args} size="lg" src={demoImage} name="Large" />
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4">
      <Avatar {...args} radius="none" src={demoImage} name="None" />
      <Avatar {...args} radius="sm" src={demoImage} name="Small" />
      <Avatar {...args} radius="md" src={demoImage} name="Medium" />
      <Avatar {...args} radius="lg" src={demoImage} name="Large" />
      <Avatar {...args} radius="full" src={demoImage} name="Full" />
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4">
      <Avatar {...args} color="default" name="Default User" showFallback />
      <Avatar {...args} color="primary" name="Primary User" showFallback />
      <Avatar {...args} color="secondary" name="Secondary User" showFallback />
      <Avatar {...args} color="success" name="Success User" showFallback />
      <Avatar {...args} color="warning" name="Warning User" showFallback />
      <Avatar {...args} color="danger" name="Danger User" showFallback />
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex gap-6 p-4 bg-neutral-50 dark:bg-neutral-900 rounded-xl">
      <Avatar {...args} isBordered color="default" src={demoImage} />
      <Avatar {...args} isBordered color="primary" src={demoImage} />
      <Avatar {...args} isBordered color="secondary" src={demoImage} />
      <Avatar {...args} isBordered color="success" src={demoImage} />
      <Avatar {...args} isBordered color="warning" src={demoImage} />
      <Avatar {...args} isBordered color="danger" src={demoImage} />
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4">
      {/* Fallback Name Initials */}
      <Avatar {...args} name="Albert Einstein" color="primary" />
      <Avatar {...args} name="Marie Curie" color="secondary" />
      
      {/* Fallback Silhouette Icon */}
      <Avatar {...args} color="default" />

      {/* Fallback Custom Icon */}
      <Avatar {...args} color="success" icon={<FaCheck className="w-5 h-5" aria-hidden />} />
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4">
      <Avatar {...args} isDisabled src={demoImage} />
      <Avatar {...args} isDisabled name="Albert Einstein" color="primary" />
      <Avatar {...args} isDisabled color="default" />
    </div>
}`,...h.parameters?.docs?.source}}},g=[`Default`,`Sizes`,`Radiuses`,`Colors`,`Bordered`,`Fallbacks`,`Disabled`]}))();export{p as Bordered,f as Colors,l as Default,h as Disabled,m as Fallbacks,d as Radiuses,u as Sizes,g as __namedExportsOrder,s as default};