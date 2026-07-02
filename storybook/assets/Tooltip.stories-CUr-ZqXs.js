import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./iframe-BzRfQavU.js";import{H as n,g as r,t as i}from"./ui-sUaI0YKE.js";var a,o,s,c,l,u,d,f,p;e((()=>{i(),a=t(),o={title:`Components/Tooltip`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{placement:{control:`select`,options:[`top`,`top-start`,`top-end`,`bottom`,`bottom-start`,`bottom-end`,`left`,`left-start`,`left-end`,`right`,`right-start`,`right-end`]},color:{control:`select`,options:[`default`,`primary`,`secondary`,`success`,`warning`,`danger`,`foreground`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},radius:{control:`select`,options:[`none`,`sm`,`md`,`lg`,`full`]},shadow:{control:`select`,options:[`none`,`sm`,`md`,`lg`]},children:{control:!1},content:{control:!1}}},s={args:{children:(0,a.jsx)(n,{children:`Hover Me`}),content:`This is a tooltip content`,placement:`top`,showArrow:!0}},c={render:()=>(0,a.jsxs)(`div`,{className:`grid grid-cols-3 gap-8 p-20`,children:[(0,a.jsx)(r,{placement:`top-start`,content:`Top Start`,showArrow:!0,children:(0,a.jsx)(n,{variant:`flat`,fullWidth:!0,children:`Top Start`})}),(0,a.jsx)(r,{placement:`top`,content:`Top`,showArrow:!0,children:(0,a.jsx)(n,{variant:`flat`,fullWidth:!0,children:`Top`})}),(0,a.jsx)(r,{placement:`top-end`,content:`Top End`,showArrow:!0,children:(0,a.jsx)(n,{variant:`flat`,fullWidth:!0,children:`Top End`})}),(0,a.jsx)(r,{placement:`left`,content:`Left`,showArrow:!0,children:(0,a.jsx)(n,{variant:`flat`,fullWidth:!0,children:`Left`})}),(0,a.jsx)(`div`,{}),(0,a.jsx)(r,{placement:`right`,content:`Right`,showArrow:!0,children:(0,a.jsx)(n,{variant:`flat`,fullWidth:!0,children:`Right`})}),(0,a.jsx)(r,{placement:`bottom-start`,content:`Bottom Start`,showArrow:!0,children:(0,a.jsx)(n,{variant:`flat`,fullWidth:!0,children:`Bottom Start`})}),(0,a.jsx)(r,{placement:`bottom`,content:`Bottom`,showArrow:!0,children:(0,a.jsx)(n,{variant:`flat`,fullWidth:!0,children:`Bottom`})}),(0,a.jsx)(r,{placement:`bottom-end`,content:`Bottom End`,showArrow:!0,children:(0,a.jsx)(n,{variant:`flat`,fullWidth:!0,children:`Bottom End`})})]})},l={render:()=>(0,a.jsx)(`div`,{className:`flex flex-wrap gap-4`,children:[`default`,`primary`,`secondary`,`success`,`warning`,`danger`,`foreground`].map(e=>{let t=[`default`,`primary`,`secondary`,`success`,`warning`,`danger`].includes(e)?e:`default`;return(0,a.jsx)(r,{color:e,content:`Tooltip color: ${e}`,showArrow:!0,children:(0,a.jsx)(n,{color:t,variant:`solid`,children:e})},e)})})},u={render:()=>(0,a.jsx)(`div`,{className:`flex gap-4`,children:[`sm`,`md`,`lg`].map(e=>(0,a.jsx)(r,{size:e,content:`Tooltip size: ${e}`,showArrow:!0,children:(0,a.jsx)(n,{variant:`flat`,children:e})},e))})},d={render:()=>(0,a.jsx)(`div`,{className:`flex gap-4`,children:[`none`,`sm`,`md`,`lg`,`full`].map(e=>(0,a.jsx)(r,{radius:e,content:`Tooltip radius: ${e}`,showArrow:!0,children:(0,a.jsx)(n,{variant:`flat`,children:e})},e))})},f={render:()=>(0,a.jsx)(`div`,{className:`flex gap-4`,children:[`none`,`sm`,`md`,`lg`].map(e=>(0,a.jsx)(r,{shadow:e,content:`Tooltip shadow: ${e}`,showArrow:!0,children:(0,a.jsx)(n,{variant:`flat`,children:e})},e))})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Button>Hover Me</Button>,
    content: "This is a tooltip content",
    placement: "top",
    showArrow: true
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-3 gap-8 p-20">
      <Tooltip placement="top-start" content="Top Start" showArrow>
        <Button variant="flat" fullWidth>Top Start</Button>
      </Tooltip>
      <Tooltip placement="top" content="Top" showArrow>
        <Button variant="flat" fullWidth>Top</Button>
      </Tooltip>
      <Tooltip placement="top-end" content="Top End" showArrow>
        <Button variant="flat" fullWidth>Top End</Button>
      </Tooltip>

      <Tooltip placement="left" content="Left" showArrow>
        <Button variant="flat" fullWidth>Left</Button>
      </Tooltip>
      <div />
      <Tooltip placement="right" content="Right" showArrow>
        <Button variant="flat" fullWidth>Right</Button>
      </Tooltip>

      <Tooltip placement="bottom-start" content="Bottom Start" showArrow>
        <Button variant="flat" fullWidth>Bottom Start</Button>
      </Tooltip>
      <Tooltip placement="bottom" content="Bottom" showArrow>
        <Button variant="flat" fullWidth>Bottom</Button>
      </Tooltip>
      <Tooltip placement="bottom-end" content="Bottom End" showArrow>
        <Button variant="flat" fullWidth>Bottom End</Button>
      </Tooltip>
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">
      {(["default", "primary", "secondary", "success", "warning", "danger", "foreground"] as const).map(color => {
      const buttonColor = (["default", "primary", "secondary", "success", "warning", "danger"].includes(color) ? color : "default") as any;
      return <Tooltip key={color} color={color} content={\`Tooltip color: \${color}\`} showArrow>
            <Button color={buttonColor} variant="solid">{color}</Button>
          </Tooltip>;
    })}
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      {(["sm", "md", "lg"] as const).map(size => <Tooltip key={size} size={size} content={\`Tooltip size: \${size}\`} showArrow>
          <Button variant="flat">{size}</Button>
        </Tooltip>)}
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      {(["none", "sm", "md", "lg", "full"] as const).map(radius => <Tooltip key={radius} radius={radius} content={\`Tooltip radius: \${radius}\`} showArrow>
          <Button variant="flat">{radius}</Button>
        </Tooltip>)}
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      {(["none", "sm", "md", "lg"] as const).map(shadow => <Tooltip key={shadow} shadow={shadow} content={\`Tooltip shadow: \${shadow}\`} showArrow>
          <Button variant="flat">{shadow}</Button>
        </Tooltip>)}
    </div>
}`,...f.parameters?.docs?.source}}},p=[`Default`,`Placements`,`Colors`,`Sizes`,`Radiuses`,`Shadows`]}))();export{l as Colors,s as Default,c as Placements,d as Radiuses,f as Shadows,u as Sizes,p as __namedExportsOrder,o as default};