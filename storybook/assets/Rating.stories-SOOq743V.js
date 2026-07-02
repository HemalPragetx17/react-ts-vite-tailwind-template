import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-DDzTVtu_.js";import{t as r}from"./iframe-BzRfQavU.js";import{Dt as i,lt as a,m as o,t as s}from"./ui-sUaI0YKE.js";var c,l,u,d,f,p,m,h,g,_,v,y;e((()=>{c=t(n(),1),i(),s(),l=r(),u={title:`Components/Rating`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{color:{control:`select`,options:[`default`,`primary`,`secondary`,`success`,`warning`,`danger`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},count:{control:{type:`number`,min:1,max:10,step:1}},value:{control:{type:`number`,min:0,max:10,step:.5}},allowHalf:{control:`boolean`},isDisabled:{control:`boolean`},isReadOnly:{control:`boolean`}}},d={render:e=>{let[t,n]=c.useState(3);return(0,l.jsx)(o,{...e,value:t,onChange:n})},args:{color:`primary`,size:`md`,count:5}},f={render:e=>(0,l.jsx)(`div`,{className:`flex flex-col gap-4`,children:[`default`,`primary`,`secondary`,`success`,`warning`,`danger`].map(t=>(0,l.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,l.jsxs)(`span`,{className:`w-24 text-sm capitalize`,children:[t,`:`]}),(0,l.jsx)(o,{...e,color:t,defaultValue:3})]},t))})},p={render:e=>(0,l.jsx)(`div`,{className:`flex flex-col gap-4`,children:[`sm`,`md`,`lg`].map(t=>(0,l.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,l.jsxs)(`span`,{className:`w-24 text-sm capitalize`,children:[t,`:`]}),(0,l.jsx)(o,{...e,size:t,defaultValue:3.5,allowHalf:!0})]},t))})},m={render:e=>{let[t,n]=c.useState(3.5);return(0,l.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,l.jsxs)(`span`,{children:[`Current Value: `,t]}),(0,l.jsx)(o,{...e,value:t,onChange:n,allowHalf:!0})]})}},h={render:e=>{let[t,n]=c.useState(4);return(0,l.jsx)(o,{...e,value:t,onChange:n,icon:(0,l.jsx)(a,{}),color:`danger`})}},g={args:{defaultValue:4.5,isReadOnly:!0,allowHalf:!0}},_={args:{defaultValue:3,isDisabled:!0}},v={render:e=>(0,l.jsxs)(`div`,{className:`p-6 bg-background rounded-xl border border-default-100 max-w-[400px] w-full`,children:[(0,l.jsx)(`h4`,{className:`text-neutral-500 font-semibold text-sm mb-4`,children:`Product Review (Decimal / Read-only)`}),(0,l.jsx)(`div`,{className:`flex flex-col gap-3`,children:[{label:`Quality`,value:1.5},{label:`Value for money`,value:2.3},{label:`Design`,value:3.7},{label:`Durability`,value:4.2},{label:`Overall`,value:4.8}].map(t=>(0,l.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,l.jsx)(`span`,{className:`text-sm text-neutral-600 dark:text-neutral-400 font-medium`,children:t.label}),(0,l.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,l.jsx)(o,{...e,value:t.value,color:`primary`,isReadOnly:!0,allowHalf:!0}),(0,l.jsx)(`span`,{className:`text-sm font-semibold text-neutral-600 dark:text-neutral-400 w-6 text-right`,children:t.value.toFixed(1)})]})]},t.label))})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [val, setVal] = React.useState(3);
    return <Rating {...args} value={val} onChange={setVal} />;
  },
  args: {
    color: "primary",
    size: "md",
    count: 5
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-4">
      {["default", "primary", "secondary", "success", "warning", "danger"].map(color => <div key={color} className="flex items-center gap-4">
          <span className="w-24 text-sm capitalize">{color}:</span>
          <Rating {...args} color={color as any} defaultValue={3} />
        </div>)}
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-4">
      {["sm", "md", "lg"].map(size => <div key={size} className="flex items-center gap-4">
          <span className="w-24 text-sm capitalize">{size}:</span>
          <Rating {...args} size={size as any} defaultValue={3.5} allowHalf />
        </div>)}
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [val, setVal] = React.useState(3.5);
    return <div className="flex flex-col gap-2">
        <span>Current Value: {val}</span>
        <Rating {...args} value={val} onChange={setVal} allowHalf />
      </div>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [val, setVal] = React.useState(4);
    return <Rating {...args} value={val} onChange={setVal} icon={<FaHeart />} color="danger" />;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 4.5,
    isReadOnly: true,
    allowHalf: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 3,
    isDisabled: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const reviews = [{
      label: "Quality",
      value: 1.5
    }, {
      label: "Value for money",
      value: 2.3
    }, {
      label: "Design",
      value: 3.7
    }, {
      label: "Durability",
      value: 4.2
    }, {
      label: "Overall",
      value: 4.8
    }];
    return <div className="p-6 bg-background rounded-xl border border-default-100 max-w-[400px] w-full">
        <h4 className="text-neutral-500 font-semibold text-sm mb-4">
          Product Review (Decimal / Read-only)
        </h4>
        <div className="flex flex-col gap-3">
          {reviews.map(rev => <div key={rev.label} className="flex items-center justify-between">
              <span className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">
                {rev.label}
              </span>
              <div className="flex items-center gap-3">
                <Rating {...args} value={rev.value} color="primary" isReadOnly allowHalf />
                <span className="text-sm font-semibold text-neutral-600 dark:text-neutral-400 w-6 text-right">
                  {rev.value.toFixed(1)}
                </span>
              </div>
            </div>)}
        </div>
      </div>;
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`Colors`,`Sizes`,`AllowHalf`,`CustomIcon`,`ReadOnly`,`Disabled`,`ProductReviewDecimal`]}))();export{m as AllowHalf,f as Colors,h as CustomIcon,d as Default,_ as Disabled,v as ProductReviewDecimal,g as ReadOnly,p as Sizes,y as __namedExportsOrder,u as default};