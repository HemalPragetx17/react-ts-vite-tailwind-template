import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-DDzTVtu_.js";import{t as r}from"./iframe-sOyJkj26.js";import{At as i,Nt as a,g as o,jt as s,t as c}from"./ui-DraYKXvF.js";var l,u,d,f,p,m,h,g,_,v,y,b,x;e((()=>{l=t(n(),1),a(),c(),u=r(),d={title:`Components/Slider`,component:o,parameters:{layout:`padded`},tags:[`autodocs`],argTypes:{color:{control:`select`,options:[`default`,`primary`,`secondary`,`success`,`warning`,`danger`,`foreground`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},radius:{control:`select`,options:[`none`,`sm`,`md`,`lg`,`full`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},showSteps:{control:`boolean`},showTooltip:{control:`boolean`},isDisabled:{control:`boolean`},hideValue:{control:`boolean`},hideThumb:{control:`boolean`}}},f={render:()=>{let[e,t]=l.useState(30);return(0,u.jsx)(`div`,{className:`w-80 max-w-full`,children:(0,u.jsx)(o,{label:`Brightness`,minValue:0,maxValue:100,step:1,value:e,onChange:t})})}},p={render:()=>(0,u.jsxs)(`div`,{className:`flex flex-col gap-6 w-80 max-w-full`,children:[(0,u.jsx)(o,{color:`default`,label:`Default`,defaultValue:40}),(0,u.jsx)(o,{color:`primary`,label:`Primary`,defaultValue:40}),(0,u.jsx)(o,{color:`secondary`,label:`Secondary`,defaultValue:40}),(0,u.jsx)(o,{color:`success`,label:`Success`,defaultValue:40}),(0,u.jsx)(o,{color:`warning`,label:`Warning`,defaultValue:40}),(0,u.jsx)(o,{color:`danger`,label:`Danger`,defaultValue:40}),(0,u.jsx)(o,{color:`foreground`,label:`Foreground`,defaultValue:40})]})},m={render:()=>(0,u.jsxs)(`div`,{className:`flex flex-col gap-6 w-80 max-w-full`,children:[(0,u.jsx)(o,{size:`sm`,label:`SM Size`,defaultValue:50}),(0,u.jsx)(o,{size:`md`,label:`MD Size`,defaultValue:50}),(0,u.jsx)(o,{size:`lg`,label:`LG Size`,defaultValue:50})]})},h={render:()=>{let[e,t]=l.useState([20,80]);return(0,u.jsx)(`div`,{className:`w-80 max-w-full`,children:(0,u.jsx)(o,{label:`Price Range`,minValue:0,maxValue:100,step:1,value:e,onChange:t})})}},g={render:()=>(0,u.jsx)(`div`,{className:`w-80 max-w-full py-4`,children:(0,u.jsx)(o,{label:`Temperature`,minValue:0,maxValue:100,defaultValue:20,marks:[{value:0,label:`0°C`},{value:50,label:`50°C`},{value:100,label:`100°C`}]})})},_={render:()=>(0,u.jsx)(`div`,{className:`w-80 max-w-full`,children:(0,u.jsx)(o,{label:`Steps`,minValue:0,maxValue:10,step:1,showSteps:!0,defaultValue:3})})},v={render:()=>(0,u.jsx)(`div`,{className:`w-80 max-w-full pt-8`,children:(0,u.jsx)(o,{label:`Volume`,minValue:0,maxValue:100,showTooltip:!0,defaultValue:70,startContent:(0,u.jsx)(s,{className:`text-neutral-400`}),endContent:(0,u.jsx)(i,{className:`text-neutral-400`})})})},y={render:()=>(0,u.jsxs)(`div`,{className:`flex h-64 gap-8 justify-center`,children:[(0,u.jsx)(o,{orientation:`vertical`,label:`Volume`,defaultValue:60}),(0,u.jsx)(o,{orientation:`vertical`,label:`Bass`,color:`secondary`,defaultValue:[30,70]})]})},b={render:()=>(0,u.jsx)(`div`,{className:`w-80 max-w-full`,children:(0,u.jsx)(o,{label:`Disabled Slider`,isDisabled:!0,defaultValue:40})})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [val, setVal] = React.useState<number | number[]>(30);
    return <div className="w-80 max-w-full">
        <Slider label="Brightness" minValue={0} maxValue={100} step={1} value={val} onChange={setVal} />
      </div>;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 w-80 max-w-full">
      <Slider color="default" label="Default" defaultValue={40} />
      <Slider color="primary" label="Primary" defaultValue={40} />
      <Slider color="secondary" label="Secondary" defaultValue={40} />
      <Slider color="success" label="Success" defaultValue={40} />
      <Slider color="warning" label="Warning" defaultValue={40} />
      <Slider color="danger" label="Danger" defaultValue={40} />
      <Slider color="foreground" label="Foreground" defaultValue={40} />
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 w-80 max-w-full">
      <Slider size="sm" label="SM Size" defaultValue={50} />
      <Slider size="md" label="MD Size" defaultValue={50} />
      <Slider size="lg" label="LG Size" defaultValue={50} />
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [val, setVal] = React.useState<number | number[]>([20, 80]);
    return <div className="w-80 max-w-full">
        <Slider label="Price Range" minValue={0} maxValue={100} step={1} value={val} onChange={setVal} />
      </div>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-80 max-w-full py-4">
      <Slider label="Temperature" minValue={0} maxValue={100} defaultValue={20} marks={[{
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
  render: () => <div className="w-80 max-w-full">
      <Slider label="Steps" minValue={0} maxValue={10} step={1} showSteps defaultValue={3} />
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-80 max-w-full pt-8">
      <Slider label="Volume" minValue={0} maxValue={100} showTooltip defaultValue={70} startContent={<FaVolumeLow className="text-neutral-400" />} endContent={<FaVolumeHigh className="text-neutral-400" />} />
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex h-64 gap-8 justify-center">
      <Slider orientation="vertical" label="Volume" defaultValue={60} />
      <Slider orientation="vertical" label="Bass" color="secondary" defaultValue={[30, 70]} />
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-80 max-w-full">
      <Slider label="Disabled Slider" isDisabled defaultValue={40} />
    </div>
}`,...b.parameters?.docs?.source}}},x=[`Default`,`Colors`,`Sizes`,`RangeSlider`,`WithMarks`,`ShowSteps`,`WithTooltip`,`Vertical`,`Disabled`]}))();export{p as Colors,f as Default,b as Disabled,h as RangeSlider,_ as ShowSteps,m as Sizes,y as Vertical,g as WithMarks,v as WithTooltip,x as __namedExportsOrder,d as default};