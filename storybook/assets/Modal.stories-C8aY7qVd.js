import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-DDzTVtu_.js";import{t as r}from"./iframe-BSsvUtib.js";import{H as i,t as a,x as o}from"./ui-C8puiJZM.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{s=t(n(),1),a(),c=r(),l={title:`Components/Modal`,component:o,parameters:{layout:`fullscreen`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`xs`,`sm`,`md`,`lg`,`xl`,`2xl`,`3xl`,`4xl`,`5xl`,`full`]},backdrop:{control:`select`,options:[`transparent`,`opaque`,`blur`]},scrollBehavior:{control:`select`,options:[`inside`,`outside`]},radius:{control:`select`,options:[`none`,`sm`,`md`,`lg`]},shadow:{control:`select`,options:[`none`,`sm`,`md`,`lg`]},isDraggable:{control:`boolean`},isDismissable:{control:`boolean`},closeButton:{control:`boolean`}}},u=e=>{let[t,n]=(0,s.useState)(!1);return(0,c.jsxs)(`div`,{className:`p-10`,children:[(0,c.jsx)(i,{onClick:()=>n(!0),children:`Open Modal`}),(0,c.jsx)(o,{...e,openDialog:t,handleDialogClose:()=>n(!1),children:(0,c.jsxs)(`div`,{className:`py-4`,children:[(0,c.jsx)(`p`,{children:`This is the modal content. You can put anything here!`}),(0,c.jsx)(`p`,{className:`mt-2 text-neutral-500`,children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis.`})]})})]})},d={render:e=>(0,c.jsx)(u,{...e}),args:{title:`Modal Title`,primaryActionText:`Confirm`,secondaryActionText:`Cancel`}},f={render:e=>{let[t,n]=(0,s.useState)(null);return(0,c.jsxs)(`div`,{className:`p-10 flex flex-wrap gap-4`,children:[[`xs`,`sm`,`md`,`lg`,`xl`,`2xl`,`3xl`,`4xl`,`5xl`,`full`].map(e=>(0,c.jsxs)(i,{onClick:()=>n(e),children:[`Open `,e]},e)),(0,c.jsx)(o,{...e,size:t||`md`,openDialog:t!==null,handleDialogClose:()=>n(null),onPrimaryAction:()=>n(null),onSecondaryAction:()=>n(null),title:`Modal Size: ${t}`,children:(0,c.jsxs)(`div`,{className:`py-4`,children:[(0,c.jsxs)(`p`,{children:[`This is a modal of size `,(0,c.jsx)(`strong`,{children:t}),`.`]}),(0,c.jsx)(`p`,{className:`mt-2 text-neutral-500`,children:`You can adjust the size prop to control the max width of the modal panel.`})]})})]})},args:{primaryActionText:`Confirm`,secondaryActionText:`Cancel`}},p={render:e=>{let[t,n]=(0,s.useState)(null);return(0,c.jsxs)(`div`,{className:`p-10 flex flex-wrap gap-4`,children:[[`transparent`,`opaque`,`blur`].map(e=>(0,c.jsxs)(i,{onClick:()=>n(e),children:[e,` Backdrop`]},e)),(0,c.jsx)(o,{...e,backdrop:t||`opaque`,openDialog:t!==null,handleDialogClose:()=>n(null),onPrimaryAction:()=>n(null),onSecondaryAction:()=>n(null),title:`${t?.toUpperCase()} Backdrop`,children:(0,c.jsx)(`div`,{className:`py-4`,children:(0,c.jsxs)(`p`,{children:[`This modal is showing the `,(0,c.jsx)(`strong`,{children:t}),` backdrop style.`]})})})]})},args:{primaryActionText:`Got it`}},m={render:e=>{let[t,n]=(0,s.useState)(null);return(0,c.jsxs)(`div`,{className:`p-10 flex flex-wrap gap-4`,children:[[`inside`,`outside`].map(e=>(0,c.jsxs)(i,{onClick:()=>n(e),children:[`Scroll `,e]},e)),(0,c.jsx)(o,{...e,scrollBehavior:t||`inside`,openDialog:t!==null,handleDialogClose:()=>n(null),onPrimaryAction:()=>n(null),onSecondaryAction:()=>n(null),title:`Scroll Behavior: ${t}`,children:(0,c.jsxs)(`div`,{className:`py-4`,children:[(0,c.jsxs)(`p`,{className:`mb-4 font-semibold text-primary`,children:[`Scroll behavior is set to "`,t,`".`]}),Array.from({length:15}).map((e,t)=>(0,c.jsxs)(`p`,{className:`mb-4 text-neutral-500`,children:[`Paragraph `,t+1,`: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna id eros dictum vulputate vel in nibh.`]},t))]})})]})},args:{primaryActionText:`Close`}},h={render:e=>(0,c.jsx)(u,{...e}),args:{title:`Draggable Modal`,isDraggable:!0,primaryActionText:`Confirm`}},g={render:e=>{let[t,n]=(0,s.useState)(null);return(0,c.jsxs)(`div`,{className:`p-10 flex gap-4`,children:[(0,c.jsx)(i,{onClick:()=>n(`dismissable`),children:`Dismissable (Click outside/Esc to close)`}),(0,c.jsx)(i,{variant:`bordered`,onClick:()=>n(`non-dismissable`),children:`Non-Dismissable (Must use buttons to close)`}),(0,c.jsx)(o,{...e,openDialog:t!==null,isDismissable:t===`dismissable`,isKeyboardDismissDisabled:t!==`dismissable`,handleDialogClose:()=>n(null),onPrimaryAction:()=>n(null),onSecondaryAction:()=>n(null),title:t===`dismissable`?`Dismissable Modal`:`Non-Dismissable Modal`,children:(0,c.jsx)(`div`,{className:`py-4`,children:t===`dismissable`?(0,c.jsx)(`p`,{children:`You can close this modal by clicking the backdrop or pressing the Escape key.`}):(0,c.jsx)(`p`,{children:`Clicking the backdrop or pressing Escape will NOT close this modal. You must click one of the buttons below to close it.`})})})]})},args:{primaryActionText:`Got it`}},_={render:e=>{let[t,n]=(0,s.useState)(null);return(0,c.jsxs)(`div`,{className:`p-10 flex gap-4`,children:[(0,c.jsx)(i,{onClick:()=>n(`with-btn`),children:`With Close Button (Default)`}),(0,c.jsx)(i,{variant:`bordered`,onClick:()=>n(`without-btn`),children:`Without Close Button`}),(0,c.jsx)(o,{...e,openDialog:t!==null,closeButton:t===`with-btn`,handleDialogClose:()=>n(null),onPrimaryAction:()=>n(null),onSecondaryAction:()=>n(null),title:t===`with-btn`?`Modal with Close Button`:`Modal without Close Button`,children:(0,c.jsx)(`div`,{className:`py-4`,children:t===`with-btn`?(0,c.jsx)(`p`,{children:`This modal has the standard 'X' close button in the top-right corner.`}):(0,c.jsx)(`p`,{children:`This modal does not display the top-right 'X' close button.`})})})]})},args:{primaryActionText:`Close`}},v={render:e=>{let[t,n]=(0,s.useState)(null);return(0,c.jsxs)(`div`,{className:`p-10 flex flex-wrap gap-4`,children:[[`none`,`sm`,`md`,`lg`].map(e=>(0,c.jsxs)(i,{onClick:()=>n(e),children:[`Radius `,e.toUpperCase()]},e)),(0,c.jsx)(o,{...e,radius:t||`lg`,openDialog:t!==null,handleDialogClose:()=>n(null),onPrimaryAction:()=>n(null),onSecondaryAction:()=>n(null),title:`Modal Radius: ${t}`,children:(0,c.jsx)(`div`,{className:`py-4`,children:(0,c.jsxs)(`p`,{children:[`This modal is showing the `,(0,c.jsx)(`strong`,{children:t}),` border radius style.`]})})})]})},args:{primaryActionText:`Confirm`,secondaryActionText:`Cancel`}},y={render:e=>{let[t,n]=(0,s.useState)(null);return(0,c.jsxs)(`div`,{className:`p-10 flex flex-wrap gap-4`,children:[[`none`,`sm`,`md`,`lg`].map(e=>(0,c.jsxs)(i,{onClick:()=>n(e),children:[`Shadow `,e.toUpperCase()]},e)),(0,c.jsx)(o,{...e,shadow:t||`lg`,openDialog:t!==null,handleDialogClose:()=>n(null),onPrimaryAction:()=>n(null),onSecondaryAction:()=>n(null),title:`Modal Shadow: ${t}`,children:(0,c.jsx)(`div`,{className:`py-4`,children:(0,c.jsxs)(`p`,{children:[`This modal is showing the `,(0,c.jsx)(`strong`,{children:t}),` shadow strength style.`]})})})]})},args:{primaryActionText:`Confirm`,secondaryActionText:`Cancel`}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <ModalWithTrigger {...args} />,
  args: {
    title: "Modal Title",
    primaryActionText: "Confirm",
    secondaryActionText: "Cancel"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [openSize, setOpenSize] = useState<any>(null);
    const sizes = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "full"] as const;
    return <div className="p-10 flex flex-wrap gap-4">
        {sizes.map(size => <Button key={size} onClick={() => setOpenSize(size)}>
            Open {size}
          </Button>)}

        <Modal {...args} size={openSize || "md"} openDialog={openSize !== null} handleDialogClose={() => setOpenSize(null)} onPrimaryAction={() => setOpenSize(null)} onSecondaryAction={() => setOpenSize(null)} title={\`Modal Size: \${openSize}\`}>
          <div className="py-4">
            <p>This is a modal of size <strong>{openSize}</strong>.</p>
            <p className="mt-2 text-neutral-500">
              You can adjust the size prop to control the max width of the modal panel.
            </p>
          </div>
        </Modal>
      </div>;
  },
  args: {
    primaryActionText: "Confirm",
    secondaryActionText: "Cancel"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [openBackdrop, setOpenBackdrop] = useState<any>(null);
    const backdrops = ["transparent", "opaque", "blur"] as const;
    return <div className="p-10 flex flex-wrap gap-4">
        {backdrops.map(backdrop => <Button key={backdrop} onClick={() => setOpenBackdrop(backdrop)}>
            {backdrop} Backdrop
          </Button>)}

        <Modal {...args} backdrop={openBackdrop || "opaque"} openDialog={openBackdrop !== null} handleDialogClose={() => setOpenBackdrop(null)} onPrimaryAction={() => setOpenBackdrop(null)} onSecondaryAction={() => setOpenBackdrop(null)} title={\`\${openBackdrop?.toUpperCase()} Backdrop\`}>
          <div className="py-4">
            <p>This modal is showing the <strong>{openBackdrop}</strong> backdrop style.</p>
          </div>
        </Modal>
      </div>;
  },
  args: {
    primaryActionText: "Got it"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [openBehavior, setOpenBehavior] = useState<any>(null);
    const behaviors = ["inside", "outside"] as const;
    return <div className="p-10 flex flex-wrap gap-4">
        {behaviors.map(behavior => <Button key={behavior} onClick={() => setOpenBehavior(behavior)}>
            Scroll {behavior}
          </Button>)}

        <Modal {...args} scrollBehavior={openBehavior || "inside"} openDialog={openBehavior !== null} handleDialogClose={() => setOpenBehavior(null)} onPrimaryAction={() => setOpenBehavior(null)} onSecondaryAction={() => setOpenBehavior(null)} title={\`Scroll Behavior: \${openBehavior}\`}>
          <div className="py-4">
            <p className="mb-4 font-semibold text-primary">
              Scroll behavior is set to "{openBehavior}".
            </p>
            {Array.from({
            length: 15
          }).map((_, i) => <p key={i} className="mb-4 text-neutral-500">
                Paragraph {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec vel magna id eros dictum vulputate vel in nibh.
              </p>)}
          </div>
        </Modal>
      </div>;
  },
  args: {
    primaryActionText: "Close"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <ModalWithTrigger {...args} />,
  args: {
    title: "Draggable Modal",
    isDraggable: true,
    primaryActionText: "Confirm"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [openMode, setOpenMode] = useState<"dismissable" | "non-dismissable" | null>(null);
    return <div className="p-10 flex gap-4">
        <Button onClick={() => setOpenMode("dismissable")}>
          Dismissable (Click outside/Esc to close)
        </Button>
        <Button variant="bordered" onClick={() => setOpenMode("non-dismissable")}>
          Non-Dismissable (Must use buttons to close)
        </Button>

        <Modal {...args} openDialog={openMode !== null} isDismissable={openMode === "dismissable"} isKeyboardDismissDisabled={openMode !== "dismissable"} handleDialogClose={() => setOpenMode(null)} onPrimaryAction={() => setOpenMode(null)} onSecondaryAction={() => setOpenMode(null)} title={openMode === "dismissable" ? "Dismissable Modal" : "Non-Dismissable Modal"}>
          <div className="py-4">
            {openMode === "dismissable" ? <p>You can close this modal by clicking the backdrop or pressing the Escape key.</p> : <p>Clicking the backdrop or pressing Escape will NOT close this modal. You must click one of the buttons below to close it.</p>}
          </div>
        </Modal>
      </div>;
  },
  args: {
    primaryActionText: "Got it"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [openMode, setOpenMode] = useState<"with-btn" | "without-btn" | null>(null);
    return <div className="p-10 flex gap-4">
        <Button onClick={() => setOpenMode("with-btn")}>
          With Close Button (Default)
        </Button>
        <Button variant="bordered" onClick={() => setOpenMode("without-btn")}>
          Without Close Button
        </Button>

        <Modal {...args} openDialog={openMode !== null} closeButton={openMode === "with-btn"} handleDialogClose={() => setOpenMode(null)} onPrimaryAction={() => setOpenMode(null)} onSecondaryAction={() => setOpenMode(null)} title={openMode === "with-btn" ? "Modal with Close Button" : "Modal without Close Button"}>
          <div className="py-4">
            {openMode === "with-btn" ? <p>This modal has the standard 'X' close button in the top-right corner.</p> : <p>This modal does not display the top-right 'X' close button.</p>}
          </div>
        </Modal>
      </div>;
  },
  args: {
    primaryActionText: "Close"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [openRadius, setOpenRadius] = useState<any>(null);
    const radiuses = ["none", "sm", "md", "lg"] as const;
    return <div className="p-10 flex flex-wrap gap-4">
        {radiuses.map(radius => <Button key={radius} onClick={() => setOpenRadius(radius)}>
            Radius {radius.toUpperCase()}
          </Button>)}

        <Modal {...args} radius={openRadius || "lg"} openDialog={openRadius !== null} handleDialogClose={() => setOpenRadius(null)} onPrimaryAction={() => setOpenRadius(null)} onSecondaryAction={() => setOpenRadius(null)} title={\`Modal Radius: \${openRadius}\`}>
          <div className="py-4">
            <p>This modal is showing the <strong>{openRadius}</strong> border radius style.</p>
          </div>
        </Modal>
      </div>;
  },
  args: {
    primaryActionText: "Confirm",
    secondaryActionText: "Cancel"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [openShadow, setOpenShadow] = useState<any>(null);
    const shadows = ["none", "sm", "md", "lg"] as const;
    return <div className="p-10 flex flex-wrap gap-4">
        {shadows.map(shadow => <Button key={shadow} onClick={() => setOpenShadow(shadow)}>
            Shadow {shadow.toUpperCase()}
          </Button>)}

        <Modal {...args} shadow={openShadow || "lg"} openDialog={openShadow !== null} handleDialogClose={() => setOpenShadow(null)} onPrimaryAction={() => setOpenShadow(null)} onSecondaryAction={() => setOpenShadow(null)} title={\`Modal Shadow: \${openShadow}\`}>
          <div className="py-4">
            <p>This modal is showing the <strong>{openShadow}</strong> shadow strength style.</p>
          </div>
        </Modal>
      </div>;
  },
  args: {
    primaryActionText: "Confirm",
    secondaryActionText: "Cancel"
  }
}`,...y.parameters?.docs?.source}}},b=[`Default`,`Sizes`,`Backdrops`,`ScrollBehaviors`,`Draggable`,`Dismissable`,`CloseButtonVariant`,`Radiuses`,`Shadows`]}))();export{p as Backdrops,_ as CloseButtonVariant,d as Default,g as Dismissable,h as Draggable,v as Radiuses,m as ScrollBehaviors,y as Shadows,f as Sizes,b as __namedExportsOrder,l as default};