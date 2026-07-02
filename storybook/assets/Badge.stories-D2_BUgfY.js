import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-DDzTVtu_.js";import{t as r}from"./iframe-BSsvUtib.js";import{G as i,K as a,t as o}from"./ui-C8puiJZM.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{s=t(n(),1),o(),c=r(),l={title:`Components/Badge`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`]},color:{control:`select`,options:[`default`,`primary`,`secondary`,`success`,`warning`,`danger`]},variant:{control:`select`,options:[`solid`,`flat`,`faded`,`shadow`]},placement:{control:`select`,options:[`top-right`,`top-left`,`bottom-right`,`bottom-left`]},shape:{control:`select`,options:[`circle`,`rectangle`]},isInvisible:{control:`boolean`},showOutline:{control:`boolean`},isOneChar:{control:`boolean`},children:{control:!1}}},u=(0,c.jsx)(a,{size:`md`,radius:`lg`,name:`Jane Doe`,src:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=128&h=128&q=80`}),d=(0,c.jsx)(a,{size:`md`,name:`Jane Doe`,src:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=128&h=128&q=80`}),f={args:{content:`5`,color:`danger`,children:u}},p={render:e=>(0,c.jsxs)(`div`,{className:`flex gap-10 items-center`,children:[(0,c.jsx)(i,{...e,size:`sm`,content:`5`,children:u}),(0,c.jsx)(i,{...e,size:`md`,content:`5`,children:u}),(0,c.jsx)(i,{...e,size:`lg`,content:`5`,children:u})]})},m={render:e=>(0,c.jsxs)(`div`,{className:`flex gap-8`,children:[(0,c.jsx)(i,{...e,color:`default`,content:`1`,children:u}),(0,c.jsx)(i,{...e,color:`primary`,content:`1`,children:u}),(0,c.jsx)(i,{...e,color:`secondary`,content:`1`,children:u}),(0,c.jsx)(i,{...e,color:`success`,content:`1`,children:u}),(0,c.jsx)(i,{...e,color:`warning`,content:`1`,children:u}),(0,c.jsx)(i,{...e,color:`danger`,content:`1`,children:u})]})},h=(0,c.jsx)(a,{size:`md`,radius:`lg`,name:`Solid Variant`,src:`https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=128&h=128&q=80`}),g=(0,c.jsx)(a,{size:`md`,radius:`lg`,name:`Flat Variant`,src:`https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=128&h=128&q=80`}),_=(0,c.jsx)(a,{size:`md`,radius:`lg`,name:`Faded Variant`,src:`https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=128&h=128&q=80`}),v=(0,c.jsx)(a,{size:`md`,radius:`lg`,name:`Shadow Variant`,src:`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=128&h=128&q=80`}),y={render:e=>(0,c.jsxs)(`div`,{className:`flex gap-8`,children:[(0,c.jsx)(i,{...e,variant:`solid`,color:`warning`,content:`5`,children:h}),(0,c.jsx)(i,{...e,variant:`flat`,color:`warning`,content:`5`,children:g}),(0,c.jsx)(i,{...e,variant:`faded`,color:`warning`,content:`5`,children:_}),(0,c.jsx)(i,{...e,variant:`shadow`,color:`warning`,content:`5`,children:v})]})},b={render:e=>(0,c.jsxs)(`div`,{className:`grid grid-cols-2 gap-10 p-4`,children:[(0,c.jsx)(i,{...e,placement:`top-left`,content:`New`,children:u}),(0,c.jsx)(i,{...e,placement:`top-right`,content:`New`,children:u}),(0,c.jsx)(i,{...e,placement:`bottom-left`,content:`New`,children:u}),(0,c.jsx)(i,{...e,placement:`bottom-right`,content:`New`,children:u})]})},x={args:{color:`success`,children:u}},S={render:e=>(0,c.jsxs)(`div`,{className:`flex gap-12 p-4`,children:[(0,c.jsx)(i,{...e,shape:`rectangle`,color:`danger`,content:`5`,children:u}),(0,c.jsx)(i,{...e,shape:`circle`,color:`danger`,content:`5`,children:d})]})},C={render:()=>{let[e,t]=s.useState(!1);return(0,c.jsxs)(`div`,{className:`flex flex-col gap-4 items-center`,children:[(0,c.jsx)(i,{content:`4`,color:`danger`,isInvisible:e,children:u}),(0,c.jsx)(`button`,{onClick:()=>t(!e),className:`px-3 py-1.5 text-xs font-semibold bg-neutral-200 dark:bg-neutral-800 rounded-md hover:opacity-90 transition`,children:`Toggle Invisible`})]})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    content: "5",
    color: "danger",
    children: avatarBoxChild
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex gap-10 items-center">
      <Badge {...args} size="sm" content="5">
        {avatarBoxChild}
      </Badge>
      <Badge {...args} size="md" content="5">
        {avatarBoxChild}
      </Badge>
      <Badge {...args} size="lg" content="5">
        {avatarBoxChild}
      </Badge>
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex gap-8">
      <Badge {...args} color="default" content="1">
        {avatarBoxChild}
      </Badge>
      <Badge {...args} color="primary" content="1">
        {avatarBoxChild}
      </Badge>
      <Badge {...args} color="secondary" content="1">
        {avatarBoxChild}
      </Badge>
      <Badge {...args} color="success" content="1">
        {avatarBoxChild}
      </Badge>
      <Badge {...args} color="warning" content="1">
        {avatarBoxChild}
      </Badge>
      <Badge {...args} color="danger" content="1">
        {avatarBoxChild}
      </Badge>
    </div>
}`,...m.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex gap-8">
      <Badge {...args} variant="solid" color="warning" content="5">
        {avatarSolid}
      </Badge>
      <Badge {...args} variant="flat" color="warning" content="5">
        {avatarFlat}
      </Badge>
      <Badge {...args} variant="faded" color="warning" content="5">
        {avatarFaded}
      </Badge>
      <Badge {...args} variant="shadow" color="warning" content="5">
        {avatarShadow}
      </Badge>
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <div className="grid grid-cols-2 gap-10 p-4">
      <Badge {...args} placement="top-left" content="New">
        {avatarBoxChild}
      </Badge>
      <Badge {...args} placement="top-right" content="New">
        {avatarBoxChild}
      </Badge>
      <Badge {...args} placement="bottom-left" content="New">
        {avatarBoxChild}
      </Badge>
      <Badge {...args} placement="bottom-right" content="New">
        {avatarBoxChild}
      </Badge>
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    color: "success",
    children: avatarBoxChild
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex gap-12 p-4">
      {/* Rectangle Shape */}
      <Badge {...args} shape="rectangle" color="danger" content="5">
        {avatarBoxChild}
      </Badge>
      
      {/* Circle Shape — offset sits diagonally aligned to the circle perimeter */}
      <Badge {...args} shape="circle" color="danger" content="5">
        {avatarChild}
      </Badge>
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [invisible, setInvisible] = React.useState(false);
    return <div className="flex flex-col gap-4 items-center">
        <Badge content="4" color="danger" isInvisible={invisible}>
          {avatarBoxChild}
        </Badge>
        <button onClick={() => setInvisible(!invisible)} className="px-3 py-1.5 text-xs font-semibold bg-neutral-200 dark:bg-neutral-800 rounded-md hover:opacity-90 transition">
          Toggle Invisible
        </button>
      </div>;
  }
}`,...C.parameters?.docs?.source}}},w=[`Default`,`Sizes`,`Colors`,`Variants`,`Placements`,`Dot`,`Shapes`,`Invisible`]}))();export{m as Colors,f as Default,x as Dot,C as Invisible,b as Placements,S as Shapes,p as Sizes,y as Variants,w as __namedExportsOrder,l as default};