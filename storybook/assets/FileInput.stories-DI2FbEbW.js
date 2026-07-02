import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-DDzTVtu_.js";import{t as r}from"./iframe-fS8lWa8-.js";import{A as i,t as a}from"./ui-B0lacm4L.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{o=t(n(),1),a(),s=r(),c={title:`Components/FileInput`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{mode:{control:`select`,options:[`normal`,`profile`,`dropzone`,`multi`]},variant:{control:`select`,options:[`flat`,`bordered`,`underlined`,`faded`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},radius:{control:`select`,options:[`none`,`sm`,`md`,`lg`,`full`]},labelPlacement:{control:`select`,options:[`inside`,`outside`,`outside-left`,`outside-top`,`outlined`]},disabled:{control:`boolean`},isClearable:{control:`boolean`},isPreviewOn:{control:`boolean`}}},l=e=>{let[t,n]=(0,o.useState)(e.value||null);return(0,s.jsx)(`div`,{className:`w-[320px]`,children:(0,s.jsx)(i,{...e,value:t,onChange:t=>{n(t),e.onChange?.(t)}})})},u=e=>{let[t,n]=(0,o.useState)(e.images||[]),[r,a]=(0,o.useState)([]);return(0,s.jsx)(`div`,{className:`w-[500px]`,children:(0,s.jsx)(i,{...e,images:t,setImages:t=>{n(t),e.setImages?.(t)},deleteImages:r,setDeleteImages:a})})},d={render:e=>(0,s.jsx)(l,{...e}),args:{mode:`normal`,label:`Normal File Input`,placeholder:`No file selected`,isClearable:!0}},f={render:e=>(0,s.jsx)(l,{...e}),args:{mode:`profile`,label:`Profile Picture`,isPreviewOn:!0}},p={render:e=>(0,s.jsx)(l,{...e}),args:{mode:`dropzone`,label:`Single File Dropzone`,isPreviewOn:!0}},m={render:e=>(0,s.jsx)(u,{...e}),args:{mode:`multi`,label:`Multiple Files Dropzone`,isPreviewOn:!0}},h={render:()=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-8 w-[600px]`,children:[(0,s.jsxs)(`div`,{className:`flex gap-4`,children:[(0,s.jsx)(l,{label:`Flat`,variant:`flat`,isClearable:!0}),(0,s.jsx)(l,{label:`Bordered`,variant:`bordered`,isClearable:!0})]}),(0,s.jsxs)(`div`,{className:`flex gap-4`,children:[(0,s.jsx)(l,{label:`Underlined`,variant:`underlined`,isClearable:!0}),(0,s.jsx)(l,{label:`Faded`,variant:`faded`,isClearable:!0})]})]})},g={render:()=>(0,s.jsx)(`div`,{className:`flex gap-6 w-[700px] items-end`,children:[`sm`,`md`,`lg`].map(e=>(0,s.jsx)(l,{label:`Size ${e.toUpperCase()}`,size:e,isClearable:!0},e))})},_={render:()=>(0,s.jsx)(`div`,{className:`flex gap-4 w-[800px]`,children:[`none`,`sm`,`md`,`lg`,`full`].map(e=>(0,s.jsx)(l,{label:`${e.toUpperCase()}`,radius:e,isClearable:!0},e))})},v={render:()=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-8 w-[600px]`,children:[(0,s.jsxs)(`div`,{className:`flex gap-4 items-end`,children:[(0,s.jsx)(l,{label:`Inside (Floating)`,labelPlacement:`inside`,isClearable:!0}),(0,s.jsx)(l,{label:`Inside (static with placeholder)`,labelPlacement:`inside`,isClearable:!0,placeholder:`Select file`})]}),(0,s.jsxs)(`div`,{className:`flex gap-4 items-end`,children:[(0,s.jsx)(l,{label:`Outside (Floating)`,isClearable:!0}),(0,s.jsx)(l,{label:`Outside (static with placeholder)`,isClearable:!0,placeholder:`Select file`})]}),(0,s.jsxs)(`div`,{className:`flex gap-4 items-end`,children:[(0,s.jsx)(l,{label:`Outlined`,labelPlacement:`outlined`,isClearable:!0}),(0,s.jsx)(l,{label:`Outlined (static with placeholder)`,labelPlacement:`outlined`,isClearable:!0,placeholder:`Select file`})]}),(0,s.jsxs)(`div`,{className:`flex gap-4 items-end`,children:[(0,s.jsx)(l,{label:`Outside Top`,labelPlacement:`outside-top`,isClearable:!0}),(0,s.jsx)(l,{label:`Outside Left`,labelPlacement:`outside-left`,isClearable:!0})]})]})},y={render:()=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-8 w-[800px]`,children:[(0,s.jsxs)(`div`,{className:`flex gap-6 items-end`,children:[(0,s.jsx)(l,{label:`Profile SM`,mode:`profile`,size:`sm`}),(0,s.jsx)(l,{label:`Profile MD`,mode:`profile`,size:`md`}),(0,s.jsx)(l,{label:`Profile LG`,mode:`profile`,size:`lg`})]}),(0,s.jsxs)(`div`,{className:`flex gap-6 items-end`,children:[(0,s.jsx)(l,{label:`Radius None`,mode:`profile`,size:`sm`,radius:`none`}),(0,s.jsx)(l,{label:`Radius SM`,mode:`profile`,size:`sm`,radius:`sm`}),(0,s.jsx)(l,{label:`Radius MD`,mode:`profile`,size:`sm`,radius:`md`}),(0,s.jsx)(l,{label:`Radius LG`,mode:`profile`,size:`sm`,radius:`lg`}),(0,s.jsx)(l,{label:`Radius Full`,mode:`profile`,size:`sm`,radius:`full`})]})]})},b={render:()=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-8 w-[800px]`,children:[(0,s.jsxs)(`div`,{className:`flex gap-6 items-end`,children:[(0,s.jsx)(l,{label:`Dropzone SM`,mode:`dropzone`,size:`sm`}),(0,s.jsx)(l,{label:`Dropzone MD`,mode:`dropzone`,size:`md`}),(0,s.jsx)(l,{label:`Dropzone LG`,mode:`dropzone`,size:`lg`})]}),(0,s.jsxs)(`div`,{className:`flex gap-6 items-end`,children:[(0,s.jsx)(l,{label:`Radius None`,mode:`dropzone`,size:`sm`,radius:`none`}),(0,s.jsx)(l,{label:`Radius SM`,mode:`dropzone`,size:`sm`,radius:`sm`}),(0,s.jsx)(l,{label:`Radius MD`,mode:`dropzone`,size:`sm`,radius:`md`}),(0,s.jsx)(l,{label:`Radius LG`,mode:`dropzone`,size:`sm`,radius:`lg`}),(0,s.jsx)(l,{label:`Radius Full`,mode:`dropzone`,size:`sm`,radius:`full`})]})]})},x={render:()=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-8 w-[800px]`,children:[(0,s.jsxs)(`div`,{className:`flex gap-6 items-end`,children:[(0,s.jsx)(u,{label:`Multi SM`,mode:`multi`,size:`sm`}),(0,s.jsx)(u,{label:`Multi MD`,mode:`multi`,size:`md`}),(0,s.jsx)(u,{label:`Multi LG`,mode:`multi`,size:`lg`})]}),(0,s.jsxs)(`div`,{className:`flex gap-6 items-end`,children:[(0,s.jsx)(u,{label:`Radius None`,mode:`multi`,size:`sm`,radius:`none`}),(0,s.jsx)(u,{label:`Radius SM`,mode:`multi`,size:`sm`,radius:`sm`}),(0,s.jsx)(u,{label:`Radius MD`,mode:`multi`,size:`sm`,radius:`md`}),(0,s.jsx)(u,{label:`Radius LG`,mode:`multi`,size:`sm`,radius:`lg`}),(0,s.jsx)(u,{label:`Radius Full`,mode:`multi`,size:`sm`,radius:`full`})]})]})},S={render:()=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-8 w-[600px]`,children:[(0,s.jsxs)(`div`,{className:`flex gap-4 items-end`,children:[(0,s.jsx)(l,{label:`Normal Mode`,mode:`normal`,disabled:!0}),(0,s.jsx)(l,{label:`Profile Mode`,mode:`profile`,disabled:!0})]}),(0,s.jsxs)(`div`,{className:`flex gap-4 items-end`,children:[(0,s.jsx)(l,{label:`Dropzone Mode`,mode:`dropzone`,disabled:!0}),(0,s.jsx)(u,{label:`Multi Mode`,mode:`multi`,disabled:!0})]})]})},C={render:e=>(0,s.jsx)(l,{...e}),args:{label:`Resume File`,error:`File size exceeds 5MB limit`,touched:!0}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <FileInputWithState {...args} />,
  args: {
    mode: "normal",
    label: "Normal File Input",
    placeholder: "No file selected",
    isClearable: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <FileInputWithState {...args} />,
  args: {
    mode: "profile",
    label: "Profile Picture",
    isPreviewOn: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <FileInputWithState {...args} />,
  args: {
    mode: "dropzone",
    label: "Single File Dropzone",
    isPreviewOn: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <MultiFileInputWithState {...args} />,
  args: {
    mode: "multi",
    label: "Multiple Files Dropzone",
    isPreviewOn: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8 w-[600px]">
      <div className="flex gap-4">
        <FileInputWithState label="Flat" variant="flat" isClearable={true} />
        <FileInputWithState label="Bordered" variant="bordered" isClearable={true} />
      </div>
      <div className="flex gap-4">
        <FileInputWithState label="Underlined" variant="underlined" isClearable={true} />
        <FileInputWithState label="Faded" variant="faded" isClearable={true} />
      </div>
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-6 w-[700px] items-end">
      {(["sm", "md", "lg"] as const).map(size => <FileInputWithState key={size} label={\`Size \${size.toUpperCase()}\`} size={size} isClearable={true} />)}
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4 w-[800px]">
      {(["none", "sm", "md", "lg", "full"] as const).map(radius => <FileInputWithState key={radius} label={\`\${radius.toUpperCase()}\`} radius={radius} isClearable={true} />)}
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8 w-[600px]">
      <div className="flex gap-4 items-end">
        <FileInputWithState label="Inside (Floating)" labelPlacement="inside" isClearable={true} />
        <FileInputWithState label="Inside (static with placeholder)" labelPlacement="inside" isClearable={true} placeholder="Select file" />
      </div>
      <div className="flex gap-4 items-end">
        <FileInputWithState label="Outside (Floating)" isClearable={true} />
        <FileInputWithState label="Outside (static with placeholder)" isClearable={true} placeholder="Select file" />
      </div>
      <div className="flex gap-4 items-end">
        <FileInputWithState label="Outlined" labelPlacement="outlined" isClearable={true} />
        <FileInputWithState label="Outlined (static with placeholder)" labelPlacement="outlined" isClearable={true} placeholder="Select file" />
      </div>
      <div className="flex gap-4 items-end">
        <FileInputWithState label="Outside Top" labelPlacement="outside-top" isClearable={true} />
        <FileInputWithState label="Outside Left" labelPlacement="outside-left" isClearable={true} />
      </div>
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8 w-[800px]">
      <div className="flex gap-6 items-end">
        <FileInputWithState label="Profile SM" mode="profile" size="sm" />
        <FileInputWithState label="Profile MD" mode="profile" size="md" />
        <FileInputWithState label="Profile LG" mode="profile" size="lg" />
      </div>
      <div className="flex gap-6 items-end">
        <FileInputWithState label="Radius None" mode="profile" size="sm" radius="none" />
        <FileInputWithState label="Radius SM" mode="profile" size="sm" radius="sm" />
        <FileInputWithState label="Radius MD" mode="profile" size="sm" radius="md" />
        <FileInputWithState label="Radius LG" mode="profile" size="sm" radius="lg" />
        <FileInputWithState label="Radius Full" mode="profile" size="sm" radius="full" />
      </div>
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8 w-[800px]">
      <div className="flex gap-6 items-end">
        <FileInputWithState label="Dropzone SM" mode="dropzone" size="sm" />
        <FileInputWithState label="Dropzone MD" mode="dropzone" size="md" />
        <FileInputWithState label="Dropzone LG" mode="dropzone" size="lg" />
      </div>
      <div className="flex gap-6 items-end">
        <FileInputWithState label="Radius None" mode="dropzone" size="sm" radius="none" />
        <FileInputWithState label="Radius SM" mode="dropzone" size="sm" radius="sm" />
        <FileInputWithState label="Radius MD" mode="dropzone" size="sm" radius="md" />
        <FileInputWithState label="Radius LG" mode="dropzone" size="sm" radius="lg" />
        <FileInputWithState label="Radius Full" mode="dropzone" size="sm" radius="full" />
      </div>
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8 w-[800px]">
      <div className="flex gap-6 items-end">
        <MultiFileInputWithState label="Multi SM" mode="multi" size="sm" />
        <MultiFileInputWithState label="Multi MD" mode="multi" size="md" />
        <MultiFileInputWithState label="Multi LG" mode="multi" size="lg" />
      </div>
      <div className="flex gap-6 items-end">
        <MultiFileInputWithState label="Radius None" mode="multi" size="sm" radius="none" />
        <MultiFileInputWithState label="Radius SM" mode="multi" size="sm" radius="sm" />
        <MultiFileInputWithState label="Radius MD" mode="multi" size="sm" radius="md" />
        <MultiFileInputWithState label="Radius LG" mode="multi" size="sm" radius="lg" />
        <MultiFileInputWithState label="Radius Full" mode="multi" size="sm" radius="full" />
      </div>
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8 w-[600px]">
      <div className="flex gap-4 items-end">
        <FileInputWithState label="Normal Mode" mode="normal" disabled={true} />
        <FileInputWithState label="Profile Mode" mode="profile" disabled={true} />
      </div>
      <div className="flex gap-4 items-end">
        <FileInputWithState label="Dropzone Mode" mode="dropzone" disabled={true} />
        <MultiFileInputWithState label="Multi Mode" mode="multi" disabled={true} />
      </div>
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <FileInputWithState {...args} />,
  args: {
    label: "Resume File",
    error: "File size exceeds 5MB limit",
    touched: true
  }
}`,...C.parameters?.docs?.source}}},w=[`NormalMode`,`ProfileMode`,`DropzoneMode`,`MultiMode`,`NormalVariants`,`NormalSizes`,`NormalRadiuses`,`NormalLabelPlacements`,`ProfileSizesAndRadiuses`,`DropzoneSizesAndRadiuses`,`MultiSizesAndRadiuses`,`Disabled`,`ErrorState`]}))();export{S as Disabled,p as DropzoneMode,b as DropzoneSizesAndRadiuses,C as ErrorState,m as MultiMode,x as MultiSizesAndRadiuses,v as NormalLabelPlacements,d as NormalMode,_ as NormalRadiuses,g as NormalSizes,h as NormalVariants,f as ProfileMode,y as ProfileSizesAndRadiuses,w as __namedExportsOrder,c as default};