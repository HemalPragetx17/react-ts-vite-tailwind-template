import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-DDzTVtu_.js";import{t as r}from"./iframe-sOyJkj26.js";import{J as i,f as a,t as o}from"./ui-DraYKXvF.js";var s,c,l,u,d,f,p,m;e((()=>{s=t(n(),1),o(),c=r(),l={title:`Components/Skeleton`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{isLoaded:{control:`boolean`},animation:{control:`select`,options:[`shimmer`,`pulse`,`none`]}}},u={render:()=>(0,c.jsxs)(`div`,{className:`w-[300px] flex flex-col gap-3`,children:[(0,c.jsx)(a,{className:`h-24 w-full rounded-lg`}),(0,c.jsxs)(`div`,{className:`space-y-2`,children:[(0,c.jsx)(a,{className:`h-3 w-3/5 rounded-lg`}),(0,c.jsx)(a,{className:`h-3 w-4/5 rounded-lg`})]})]})},d={render:()=>(0,c.jsxs)(`div`,{className:`w-[300px] flex items-center gap-3`,children:[(0,c.jsx)(`div`,{children:(0,c.jsx)(a,{className:`flex rounded-full w-12 h-12`})}),(0,c.jsxs)(`div`,{className:`w-full flex flex-col gap-2`,children:[(0,c.jsx)(a,{className:`h-3 w-3/5 rounded-lg`}),(0,c.jsx)(a,{className:`h-3 w-4/5 rounded-lg`})]})]})},f={render:()=>{let[e,t]=s.useState(!1);return(0,c.jsxs)(`div`,{className:`flex flex-col gap-4 items-center`,children:[(0,c.jsxs)(`div`,{className:`w-[300px] p-4 border border-default-200 dark:border-default-800 rounded-2xl space-y-5 bg-content1`,children:[(0,c.jsx)(a,{isLoaded:e,className:`rounded-lg`,children:(0,c.jsx)(`div`,{className:`h-32 rounded-lg bg-default-300 dark:bg-default-800`,children:(0,c.jsx)(`img`,{src:`https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=500&auto=format&fit=crop&q=60`,alt:`Card background`,className:`w-full h-full object-cover rounded-lg`})})}),(0,c.jsxs)(`div`,{className:`space-y-3`,children:[(0,c.jsx)(a,{isLoaded:e,className:`w-3/5 rounded-lg`,children:(0,c.jsx)(`div`,{className:`text-lg font-bold`,children:`Beautiful Abstract Art`})}),(0,c.jsx)(a,{isLoaded:e,className:`w-4/5 rounded-lg`,children:(0,c.jsx)(`div`,{className:`text-xs text-default-500`,children:`Created by Jane Doe. Discover the mesmerizing patterns of colorful gradients.`})}),(0,c.jsx)(a,{isLoaded:e,className:`w-2/5 rounded-lg`,children:(0,c.jsx)(`div`,{className:`text-sm font-semibold text-primary`,children:`$49.99`})})]})]}),(0,c.jsxs)(i,{onClick:()=>t(!e),color:`primary`,children:[`Toggle isLoaded (`,e?`Loaded`:`Loading`,`)`]})]})}},p={render:()=>(0,c.jsxs)(`div`,{className:`flex flex-col gap-6 w-[350px]`,children:[(0,c.jsxs)(`div`,{className:`space-y-2`,children:[(0,c.jsx)(`span`,{className:`text-xs text-neutral-400 font-semibold uppercase`,children:`Shimmer (Default)`}),(0,c.jsx)(a,{animation:`shimmer`,className:`h-10 w-full rounded-lg`})]}),(0,c.jsxs)(`div`,{className:`space-y-2`,children:[(0,c.jsx)(`span`,{className:`text-xs text-neutral-400 font-semibold uppercase`,children:`Pulse`}),(0,c.jsx)(a,{animation:`pulse`,className:`h-10 w-full rounded-lg`})]}),(0,c.jsxs)(`div`,{className:`space-y-2`,children:[(0,c.jsx)(`span`,{className:`text-xs text-neutral-400 font-semibold uppercase`,children:`None (Static)`}),(0,c.jsx)(a,{animation:`none`,className:`h-10 w-full rounded-lg`})]})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-[300px] flex flex-col gap-3">
      <Skeleton className="h-24 w-full rounded-lg" />
      <div className="space-y-2">
        <Skeleton className="h-3 w-3/5 rounded-lg" />
        <Skeleton className="h-3 w-4/5 rounded-lg" />
      </div>
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-[300px] flex items-center gap-3">
      <div>
        <Skeleton className="flex rounded-full w-12 h-12" />
      </div>
      <div className="w-full flex flex-col gap-2">
        <Skeleton className="h-3 w-3/5 rounded-lg" />
        <Skeleton className="h-3 w-4/5 rounded-lg" />
      </div>
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isLoaded, setIsLoaded] = React.useState(false);
    return <div className="flex flex-col gap-4 items-center">
        <div className="w-[300px] p-4 border border-default-200 dark:border-default-800 rounded-2xl space-y-5 bg-content1">
          <Skeleton isLoaded={isLoaded} className="rounded-lg">
            <div className="h-32 rounded-lg bg-default-300 dark:bg-default-800">
              <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=500&auto=format&fit=crop&q=60" alt="Card background" className="w-full h-full object-cover rounded-lg" />
            </div>
          </Skeleton>
          <div className="space-y-3">
            <Skeleton isLoaded={isLoaded} className="w-3/5 rounded-lg">
              <div className="text-lg font-bold">Beautiful Abstract Art</div>
            </Skeleton>
            <Skeleton isLoaded={isLoaded} className="w-4/5 rounded-lg">
              <div className="text-xs text-default-500">
                Created by Jane Doe. Discover the mesmerizing patterns of colorful gradients.
              </div>
            </Skeleton>
            <Skeleton isLoaded={isLoaded} className="w-2/5 rounded-lg">
              <div className="text-sm font-semibold text-primary">$49.99</div>
            </Skeleton>
          </div>
        </div>

        <Button onClick={() => setIsLoaded(!isLoaded)} color="primary">
          Toggle isLoaded ({isLoaded ? "Loaded" : "Loading"})
        </Button>
      </div>;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 w-[350px]">
      <div className="space-y-2">
        <span className="text-xs text-neutral-400 font-semibold uppercase">Shimmer (Default)</span>
        <Skeleton animation="shimmer" className="h-10 w-full rounded-lg" />
      </div>
      <div className="space-y-2">
        <span className="text-xs text-neutral-400 font-semibold uppercase">Pulse</span>
        <Skeleton animation="pulse" className="h-10 w-full rounded-lg" />
      </div>
      <div className="space-y-2">
        <span className="text-xs text-neutral-400 font-semibold uppercase">None (Static)</span>
        <Skeleton animation="none" className="h-10 w-full rounded-lg" />
      </div>
    </div>
}`,...p.parameters?.docs?.source}}},m=[`Default`,`StandaloneLayout`,`CardLoadingState`,`Animations`]}))();export{p as Animations,f as CardLoadingState,u as Default,d as StandaloneLayout,m as __namedExportsOrder,l as default};