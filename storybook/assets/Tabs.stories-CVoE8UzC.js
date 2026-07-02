import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./iframe-fS8lWa8-.js";import{Dt as n,_ as r,dt as i,gt as a,t as o,v as s}from"./ui-B0lacm4L.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{n(),o(),c=t(),l=`w-4 h-4`,u={title:`Components/Tabs`,component:s,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`solid`,`bordered`,`light`,`underlined`]},color:{control:`select`,options:[`default`,`primary`,`secondary`,`success`,`warning`,`danger`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},radius:{control:`select`,options:[`none`,`sm`,`md`,`lg`,`full`]},placement:{control:`select`,options:[`top`,`bottom`,`start`,`end`]},isVertical:{control:`boolean`},isDisabled:{control:`boolean`},disabledKeys:{control:`object`},items:{control:!1}}},d=[{id:`photos`,label:`Photos`,content:(0,c.jsx)(`div`,{className:`p-4`,children:`Photos content here`})},{id:`music`,label:`Music`,content:(0,c.jsx)(`div`,{className:`p-4`,children:`Music content here`})},{id:`videos`,label:`Videos`,content:(0,c.jsx)(`div`,{className:`p-4`,children:`Videos content here`})}],f={args:{items:d}},p={render:e=>(0,c.jsxs)(`div`,{className:`flex flex-col gap-4 w-[600px]`,children:[(0,c.jsxs)(`div`,{className:`flex gap-4`,children:[(0,c.jsx)(s,{...e,variant:`solid`,items:d}),(0,c.jsx)(s,{...e,variant:`bordered`,items:d})]}),(0,c.jsxs)(`div`,{className:`flex gap-4`,children:[(0,c.jsx)(s,{...e,variant:`light`,items:d}),(0,c.jsx)(s,{...e,variant:`underlined`,items:d})]})]})},m={render:e=>(0,c.jsxs)(`div`,{className:`flex flex-col gap-4 w-[600px]`,children:[(0,c.jsxs)(`div`,{className:`flex gap-4`,children:[(0,c.jsx)(s,{...e,color:`default`,items:d}),(0,c.jsx)(s,{...e,color:`primary`,items:d})]}),(0,c.jsxs)(`div`,{className:`flex gap-4`,children:[(0,c.jsx)(s,{...e,color:`secondary`,items:d}),(0,c.jsx)(s,{...e,color:`success`,items:d})]}),(0,c.jsxs)(`div`,{className:`flex gap-4`,children:[(0,c.jsx)(s,{...e,color:`warning`,items:d}),(0,c.jsx)(s,{...e,color:`danger`,items:d})]})]})},h={render:e=>(0,c.jsxs)(`div`,{className:`flex gap-4 w-[800px]`,children:[(0,c.jsx)(s,{...e,size:`sm`,items:d}),(0,c.jsx)(s,{...e,size:`md`,items:d}),(0,c.jsx)(s,{...e,size:`lg`,items:d})]})},g={render:e=>(0,c.jsxs)(`div`,{className:`flex flex-col gap-4 w-[600px]`,children:[(0,c.jsxs)(`div`,{className:`flex gap-4`,children:[(0,c.jsx)(s,{...e,radius:`none`,items:d}),(0,c.jsx)(s,{...e,radius:`sm`,items:d})]}),(0,c.jsxs)(`div`,{className:`flex gap-4`,children:[(0,c.jsx)(s,{...e,radius:`md`,items:d}),(0,c.jsx)(s,{...e,radius:`lg`,items:d})]}),(0,c.jsx)(s,{...e,radius:`full`,items:d})]})},_={args:{items:d,isVertical:!0,variant:`solid`}},v={args:{items:[{id:`photos`,label:`Photos`,icon:(0,c.jsx)(i,{className:l,"aria-hidden":!0}),content:(0,c.jsx)(`div`,{className:`p-4`,children:`Photos content`})},{id:`music`,label:`Music`,icon:(0,c.jsx)(a,{className:l,"aria-hidden":!0}),content:(0,c.jsx)(`div`,{className:`p-4`,children:`Music content`})}]}},y={args:{items:[{id:`all`,label:`All`,count:24,content:(0,c.jsx)(`div`,{className:`p-4`,children:`All items`})},{id:`active`,label:`Active`,count:12,content:(0,c.jsx)(`div`,{className:`p-4`,children:`Active items`})},{id:`archived`,label:`Archived`,count:5,content:(0,c.jsx)(`div`,{className:`p-4`,children:`Archived items`})}]}},b={args:{items:d,isDisabled:!0}},x={args:{items:d,disabledKeys:[`music`]}},S={render:e=>(0,c.jsxs)(s,{...e,defaultSelectedKey:`music`,children:[(0,c.jsx)(r,{title:`Photos`,icon:(0,c.jsx)(i,{className:l,"aria-hidden":!0}),children:(0,c.jsx)(`div`,{className:`p-4 text-neutral-600 dark:text-neutral-300`,children:`This is the Photos tab panel. You can easily pass React children here.`})},`photos`),(0,c.jsx)(r,{title:`Music`,icon:(0,c.jsx)(a,{className:l,"aria-hidden":!0}),count:5,children:(0,c.jsx)(`div`,{className:`p-4 text-neutral-600 dark:text-neutral-300`,children:`This is the Music tab panel. This tab also has an optional count badge.`})},`music`),(0,c.jsx)(r,{title:`Videos`,disabled:!0,children:(0,c.jsx)(`div`,{className:`p-4 text-neutral-600 dark:text-neutral-300`,children:`This is the Videos tab panel. This tab is disabled.`})},`videos`)]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-4 w-[600px]">
      <div className="flex gap-4">
        <Tabs {...args} variant="solid" items={defaultItems} />
        <Tabs {...args} variant="bordered" items={defaultItems} />
      </div>
      <div className="flex gap-4">
        <Tabs {...args} variant="light" items={defaultItems} />
        <Tabs {...args} variant="underlined" items={defaultItems} />
      </div>
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-4 w-[600px]">
      <div className="flex gap-4">
        <Tabs {...args} color="default" items={defaultItems} />
        <Tabs {...args} color="primary" items={defaultItems} />
      </div>
      <div className="flex gap-4">
        <Tabs {...args} color="secondary" items={defaultItems} />
        <Tabs {...args} color="success" items={defaultItems} />
      </div>
      <div className="flex gap-4">
        <Tabs {...args} color="warning" items={defaultItems} />
        <Tabs {...args} color="danger" items={defaultItems} />
      </div>
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4 w-[800px]">
      <Tabs {...args} size="sm" items={defaultItems} />
      <Tabs {...args} size="md" items={defaultItems} />
      <Tabs {...args} size="lg" items={defaultItems} />
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-4 w-[600px]">
      <div className="flex gap-4">
        <Tabs {...args} radius="none" items={defaultItems} />
        <Tabs {...args} radius="sm" items={defaultItems} />
      </div>
      <div className="flex gap-4">
        <Tabs {...args} radius="md" items={defaultItems} />
        <Tabs {...args} radius="lg" items={defaultItems} />
      </div>
      <Tabs {...args} radius="full" items={defaultItems} />
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    isVertical: true,
    variant: "solid"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: "photos",
      label: "Photos",
      icon: <FaImage className={tabIconClass} aria-hidden />,
      content: <div className="p-4">Photos content</div>
    }, {
      id: "music",
      label: "Music",
      icon: <FaMusic className={tabIconClass} aria-hidden />,
      content: <div className="p-4">Music content</div>
    }]
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: "all",
      label: "All",
      count: 24,
      content: <div className="p-4">All items</div>
    }, {
      id: "active",
      label: "Active",
      count: 12,
      content: <div className="p-4">Active items</div>
    }, {
      id: "archived",
      label: "Archived",
      count: 5,
      content: <div className="p-4">Archived items</div>
    }]
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    isDisabled: true
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    disabledKeys: ["music"]
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <Tabs {...args} defaultSelectedKey="music">
      <Tab key="photos" title="Photos" icon={<FaImage className={tabIconClass} aria-hidden />}>
        <div className="p-4 text-neutral-600 dark:text-neutral-300">
          This is the Photos tab panel. You can easily pass React children here.
        </div>
      </Tab>
      <Tab key="music" title="Music" icon={<FaMusic className={tabIconClass} aria-hidden />} count={5}>
        <div className="p-4 text-neutral-600 dark:text-neutral-300">
          This is the Music tab panel. This tab also has an optional count badge.
        </div>
      </Tab>
      <Tab key="videos" title="Videos" disabled>
        <div className="p-4 text-neutral-600 dark:text-neutral-300">
          This is the Videos tab panel. This tab is disabled.
        </div>
      </Tab>
    </Tabs>
}`,...S.parameters?.docs?.source}}},C=[`Default`,`Variants`,`Colors`,`Sizes`,`Radiuses`,`Vertical`,`WithIcons`,`WithCount`,`Disabled`,`DisabledKeys`,`Compound`]}))();export{m as Colors,S as Compound,f as Default,b as Disabled,x as DisabledKeys,g as Radiuses,h as Sizes,p as Variants,_ as Vertical,y as WithCount,v as WithIcons,C as __namedExportsOrder,u as default};