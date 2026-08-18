import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-DDzTVtu_.js";import{t as r}from"./iframe-sOyJkj26.js";import{D as i,J as a,t as o}from"./ui-DraYKXvF.js";var s,c,l,u,d,f,p,m,h,g,_,v,y;e((()=>{s=t(n(),1),o(),c=r(),l={title:`Components/Modal`,component:i,parameters:{layout:`fullscreen`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`xs`,`sm`,`md`,`lg`,`xl`,`2xl`,`3xl`,`4xl`,`5xl`,`full`]},backdrop:{control:`select`,options:[`transparent`,`opaque`,`blur`]},scrollBehavior:{control:`select`,options:[`inside`,`outside`]},radius:{control:`select`,options:[`none`,`sm`,`md`,`lg`]},shadow:{control:`select`,options:[`none`,`sm`,`md`,`lg`]},isDraggable:{control:`boolean`},isDismissable:{control:`boolean`},closeButton:{control:`boolean`}}},u={render:()=>{let[e,t]=(0,s.useState)(!1);return(0,c.jsxs)(`div`,{className:`p-10`,children:[(0,c.jsx)(a,{onClick:()=>t(!0),children:`Open Modal`}),(0,c.jsx)(i,{title:`Modal Title`,primaryActionText:`Confirm`,secondaryActionText:`Cancel`,openDialog:e,handleDialogClose:()=>t(!1),children:(0,c.jsxs)(`div`,{className:`py-4`,children:[(0,c.jsx)(`p`,{children:`This is the modal content. You can put anything here!`}),(0,c.jsx)(`p`,{className:`mt-2 text-neutral-500`,children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis.`})]})})]})}},d={render:()=>{let[e,t]=(0,s.useState)(null);return(0,c.jsxs)(`div`,{className:`p-10 flex flex-wrap gap-4`,children:[(0,c.jsx)(a,{onClick:()=>t(`xs`),children:`Open XS`}),(0,c.jsx)(a,{onClick:()=>t(`sm`),children:`Open SM`}),(0,c.jsx)(a,{onClick:()=>t(`md`),children:`Open MD`}),(0,c.jsx)(a,{onClick:()=>t(`lg`),children:`Open LG`}),(0,c.jsx)(a,{onClick:()=>t(`xl`),children:`Open XL`}),(0,c.jsx)(a,{onClick:()=>t(`2xl`),children:`Open 2XL`}),(0,c.jsx)(a,{onClick:()=>t(`3xl`),children:`Open 3XL`}),(0,c.jsx)(a,{onClick:()=>t(`4xl`),children:`Open 4XL`}),(0,c.jsx)(a,{onClick:()=>t(`5xl`),children:`Open 5XL`}),(0,c.jsx)(a,{onClick:()=>t(`full`),children:`Open Full`}),(0,c.jsx)(i,{title:`Modal Size: ${e}`,primaryActionText:`Confirm`,secondaryActionText:`Cancel`,size:e||`md`,openDialog:e!==null,handleDialogClose:()=>t(null),onPrimaryAction:()=>t(null),onSecondaryAction:()=>t(null),children:(0,c.jsxs)(`div`,{className:`py-4`,children:[(0,c.jsxs)(`p`,{children:[`This is a modal of size `,(0,c.jsx)(`strong`,{children:e}),`.`]}),(0,c.jsx)(`p`,{className:`mt-2 text-neutral-500`,children:`You can adjust the size prop to control the max width of the modal panel.`})]})})]})}},f={render:()=>{let[e,t]=(0,s.useState)(null);return(0,c.jsxs)(`div`,{className:`p-10 flex flex-wrap gap-4`,children:[(0,c.jsx)(a,{onClick:()=>t(`transparent`),children:`Transparent Backdrop`}),(0,c.jsx)(a,{onClick:()=>t(`opaque`),children:`Opaque Backdrop`}),(0,c.jsx)(a,{onClick:()=>t(`blur`),children:`Blur Backdrop`}),(0,c.jsx)(i,{title:`${e?.toUpperCase()} Backdrop`,primaryActionText:`Got it`,backdrop:e||`opaque`,openDialog:e!==null,handleDialogClose:()=>t(null),onPrimaryAction:()=>t(null),onSecondaryAction:()=>t(null),children:(0,c.jsx)(`div`,{className:`py-4`,children:(0,c.jsxs)(`p`,{children:[`This modal is showing the `,(0,c.jsx)(`strong`,{children:e}),` backdrop style.`]})})})]})}},p={render:()=>{let[e,t]=(0,s.useState)(null);return(0,c.jsxs)(`div`,{className:`p-10 flex flex-wrap gap-4`,children:[(0,c.jsx)(a,{onClick:()=>t(`inside`),children:`Scroll Inside`}),(0,c.jsx)(a,{onClick:()=>t(`outside`),children:`Scroll Outside`}),(0,c.jsx)(i,{title:`Scroll Behavior: ${e}`,primaryActionText:`Close`,scrollBehavior:e||`inside`,openDialog:e!==null,handleDialogClose:()=>t(null),onPrimaryAction:()=>t(null),onSecondaryAction:()=>t(null),children:(0,c.jsxs)(`div`,{className:`py-4`,children:[(0,c.jsxs)(`p`,{className:`mb-4 font-semibold text-primary`,children:[`Scroll behavior is set to "`,e,`".`]}),(0,c.jsx)(`p`,{className:`mb-4 text-neutral-500`,children:`Paragraph 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna id eros dictum vulputate vel in nibh.`}),(0,c.jsx)(`p`,{className:`mb-4 text-neutral-500`,children:`Paragraph 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}),(0,c.jsx)(`p`,{className:`mb-4 text-neutral-500`,children:`Paragraph 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.`}),(0,c.jsx)(`p`,{className:`mb-4 text-neutral-500`,children:`Paragraph 4: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.`})]})})]})}},m={render:()=>{let[e,t]=(0,s.useState)(!1);return(0,c.jsxs)(`div`,{className:`p-10`,children:[(0,c.jsx)(a,{onClick:()=>t(!0),children:`Open Draggable Modal`}),(0,c.jsx)(i,{title:`Draggable Modal`,isDraggable:!0,primaryActionText:`Confirm`,openDialog:e,handleDialogClose:()=>t(!1),children:(0,c.jsx)(`div`,{className:`py-4`,children:(0,c.jsx)(`p`,{children:`This is a draggable modal content. You can drag the header to move the modal around.`})})})]})}},h={render:()=>{let[e,t]=(0,s.useState)(null);return(0,c.jsxs)(`div`,{className:`p-10 flex gap-4`,children:[(0,c.jsx)(a,{onClick:()=>t(`dismissable`),children:`Dismissable (Click outside/Esc to close)`}),(0,c.jsx)(a,{variant:`bordered`,onClick:()=>t(`non-dismissable`),children:`Non-Dismissable (Must use buttons to close)`}),(0,c.jsx)(i,{title:e===`dismissable`?`Dismissable Modal`:`Non-Dismissable Modal`,primaryActionText:`Got it`,openDialog:e!==null,isDismissable:e===`dismissable`,isKeyboardDismissDisabled:e!==`dismissable`,handleDialogClose:()=>t(null),onPrimaryAction:()=>t(null),onSecondaryAction:()=>t(null),children:(0,c.jsx)(`div`,{className:`py-4`,children:e===`dismissable`?(0,c.jsx)(`p`,{children:`You can close this modal by clicking the backdrop or pressing the Escape key.`}):(0,c.jsx)(`p`,{children:`Clicking the backdrop or pressing Escape will NOT close this modal. You must click one of the buttons below to close it.`})})})]})}},g={render:()=>{let[e,t]=(0,s.useState)(null);return(0,c.jsxs)(`div`,{className:`p-10 flex gap-4`,children:[(0,c.jsx)(a,{onClick:()=>t(`with-btn`),children:`With Close Button (Default)`}),(0,c.jsx)(a,{variant:`bordered`,onClick:()=>t(`without-btn`),children:`Without Close Button`}),(0,c.jsx)(i,{title:e===`with-btn`?`Modal with Close Button`:`Modal without Close Button`,primaryActionText:`Close`,openDialog:e!==null,closeButton:e===`with-btn`,handleDialogClose:()=>t(null),onPrimaryAction:()=>t(null),onSecondaryAction:()=>t(null),children:(0,c.jsx)(`div`,{className:`py-4`,children:e===`with-btn`?(0,c.jsx)(`p`,{children:`This modal has the standard 'X' close button in the top-right corner.`}):(0,c.jsx)(`p`,{children:`This modal does not display the top-right 'X' close button.`})})})]})}},_={render:()=>{let[e,t]=(0,s.useState)(null);return(0,c.jsxs)(`div`,{className:`p-10 flex flex-wrap gap-4`,children:[(0,c.jsx)(a,{onClick:()=>t(`none`),children:`Radius NONE`}),(0,c.jsx)(a,{onClick:()=>t(`sm`),children:`Radius SM`}),(0,c.jsx)(a,{onClick:()=>t(`md`),children:`Radius MD`}),(0,c.jsx)(a,{onClick:()=>t(`lg`),children:`Radius LG`}),(0,c.jsx)(i,{title:`Modal Radius: ${e}`,primaryActionText:`Confirm`,secondaryActionText:`Cancel`,radius:e||`lg`,openDialog:e!==null,handleDialogClose:()=>t(null),onPrimaryAction:()=>t(null),onSecondaryAction:()=>t(null),children:(0,c.jsx)(`div`,{className:`py-4`,children:(0,c.jsxs)(`p`,{children:[`This modal is showing the `,(0,c.jsx)(`strong`,{children:e}),` border radius style.`]})})})]})}},v={render:()=>{let[e,t]=(0,s.useState)(null);return(0,c.jsxs)(`div`,{className:`p-10 flex flex-wrap gap-4`,children:[(0,c.jsx)(a,{onClick:()=>t(`none`),children:`Shadow NONE`}),(0,c.jsx)(a,{onClick:()=>t(`sm`),children:`Shadow SM`}),(0,c.jsx)(a,{onClick:()=>t(`md`),children:`Shadow MD`}),(0,c.jsx)(a,{onClick:()=>t(`lg`),children:`Shadow LG`}),(0,c.jsx)(i,{title:`Modal Shadow: ${e}`,primaryActionText:`Confirm`,secondaryActionText:`Cancel`,shadow:e||`lg`,openDialog:e!==null,handleDialogClose:()=>t(null),onPrimaryAction:()=>t(null),onSecondaryAction:()=>t(null),children:(0,c.jsx)(`div`,{className:`py-4`,children:(0,c.jsxs)(`p`,{children:[`This modal is showing the `,(0,c.jsx)(`strong`,{children:e}),` shadow strength style.`]})})})]})}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div className="p-10">
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal title="Modal Title" primaryActionText="Confirm" secondaryActionText="Cancel" openDialog={isOpen} handleDialogClose={() => setIsOpen(false)}>
          <div className="py-4">
            <p>This is the modal content. You can put anything here!</p>
            <p className="mt-2 text-neutral-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis.
            </p>
          </div>
        </Modal>
      </div>;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [openSize, setOpenSize] = useState<"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "full" | null>(null);
    return <div className="p-10 flex flex-wrap gap-4">
        <Button onClick={() => setOpenSize("xs")}>Open XS</Button>
        <Button onClick={() => setOpenSize("sm")}>Open SM</Button>
        <Button onClick={() => setOpenSize("md")}>Open MD</Button>
        <Button onClick={() => setOpenSize("lg")}>Open LG</Button>
        <Button onClick={() => setOpenSize("xl")}>Open XL</Button>
        <Button onClick={() => setOpenSize("2xl")}>Open 2XL</Button>
        <Button onClick={() => setOpenSize("3xl")}>Open 3XL</Button>
        <Button onClick={() => setOpenSize("4xl")}>Open 4XL</Button>
        <Button onClick={() => setOpenSize("5xl")}>Open 5XL</Button>
        <Button onClick={() => setOpenSize("full")}>Open Full</Button>

        <Modal title={\`Modal Size: \${openSize}\`} primaryActionText="Confirm" secondaryActionText="Cancel" size={openSize || "md"} openDialog={openSize !== null} handleDialogClose={() => setOpenSize(null)} onPrimaryAction={() => setOpenSize(null)} onSecondaryAction={() => setOpenSize(null)}>
          <div className="py-4">
            <p>This is a modal of size <strong>{openSize}</strong>.</p>
            <p className="mt-2 text-neutral-500">
              You can adjust the size prop to control the max width of the modal panel.
            </p>
          </div>
        </Modal>
      </div>;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [openBackdrop, setOpenBackdrop] = useState<"transparent" | "opaque" | "blur" | null>(null);
    return <div className="p-10 flex flex-wrap gap-4">
        <Button onClick={() => setOpenBackdrop("transparent")}>Transparent Backdrop</Button>
        <Button onClick={() => setOpenBackdrop("opaque")}>Opaque Backdrop</Button>
        <Button onClick={() => setOpenBackdrop("blur")}>Blur Backdrop</Button>

        <Modal title={\`\${openBackdrop?.toUpperCase()} Backdrop\`} primaryActionText="Got it" backdrop={openBackdrop || "opaque"} openDialog={openBackdrop !== null} handleDialogClose={() => setOpenBackdrop(null)} onPrimaryAction={() => setOpenBackdrop(null)} onSecondaryAction={() => setOpenBackdrop(null)}>
          <div className="py-4">
            <p>This modal is showing the <strong>{openBackdrop}</strong> backdrop style.</p>
          </div>
        </Modal>
      </div>;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [openBehavior, setOpenBehavior] = useState<"inside" | "outside" | null>(null);
    return <div className="p-10 flex flex-wrap gap-4">
        <Button onClick={() => setOpenBehavior("inside")}>Scroll Inside</Button>
        <Button onClick={() => setOpenBehavior("outside")}>Scroll Outside</Button>

        <Modal title={\`Scroll Behavior: \${openBehavior}\`} primaryActionText="Close" scrollBehavior={openBehavior || "inside"} openDialog={openBehavior !== null} handleDialogClose={() => setOpenBehavior(null)} onPrimaryAction={() => setOpenBehavior(null)} onSecondaryAction={() => setOpenBehavior(null)}>
          <div className="py-4">
            <p className="mb-4 font-semibold text-primary">
              Scroll behavior is set to "{openBehavior}".
            </p>
            <p className="mb-4 text-neutral-500">
              Paragraph 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec vel magna id eros dictum vulputate vel in nibh.
            </p>
            <p className="mb-4 text-neutral-500">
              Paragraph 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="mb-4 text-neutral-500">
              Paragraph 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p className="mb-4 text-neutral-500">
              Paragraph 4: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
            </p>
          </div>
        </Modal>
      </div>;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div className="p-10">
        <Button onClick={() => setIsOpen(true)}>Open Draggable Modal</Button>
        <Modal title="Draggable Modal" isDraggable={true} primaryActionText="Confirm" openDialog={isOpen} handleDialogClose={() => setIsOpen(false)}>
          <div className="py-4">
            <p>This is a draggable modal content. You can drag the header to move the modal around.</p>
          </div>
        </Modal>
      </div>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [openMode, setOpenMode] = useState<"dismissable" | "non-dismissable" | null>(null);
    return <div className="p-10 flex gap-4">
        <Button onClick={() => setOpenMode("dismissable")}>
          Dismissable (Click outside/Esc to close)
        </Button>
        <Button variant="bordered" onClick={() => setOpenMode("non-dismissable")}>
          Non-Dismissable (Must use buttons to close)
        </Button>

        <Modal title={openMode === "dismissable" ? "Dismissable Modal" : "Non-Dismissable Modal"} primaryActionText="Got it" openDialog={openMode !== null} isDismissable={openMode === "dismissable"} isKeyboardDismissDisabled={openMode !== "dismissable"} handleDialogClose={() => setOpenMode(null)} onPrimaryAction={() => setOpenMode(null)} onSecondaryAction={() => setOpenMode(null)}>
          <div className="py-4">
            {openMode === "dismissable" ? <p>You can close this modal by clicking the backdrop or pressing the Escape key.</p> : <p>Clicking the backdrop or pressing Escape will NOT close this modal. You must click one of the buttons below to close it.</p>}
          </div>
        </Modal>
      </div>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [openMode, setOpenMode] = useState<"with-btn" | "without-btn" | null>(null);
    return <div className="p-10 flex gap-4">
        <Button onClick={() => setOpenMode("with-btn")}>
          With Close Button (Default)
        </Button>
        <Button variant="bordered" onClick={() => setOpenMode("without-btn")}>
          Without Close Button
        </Button>

        <Modal title={openMode === "with-btn" ? "Modal with Close Button" : "Modal without Close Button"} primaryActionText="Close" openDialog={openMode !== null} closeButton={openMode === "with-btn"} handleDialogClose={() => setOpenMode(null)} onPrimaryAction={() => setOpenMode(null)} onSecondaryAction={() => setOpenMode(null)}>
          <div className="py-4">
            {openMode === "with-btn" ? <p>This modal has the standard 'X' close button in the top-right corner.</p> : <p>This modal does not display the top-right 'X' close button.</p>}
          </div>
        </Modal>
      </div>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [openRadius, setOpenRadius] = useState<"none" | "sm" | "md" | "lg" | null>(null);
    return <div className="p-10 flex flex-wrap gap-4">
        <Button onClick={() => setOpenRadius("none")}>Radius NONE</Button>
        <Button onClick={() => setOpenRadius("sm")}>Radius SM</Button>
        <Button onClick={() => setOpenRadius("md")}>Radius MD</Button>
        <Button onClick={() => setOpenRadius("lg")}>Radius LG</Button>

        <Modal title={\`Modal Radius: \${openRadius}\`} primaryActionText="Confirm" secondaryActionText="Cancel" radius={openRadius || "lg"} openDialog={openRadius !== null} handleDialogClose={() => setOpenRadius(null)} onPrimaryAction={() => setOpenRadius(null)} onSecondaryAction={() => setOpenRadius(null)}>
          <div className="py-4">
            <p>This modal is showing the <strong>{openRadius}</strong> border radius style.</p>
          </div>
        </Modal>
      </div>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [openShadow, setOpenShadow] = useState<"none" | "sm" | "md" | "lg" | null>(null);
    return <div className="p-10 flex flex-wrap gap-4">
        <Button onClick={() => setOpenShadow("none")}>Shadow NONE</Button>
        <Button onClick={() => setOpenShadow("sm")}>Shadow SM</Button>
        <Button onClick={() => setOpenShadow("md")}>Shadow MD</Button>
        <Button onClick={() => setOpenShadow("lg")}>Shadow LG</Button>

        <Modal title={\`Modal Shadow: \${openShadow}\`} primaryActionText="Confirm" secondaryActionText="Cancel" shadow={openShadow || "lg"} openDialog={openShadow !== null} handleDialogClose={() => setOpenShadow(null)} onPrimaryAction={() => setOpenShadow(null)} onSecondaryAction={() => setOpenShadow(null)}>
          <div className="py-4">
            <p>This modal is showing the <strong>{openShadow}</strong> shadow strength style.</p>
          </div>
        </Modal>
      </div>;
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`Sizes`,`Backdrops`,`ScrollBehaviors`,`Draggable`,`Dismissable`,`CloseButtonVariant`,`Radiuses`,`Shadows`]}))();export{f as Backdrops,g as CloseButtonVariant,u as Default,h as Dismissable,m as Draggable,_ as Radiuses,p as ScrollBehaviors,v as Shadows,d as Sizes,y as __namedExportsOrder,l as default};