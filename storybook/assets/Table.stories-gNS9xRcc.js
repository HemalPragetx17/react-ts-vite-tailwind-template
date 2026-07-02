import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-DDzTVtu_.js";import{t as r}from"./iframe-BzRfQavU.js";import{K as i,V as a,t as o,y as s}from"./ui-sUaI0YKE.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;e((()=>{c=t(n(),1),o(),l=r(),u=[{id:`1`,name:`Alice Johnson`,email:`alice@example.com`,role:`Admin`,status:`active`,joined:`2023-01-15`,salary:95e3},{id:`2`,name:`Bob Smith`,email:`bob@example.com`,role:`Developer`,status:`active`,joined:`2023-03-22`,salary:8e4},{id:`3`,name:`Carol Williams`,email:`carol@example.com`,role:`Designer`,status:`inactive`,joined:`2022-11-05`,salary:72e3},{id:`4`,name:`David Brown`,email:`david@example.com`,role:`Manager`,status:`active`,joined:`2021-07-18`,salary:11e4},{id:`5`,name:`Eva Martinez`,email:`eva@example.com`,role:`Developer`,status:`pending`,joined:`2024-01-02`,salary:78e3},{id:`6`,name:`Frank Lee`,email:`frank@example.com`,role:`Analyst`,status:`active`,joined:`2023-08-14`,salary:7e4},{id:`7`,name:`Grace Kim`,email:`grace@example.com`,role:`Designer`,status:`active`,joined:`2022-05-30`,salary:68e3},{id:`8`,name:`Henry Wilson`,email:`henry@example.com`,role:`Developer`,status:`inactive`,joined:`2021-12-01`,salary:85e3},{id:`9`,name:`Isabel Davis`,email:`isabel@example.com`,role:`Admin`,status:`active`,joined:`2020-09-10`,salary:92e3},{id:`10`,name:`Jack Thompson`,email:`jack@example.com`,role:`Analyst`,status:`pending`,joined:`2024-02-28`,salary:65e3},{id:`11`,name:`Karen Anderson`,email:`karen@example.com`,role:`Manager`,status:`active`,joined:`2022-03-17`,salary:105e3},{id:`12`,name:`Liam Garcia`,email:`liam@example.com`,role:`Developer`,status:`active`,joined:`2023-06-09`,salary:77e3}],d=[{id:`ORD-001`,product:`MacBook Pro 14"`,customer:`Alice Johnson`,amount:1999,status:`delivered`,date:`2024-01-10`,subRows:[{id:`ORD-001-A`,product:`↳ AppleCare+`,customer:`Alice Johnson`,amount:299,status:`delivered`,date:`2024-01-10`},{id:`ORD-001-B`,product:`↳ USB-C Hub`,customer:`Alice Johnson`,amount:49,status:`delivered`,date:`2024-01-10`}]},{id:`ORD-002`,product:`iPad Air`,customer:`Bob Smith`,amount:749,status:`shipped`,date:`2024-01-18`},{id:`ORD-003`,product:`AirPods Pro`,customer:`Carol Williams`,amount:249,status:`pending`,date:`2024-01-22`},{id:`ORD-004`,product:`iPhone 15 Pro`,customer:`David Brown`,amount:1099,status:`delivered`,date:`2024-02-01`,subRows:[{id:`ORD-004-A`,product:`↳ MagSafe Case`,customer:`David Brown`,amount:59,status:`delivered`,date:`2024-02-01`}]},{id:`ORD-005`,product:`Apple Watch S9`,customer:`Eva Martinez`,amount:399,status:`cancelled`,date:`2024-02-05`},{id:`ORD-006`,product:`Mac mini M4`,customer:`Frank Lee`,amount:599,status:`shipped`,date:`2024-02-10`}],f=e=>(0,l.jsx)(a,{variant:`flat`,color:{active:`success`,inactive:`danger`,pending:`warning`}[e],size:`sm`,children:e.charAt(0).toUpperCase()+e.slice(1)}),p=e=>(0,l.jsx)(a,{variant:`flat`,color:{delivered:`success`,shipped:`primary`,pending:`warning`,cancelled:`danger`}[e],size:`sm`,children:e.charAt(0).toUpperCase()+e.slice(1)}),m=[{accessorKey:`name`,header:`Name`,cell:({row:e})=>(0,l.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,l.jsx)(i,{name:e.original.name,size:`sm`,color:`primary`}),(0,l.jsx)(`span`,{className:`font-semibold text-gray-800`,children:e.original.name})]}),enableSorting:!0},{accessorKey:`email`,header:`Email`,enableSorting:!0},{accessorKey:`role`,header:`Role`,enableSorting:!0},{accessorKey:`status`,header:`Status`,cell:({getValue:e})=>f(e()),enableSorting:!0},{accessorKey:`joined`,header:`Joined`,enableSorting:!0},{accessorKey:`salary`,header:`Salary`,cell:({getValue:e})=>`$${e().toLocaleString()}`,enableSorting:!0}],h=[{accessorKey:`id`,header:`Order ID`,cell:({getValue:e})=>(0,l.jsx)(`span`,{className:`font-mono text-xs text-primary font-semibold`,children:e()})},{accessorKey:`product`,header:`Product`},{accessorKey:`customer`,header:`Customer`},{accessorKey:`amount`,header:`Amount`,cell:({getValue:e})=>`$${e().toLocaleString()}`},{accessorKey:`status`,header:`Status`,cell:({getValue:e})=>p(e())},{accessorKey:`date`,header:`Date`}],g={title:`Components/Table`,component:s,parameters:{layout:`padded`},tags:[`autodocs`],argTypes:{enablePagination:{control:`boolean`},enableSorting:{control:`boolean`},enableFiltering:{control:`boolean`},enableCheckbox:{control:`boolean`},enableExpanding:{control:`boolean`},isStriped:{control:`boolean`},enableInfiniteScroll:{control:`boolean`},hideHeader:{control:`boolean`},loading:{control:`boolean`},scrollBehavior:{control:`select`,options:[`inside`,`outside`]},paginationSize:{control:`select`,options:[`sm`,`md`,`lg`]},paginationColor:{control:`select`,options:[`primary`,`secondary`,`success`,`warning`,`danger`,`default`]},paginationVariant:{control:`select`,options:[`solid`,`bordered`,`light`,`flat`]},showPaginationControls:{control:`boolean`},data:{control:!1},columns:{control:!1}}},_={render:e=>(0,l.jsx)(s,{...e,data:u,columns:m}),args:{enablePagination:!1,enableSorting:!1,enableFiltering:!1,enableCheckbox:!1,enableExpanding:!1,hideHeader:!1,loading:!1,scrollBehavior:`outside`}},v={render:e=>{let[t,n]=(0,c.useState)({page:1,limit:5});return(0,l.jsx)(s,{...e,data:u,columns:m,enablePagination:!0,manualPagination:!1,pagination:t,onPaginationChange:n,totalCount:u.length,pageSize:5,scrollBehavior:`outside`})},args:{paginationSize:`md`,paginationColor:`primary`,paginationVariant:`solid`,showPaginationControls:!0}},y={render:e=>(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`p`,{className:`text-sm text-gray-500 mb-2`,children:`Click on a column header to sort. Columns with sorting enabled: Name, Email, Role, Status, Joined, Salary.`}),(0,l.jsx)(s,{...e,data:u,columns:m,enableSorting:!0,scrollBehavior:`outside`})]}),args:{defaultSortKey:`name`,defaultSortOrder:`asc`}},b={render:e=>(0,l.jsx)(s,{...e,data:u,columns:m,enableCheckbox:!0,scrollBehavior:`outside`}),args:{}},x={name:`All Features Combined`,render:e=>{let[t,n]=(0,c.useState)({page:1,limit:5});return(0,l.jsx)(s,{...e,data:u,columns:m,enablePagination:!0,enableSorting:!0,enableCheckbox:!0,manualPagination:!1,pagination:t,onPaginationChange:n,totalCount:u.length,pageSize:5,scrollBehavior:`outside`,paginationColor:`primary`,paginationVariant:`solid`})},args:{defaultSortKey:`salary`,defaultSortOrder:`desc`}},S={render:e=>(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`p`,{className:`text-sm text-gray-500 mb-2`,children:`Click the arrow icon on rows with sub-rows (ORD-001, ORD-004) to expand them.`}),(0,l.jsx)(s,{...e,data:d,columns:h,enableExpanding:!0,getSubRows:e=>e.subRows,scrollBehavior:`outside`})]}),args:{}},C={render:e=>(0,l.jsx)(s,{...e,data:[],columns:m,loading:!0,scrollBehavior:`outside`}),args:{}},w={render:e=>(0,l.jsx)(s,{...e,data:[],columns:m,scrollBehavior:`outside`}),args:{}},T={render:e=>(0,l.jsx)(s,{...e,data:u.slice(0,5),columns:m,hideHeader:!0,scrollBehavior:`outside`}),args:{}},E={name:`Pagination Color & Variant`,render:()=>{let[e,t]=(0,c.useState)(`primary`),[n,r]=(0,c.useState)(`solid`),[i,a]=(0,c.useState)({page:1,limit:4});return(0,l.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,l.jsxs)(`div`,{className:`flex flex-wrap gap-4`,children:[(0,l.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,l.jsx)(`span`,{className:`text-xs font-semibold text-gray-500 uppercase tracking-wide`,children:`Color`}),(0,l.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:[`primary`,`secondary`,`success`,`warning`,`danger`,`default`].map(n=>(0,l.jsx)(`button`,{onClick:()=>t(n),className:`px-3 py-1 text-sm rounded-lg border transition-all ${e===n?`bg-gray-800 text-white border-gray-800`:`border-gray-200 text-gray-600 hover:border-gray-400`}`,children:n},n))})]}),(0,l.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,l.jsx)(`span`,{className:`text-xs font-semibold text-gray-500 uppercase tracking-wide`,children:`Variant`}),(0,l.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:[`solid`,`bordered`,`light`,`flat`].map(e=>(0,l.jsx)(`button`,{onClick:()=>r(e),className:`px-3 py-1 text-sm rounded-lg border transition-all ${n===e?`bg-gray-800 text-white border-gray-800`:`border-gray-200 text-gray-600 hover:border-gray-400`}`,children:e},e))})]})]}),(0,l.jsx)(s,{data:u,columns:m,enablePagination:!0,manualPagination:!1,pagination:i,onPaginationChange:a,totalCount:u.length,pageSize:4,paginationColor:e,paginationVariant:n,paginationSize:`md`,scrollBehavior:`outside`})]})}},D={render:e=>{let[t,n]=(0,c.useState)(null);return(0,l.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,l.jsx)(`p`,{className:`text-sm text-gray-500`,children:`Click any row to select it.`}),t&&(0,l.jsxs)(`div`,{className:`p-4 bg-primary/5 border border-primary/20 rounded-xl text-sm`,children:[(0,l.jsx)(`span`,{className:`font-semibold text-primary`,children:`Selected:`}),` `,t.name,` — `,t.email,` — `,t.role]}),(0,l.jsx)(s,{...e,data:u,columns:m,onRowClick:e=>n(e),scrollBehavior:`outside`})]})},args:{}},O={render:e=>(0,l.jsx)(s,{...e,data:u.slice(0,6),columns:m,isStriped:!0,scrollBehavior:`outside`}),args:{}},k={render:e=>{let[t,n]=(0,c.useState)({page:1,limit:5}),[r,i]=(0,c.useState)(!1),a=Array.from({length:30},(e,t)=>{let n=u[t%u.length];return{...n,id:String(t+1),name:`${n.name} #${t+1}`}}),o=a.slice(0,t.limit),d=e=>{i(!0),setTimeout(()=>{n({page:1,limit:e.limit}),i(!1)},600)};return(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`p`,{className:`text-sm text-gray-500 mb-2`,children:`Scroll inside the table to load more rows. Page stays at 1; limit increases by 5 each time.`}),(0,l.jsx)(s,{...e,data:o,columns:m,enablePagination:!0,enableInfiniteScroll:!0,manualPagination:!0,pagination:t,onPaginationChange:d,totalCount:a.length,infiniteScrollStep:5,infiniteScrollMaxHeight:`20rem`,loading:r,isStriped:!0})]})},args:{}},A={name:`Real-world: Orders`,render:e=>{let[t,n]=(0,c.useState)({page:1,limit:5});return(0,l.jsx)(s,{...e,data:d,columns:h,enablePagination:!0,enableSorting:!0,enableCheckbox:!0,manualPagination:!1,pagination:t,onPaginationChange:n,totalCount:d.length,pageSize:5,scrollBehavior:`outside`,paginationColor:`primary`,paginationVariant:`solid`})},args:{}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <CustomTable {...args} data={users} columns={userColumns} />,
  args: {
    enablePagination: false,
    enableSorting: false,
    enableFiltering: false,
    enableCheckbox: false,
    enableExpanding: false,
    hideHeader: false,
    loading: false,
    scrollBehavior: "outside"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [pagination, setPagination] = useState({
      page: 1,
      limit: 5
    });
    return <CustomTable {...args} data={users} columns={userColumns} enablePagination manualPagination={false} pagination={pagination} onPaginationChange={setPagination} totalCount={users.length} pageSize={5} scrollBehavior="outside" />;
  },
  args: {
    paginationSize: "md",
    paginationColor: "primary",
    paginationVariant: "solid",
    showPaginationControls: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <div>
      <p className="text-sm text-gray-500 mb-2">Click on a column header to sort. Columns with sorting enabled: Name, Email, Role, Status, Joined, Salary.</p>
      <CustomTable {...args} data={users} columns={userColumns} enableSorting scrollBehavior="outside" />
    </div>,
  args: {
    defaultSortKey: "name",
    defaultSortOrder: "asc"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <CustomTable {...args} data={users} columns={userColumns} enableCheckbox scrollBehavior="outside" />,
  args: {}
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "All Features Combined",
  render: args => {
    const [pagination, setPagination] = useState({
      page: 1,
      limit: 5
    });
    return <CustomTable {...args} data={users} columns={userColumns} enablePagination enableSorting enableCheckbox manualPagination={false} pagination={pagination} onPaginationChange={setPagination} totalCount={users.length} pageSize={5} scrollBehavior="outside" paginationColor="primary" paginationVariant="solid" />;
  },
  args: {
    defaultSortKey: "salary",
    defaultSortOrder: "desc"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <div>
      <p className="text-sm text-gray-500 mb-2">Click the arrow icon on rows with sub-rows (ORD-001, ORD-004) to expand them.</p>
      <CustomTable {...args} data={orders} columns={orderColumns} enableExpanding getSubRows={(row: Order) => row.subRows} scrollBehavior="outside" />
    </div>,
  args: {}
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <CustomTable {...args} data={[]} columns={userColumns} loading scrollBehavior="outside" />,
  args: {}
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <CustomTable {...args} data={[]} columns={userColumns} scrollBehavior="outside" />,
  args: {}
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <CustomTable {...args} data={users.slice(0, 5)} columns={userColumns} hideHeader scrollBehavior="outside" />,
  args: {}
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Pagination Color & Variant",
  render: () => {
    const [color, setColor] = useState<"primary" | "secondary" | "success" | "warning" | "danger" | "default">("primary");
    const [variant, setVariant] = useState<"solid" | "bordered" | "light" | "flat">("solid");
    const [pagination, setPagination] = useState({
      page: 1,
      limit: 4
    });
    const colors = ["primary", "secondary", "success", "warning", "danger", "default"] as const;
    const variants = ["solid", "bordered", "light", "flat"] as const;
    return <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Color</span>
            <div className="flex flex-wrap gap-2">
              {colors.map(c => <button key={c} onClick={() => setColor(c)} className={\`px-3 py-1 text-sm rounded-lg border transition-all \${color === c ? "bg-gray-800 text-white border-gray-800" : "border-gray-200 text-gray-600 hover:border-gray-400"}\`}>
                  {c}
                </button>)}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Variant</span>
            <div className="flex flex-wrap gap-2">
              {variants.map(v => <button key={v} onClick={() => setVariant(v)} className={\`px-3 py-1 text-sm rounded-lg border transition-all \${variant === v ? "bg-gray-800 text-white border-gray-800" : "border-gray-200 text-gray-600 hover:border-gray-400"}\`}>
                  {v}
                </button>)}
            </div>
          </div>
        </div>
        <CustomTable data={users} columns={userColumns} enablePagination manualPagination={false} pagination={pagination} onPaginationChange={setPagination} totalCount={users.length} pageSize={4} paginationColor={color} paginationVariant={variant} paginationSize="md" scrollBehavior="outside" />
      </div>;
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState<User | null>(null);
    return <div className="flex flex-col gap-4">
        <p className="text-sm text-gray-500">Click any row to select it.</p>
        {selected && <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl text-sm">
            <span className="font-semibold text-primary">Selected:</span>{" "}
            {selected.name} — {selected.email} — {selected.role}
          </div>}
        <CustomTable {...args} data={users} columns={userColumns} onRowClick={row => setSelected(row as User)} scrollBehavior="outside" />
      </div>;
  },
  args: {}
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => <CustomTable {...args} data={users.slice(0, 6)} columns={userColumns} isStriped scrollBehavior="outside" />,
  args: {}
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [pagination, setPagination] = useState({
      page: 1,
      limit: 5
    });
    const [loading, setLoading] = useState(false);
    const allUsers = Array.from({
      length: 30
    }, (_, i) => {
      const base = users[i % users.length];
      return {
        ...base,
        id: String(i + 1),
        name: \`\${base.name} #\${i + 1}\`
      };
    });
    const visibleData = allUsers.slice(0, pagination.limit);
    const handlePaginationChange = (next: {
      page: number;
      limit: number;
    }) => {
      setLoading(true);
      setTimeout(() => {
        setPagination({
          page: 1,
          limit: next.limit
        });
        setLoading(false);
      }, 600);
    };
    return <div>
        <p className="text-sm text-gray-500 mb-2">
          Scroll inside the table to load more rows. Page stays at 1; limit increases by 5 each time.
        </p>
        <CustomTable {...args} data={visibleData} columns={userColumns} enablePagination enableInfiniteScroll manualPagination pagination={pagination} onPaginationChange={handlePaginationChange} totalCount={allUsers.length} infiniteScrollStep={5} infiniteScrollMaxHeight="20rem" loading={loading} isStriped />
      </div>;
  },
  args: {}
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "Real-world: Orders",
  render: args => {
    const [pagination, setPagination] = useState({
      page: 1,
      limit: 5
    });
    return <CustomTable {...args} data={orders} columns={orderColumns} enablePagination enableSorting enableCheckbox manualPagination={false} pagination={pagination} onPaginationChange={setPagination} totalCount={orders.length} pageSize={5} scrollBehavior="outside" paginationColor="primary" paginationVariant="solid" />;
  },
  args: {}
}`,...A.parameters?.docs?.source}}},j=[`Default`,`WithPagination`,`WithSorting`,`WithCheckboxSelection`,`AllFeatures`,`WithExpandableRows`,`LoadingState`,`EmptyState`,`HiddenHeader`,`PaginationVariants`,`ClickableRows`,`StripedRows`,`InfiniteScroll`,`OrdersTable`]}))();export{x as AllFeatures,D as ClickableRows,_ as Default,w as EmptyState,T as HiddenHeader,k as InfiniteScroll,C as LoadingState,A as OrdersTable,E as PaginationVariants,O as StripedRows,b as WithCheckboxSelection,S as WithExpandableRows,v as WithPagination,y as WithSorting,j as __namedExportsOrder,g as default};