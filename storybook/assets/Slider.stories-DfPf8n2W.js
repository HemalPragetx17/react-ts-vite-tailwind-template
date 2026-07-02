import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-DDzTVtu_.js";import{t as r}from"./iframe-BSsvUtib.js";import{Dt as i,Tt as a,h as o,t as s,wt as c}from"./ui-C8puiJZM.js";var l,u,d,f,p,m,h,g,_,v,y,b,x;e((()=>{l=t(n(),1),i(),s(),u=r(),d={title:`Components/Slider`,component:o,parameters:{layout:`padded`},tags:[`autodocs`],argTypes:{color:{control:`select`,options:[`default`,`primary`,`secondary`,`success`,`warning`,`danger`,`foreground`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},radius:{control:`select`,options:[`none`,`sm`,`md`,`lg`,`full`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},showSteps:{control:`boolean`},showTooltip:{control:`boolean`},isDisabled:{control:`boolean`},hideValue:{control:`boolean`},hideThumb:{control:`boolean`}}},f={render:e=>{let[t,n]=l.useState(30);return(0,u.jsx)(`div`,{className:`w-80 max-w-full`,children:(0,u.jsx)(o,{...e,value:t,onChange:n})})},args:{label:`Brightness`,minValue:0,maxValue:100,step:1}},p={render:e=>(0,u.jsx)(`div`,{className:`flex flex-col gap-6 w-80 max-w-full`,children:[`default`,`primary`,`secondary`,`success`,`warning`,`danger`,`foreground`].map(t=>(0,u.jsx)(o,{...e,color:t,label:t.charAt(0).toUpperCase()+t.slice(1),defaultValue:40},t))})},m={render:e=>(0,u.jsx)(`div`,{className:`flex flex-col gap-6 w-80 max-w-full`,children:[`sm`,`md`,`lg`].map(t=>(0,u.jsx)(o,{...e,size:t,label:`${t.toUpperCase()} Size`,defaultValue:50},t))})},h={render:e=>{let[t,n]=l.useState([20,80]);return(0,u.jsx)(`div`,{className:`w-80 max-w-full`,children:(0,u.jsx)(o,{...e,value:t,onChange:n})})},args:{label:`Price Range`,minValue:0,maxValue:100,step:1}},g={render:e=>(0,u.jsx)(`div`,{className:`w-80 max-w-full py-4`,children:(0,u.jsx)(o,{...e,label:`Temperature`,minValue:0,maxValue:100,defaultValue:20,marks:[{value:0,label:`0°C`},{value:50,label:`50°C`},{value:100,label:`100°C`}]})})},_={render:e=>(0,u.jsx)(`div`,{className:`w-80 max-w-full`,children:(0,u.jsx)(o,{...e,label:`Steps`,minValue:0,maxValue:10,step:1,showSteps:!0,defaultValue:3})})},v={render:e=>(0,u.jsx)(`div`,{className:`w-80 max-w-full pt-8`,children:(0,u.jsx)(o,{...e,label:`Volume`,minValue:0,maxValue:100,showTooltip:!0,defaultValue:70,startContent:(0,u.jsx)(a,{className:`text-neutral-400`}),endContent:(0,u.jsx)(c,{className:`text-neutral-400`})})})},y={render:e=>(0,u.jsxs)(`div`,{className:`flex h-64 gap-8 justify-center`,children:[(0,u.jsx)(o,{...e,orientation:`vertical`,label:`Volume`,defaultValue:60}),(0,u.jsx)(o,{...e,orientation:`vertical`,label:`Bass`,color:`secondary`,defaultValue:[30,70]})]})},b={render:e=>(0,u.jsx)(`div`,{className:`w-80 max-w-full`,children:(0,u.jsx)(o,{...e,label:`Disabled Slider`,isDisabled:!0,defaultValue:40})})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [val, setVal] = React.useState<number | number[]>(30);
    return <div className="w-80 max-w-full">
        <Slider {...args} value={val} onChange={setVal} />
      </div>;
  },
  args: {
    label: "Brightness",
    minValue: 0,
    maxValue: 100,
    step: 1
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-6 w-80 max-w-full">
      {["default", "primary", "secondary", "success", "warning", "danger", "foreground"].map(color => <Slider key={color} {...args} color={color as any} label={color.charAt(0).toUpperCase() + color.slice(1)} defaultValue={40} />)}
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-6 w-80 max-w-full">
      {["sm", "md", "lg"].map(size => <Slider key={size} {...args} size={size as any} label={\`\${size.toUpperCase()} Size\`} defaultValue={50} />)}
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [val, setVal] = React.useState<number | number[]>([20, 80]);
    return <div className="w-80 max-w-full">
        <Slider {...args} value={val} onChange={setVal} />
      </div>;
  },
  args: {
    label: "Price Range",
    minValue: 0,
    maxValue: 100,
    step: 1
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <div className="w-80 max-w-full py-4">
      <Slider {...args} label="Temperature" minValue={0} maxValue={100} defaultValue={20} marks={[{
      value: 0,
      label: "0°C"
    }, {
      value: 50,
      label: "50°C"
    }, {
      value: 100,
      label: "100°C"
    }]} />
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <div className="w-80 max-w-full">
      <Slider {...args} label="Steps" minValue={0} maxValue={10} step={1} showSteps defaultValue={3} />
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <div className="w-80 max-w-full pt-8">
      <Slider {...args} label="Volume" minValue={0} maxValue={100} showTooltip defaultValue={70} startContent={<FaVolumeLow className="text-neutral-400" />} endContent={<FaVolumeHigh className="text-neutral-400" />} />
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex h-64 gap-8 justify-center">
      <Slider {...args} orientation="vertical" label="Volume" defaultValue={60} />
      <Slider {...args} orientation="vertical" label="Bass" color="secondary" defaultValue={[30, 70]} />
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <div className="w-80 max-w-full">
      <Slider {...args} label="Disabled Slider" isDisabled defaultValue={40} />
    </div>
}`,...b.parameters?.docs?.source}}},x=[`Default`,`Colors`,`Sizes`,`RangeSlider`,`WithMarks`,`ShowSteps`,`WithTooltip`,`Vertical`,`Disabled`]}))();export{p as Colors,f as Default,b as Disabled,h as RangeSlider,_ as ShowSteps,m as Sizes,y as Vertical,g as WithMarks,v as WithTooltip,x as __namedExportsOrder,d as default};