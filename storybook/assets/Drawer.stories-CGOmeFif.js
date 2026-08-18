import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-DDzTVtu_.js";import{t as r}from"./iframe-sOyJkj26.js";import{G as i,H as a,J as o,K as s,U as c,V as l,W as u,t as d}from"./ui-DraYKXvF.js";var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;e((()=>{f=t(n(),1),d(),p=r(),m={title:`Components/Drawer`,component:a,parameters:{layout:`fullscreen`},tags:[`autodocs`],argTypes:{placement:{control:`select`,options:[`left`,`right`,`top`,`bottom`]},size:{control:`select`,options:[`xs`,`sm`,`md`,`lg`,`xl`,`2xl`,`3xl`,`4xl`,`5xl`,`full`]},backdrop:{control:`select`,options:[`transparent`,`opaque`,`blur`]},radius:{control:`select`,options:[`none`,`sm`,`md`,`lg`]},shadow:{control:`select`,options:[`none`,`sm`,`md`,`lg`]},isDismissable:{control:`boolean`},isKeyboardDismissDisabled:{control:`boolean`},closeButton:{control:`boolean`},scrollBehavior:{control:`select`,options:[`inside`,`outside`]}}},h={render:()=>{let{isOpen:e,onOpen:t,onClose:n}=l();return(0,p.jsxs)(`div`,{className:`p-10 flex flex-col items-center justify-center min-h-[300px]`,children:[(0,p.jsx)(o,{onClick:t,children:`Open Drawer`}),(0,p.jsx)(a,{isOpen:e,onClose:n,placement:`right`,size:`md`,backdrop:`opaque`,radius:`lg`,shadow:`lg`,isDismissable:!0,isKeyboardDismissDisabled:!1,closeButton:!0,scrollBehavior:`inside`,children:(0,p.jsxs)(u,{children:[(0,p.jsx)(s,{children:`Basic Drawer`}),(0,p.jsxs)(c,{children:[(0,p.jsx)(`p`,{className:`text-neutral-600 dark:text-neutral-400`,children:`This is the standard content of the drawer. You can customize the slide direction, size, backdrop, shadows, and click-to-dismiss behavior.`}),(0,p.jsx)(`p`,{className:`mt-4 text-neutral-600 dark:text-neutral-400`,children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`})]}),(0,p.jsxs)(i,{children:[(0,p.jsx)(o,{variant:`light`,color:`danger`,onClick:n,children:`Cancel`}),(0,p.jsx)(o,{onClick:n,children:`Confirm`})]})]})})]})}},g={render:()=>{let{isOpen:e,onOpen:t,onClose:n}=l(),[r,d]=(0,f.useState)(`right`),m=e=>{d(e),t()};return(0,p.jsxs)(`div`,{className:`p-10 flex flex-col items-center gap-4`,children:[(0,p.jsx)(`h3`,{className:`text-lg font-semibold mb-2 text-neutral-800 dark:text-neutral-200`,children:`Try Different Placements`}),(0,p.jsxs)(`div`,{className:`flex flex-wrap gap-3`,children:[(0,p.jsx)(o,{onClick:()=>m(`left`),children:`Left Drawer`}),(0,p.jsx)(o,{onClick:()=>m(`right`),children:`Right Drawer`}),(0,p.jsx)(o,{onClick:()=>m(`top`),children:`Top Drawer`}),(0,p.jsx)(o,{onClick:()=>m(`bottom`),children:`Bottom Drawer`})]}),(0,p.jsx)(a,{isOpen:e,onClose:n,placement:r,backdrop:`opaque`,children:(0,p.jsxs)(u,{children:[(0,p.jsxs)(s,{children:[`Drawer placement: `,r]}),(0,p.jsx)(c,{children:(0,p.jsxs)(`p`,{className:`text-neutral-600 dark:text-neutral-400`,children:[`This drawer is sliding in from the `,(0,p.jsx)(`strong`,{children:r}),` edge of the window.`]})}),(0,p.jsx)(i,{children:(0,p.jsx)(o,{onClick:n,children:`Close`})})]})})]})}},_={render:()=>{let{isOpen:e,onOpen:t,onClose:n}=l(),[r,d]=(0,f.useState)(`md`),[m,h]=(0,f.useState)(`right`),g=(e,n=`right`)=>{d(e),h(n),t()};return(0,p.jsxs)(`div`,{className:`p-10 flex flex-col gap-8`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`h3`,{className:`text-lg font-semibold mb-4 text-neutral-800 dark:text-neutral-200`,children:`Horizontal Sizes (sliding left/right)`}),(0,p.jsxs)(`div`,{className:`flex flex-wrap gap-3`,children:[(0,p.jsx)(o,{variant:`bordered`,onClick:()=>g(`xs`,`right`),children:`Size XS`}),(0,p.jsx)(o,{variant:`bordered`,onClick:()=>g(`sm`,`right`),children:`Size SM`}),(0,p.jsx)(o,{variant:`bordered`,onClick:()=>g(`md`,`right`),children:`Size MD`}),(0,p.jsx)(o,{variant:`bordered`,onClick:()=>g(`lg`,`right`),children:`Size LG`}),(0,p.jsx)(o,{variant:`bordered`,onClick:()=>g(`xl`,`right`),children:`Size XL`}),(0,p.jsx)(o,{variant:`bordered`,onClick:()=>g(`2xl`,`right`),children:`Size 2XL`}),(0,p.jsx)(o,{variant:`bordered`,onClick:()=>g(`3xl`,`right`),children:`Size 3XL`}),(0,p.jsx)(o,{variant:`bordered`,onClick:()=>g(`4xl`,`right`),children:`Size 4XL`}),(0,p.jsx)(o,{variant:`bordered`,onClick:()=>g(`5xl`,`right`),children:`Size 5XL`}),(0,p.jsx)(o,{variant:`bordered`,onClick:()=>g(`full`,`right`),children:`Size FULL`})]})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`h3`,{className:`text-lg font-semibold mb-4 text-neutral-800 dark:text-neutral-200`,children:`Vertical Sizes (sliding top/bottom)`}),(0,p.jsxs)(`div`,{className:`flex flex-wrap gap-3`,children:[(0,p.jsx)(o,{variant:`flat`,color:`secondary`,onClick:()=>g(`xs`,`bottom`),children:`Size XS (Bottom)`}),(0,p.jsx)(o,{variant:`flat`,color:`secondary`,onClick:()=>g(`sm`,`bottom`),children:`Size SM (Bottom)`}),(0,p.jsx)(o,{variant:`flat`,color:`secondary`,onClick:()=>g(`md`,`bottom`),children:`Size MD (Bottom)`}),(0,p.jsx)(o,{variant:`flat`,color:`secondary`,onClick:()=>g(`lg`,`bottom`),children:`Size LG (Bottom)`}),(0,p.jsx)(o,{variant:`flat`,color:`secondary`,onClick:()=>g(`xl`,`bottom`),children:`Size XL (Bottom)`}),(0,p.jsx)(o,{variant:`flat`,color:`secondary`,onClick:()=>g(`full`,`bottom`),children:`Size FULL (Bottom)`})]})]}),(0,p.jsx)(a,{isOpen:e,onClose:n,size:r,placement:m,backdrop:`opaque`,children:(0,p.jsxs)(u,{children:[(0,p.jsxs)(s,{children:[`Size: `,r?.toUpperCase()]}),(0,p.jsx)(c,{children:(0,p.jsxs)(`p`,{className:`text-neutral-600 dark:text-neutral-400`,children:[`This drawer is size `,(0,p.jsx)(`strong`,{children:r}),`, placed at `,(0,p.jsx)(`strong`,{children:m}),`.`]})}),(0,p.jsx)(i,{children:(0,p.jsx)(o,{onClick:n,children:`Close`})})]})})]})}},v={render:()=>{let{isOpen:e,onOpen:t,onClose:n}=l(),[r,d]=(0,f.useState)(`opaque`),m=e=>{d(e),t()};return(0,p.jsxs)(`div`,{className:`p-10 flex flex-col items-center gap-4`,children:[(0,p.jsx)(`h3`,{className:`text-lg font-semibold mb-2 text-neutral-800 dark:text-neutral-200`,children:`Try Different Backdrops`}),(0,p.jsxs)(`div`,{className:`flex gap-3`,children:[(0,p.jsx)(o,{onClick:()=>m(`opaque`),children:`Opaque Backdrop`}),(0,p.jsx)(o,{onClick:()=>m(`blur`),children:`Blur Backdrop`}),(0,p.jsx)(o,{onClick:()=>m(`transparent`),children:`Transparent Backdrop`})]}),(0,p.jsx)(a,{isOpen:e,onClose:n,backdrop:r,placement:`right`,children:(0,p.jsxs)(u,{children:[(0,p.jsxs)(s,{children:[r.toUpperCase(),` Backdrop`]}),(0,p.jsx)(c,{children:(0,p.jsxs)(`p`,{className:`text-neutral-600 dark:text-neutral-400`,children:[`Notice the background overlay styling. This is currently set to `,(0,p.jsx)(`strong`,{children:r}),`.`]})}),(0,p.jsx)(i,{children:(0,p.jsx)(o,{onClick:n,children:`Close`})})]})})]})}},y={render:()=>{let{isOpen:e,onOpen:t,onClose:n}=l();return(0,p.jsxs)(`div`,{className:`p-10 flex flex-col items-center justify-center min-h-[300px]`,children:[(0,p.jsxs)(`div`,{className:`text-center max-w-md`,children:[(0,p.jsx)(`h3`,{className:`text-lg font-semibold mb-2 text-neutral-800 dark:text-neutral-200`,children:`Render Callback Pattern`}),(0,p.jsx)(`p`,{className:`text-sm text-neutral-500 mb-4`,children:"Allows children of DrawerContent to be a render function that receives the internal `onClose` callback argument."}),(0,p.jsx)(o,{onClick:t,children:`Open Callback Drawer`})]}),(0,p.jsx)(a,{isOpen:e,onClose:n,placement:`right`,children:(0,p.jsx)(u,{children:e=>(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(s,{children:`Render Function Drawer`}),(0,p.jsx)(c,{children:(0,p.jsx)(`p`,{className:`text-neutral-600 dark:text-neutral-400`,children:"This content is rendered via a child function callback, enabling child nodes to trigger closures directly via the parameter `onCloseInternal`."})}),(0,p.jsx)(i,{children:(0,p.jsx)(o,{variant:`solid`,color:`danger`,onClick:e,children:`Close using callback`})})]})})})]})}},b={render:()=>{let{isOpen:e,onOpen:t,onClose:n}=l(),[r,d]=(0,f.useState)(``),[m,h]=(0,f.useState)(``);return(0,p.jsxs)(`div`,{className:`p-10 flex flex-col items-center justify-center min-h-[300px]`,children:[(0,p.jsx)(o,{onClick:t,children:`Open Contact Form`}),(0,p.jsx)(a,{isOpen:e,onClose:n,placement:`right`,size:`md`,children:(0,p.jsx)(u,{children:(0,p.jsxs)(`form`,{onSubmit:e=>{e.preventDefault(),alert(`Submitted name: ${r}, email: ${m}`),n()},className:`flex flex-col h-full`,children:[(0,p.jsx)(s,{children:`Create Account`}),(0,p.jsxs)(c,{className:`flex flex-col gap-4`,children:[(0,p.jsx)(`p`,{className:`text-sm text-neutral-500 mb-2`,children:`Please fill out the form below. Pressing Enter will submit the form, or you can click submit.`}),(0,p.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[(0,p.jsx)(`label`,{htmlFor:`name-input`,className:`text-xs font-semibold text-neutral-700 dark:text-neutral-300`,children:`Full Name`}),(0,p.jsx)(`input`,{id:`name-input`,type:`text`,required:!0,value:r,onChange:e=>d(e.target.value),placeholder:`John Doe`,className:`px-3 py-2 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-transparent focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm`})]}),(0,p.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[(0,p.jsx)(`label`,{htmlFor:`email-input`,className:`text-xs font-semibold text-neutral-700 dark:text-neutral-300`,children:`Email Address`}),(0,p.jsx)(`input`,{id:`email-input`,type:`email`,required:!0,value:m,onChange:e=>h(e.target.value),placeholder:`john@example.com`,className:`px-3 py-2 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-transparent focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm`})]})]}),(0,p.jsxs)(i,{children:[(0,p.jsx)(o,{variant:`light`,color:`default`,onClick:n,type:`button`,children:`Cancel`}),(0,p.jsx)(o,{color:`primary`,type:`submit`,children:`Submit Form`})]})]})})})]})}},x={render:()=>{let{isOpen:e,onOpen:t,onClose:n}=l(),[r,d]=(0,f.useState)(`lg`),m=e=>{d(e),t()};return(0,p.jsxs)(`div`,{className:`p-10 flex flex-col items-center gap-4`,children:[(0,p.jsx)(`h3`,{className:`text-lg font-semibold mb-2 text-neutral-800 dark:text-neutral-200`,children:`Try Different Border Radiuses`}),(0,p.jsxs)(`div`,{className:`flex flex-wrap gap-3`,children:[(0,p.jsx)(o,{onClick:()=>m(`none`),children:`Radius None`}),(0,p.jsx)(o,{onClick:()=>m(`sm`),children:`Radius SM`}),(0,p.jsx)(o,{onClick:()=>m(`md`),children:`Radius MD`}),(0,p.jsx)(o,{onClick:()=>m(`lg`),children:`Radius LG`})]}),(0,p.jsx)(a,{isOpen:e,onClose:n,radius:r,placement:`right`,children:(0,p.jsxs)(u,{children:[(0,p.jsxs)(s,{children:[`Radius: `,r.toUpperCase()]}),(0,p.jsx)(c,{children:(0,p.jsxs)(`p`,{className:`text-neutral-600 dark:text-neutral-400`,children:[`This drawer is showing the `,(0,p.jsx)(`strong`,{children:r}),` border radius style. Note how the corners on the opening edge are rounded.`]})}),(0,p.jsx)(i,{children:(0,p.jsx)(o,{onClick:n,children:`Close`})})]})})]})}},S={render:()=>{let{isOpen:e,onOpen:t,onClose:n}=l(),[r,d]=(0,f.useState)(`lg`),m=e=>{d(e),t()};return(0,p.jsxs)(`div`,{className:`p-10 flex flex-col items-center gap-4`,children:[(0,p.jsx)(`h3`,{className:`text-lg font-semibold mb-2 text-neutral-800 dark:text-neutral-200`,children:`Try Different Shadows`}),(0,p.jsxs)(`div`,{className:`flex flex-wrap gap-3`,children:[(0,p.jsx)(o,{onClick:()=>m(`none`),children:`Shadow None`}),(0,p.jsx)(o,{onClick:()=>m(`sm`),children:`Shadow SM`}),(0,p.jsx)(o,{onClick:()=>m(`md`),children:`Shadow MD`}),(0,p.jsx)(o,{onClick:()=>m(`lg`),children:`Shadow LG`})]}),(0,p.jsx)(a,{isOpen:e,onClose:n,shadow:r,placement:`right`,backdrop:`transparent`,children:(0,p.jsxs)(u,{children:[(0,p.jsxs)(s,{children:[`Shadow: `,r.toUpperCase()]}),(0,p.jsx)(c,{children:(0,p.jsxs)(`p`,{className:`text-neutral-600 dark:text-neutral-400`,children:[`This drawer is showing the `,(0,p.jsx)(`strong`,{children:r}),` shadow strength style.`]})}),(0,p.jsx)(i,{children:(0,p.jsx)(o,{onClick:n,children:`Close`})})]})})]})}},C={render:()=>{let{isOpen:e,onOpen:t,onClose:n}=l(),[r,d]=(0,f.useState)(!0),m=e=>{d(e),t()};return(0,p.jsxs)(`div`,{className:`p-10 flex flex-col items-center gap-4`,children:[(0,p.jsx)(`h3`,{className:`text-lg font-semibold mb-2 text-neutral-800 dark:text-neutral-200`,children:`Backdrop Click Dismiss Control`}),(0,p.jsxs)(`div`,{className:`flex gap-3`,children:[(0,p.jsx)(o,{onClick:()=>m(!0),children:`Dismissable (Default)`}),(0,p.jsx)(o,{variant:`bordered`,onClick:()=>m(!1),children:`Non-Dismissable`})]}),(0,p.jsx)(a,{isOpen:e,onClose:n,isDismissable:r,placement:`right`,children:(0,p.jsxs)(u,{children:[(0,p.jsxs)(s,{children:[r?`Dismissable`:`Non-Dismissable`,` Drawer`]}),(0,p.jsx)(c,{children:r?(0,p.jsx)(`p`,{className:`text-neutral-600 dark:text-neutral-400`,children:`You can close this drawer by clicking anywhere on the backdrop overlay.`}):(0,p.jsx)(`p`,{className:`text-neutral-600 dark:text-neutral-400`,children:`Clicking the backdrop will NOT close this drawer. You must click one of the buttons inside the drawer (like the close button in the top-right corner) to close it.`})}),(0,p.jsx)(i,{children:(0,p.jsx)(o,{onClick:n,children:`Close`})})]})})]})}},w={render:()=>{let{isOpen:e,onOpen:t,onClose:n}=l(),[r,d]=(0,f.useState)(!1),m=e=>{d(e),t()};return(0,p.jsxs)(`div`,{className:`p-10 flex flex-col items-center gap-4`,children:[(0,p.jsx)(`h3`,{className:`text-lg font-semibold mb-2 text-neutral-800 dark:text-neutral-200`,children:`Keyboard Escape Key Dismiss Control`}),(0,p.jsxs)(`div`,{className:`flex gap-3`,children:[(0,p.jsx)(o,{onClick:()=>m(!1),children:`Escape Key Enabled (Default)`}),(0,p.jsx)(o,{variant:`bordered`,onClick:()=>m(!0),children:`Escape Key Disabled`})]}),(0,p.jsx)(a,{isOpen:e,onClose:n,isKeyboardDismissDisabled:r,placement:`right`,children:(0,p.jsxs)(u,{children:[(0,p.jsxs)(s,{children:[`Escape Key `,r?`Disabled`:`Enabled`]}),(0,p.jsx)(c,{children:r?(0,p.jsxs)(`p`,{className:`text-neutral-600 dark:text-neutral-400`,children:[`Pressing the `,(0,p.jsx)(`strong`,{children:`Escape`}),` key will NOT close this drawer. You must close it using the buttons.`]}):(0,p.jsxs)(`p`,{className:`text-neutral-600 dark:text-neutral-400`,children:[`Press the `,(0,p.jsx)(`strong`,{children:`Escape`}),` key on your keyboard to close this drawer.`]})}),(0,p.jsx)(i,{children:(0,p.jsx)(o,{onClick:n,children:`Close`})})]})})]})}},T={render:()=>{let{isOpen:e,onOpen:t,onClose:n}=l(),[r,d]=(0,f.useState)(`left-to-right`),m={"left-to-right":{placement:`left`,motionProps:{variants:{initial:{x:`-100%`},animate:{x:0,transition:{type:`spring`,stiffness:300,damping:30}},exit:{x:`100vw`,transition:{duration:.35,ease:`easeIn`}}}}},"right-to-left":{placement:`right`,motionProps:{variants:{initial:{x:`100%`},animate:{x:0,transition:{type:`spring`,stiffness:300,damping:30}},exit:{x:`-100vw`,transition:{duration:.35,ease:`easeIn`}}}}},"top-to-bottom":{placement:`top`,motionProps:{variants:{initial:{y:`-100%`},animate:{y:0,transition:{type:`spring`,stiffness:300,damping:30}},exit:{y:`100vh`,transition:{duration:.35,ease:`easeIn`}}}}},"bottom-to-top":{placement:`bottom`,motionProps:{variants:{initial:{y:`100%`},animate:{y:0,transition:{type:`spring`,stiffness:300,damping:30}},exit:{y:`-100vh`,transition:{duration:.35,ease:`easeIn`}}}}}},h=e=>{d(e),t()},g=m[r];return(0,p.jsxs)(`div`,{className:`p-10 flex flex-col items-center justify-center min-h-[300px]`,children:[(0,p.jsxs)(`div`,{className:`text-center max-w-md mb-6`,children:[(0,p.jsx)(`h3`,{className:`text-lg font-semibold mb-2 text-neutral-800 dark:text-neutral-200`,children:`Custom Motion Presets`}),(0,p.jsxs)(`p`,{className:`text-sm text-neutral-500 mb-4`,children:[`Showcase using `,(0,p.jsx)(`code`,{children:`motionProps`}),` to override entrance/exit animations. Open the drawer with one of the buttons below to see the different custom motion trajectories.`]}),(0,p.jsxs)(`div`,{className:`flex flex-wrap justify-center gap-3`,children:[(0,p.jsx)(o,{onClick:()=>h(`left-to-right`),children:`Left to Right`}),(0,p.jsx)(o,{onClick:()=>h(`right-to-left`),children:`Right to Left`}),(0,p.jsx)(o,{onClick:()=>h(`top-to-bottom`),children:`Top to Bottom`}),(0,p.jsx)(o,{onClick:()=>h(`bottom-to-top`),children:`Bottom to Top`})]})]}),(0,p.jsx)(a,{isOpen:e,onClose:n,size:`md`,placement:g.placement,motionProps:g.motionProps,children:(0,p.jsxs)(u,{children:[(0,p.jsxs)(s,{children:[`Custom Motion: `,r.replace(/-/g,` `)]}),(0,p.jsxs)(c,{children:[(0,p.jsx)(`p`,{className:`text-neutral-600 dark:text-neutral-400`,children:`This drawer enters from the standard position and exits in a custom direction using custom motion variants!`}),(0,p.jsxs)(`div`,{className:`mt-4 text-neutral-500 text-xs`,children:[`Custom configuration:`,(0,p.jsx)(`pre`,{className:`mt-2 p-3 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-800 dark:text-neutral-200 overflow-x-auto text-[10px] leading-relaxed`,children:JSON.stringify(g.motionProps.variants,null,2)})]})]}),(0,p.jsx)(i,{children:(0,p.jsx)(o,{onClick:n,children:`Close & Animate`})})]})})]})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      isOpen,
      onOpen,
      onClose
    } = useDisclosure();
    return <div className="p-10 flex flex-col items-center justify-center min-h-[300px]">
        <Button onClick={onOpen}>Open Drawer</Button>
        <Drawer isOpen={isOpen} onClose={onClose} placement="right" size="md" backdrop="opaque" radius="lg" shadow="lg" isDismissable isKeyboardDismissDisabled={false} closeButton scrollBehavior="inside">
          <DrawerContent>
            <DrawerHeader>Basic Drawer</DrawerHeader>
            <DrawerBody>
              <p className="text-neutral-600 dark:text-neutral-400">
                This is the standard content of the drawer. You can customize the slide direction, size, backdrop, shadows, and click-to-dismiss behavior.
              </p>
              <p className="mt-4 text-neutral-600 dark:text-neutral-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </DrawerBody>
            <DrawerFooter>
              <Button variant="light" color="danger" onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={onClose}>
                Confirm
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      isOpen,
      onOpen,
      onClose
    } = useDisclosure();
    const [placement, setPlacement] = useState<any>("right");
    const openPlacement = (place: any) => {
      setPlacement(place);
      onOpen();
    };
    return <div className="p-10 flex flex-col items-center gap-4">
        <h3 className="text-lg font-semibold mb-2 text-neutral-800 dark:text-neutral-200">
          Try Different Placements
        </h3>
        <div className="flex flex-wrap gap-3">
          <Button onClick={() => openPlacement("left")}>Left Drawer</Button>
          <Button onClick={() => openPlacement("right")}>Right Drawer</Button>
          <Button onClick={() => openPlacement("top")}>Top Drawer</Button>
          <Button onClick={() => openPlacement("bottom")}>Bottom Drawer</Button>
        </div>

        <Drawer isOpen={isOpen} onClose={onClose} placement={placement} backdrop="opaque">
          <DrawerContent>
            <DrawerHeader>Drawer placement: {placement}</DrawerHeader>
            <DrawerBody>
              <p className="text-neutral-600 dark:text-neutral-400">
                This drawer is sliding in from the <strong>{placement}</strong> edge of the window.
              </p>
            </DrawerBody>
            <DrawerFooter>
              <Button onClick={onClose}>Close</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      isOpen,
      onOpen,
      onClose
    } = useDisclosure();
    const [size, setSize] = useState<any>("md");
    const [placement, setPlacement] = useState<any>("right");
    const openSize = (sz: any, place: any = "right") => {
      setSize(sz);
      setPlacement(place);
      onOpen();
    };
    return <div className="p-10 flex flex-col gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
            Horizontal Sizes (sliding left/right)
          </h3>
          <div className="flex flex-wrap gap-3">
            <Button variant="bordered" onClick={() => openSize("xs", "right")}>Size XS</Button>
            <Button variant="bordered" onClick={() => openSize("sm", "right")}>Size SM</Button>
            <Button variant="bordered" onClick={() => openSize("md", "right")}>Size MD</Button>
            <Button variant="bordered" onClick={() => openSize("lg", "right")}>Size LG</Button>
            <Button variant="bordered" onClick={() => openSize("xl", "right")}>Size XL</Button>
            <Button variant="bordered" onClick={() => openSize("2xl", "right")}>Size 2XL</Button>
            <Button variant="bordered" onClick={() => openSize("3xl", "right")}>Size 3XL</Button>
            <Button variant="bordered" onClick={() => openSize("4xl", "right")}>Size 4XL</Button>
            <Button variant="bordered" onClick={() => openSize("5xl", "right")}>Size 5XL</Button>
            <Button variant="bordered" onClick={() => openSize("full", "right")}>Size FULL</Button>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
            Vertical Sizes (sliding top/bottom)
          </h3>
          <div className="flex flex-wrap gap-3">
            <Button variant="flat" color="secondary" onClick={() => openSize("xs", "bottom")}>Size XS (Bottom)</Button>
            <Button variant="flat" color="secondary" onClick={() => openSize("sm", "bottom")}>Size SM (Bottom)</Button>
            <Button variant="flat" color="secondary" onClick={() => openSize("md", "bottom")}>Size MD (Bottom)</Button>
            <Button variant="flat" color="secondary" onClick={() => openSize("lg", "bottom")}>Size LG (Bottom)</Button>
            <Button variant="flat" color="secondary" onClick={() => openSize("xl", "bottom")}>Size XL (Bottom)</Button>
            <Button variant="flat" color="secondary" onClick={() => openSize("full", "bottom")}>Size FULL (Bottom)</Button>
          </div>
        </div>

        <Drawer isOpen={isOpen} onClose={onClose} size={size} placement={placement} backdrop="opaque">
          <DrawerContent>
            <DrawerHeader>Size: {size?.toUpperCase()}</DrawerHeader>
            <DrawerBody>
              <p className="text-neutral-600 dark:text-neutral-400">
                This drawer is size <strong>{size}</strong>, placed at <strong>{placement}</strong>.
              </p>
            </DrawerBody>
            <DrawerFooter>
              <Button onClick={onClose}>Close</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      isOpen,
      onOpen,
      onClose
    } = useDisclosure();
    const [backdrop, setBackdrop] = useState<any>("opaque");
    const openBackdrop = (bd: any) => {
      setBackdrop(bd);
      onOpen();
    };
    return <div className="p-10 flex flex-col items-center gap-4">
        <h3 className="text-lg font-semibold mb-2 text-neutral-800 dark:text-neutral-200">
          Try Different Backdrops
        </h3>
        <div className="flex gap-3">
          <Button onClick={() => openBackdrop("opaque")}>Opaque Backdrop</Button>
          <Button onClick={() => openBackdrop("blur")}>Blur Backdrop</Button>
          <Button onClick={() => openBackdrop("transparent")}>Transparent Backdrop</Button>
        </div>

        <Drawer isOpen={isOpen} onClose={onClose} backdrop={backdrop} placement="right">
          <DrawerContent>
            <DrawerHeader>{backdrop.toUpperCase()} Backdrop</DrawerHeader>
            <DrawerBody>
              <p className="text-neutral-600 dark:text-neutral-400">
                Notice the background overlay styling. This is currently set to <strong>{backdrop}</strong>.
              </p>
            </DrawerBody>
            <DrawerFooter>
              <Button onClick={onClose}>Close</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      isOpen,
      onOpen,
      onClose
    } = useDisclosure();
    return <div className="p-10 flex flex-col items-center justify-center min-h-[300px]">
        <div className="text-center max-w-md">
          <h3 className="text-lg font-semibold mb-2 text-neutral-800 dark:text-neutral-200">
            Render Callback Pattern
          </h3>
          <p className="text-sm text-neutral-500 mb-4">
            Allows children of DrawerContent to be a render function that receives the internal \`onClose\` callback argument.
          </p>
          <Button onClick={onOpen}>Open Callback Drawer</Button>
        </div>

        <Drawer isOpen={isOpen} onClose={onClose} placement="right">
          <DrawerContent>
            {onCloseInternal => <>
                <DrawerHeader>Render Function Drawer</DrawerHeader>
                <DrawerBody>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    This content is rendered via a child function callback, enabling child nodes to trigger closures directly via the parameter \`onCloseInternal\`.
                  </p>
                </DrawerBody>
                <DrawerFooter>
                  <Button variant="solid" color="danger" onClick={onCloseInternal}>
                    Close using callback
                  </Button>
                </DrawerFooter>
              </>}
          </DrawerContent>
        </Drawer>
      </div>;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      isOpen,
      onOpen,
      onClose
    } = useDisclosure();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      alert(\`Submitted name: \${name}, email: \${email}\`);
      onClose();
    };
    return <div className="p-10 flex flex-col items-center justify-center min-h-[300px]">
        <Button onClick={onOpen}>Open Contact Form</Button>

        <Drawer isOpen={isOpen} onClose={onClose} placement="right" size="md">
          <DrawerContent>
            <form onSubmit={handleSubmit} className="flex flex-col h-full">
              <DrawerHeader>Create Account</DrawerHeader>
              <DrawerBody className="flex flex-col gap-4">
                <p className="text-sm text-neutral-500 mb-2">
                  Please fill out the form below. Pressing Enter will submit the form, or you can click submit.
                </p>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name-input" className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                    Full Name
                  </label>
                  <input id="name-input" type="text" required value={name} onChange={e => setName(e.target.value)} placeholder="John Doe" className="px-3 py-2 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-transparent focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email-input" className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                    Email Address
                  </label>
                  <input id="email-input" type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="john@example.com" className="px-3 py-2 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-transparent focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm" />
                </div>
              </DrawerBody>
              <DrawerFooter>
                <Button variant="light" color="default" onClick={onClose} type="button">
                  Cancel
                </Button>
                <Button color="primary" type="submit">
                  Submit Form
                </Button>
              </DrawerFooter>
            </form>
          </DrawerContent>
        </Drawer>
      </div>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      isOpen,
      onOpen,
      onClose
    } = useDisclosure();
    const [radius, setRadius] = useState<any>("lg");
    const openRadius = (rd: any) => {
      setRadius(rd);
      onOpen();
    };
    return <div className="p-10 flex flex-col items-center gap-4">
        <h3 className="text-lg font-semibold mb-2 text-neutral-800 dark:text-neutral-200">
          Try Different Border Radiuses
        </h3>
        <div className="flex flex-wrap gap-3">
          <Button onClick={() => openRadius("none")}>Radius None</Button>
          <Button onClick={() => openRadius("sm")}>Radius SM</Button>
          <Button onClick={() => openRadius("md")}>Radius MD</Button>
          <Button onClick={() => openRadius("lg")}>Radius LG</Button>
        </div>

        <Drawer isOpen={isOpen} onClose={onClose} radius={radius} placement="right">
          <DrawerContent>
            <DrawerHeader>Radius: {radius.toUpperCase()}</DrawerHeader>
            <DrawerBody>
              <p className="text-neutral-600 dark:text-neutral-400">
                This drawer is showing the <strong>{radius}</strong> border radius style. Note how the corners on the opening edge are rounded.
              </p>
            </DrawerBody>
            <DrawerFooter>
              <Button onClick={onClose}>Close</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      isOpen,
      onOpen,
      onClose
    } = useDisclosure();
    const [shadow, setShadow] = useState<any>("lg");
    const openShadow = (sh: any) => {
      setShadow(sh);
      onOpen();
    };
    return <div className="p-10 flex flex-col items-center gap-4">
        <h3 className="text-lg font-semibold mb-2 text-neutral-800 dark:text-neutral-200">
          Try Different Shadows
        </h3>
        <div className="flex flex-wrap gap-3">
          <Button onClick={() => openShadow("none")}>Shadow None</Button>
          <Button onClick={() => openShadow("sm")}>Shadow SM</Button>
          <Button onClick={() => openShadow("md")}>Shadow MD</Button>
          <Button onClick={() => openShadow("lg")}>Shadow LG</Button>
        </div>

        <Drawer isOpen={isOpen} onClose={onClose} shadow={shadow} placement="right" backdrop="transparent">
          <DrawerContent>
            <DrawerHeader>Shadow: {shadow.toUpperCase()}</DrawerHeader>
            <DrawerBody>
              <p className="text-neutral-600 dark:text-neutral-400">
                This drawer is showing the <strong>{shadow}</strong> shadow strength style.
              </p>
            </DrawerBody>
            <DrawerFooter>
              <Button onClick={onClose}>Close</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      isOpen,
      onOpen,
      onClose
    } = useDisclosure();
    const [isDismissable, setIsDismissable] = useState(true);
    const openDismissable = (dismissable: boolean) => {
      setIsDismissable(dismissable);
      onOpen();
    };
    return <div className="p-10 flex flex-col items-center gap-4">
        <h3 className="text-lg font-semibold mb-2 text-neutral-800 dark:text-neutral-200">
          Backdrop Click Dismiss Control
        </h3>
        <div className="flex gap-3">
          <Button onClick={() => openDismissable(true)}>Dismissable (Default)</Button>
          <Button variant="bordered" onClick={() => openDismissable(false)}>
            Non-Dismissable
          </Button>
        </div>

        <Drawer isOpen={isOpen} onClose={onClose} isDismissable={isDismissable} placement="right">
          <DrawerContent>
            <DrawerHeader>{isDismissable ? "Dismissable" : "Non-Dismissable"} Drawer</DrawerHeader>
            <DrawerBody>
              {isDismissable ? <p className="text-neutral-600 dark:text-neutral-400">
                  You can close this drawer by clicking anywhere on the backdrop overlay.
                </p> : <p className="text-neutral-600 dark:text-neutral-400">
                  Clicking the backdrop will NOT close this drawer. You must click one of the buttons inside the drawer (like the close button in the top-right corner) to close it.
                </p>}
            </DrawerBody>
            <DrawerFooter>
              <Button onClick={onClose}>Close</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      isOpen,
      onOpen,
      onClose
    } = useDisclosure();
    const [isKeyboardDismissDisabled, setIsKeyboardDismissDisabled] = useState(false);
    const openKeyboardDismiss = (disabled: boolean) => {
      setIsKeyboardDismissDisabled(disabled);
      onOpen();
    };
    return <div className="p-10 flex flex-col items-center gap-4">
        <h3 className="text-lg font-semibold mb-2 text-neutral-800 dark:text-neutral-200">
          Keyboard Escape Key Dismiss Control
        </h3>
        <div className="flex gap-3">
          <Button onClick={() => openKeyboardDismiss(false)}>Escape Key Enabled (Default)</Button>
          <Button variant="bordered" onClick={() => openKeyboardDismiss(true)}>
            Escape Key Disabled
          </Button>
        </div>

        <Drawer isOpen={isOpen} onClose={onClose} isKeyboardDismissDisabled={isKeyboardDismissDisabled} placement="right">
          <DrawerContent>
            <DrawerHeader>
              Escape Key {isKeyboardDismissDisabled ? "Disabled" : "Enabled"}
            </DrawerHeader>
            <DrawerBody>
              {isKeyboardDismissDisabled ? <p className="text-neutral-600 dark:text-neutral-400">
                  Pressing the <strong>Escape</strong> key will NOT close this drawer. You must close it using the buttons.
                </p> : <p className="text-neutral-600 dark:text-neutral-400">
                  Press the <strong>Escape</strong> key on your keyboard to close this drawer.
                </p>}
            </DrawerBody>
            <DrawerFooter>
              <Button onClick={onClose}>Close</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      isOpen,
      onOpen,
      onClose
    } = useDisclosure();
    const [motionType, setMotionType] = useState<"left-to-right" | "right-to-left" | "top-to-bottom" | "bottom-to-top">("left-to-right");
    const motionConfigs = {
      "left-to-right": {
        placement: "left" as const,
        motionProps: {
          variants: {
            initial: {
              x: "-100%"
            },
            animate: {
              x: 0,
              transition: {
                type: "spring" as const,
                stiffness: 300,
                damping: 30
              }
            },
            exit: {
              x: "100vw",
              transition: {
                duration: 0.35,
                ease: "easeIn" as const
              }
            }
          }
        }
      },
      "right-to-left": {
        placement: "right" as const,
        motionProps: {
          variants: {
            initial: {
              x: "100%"
            },
            animate: {
              x: 0,
              transition: {
                type: "spring" as const,
                stiffness: 300,
                damping: 30
              }
            },
            exit: {
              x: "-100vw",
              transition: {
                duration: 0.35,
                ease: "easeIn" as const
              }
            }
          }
        }
      },
      "top-to-bottom": {
        placement: "top" as const,
        motionProps: {
          variants: {
            initial: {
              y: "-100%"
            },
            animate: {
              y: 0,
              transition: {
                type: "spring" as const,
                stiffness: 300,
                damping: 30
              }
            },
            exit: {
              y: "100vh",
              transition: {
                duration: 0.35,
                ease: "easeIn" as const
              }
            }
          }
        }
      },
      "bottom-to-top": {
        placement: "bottom" as const,
        motionProps: {
          variants: {
            initial: {
              y: "100%"
            },
            animate: {
              y: 0,
              transition: {
                type: "spring" as const,
                stiffness: 300,
                damping: 30
              }
            },
            exit: {
              y: "-100vh",
              transition: {
                duration: 0.35,
                ease: "easeIn" as const
              }
            }
          }
        }
      }
    };
    const openMotion = (type: typeof motionType) => {
      setMotionType(type);
      onOpen();
    };
    const currentConfig = motionConfigs[motionType];
    return <div className="p-10 flex flex-col items-center justify-center min-h-[300px]">
        <div className="text-center max-w-md mb-6">
          <h3 className="text-lg font-semibold mb-2 text-neutral-800 dark:text-neutral-200">
            Custom Motion Presets
          </h3>
          <p className="text-sm text-neutral-500 mb-4">
            Showcase using <code>motionProps</code> to override entrance/exit animations. Open the drawer with one of the buttons below to see the different custom motion trajectories.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button onClick={() => openMotion("left-to-right")}>Left to Right</Button>
            <Button onClick={() => openMotion("right-to-left")}>Right to Left</Button>
            <Button onClick={() => openMotion("top-to-bottom")}>Top to Bottom</Button>
            <Button onClick={() => openMotion("bottom-to-top")}>Bottom to Top</Button>
          </div>
        </div>

        <Drawer isOpen={isOpen} onClose={onClose} size="md" placement={currentConfig.placement} motionProps={currentConfig.motionProps}>
          <DrawerContent>
            <DrawerHeader>Custom Motion: {motionType.replace(/-/g, " ")}</DrawerHeader>
            <DrawerBody>
              <p className="text-neutral-600 dark:text-neutral-400">
                This drawer enters from the standard position and exits in a custom direction using custom motion variants!
              </p>
              <div className="mt-4 text-neutral-500 text-xs">
                Custom configuration:
                <pre className="mt-2 p-3 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-800 dark:text-neutral-200 overflow-x-auto text-[10px] leading-relaxed">
                  {JSON.stringify(currentConfig.motionProps.variants, null, 2)}
                </pre>
              </div>
            </DrawerBody>
            <DrawerFooter>
              <Button onClick={onClose}>Close & Animate</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>;
  }
}`,...T.parameters?.docs?.source}}},E=[`Default`,`Placements`,`Sizes`,`Backdrops`,`RenderCallback`,`FormInDrawer`,`Radiuses`,`Shadows`,`Dismissable`,`KeyboardDismiss`,`CustomMotion`]}))();export{v as Backdrops,T as CustomMotion,h as Default,C as Dismissable,b as FormInDrawer,w as KeyboardDismiss,g as Placements,x as Radiuses,y as RenderCallback,S as Shadows,_ as Sizes,E as __namedExportsOrder,m as default};