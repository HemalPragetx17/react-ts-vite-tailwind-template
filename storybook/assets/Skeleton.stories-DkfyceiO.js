import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-DDzTVtu_.js";import{t as r}from"./iframe-BzRfQavU.js";import{H as i,d as a,t as o}from"./ui-sUaI0YKE.js";var s,c,l,u,d,f,p,m;e((()=>{s=t(n(),1),o(),c=r(),l={title:`Components/Skeleton`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{isLoaded:{control:`boolean`},animation:{control:`select`,options:[`shimmer`,`pulse`,`none`]}}},u={render:e=>(0,c.jsxs)(`div`,{className:`w-[300px] flex flex-col gap-3`,children:[(0,c.jsx)(a,{...e,className:`h-24 w-full rounded-lg`}),(0,c.jsxs)(`div`,{className:`space-y-2`,children:[(0,c.jsx)(a,{...e,className:`h-3 w-3/5 rounded-lg`}),(0,c.jsx)(a,{...e,className:`h-3 w-4/5 rounded-lg`})]})]})},d={render:e=>(0,c.jsxs)(`div`,{className:`max-w-[300px] w-full flex items-center gap-3`,children:[(0,c.jsx)(`div`,{children:(0,c.jsx)(a,{...e,className:`flex rounded-full w-12 h-12`})}),(0,c.jsxs)(`div`,{className:`w-full flex flex-col gap-2`,children:[(0,c.jsx)(a,{...e,className:`h-3 w-3/5 rounded-lg`}),(0,c.jsx)(a,{...e,className:`h-3 w-4/5 rounded-lg`})]})]})},f={render:e=>{let[t,n]=s.useState(!1);return(0,c.jsxs)(`div`,{className:`flex flex-col gap-4 items-center`,children:[(0,c.jsxs)(`div`,{className:`w-[300px] p-4 border border-default-200 dark:border-default-800 rounded-2xl space-y-5 bg-content1`,children:[(0,c.jsx)(a,{isLoaded:t,className:`rounded-lg`,children:(0,c.jsx)(`div`,{className:`h-32 rounded-lg bg-default-300 dark:bg-default-800`,children:(0,c.jsx)(`img`,{src:`https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=500&auto=format&fit=crop&q=60`,alt:`Card background`,className:`w-full h-full object-cover rounded-lg`})})}),(0,c.jsxs)(`div`,{className:`space-y-3`,children:[(0,c.jsx)(a,{isLoaded:t,className:`w-3/5 rounded-lg`,children:(0,c.jsx)(`div`,{className:`text-lg font-bold`,children:`Beautiful Abstract Art`})}),(0,c.jsx)(a,{isLoaded:t,className:`w-4/5 rounded-lg`,children:(0,c.jsx)(`div`,{className:`text-xs text-default-500`,children:`Created by Jane Doe. Discover the mesmerizing patterns of colorful gradients.`})}),(0,c.jsx)(a,{isLoaded:t,className:`w-2/5 rounded-lg`,children:(0,c.jsx)(`div`,{className:`text-sm font-semibold text-primary`,children:`$49.99`})})]})]}),(0,c.jsxs)(i,{onClick:()=>n(!t),color:`primary`,children:[`Toggle isLoaded (`,t?`Loaded`:`Loading`,`)`]})]})}},p={render:e=>(0,c.jsxs)(`div`,{className:`flex flex-col gap-6 w-[350px]`,children:[(0,c.jsxs)(`div`,{className:`space-y-2`,children:[(0,c.jsx)(`span`,{className:`text-xs text-neutral-400 font-semibold uppercase`,children:`Shimmer (Default)`}),(0,c.jsx)(a,{...e,animation:`shimmer`,className:`h-10 w-full rounded-lg`})]}),(0,c.jsxs)(`div`,{className:`space-y-2`,children:[(0,c.jsx)(`span`,{className:`text-xs text-neutral-400 font-semibold uppercase`,children:`Pulse`}),(0,c.jsx)(a,{...e,animation:`pulse`,className:`h-10 w-full rounded-lg`})]}),(0,c.jsxs)(`div`,{className:`space-y-2`,children:[(0,c.jsx)(`span`,{className:`text-xs text-neutral-400 font-semibold uppercase`,children:`None (Static)`}),(0,c.jsx)(a,{...e,animation:`none`,className:`h-10 w-full rounded-lg`})]})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <div className="w-[300px] flex flex-col gap-3">
      <Skeleton {...args} className="h-24 w-full rounded-lg" />
      <div className="space-y-2">
        <Skeleton {...args} className="h-3 w-3/5 rounded-lg" />
        <Skeleton {...args} className="h-3 w-4/5 rounded-lg" />
      </div>
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <div className="max-w-[300px] w-full flex items-center gap-3">
      <div>
        <Skeleton {...args} className="flex rounded-full w-12 h-12" />
      </div>
      <div className="w-full flex flex-col gap-2">
        <Skeleton {...args} className="h-3 w-3/5 rounded-lg" />
        <Skeleton {...args} className="h-3 w-4/5 rounded-lg" />
      </div>
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: _args => {
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
  render: args => <div className="flex flex-col gap-6 w-[350px]">
      <div className="space-y-2">
        <span className="text-xs text-neutral-400 font-semibold uppercase">Shimmer (Default)</span>
        <Skeleton {...args} animation="shimmer" className="h-10 w-full rounded-lg" />
      </div>
      <div className="space-y-2">
        <span className="text-xs text-neutral-400 font-semibold uppercase">Pulse</span>
        <Skeleton {...args} animation="pulse" className="h-10 w-full rounded-lg" />
      </div>
      <div className="space-y-2">
        <span className="text-xs text-neutral-400 font-semibold uppercase">None (Static)</span>
        <Skeleton {...args} animation="none" className="h-10 w-full rounded-lg" />
      </div>
    </div>
}`,...p.parameters?.docs?.source}}},m=[`Default`,`StandaloneLayout`,`CardLoadingState`,`Animations`]}))();export{p as Animations,f as CardLoadingState,u as Default,d as StandaloneLayout,m as __namedExportsOrder,l as default};