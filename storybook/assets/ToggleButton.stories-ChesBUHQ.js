import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-DDzTVtu_.js";import{t as r}from"./iframe-BSsvUtib.js";import{Dt as i,Q as a,St as o,X as s,Y as c,Z as l,et as u,f as d,ft as f,p,t as m}from"./ui-C8puiJZM.js";var h,g,_,v,y,b,x,S,C,w;e((()=>{h=t(n(),1),i(),m(),g=r(),_={title:`Components/ToggleButton`,component:d,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{color:{control:`select`,options:[`default`,`primary`,`secondary`,`success`,`warning`,`danger`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},exclusive:{control:`boolean`},isDisabled:{control:`boolean`},orientation:{control:`select`,options:[`horizontal`,`vertical`]},fullWidth:{control:`boolean`}}},v={render:e=>{let[t,n]=h.useState(`left`);return(0,g.jsxs)(d,{...e,value:t,exclusive:!0,onChange:(e,t)=>n(t),children:[(0,g.jsx)(p,{value:`left`,"aria-label":`align left`,children:(0,g.jsx)(l,{className:`w-4 h-4`})}),(0,g.jsx)(p,{value:`center`,"aria-label":`align center`,children:(0,g.jsx)(c,{className:`w-4 h-4`})}),(0,g.jsx)(p,{value:`right`,"aria-label":`align right`,children:(0,g.jsx)(a,{className:`w-4 h-4`})}),(0,g.jsx)(p,{value:`justify`,"aria-label":`align justify`,children:(0,g.jsx)(s,{className:`w-4 h-4`})})]})},args:{color:`primary`,size:`md`}},y={render:e=>{let[t,n]=h.useState([`bold`]);return(0,g.jsxs)(d,{...e,value:t,onChange:(e,t)=>n(t),children:[(0,g.jsx)(p,{value:`bold`,"aria-label":`bold`,children:(0,g.jsx)(u,{className:`w-4 h-4`})}),(0,g.jsx)(p,{value:`italic`,"aria-label":`italic`,children:(0,g.jsx)(f,{className:`w-4 h-4`})}),(0,g.jsx)(p,{value:`underlined`,"aria-label":`underlined`,children:(0,g.jsx)(o,{className:`w-4 h-4`})})]})},args:{color:`secondary`,size:`md`}},b={render:e=>{let[t,n]=h.useState(`center`);return(0,g.jsx)(`div`,{className:`flex flex-col gap-4`,children:[`default`,`primary`,`secondary`,`success`,`warning`,`danger`].map(r=>(0,g.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,g.jsxs)(`span`,{className:`w-24 text-sm capitalize`,children:[r,`:`]}),(0,g.jsxs)(d,{...e,color:r,value:t,exclusive:!0,onChange:(e,t)=>n(t),children:[(0,g.jsx)(p,{value:`left`,children:`Left`}),(0,g.jsx)(p,{value:`center`,children:`Center`}),(0,g.jsx)(p,{value:`right`,children:`Right`})]})]},r))})}},x={render:e=>{let[t,n]=h.useState(`left`);return(0,g.jsx)(`div`,{className:`flex flex-col gap-4`,children:[`sm`,`md`,`lg`].map(r=>(0,g.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,g.jsxs)(`span`,{className:`w-24 text-sm capitalize`,children:[r,`:`]}),(0,g.jsxs)(d,{...e,size:r,value:t,exclusive:!0,onChange:(e,t)=>n(t),children:[(0,g.jsx)(p,{value:`left`,children:`Left`}),(0,g.jsx)(p,{value:`center`,children:`Center`}),(0,g.jsx)(p,{value:`right`,children:`Right`})]})]},r))})}},S={render:e=>{let[t,n]=h.useState(`left`);return(0,g.jsxs)(d,{...e,value:t,exclusive:!0,orientation:`vertical`,onChange:(e,t)=>n(t),children:[(0,g.jsx)(p,{value:`left`,"aria-label":`align left`,children:(0,g.jsx)(l,{className:`w-4 h-4`})}),(0,g.jsx)(p,{value:`center`,"aria-label":`align center`,children:(0,g.jsx)(c,{className:`w-4 h-4`})}),(0,g.jsx)(p,{value:`right`,"aria-label":`align right`,children:(0,g.jsx)(a,{className:`w-4 h-4`})})]})},args:{color:`primary`,size:`md`}},C={render:e=>(0,g.jsxs)(d,{...e,value:`bold`,isDisabled:!0,onChange:()=>{},children:[(0,g.jsx)(p,{value:`bold`,"aria-label":`bold`,children:(0,g.jsx)(u,{className:`w-4 h-4`})}),(0,g.jsx)(p,{value:`italic`,"aria-label":`italic`,children:(0,g.jsx)(f,{className:`w-4 h-4`})}),(0,g.jsx)(p,{value:`underlined`,"aria-label":`underlined`,children:(0,g.jsx)(o,{className:`w-4 h-4`})})]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [alignment, setAlignment] = React.useState<string | null>("left");
    return <ToggleButtonGroup {...args} value={alignment} exclusive onChange={(_e, val) => setAlignment(val)}>
        <ToggleButton value="left" aria-label="align left">
          <FaAlignLeft className="w-4 h-4" />
        </ToggleButton>
        <ToggleButton value="center" aria-label="align center">
          <FaAlignCenter className="w-4 h-4" />
        </ToggleButton>
        <ToggleButton value="right" aria-label="align right">
          <FaAlignRight className="w-4 h-4" />
        </ToggleButton>
        <ToggleButton value="justify" aria-label="align justify">
          <FaAlignJustify className="w-4 h-4" />
        </ToggleButton>
      </ToggleButtonGroup>;
  },
  args: {
    color: "primary",
    size: "md"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [formats, setFormats] = React.useState<string[]>(["bold"]);
    return <ToggleButtonGroup {...args} value={formats} onChange={(_e, val) => setFormats(val)}>
        <ToggleButton value="bold" aria-label="bold">
          <FaBold className="w-4 h-4" />
        </ToggleButton>
        <ToggleButton value="italic" aria-label="italic">
          <FaItalic className="w-4 h-4" />
        </ToggleButton>
        <ToggleButton value="underlined" aria-label="underlined">
          <FaUnderline className="w-4 h-4" />
        </ToggleButton>
      </ToggleButtonGroup>;
  },
  args: {
    color: "secondary",
    size: "md"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [val, setVal] = React.useState("center");
    return <div className="flex flex-col gap-4">
        {(["default", "primary", "secondary", "success", "warning", "danger"] as const).map(color => <div key={color} className="flex items-center gap-4">
            <span className="w-24 text-sm capitalize">{color}:</span>
            <ToggleButtonGroup {...args} color={color} value={val} exclusive onChange={(_e, v) => setVal(v)}>
              <ToggleButton value="left">Left</ToggleButton>
              <ToggleButton value="center">Center</ToggleButton>
              <ToggleButton value="right">Right</ToggleButton>
            </ToggleButtonGroup>
          </div>)}
      </div>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [val, setVal] = React.useState("left");
    return <div className="flex flex-col gap-4">
        {(["sm", "md", "lg"] as const).map(size => <div key={size} className="flex items-center gap-4">
            <span className="w-24 text-sm capitalize">{size}:</span>
            <ToggleButtonGroup {...args} size={size} value={val} exclusive onChange={(_e, v) => setVal(v)}>
              <ToggleButton value="left">Left</ToggleButton>
              <ToggleButton value="center">Center</ToggleButton>
              <ToggleButton value="right">Right</ToggleButton>
            </ToggleButtonGroup>
          </div>)}
      </div>;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [alignment, setAlignment] = React.useState<string | null>("left");
    return <ToggleButtonGroup {...args} value={alignment} exclusive orientation="vertical" onChange={(_e, val) => setAlignment(val)}>
        <ToggleButton value="left" aria-label="align left">
          <FaAlignLeft className="w-4 h-4" />
        </ToggleButton>
        <ToggleButton value="center" aria-label="align center">
          <FaAlignCenter className="w-4 h-4" />
        </ToggleButton>
        <ToggleButton value="right" aria-label="align right">
          <FaAlignRight className="w-4 h-4" />
        </ToggleButton>
      </ToggleButtonGroup>;
  },
  args: {
    color: "primary",
    size: "md"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <ToggleButtonGroup {...args} value="bold" isDisabled onChange={() => {}}>
        <ToggleButton value="bold" aria-label="bold">
          <FaBold className="w-4 h-4" />
        </ToggleButton>
        <ToggleButton value="italic" aria-label="italic">
          <FaItalic className="w-4 h-4" />
        </ToggleButton>
        <ToggleButton value="underlined" aria-label="underlined">
          <FaUnderline className="w-4 h-4" />
        </ToggleButton>
      </ToggleButtonGroup>;
  }
}`,...C.parameters?.docs?.source}}},w=[`ExclusiveSelection`,`MultipleSelection`,`Colors`,`Sizes`,`VerticalOrientation`,`Disabled`]}))();export{b as Colors,C as Disabled,v as ExclusiveSelection,y as MultipleSelection,x as Sizes,S as VerticalOrientation,w as __namedExportsOrder,_ as default};