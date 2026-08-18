import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./iframe-sOyJkj26.js";import{At as n,Nt as r,St as i,X as a,gt as o,kt as s,t as c,ut as l}from"./ui-DraYKXvF.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;e((()=>{r(),c(),u=t(),d={title:`Components/Breadcrumbs`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`]},color:{control:`select`,options:[`default`,`primary`,`secondary`,`success`,`warning`,`danger`]},variant:{control:`select`,options:[`solid`,`bordered`,`light`]},underline:{control:`select`,options:[`none`,`hover`,`always`,`active`,`focus`]},radius:{control:`select`,options:[`none`,`sm`,`md`,`lg`,`full`]},items:{control:!1}}},f=`w-3.5 h-3.5 text-neutral-500`,p=[{label:`Home`,path:`/`,isLast:!1,isClickable:!0},{label:`Products`,path:`/products`,isLast:!1,isClickable:!0},{label:`Electronics`,path:`/products/electronics`,isLast:!0,isClickable:!1}],m=[{label:`Home`,path:`/`,isLast:!1,isClickable:!0},{label:`Music`,path:`/music`,isLast:!1,isClickable:!0},{label:`Artist`,path:`/music/artist`,isLast:!1,isClickable:!0},{label:`Album`,path:`/music/artist/album`,isLast:!1,isClickable:!0},{label:`Song`,path:`/music/artist/album/song`,isLast:!0,isClickable:!1}],h=[{label:`Home`,path:`/`,isLast:!1,isClickable:!0,startContent:(0,u.jsx)(o,{className:f,"aria-hidden":!0})},{label:`Music`,path:`/music`,isLast:!1,isClickable:!0,startContent:(0,u.jsx)(i,{className:f,"aria-hidden":!0})},{label:`Artist`,path:`/music/artist`,isLast:!1,isClickable:!0,startContent:(0,u.jsx)(s,{className:f,"aria-hidden":!0})},{label:`Album`,path:`/music/artist/album`,isLast:!1,isClickable:!0,startContent:(0,u.jsx)(l,{className:f,"aria-hidden":!0})},{label:`Song`,path:`/music/artist/album/song`,isLast:!0,isClickable:!1,startContent:(0,u.jsx)(n,{className:f,"aria-hidden":!0})}],g={args:{items:p}},_={render:e=>(0,u.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`span`,{className:`text-xs font-semibold text-neutral-500 block mb-1`,children:`Solid`}),(0,u.jsx)(a,{...e,variant:`solid`,items:p})]}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`span`,{className:`text-xs font-semibold text-neutral-500 block mb-1`,children:`Bordered`}),(0,u.jsx)(a,{...e,variant:`bordered`,items:p})]}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`span`,{className:`text-xs font-semibold text-neutral-500 block mb-1`,children:`Light`}),(0,u.jsx)(a,{...e,variant:`light`,items:p})]})]})},v={render:e=>(0,u.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`span`,{className:`text-xs font-semibold text-neutral-500 block mb-1`,children:`Small (sm)`}),(0,u.jsx)(a,{...e,size:`sm`,items:p})]}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`span`,{className:`text-xs font-semibold text-neutral-500 block mb-1`,children:`Medium (md)`}),(0,u.jsx)(a,{...e,size:`md`,items:p})]}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`span`,{className:`text-xs font-semibold text-neutral-500 block mb-1`,children:`Large (lg)`}),(0,u.jsx)(a,{...e,size:`lg`,items:p})]})]})},y=[`default`,`primary`,`secondary`,`success`,`warning`,`danger`],b=e=>(0,u.jsx)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8`,children:y.map(t=>(0,u.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,u.jsx)(`span`,{className:`text-xs font-semibold text-foreground/50 capitalize`,children:t}),(0,u.jsx)(a,{...e,color:t,variant:`bordered`,items:m}),(0,u.jsx)(a,{...e,color:t,variant:`light`,items:m}),(0,u.jsx)(a,{...e,color:t,variant:`solid`,items:m}),(0,u.jsx)(a,{...e,color:t,variant:`solid`,isDisabled:!0,items:m})]},t))}),x={render:e=>(0,u.jsx)(`div`,{className:`p-6 bg-background rounded-xl`,children:b(e)})},S={render:e=>(0,u.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`span`,{className:`text-xs font-semibold text-neutral-500 block mb-1`,children:`None`}),(0,u.jsx)(a,{...e,radius:`none`,variant:`solid`,items:p})]}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`span`,{className:`text-xs font-semibold text-neutral-500 block mb-1`,children:`Small (sm)`}),(0,u.jsx)(a,{...e,radius:`sm`,variant:`solid`,items:p})]}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`span`,{className:`text-xs font-semibold text-neutral-500 block mb-1`,children:`Medium (md)`}),(0,u.jsx)(a,{...e,radius:`md`,variant:`solid`,items:p})]}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`span`,{className:`text-xs font-semibold text-neutral-500 block mb-1`,children:`Large (lg)`}),(0,u.jsx)(a,{...e,radius:`lg`,variant:`solid`,items:p})]}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`span`,{className:`text-xs font-semibold text-neutral-500 block mb-1`,children:`Full`}),(0,u.jsx)(a,{...e,radius:`full`,variant:`solid`,items:p})]})]})},C={render:e=>(0,u.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`span`,{className:`text-xs font-semibold text-neutral-500 block mb-1`,children:`None`}),(0,u.jsx)(a,{...e,underline:`none`,items:p})]}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`span`,{className:`text-xs font-semibold text-neutral-500 block mb-1`,children:`Hover`}),(0,u.jsx)(a,{...e,underline:`hover`,items:p})]}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`span`,{className:`text-xs font-semibold text-neutral-500 block mb-1`,children:`Always`}),(0,u.jsx)(a,{...e,underline:`always`,items:p})]}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`span`,{className:`text-xs font-semibold text-neutral-500 block mb-1`,children:`Active`}),(0,u.jsx)(a,{...e,underline:`active`,items:p})]}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`span`,{className:`text-xs font-semibold text-neutral-500 block mb-1`,children:`Focus`}),(0,u.jsx)(a,{...e,underline:`focus`,items:p})]})]})},w={render:e=>(0,u.jsx)(`div`,{className:`flex flex-col gap-4`,children:(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`span`,{className:`text-xs font-semibold text-neutral-500 block mb-1`,children:`Slash Separator (/)`}),(0,u.jsx)(a,{...e,separator:`/`,items:m})]})})},T={render:e=>(0,u.jsx)(`div`,{className:`flex flex-col gap-4`,children:(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`span`,{className:`text-xs font-semibold text-neutral-500 block mb-1`,children:`Start Content (Icons)`}),(0,u.jsx)(a,{...e,items:h})]})})},E={render:e=>(0,u.jsx)(`div`,{className:`flex flex-col gap-4 p-6 bg-background rounded-xl`,children:(0,u.jsx)(a,{...e,color:`primary`,variant:`solid`,isDisabled:!0,items:m})})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    items: staticItems
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-4">
      <div>
        <span className="text-xs font-semibold text-neutral-500 block mb-1">Solid</span>
        <Breadcrumbs {...args} variant="solid" items={staticItems} />
      </div>
      <div>
        <span className="text-xs font-semibold text-neutral-500 block mb-1">Bordered</span>
        <Breadcrumbs {...args} variant="bordered" items={staticItems} />
      </div>
      <div>
        <span className="text-xs font-semibold text-neutral-500 block mb-1">Light</span>
        <Breadcrumbs {...args} variant="light" items={staticItems} />
      </div>
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-4">
      <div>
        <span className="text-xs font-semibold text-neutral-500 block mb-1">Small (sm)</span>
        <Breadcrumbs {...args} size="sm" items={staticItems} />
      </div>
      <div>
        <span className="text-xs font-semibold text-neutral-500 block mb-1">Medium (md)</span>
        <Breadcrumbs {...args} size="md" items={staticItems} />
      </div>
      <div>
        <span className="text-xs font-semibold text-neutral-500 block mb-1">Large (lg)</span>
        <Breadcrumbs {...args} size="lg" items={staticItems} />
      </div>
    </div>
}`,...v.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <div className="p-6 bg-background rounded-xl">
      {ColorMatrix(args)}
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-4">
      <div>
        <span className="text-xs font-semibold text-neutral-500 block mb-1">None</span>
        <Breadcrumbs {...args} radius="none" variant="solid" items={staticItems} />
      </div>
      <div>
        <span className="text-xs font-semibold text-neutral-500 block mb-1">Small (sm)</span>
        <Breadcrumbs {...args} radius="sm" variant="solid" items={staticItems} />
      </div>
      <div>
        <span className="text-xs font-semibold text-neutral-500 block mb-1">Medium (md)</span>
        <Breadcrumbs {...args} radius="md" variant="solid" items={staticItems} />
      </div>
      <div>
        <span className="text-xs font-semibold text-neutral-500 block mb-1">Large (lg)</span>
        <Breadcrumbs {...args} radius="lg" variant="solid" items={staticItems} />
      </div>
      <div>
        <span className="text-xs font-semibold text-neutral-500 block mb-1">Full</span>
        <Breadcrumbs {...args} radius="full" variant="solid" items={staticItems} />
      </div>
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-4">
      <div>
        <span className="text-xs font-semibold text-neutral-500 block mb-1">None</span>
        <Breadcrumbs {...args} underline="none" items={staticItems} />
      </div>
      <div>
        <span className="text-xs font-semibold text-neutral-500 block mb-1">Hover</span>
        <Breadcrumbs {...args} underline="hover" items={staticItems} />
      </div>
      <div>
        <span className="text-xs font-semibold text-neutral-500 block mb-1">Always</span>
        <Breadcrumbs {...args} underline="always" items={staticItems} />
      </div>
      <div>
        <span className="text-xs font-semibold text-neutral-500 block mb-1">Active</span>
        <Breadcrumbs {...args} underline="active" items={staticItems} />
      </div>
      <div>
        <span className="text-xs font-semibold text-neutral-500 block mb-1">Focus</span>
        <Breadcrumbs {...args} underline="focus" items={staticItems} />
      </div>
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-4">
      <div>
        <span className="text-xs font-semibold text-neutral-500 block mb-1">Slash Separator (/)</span>
        <Breadcrumbs {...args} separator="/" items={musicItems} />
      </div>
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-4">
      <div>
        <span className="text-xs font-semibold text-neutral-500 block mb-1">Start Content (Icons)</span>
        <Breadcrumbs {...args} items={itemsWithIcons} />
      </div>
    </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-4 p-6 bg-background rounded-xl">
      <Breadcrumbs {...args} color="primary" variant="solid" isDisabled items={musicItems} />
    </div>
}`,...E.parameters?.docs?.source}}},D=[`Default`,`Variants`,`Sizes`,`Colors`,`Radiuses`,`Underlines`,`CustomSeparator`,`StartAndEndContent`,`Disabled`]}))();export{x as Colors,w as CustomSeparator,g as Default,E as Disabled,S as Radiuses,v as Sizes,T as StartAndEndContent,C as Underlines,_ as Variants,D as __namedExportsOrder,d as default};