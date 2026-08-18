import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-DDzTVtu_.js";import{t as r}from"./iframe-sOyJkj26.js";import{C as i,Q as a,S as o,T as s,b as c,q as l,s as u,t as d,w as f,x as p}from"./ui-DraYKXvF.js";var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;e((()=>{m=t(n(),1),d(),h=r(),g=[{id:`1`,name:`Alice Johnson`,email:`alice@example.com`,role:`Admin`,status:`active`,joined:`2023-01-15`,salary:95e3},{id:`2`,name:`Bob Smith`,email:`bob@example.com`,role:`Developer`,status:`active`,joined:`2023-03-22`,salary:8e4},{id:`3`,name:`Carol Williams`,email:`carol@example.com`,role:`Designer`,status:`inactive`,joined:`2022-11-05`,salary:72e3},{id:`4`,name:`David Brown`,email:`david@example.com`,role:`Manager`,status:`active`,joined:`2021-07-18`,salary:11e4},{id:`5`,name:`Eva Martinez`,email:`eva@example.com`,role:`Developer`,status:`pending`,joined:`2024-01-02`,salary:78e3},{id:`6`,name:`Frank Lee`,email:`frank@example.com`,role:`Analyst`,status:`active`,joined:`2023-08-14`,salary:7e4},{id:`7`,name:`Grace Kim`,email:`grace@example.com`,role:`Designer`,status:`active`,joined:`2022-05-30`,salary:68e3},{id:`8`,name:`Henry Wilson`,email:`henry@example.com`,role:`Developer`,status:`inactive`,joined:`2021-12-01`,salary:85e3},{id:`9`,name:`Isabel Davis`,email:`isabel@example.com`,role:`Admin`,status:`active`,joined:`2020-09-10`,salary:92e3},{id:`10`,name:`Jack Thompson`,email:`jack@example.com`,role:`Analyst`,status:`pending`,joined:`2024-02-28`,salary:65e3},{id:`11`,name:`Karen Anderson`,email:`karen@example.com`,role:`Manager`,status:`active`,joined:`2022-03-17`,salary:105e3},{id:`12`,name:`Liam Garcia`,email:`liam@example.com`,role:`Developer`,status:`active`,joined:`2023-06-09`,salary:77e3}],_=[{id:`ORD-001`,product:`MacBook Pro 14"`,customer:`Alice Johnson`,amount:1999,status:`delivered`,date:`2024-01-10`,subRows:[{id:`ORD-001-A`,product:`AppleCare+`,customer:`Alice Johnson`,amount:299,status:`delivered`,date:`2024-01-10`},{id:`ORD-001-B`,product:`USB-C Hub`,customer:`Alice Johnson`,amount:49,status:`delivered`,date:`2024-01-10`}]},{id:`ORD-002`,product:`iPad Air`,customer:`Bob Smith`,amount:749,status:`shipped`,date:`2024-01-18`},{id:`ORD-003`,product:`AirPods Pro`,customer:`Carol Williams`,amount:249,status:`pending`,date:`2024-01-22`},{id:`ORD-004`,product:`iPhone 15 Pro`,customer:`David Brown`,amount:1099,status:`delivered`,date:`2024-02-01`,subRows:[{id:`ORD-004-A`,product:`MagSafe Case`,customer:`David Brown`,amount:59,status:`delivered`,date:`2024-02-01`}]},{id:`ORD-005`,product:`Apple Watch S9`,customer:`Eva Martinez`,amount:399,status:`cancelled`,date:`2024-02-05`},{id:`ORD-006`,product:`Mac mini M4`,customer:`Frank Lee`,amount:599,status:`shipped`,date:`2024-02-10`}],v=e=>(0,h.jsx)(l,{variant:`flat`,color:{active:`success`,inactive:`danger`,pending:`warning`}[e],size:`sm`,children:e.charAt(0).toUpperCase()+e.slice(1)}),y=e=>(0,h.jsx)(l,{variant:`flat`,color:{delivered:`success`,shipped:`primary`,pending:`warning`,cancelled:`danger`}[e],size:`sm`,children:e.charAt(0).toUpperCase()+e.slice(1)}),b={title:`Components/Table`,component:c,parameters:{layout:`padded`},tags:[`autodocs`],argTypes:{color:{control:`select`,options:[`default`,`primary`,`secondary`,`success`,`warning`,`danger`]},radius:{control:`select`,options:[`none`,`sm`,`md`,`lg`]},shadow:{control:`select`,options:[`none`,`sm`,`md`,`lg`]},isStriped:{control:`boolean`},isCompact:{control:`boolean`},hideHeader:{control:`boolean`},isHeaderSticky:{control:`boolean`},selectionMode:{control:`select`,options:[`none`,`single`,`multiple`]}}},x={render:()=>(0,h.jsxs)(c,{"aria-label":`Users table`,children:[(0,h.jsxs)(f,{children:[(0,h.jsx)(i,{children:`NAME`}),(0,h.jsx)(i,{children:`EMAIL`}),(0,h.jsx)(i,{children:`ROLE`}),(0,h.jsx)(i,{children:`STATUS`}),(0,h.jsx)(i,{children:`JOINED`}),(0,h.jsx)(i,{children:`SALARY`})]}),(0,h.jsx)(p,{children:g.map(e=>(0,h.jsxs)(s,{children:[(0,h.jsx)(o,{children:(0,h.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,h.jsx)(a,{name:e.name,size:`sm`,color:`primary`}),(0,h.jsx)(`span`,{className:`font-semibold text-neutral-800 dark:text-neutral-200`,children:e.name})]})}),(0,h.jsx)(o,{children:e.email}),(0,h.jsx)(o,{children:e.role}),(0,h.jsx)(o,{children:v(e.status)}),(0,h.jsx)(o,{children:e.joined}),(0,h.jsxs)(o,{children:[`$`,e.salary.toLocaleString()]})]},e.id))})]})},S={render:()=>{let[e,t]=(0,m.useState)(1),n=Math.ceil(g.length/4),r=(0,m.useMemo)(()=>{let t=(e-1)*4;return g.slice(t,t+4)},[e]);return(0,h.jsxs)(c,{"aria-label":`Table with pagination`,bottomContent:(0,h.jsx)(`div`,{className:`flex w-full justify-center p-2`,children:(0,h.jsx)(u,{isCompact:!0,showControls:!0,showShadow:!0,color:`primary`,page:e,total:n,onChange:e=>t(e)})}),bottomContentPlacement:`outside`,children:[(0,h.jsxs)(f,{children:[(0,h.jsx)(i,{children:`NAME`}),(0,h.jsx)(i,{children:`EMAIL`}),(0,h.jsx)(i,{children:`ROLE`}),(0,h.jsx)(i,{children:`STATUS`})]}),(0,h.jsx)(p,{children:r.map(e=>(0,h.jsxs)(s,{children:[(0,h.jsx)(o,{children:(0,h.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,h.jsx)(a,{name:e.name,size:`sm`,color:`primary`}),(0,h.jsx)(`span`,{className:`font-semibold text-neutral-800 dark:text-neutral-200`,children:e.name})]})}),(0,h.jsx)(o,{children:e.email}),(0,h.jsx)(o,{children:e.role}),(0,h.jsx)(o,{children:v(e.status)})]},e.id))})]})}},C={render:()=>{let[e,t]=(0,m.useState)({column:`name`,direction:`ascending`}),n=(0,m.useMemo)(()=>[...g].sort((t,n)=>{let r=e.column,i=t[r],a=n[r],o=i<a?-1:+(i>a);return e.direction===`descending`&&(o*=-1),o}),[e]);return(0,h.jsxs)(c,{"aria-label":`Table with sorting`,sortDescriptor:e,onSortChange:t,children:[(0,h.jsxs)(f,{children:[(0,h.jsx)(i,{allowsSorting:!0,children:`NAME`},`name`),(0,h.jsx)(i,{allowsSorting:!0,children:`EMAIL`},`email`),(0,h.jsx)(i,{allowsSorting:!0,children:`ROLE`},`role`),(0,h.jsx)(i,{allowsSorting:!0,children:`STATUS`},`status`),(0,h.jsx)(i,{allowsSorting:!0,children:`SALARY`},`salary`)]}),(0,h.jsx)(p,{children:n.map(e=>(0,h.jsxs)(s,{children:[(0,h.jsx)(o,{children:e.name}),(0,h.jsx)(o,{children:e.email}),(0,h.jsx)(o,{children:e.role}),(0,h.jsx)(o,{children:v(e.status)}),(0,h.jsxs)(o,{children:[`$`,e.salary.toLocaleString()]})]},e.id))})]})}},w={render:()=>(0,h.jsxs)(c,{"aria-label":`Table with selection`,selectionMode:`multiple`,defaultSelectedKeys:new Set([`1`,`3`]),children:[(0,h.jsxs)(f,{children:[(0,h.jsx)(i,{children:`NAME`}),(0,h.jsx)(i,{children:`EMAIL`}),(0,h.jsx)(i,{children:`ROLE`}),(0,h.jsx)(i,{children:`STATUS`})]}),(0,h.jsx)(p,{children:g.slice(0,6).map(e=>(0,h.jsxs)(s,{children:[(0,h.jsx)(o,{children:(0,h.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,h.jsx)(a,{name:e.name,size:`sm`,color:`primary`}),(0,h.jsx)(`span`,{className:`font-semibold text-neutral-800 dark:text-neutral-200`,children:e.name})]})}),(0,h.jsx)(o,{children:e.email}),(0,h.jsx)(o,{children:e.role}),(0,h.jsx)(o,{children:v(e.status)})]},e.id))})]})},T={name:`All Features Combined`,render:()=>{let[e,t]=(0,m.useState)(1),[n,r]=(0,m.useState)({column:`name`,direction:`ascending`}),a=(0,m.useMemo)(()=>[...g].sort((e,t)=>{let r=n.column,i=e[r],a=t[r],o=i<a?-1:+(i>a);return n.direction===`descending`&&(o*=-1),o}),[n]),l=(0,m.useMemo)(()=>{let t=(e-1)*4;return a.slice(t,t+4)},[e,a]);return(0,h.jsxs)(c,{"aria-label":`Table with all features`,selectionMode:`multiple`,sortDescriptor:n,onSortChange:r,bottomContent:(0,h.jsx)(`div`,{className:`flex w-full justify-center p-2`,children:(0,h.jsx)(u,{isCompact:!0,showControls:!0,showShadow:!0,color:`primary`,page:e,total:Math.ceil(g.length/4),onChange:e=>t(e)})}),bottomContentPlacement:`outside`,children:[(0,h.jsxs)(f,{children:[(0,h.jsx)(i,{allowsSorting:!0,children:`NAME`},`name`),(0,h.jsx)(i,{allowsSorting:!0,children:`EMAIL`},`email`),(0,h.jsx)(i,{allowsSorting:!0,children:`ROLE`},`role`),(0,h.jsx)(i,{allowsSorting:!0,children:`STATUS`},`status`),(0,h.jsx)(i,{allowsSorting:!0,children:`SALARY`},`salary`)]}),(0,h.jsx)(p,{children:l.map(e=>(0,h.jsxs)(s,{children:[(0,h.jsx)(o,{children:e.name}),(0,h.jsx)(o,{children:e.email}),(0,h.jsx)(o,{children:e.role}),(0,h.jsx)(o,{children:v(e.status)}),(0,h.jsxs)(o,{children:[`$`,e.salary.toLocaleString()]})]},e.id))})]})}},E={render:()=>{let[e,t]=(0,m.useState)(new Set([`ORD-001`,`ORD-004`]));return(0,h.jsxs)(c,{"aria-label":`Expandable rows table`,treeColumn:`id`,expandedKeys:e,onExpandedChange:t,renderExpandedContent:e=>(0,h.jsxs)(`div`,{className:`p-4 bg-neutral-50 dark:bg-neutral-800/40 rounded-lg space-y-2`,children:[(0,h.jsxs)(`p`,{className:`text-xs font-semibold text-neutral-500 uppercase tracking-wider`,children:[`Sub Items for `,e.id]}),e.subRows&&e.subRows.length>0?e.subRows.map(e=>(0,h.jsxs)(`div`,{className:`flex items-center gap-6 text-sm text-neutral-700 dark:text-neutral-300`,children:[(0,h.jsx)(`span`,{className:`font-mono text-primary font-medium`,children:e.id}),(0,h.jsx)(`span`,{children:e.product}),(0,h.jsxs)(`span`,{children:[`$`,e.amount]}),(0,h.jsx)(`span`,{children:y(e.status)})]},e.id)):(0,h.jsx)(`p`,{className:`text-xs text-neutral-400`,children:`No sub-items available`})]}),children:[(0,h.jsxs)(f,{children:[(0,h.jsx)(i,{children:`ORDER ID`},`id`),(0,h.jsx)(i,{children:`PRODUCT`},`product`),(0,h.jsx)(i,{children:`CUSTOMER`},`customer`),(0,h.jsx)(i,{children:`AMOUNT`},`amount`),(0,h.jsx)(i,{children:`STATUS`},`status`),(0,h.jsx)(i,{children:`DATE`},`date`)]}),(0,h.jsx)(p,{items:_,children:e=>(0,h.jsxs)(s,{children:[(0,h.jsx)(o,{children:(0,h.jsx)(`span`,{className:`font-mono text-xs text-primary font-semibold`,children:e.id})}),(0,h.jsx)(o,{children:e.product}),(0,h.jsx)(o,{children:e.customer}),(0,h.jsxs)(o,{children:[`$`,e.amount]}),(0,h.jsx)(o,{children:y(e.status)}),(0,h.jsx)(o,{children:e.date})]},e.id)})]})}},D={render:()=>(0,h.jsxs)(c,{"aria-label":`Loading state table`,children:[(0,h.jsxs)(f,{children:[(0,h.jsx)(i,{children:`NAME`}),(0,h.jsx)(i,{children:`EMAIL`}),(0,h.jsx)(i,{children:`ROLE`})]}),(0,h.jsx)(p,{isLoading:!0,loadingState:`loading`,emptyContent:`Loading data...`,children:[]})]})},O={render:()=>(0,h.jsxs)(c,{"aria-label":`Empty state table`,children:[(0,h.jsxs)(f,{children:[(0,h.jsx)(i,{children:`NAME`}),(0,h.jsx)(i,{children:`EMAIL`}),(0,h.jsx)(i,{children:`ROLE`})]}),(0,h.jsx)(p,{emptyContent:`No rows available.`,children:[]})]})},k={render:()=>(0,h.jsxs)(c,{"aria-label":`Hidden header table`,hideHeader:!0,children:[(0,h.jsxs)(f,{children:[(0,h.jsx)(i,{children:`NAME`}),(0,h.jsx)(i,{children:`EMAIL`}),(0,h.jsx)(i,{children:`ROLE`})]}),(0,h.jsx)(p,{children:g.slice(0,4).map(e=>(0,h.jsxs)(s,{children:[(0,h.jsx)(o,{children:e.name}),(0,h.jsx)(o,{children:e.email}),(0,h.jsx)(o,{children:e.role})]},e.id))})]})},A={name:`Pagination Color & Variant`,render:()=>{let[e,t]=(0,m.useState)(`primary`),[n,r]=(0,m.useState)(`flat`),[a,l]=(0,m.useState)(1),d=Math.ceil(g.length/3),_=(0,m.useMemo)(()=>{let e=(a-1)*3;return g.slice(e,e+3)},[a]);return(0,h.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,h.jsxs)(`div`,{className:`flex flex-wrap gap-4`,children:[(0,h.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,h.jsx)(`span`,{className:`text-xs font-semibold text-neutral-500 uppercase tracking-wide`,children:`Color`}),(0,h.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:[`primary`,`secondary`,`success`,`warning`,`danger`,`default`].map(n=>(0,h.jsx)(`button`,{onClick:()=>t(n),className:`px-3 py-1 text-sm rounded-lg border transition-all ${e===n?`bg-neutral-800 text-white border-neutral-800`:`border-neutral-200 text-neutral-600 hover:border-neutral-400`}`,children:n},n))})]}),(0,h.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,h.jsx)(`span`,{className:`text-xs font-semibold text-neutral-500 uppercase tracking-wide`,children:`Variant`}),(0,h.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:[`flat`,`bordered`,`light`,`faded`].map(e=>(0,h.jsx)(`button`,{onClick:()=>r(e),className:`px-3 py-1 text-sm rounded-lg border transition-all ${n===e?`bg-neutral-800 text-white border-neutral-800`:`border-neutral-200 text-neutral-600 hover:border-neutral-400`}`,children:e},e))})]})]}),(0,h.jsxs)(c,{"aria-label":`Table with pagination options`,bottomContent:(0,h.jsx)(`div`,{className:`flex w-full justify-center p-2`,children:(0,h.jsx)(u,{showControls:!0,color:e,variant:n,page:a,total:d,onChange:e=>l(e)})}),bottomContentPlacement:`outside`,children:[(0,h.jsxs)(f,{children:[(0,h.jsx)(i,{children:`NAME`}),(0,h.jsx)(i,{children:`EMAIL`}),(0,h.jsx)(i,{children:`ROLE`})]}),(0,h.jsx)(p,{children:_.map(e=>(0,h.jsxs)(s,{children:[(0,h.jsx)(o,{children:e.name}),(0,h.jsx)(o,{children:e.email}),(0,h.jsx)(o,{children:e.role})]},e.id))})]})]})}},j={render:()=>{let[e,t]=(0,m.useState)(null);return(0,h.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,h.jsx)(`p`,{className:`text-sm text-neutral-500`,children:`Click any row to trigger action.`}),e&&(0,h.jsxs)(`div`,{className:`p-4 bg-primary/10 border border-primary/20 rounded-xl text-sm`,children:[(0,h.jsx)(`span`,{className:`font-semibold text-primary`,children:`Selected:`}),` `,e.name,` — `,e.email,` — `,e.role]}),(0,h.jsxs)(c,{"aria-label":`Clickable rows table`,onRowAction:e=>{let n=g.find(t=>t.id===e);n&&t(n)},children:[(0,h.jsxs)(f,{children:[(0,h.jsx)(i,{children:`NAME`}),(0,h.jsx)(i,{children:`EMAIL`}),(0,h.jsx)(i,{children:`ROLE`})]}),(0,h.jsx)(p,{children:g.slice(0,5).map(e=>(0,h.jsxs)(s,{children:[(0,h.jsx)(o,{children:e.name}),(0,h.jsx)(o,{children:e.email}),(0,h.jsx)(o,{children:e.role})]},e.id))})]})]})}},M={render:()=>(0,h.jsxs)(c,{"aria-label":`Striped table`,isStriped:!0,children:[(0,h.jsxs)(f,{children:[(0,h.jsx)(i,{children:`NAME`}),(0,h.jsx)(i,{children:`EMAIL`}),(0,h.jsx)(i,{children:`ROLE`})]}),(0,h.jsx)(p,{children:g.slice(0,6).map(e=>(0,h.jsxs)(s,{children:[(0,h.jsx)(o,{children:e.name}),(0,h.jsx)(o,{children:e.email}),(0,h.jsx)(o,{children:e.role})]},e.id))})]})},N={name:`Real-world: Orders`,render:()=>{let[e,t]=(0,m.useState)(1),n=Math.ceil(_.length/4),r=(0,m.useMemo)(()=>{let t=(e-1)*4;return _.slice(t,t+4)},[e]);return(0,h.jsxs)(c,{"aria-label":`Orders table`,selectionMode:`multiple`,bottomContent:(0,h.jsx)(`div`,{className:`flex w-full justify-center p-2`,children:(0,h.jsx)(u,{showControls:!0,color:`primary`,page:e,total:n,onChange:e=>t(e)})}),bottomContentPlacement:`outside`,children:[(0,h.jsxs)(f,{children:[(0,h.jsx)(i,{children:`ORDER ID`}),(0,h.jsx)(i,{children:`PRODUCT`}),(0,h.jsx)(i,{children:`CUSTOMER`}),(0,h.jsx)(i,{children:`AMOUNT`}),(0,h.jsx)(i,{children:`STATUS`}),(0,h.jsx)(i,{children:`DATE`})]}),(0,h.jsx)(p,{children:r.map(e=>(0,h.jsxs)(s,{children:[(0,h.jsx)(o,{children:(0,h.jsx)(`span`,{className:`font-mono text-xs text-primary font-semibold`,children:e.id})}),(0,h.jsx)(o,{children:e.product}),(0,h.jsx)(o,{children:e.customer}),(0,h.jsxs)(o,{children:[`$`,e.amount]}),(0,h.jsx)(o,{children:y(e.status)}),(0,h.jsx)(o,{children:e.date})]},e.id))})]})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Table aria-label="Users table">
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>EMAIL</TableColumn>
        <TableColumn>ROLE</TableColumn>
        <TableColumn>STATUS</TableColumn>
        <TableColumn>JOINED</TableColumn>
        <TableColumn>SALARY</TableColumn>
      </TableHeader>
      <TableBody>
        {users.map(user => <TableRow key={user.id}>
            <TableCell>
              <div className="flex items-center gap-3">
                <Avatar name={user.name} size="sm" color="primary" />
                <span className="font-semibold text-neutral-800 dark:text-neutral-200">{user.name}</span>
              </div>
            </TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{statusBadge(user.status)}</TableCell>
            <TableCell>{user.joined}</TableCell>
            <TableCell>\${user.salary.toLocaleString()}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    const rowsPerPage = 4;
    const pages = Math.ceil(users.length / rowsPerPage);
    const items = useMemo(() => {
      const start = (page - 1) * rowsPerPage;
      return users.slice(start, start + rowsPerPage);
    }, [page]);
    return <Table aria-label="Table with pagination" bottomContent={<div className="flex w-full justify-center p-2">
            <Pagination isCompact showControls showShadow color="primary" page={page} total={pages} onChange={p => setPage(p)} />
          </div>} bottomContentPlacement="outside">
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>EMAIL</TableColumn>
          <TableColumn>ROLE</TableColumn>
          <TableColumn>STATUS</TableColumn>
        </TableHeader>
        <TableBody>
          {items.map(user => <TableRow key={user.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar name={user.name} size="sm" color="primary" />
                  <span className="font-semibold text-neutral-800 dark:text-neutral-200">{user.name}</span>
                </div>
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{statusBadge(user.status)}</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
      column: "name",
      direction: "ascending"
    });
    const sortedItems = useMemo(() => {
      return [...users].sort((a, b) => {
        const col = sortDescriptor.column as keyof User;
        const first = a[col];
        const second = b[col];
        let cmp = first < second ? -1 : first > second ? 1 : 0;
        if (sortDescriptor.direction === "descending") cmp *= -1;
        return cmp;
      });
    }, [sortDescriptor]);
    return <Table aria-label="Table with sorting" sortDescriptor={sortDescriptor} onSortChange={setSortDescriptor}>
        <TableHeader>
          <TableColumn key="name" allowsSorting>NAME</TableColumn>
          <TableColumn key="email" allowsSorting>EMAIL</TableColumn>
          <TableColumn key="role" allowsSorting>ROLE</TableColumn>
          <TableColumn key="status" allowsSorting>STATUS</TableColumn>
          <TableColumn key="salary" allowsSorting>SALARY</TableColumn>
        </TableHeader>
        <TableBody>
          {sortedItems.map(user => <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{statusBadge(user.status)}</TableCell>
              <TableCell>\${user.salary.toLocaleString()}</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <Table aria-label="Table with selection" selectionMode="multiple" defaultSelectedKeys={new Set(["1", "3"])}>
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>EMAIL</TableColumn>
        <TableColumn>ROLE</TableColumn>
        <TableColumn>STATUS</TableColumn>
      </TableHeader>
      <TableBody>
        {users.slice(0, 6).map(user => <TableRow key={user.id}>
            <TableCell>
              <div className="flex items-center gap-3">
                <Avatar name={user.name} size="sm" color="primary" />
                <span className="font-semibold text-neutral-800 dark:text-neutral-200">{user.name}</span>
              </div>
            </TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{statusBadge(user.status)}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "All Features Combined",
  render: () => {
    const [page, setPage] = useState(1);
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
      column: "name",
      direction: "ascending"
    });
    const rowsPerPage = 4;
    const sortedItems = useMemo(() => {
      return [...users].sort((a, b) => {
        const col = sortDescriptor.column as keyof User;
        const first = a[col];
        const second = b[col];
        let cmp = first < second ? -1 : first > second ? 1 : 0;
        if (sortDescriptor.direction === "descending") cmp *= -1;
        return cmp;
      });
    }, [sortDescriptor]);
    const items = useMemo(() => {
      const start = (page - 1) * rowsPerPage;
      return sortedItems.slice(start, start + rowsPerPage);
    }, [page, sortedItems]);
    return <Table aria-label="Table with all features" selectionMode="multiple" sortDescriptor={sortDescriptor} onSortChange={setSortDescriptor} bottomContent={<div className="flex w-full justify-center p-2">
            <Pagination isCompact showControls showShadow color="primary" page={page} total={Math.ceil(users.length / rowsPerPage)} onChange={p => setPage(p)} />
          </div>} bottomContentPlacement="outside">
        <TableHeader>
          <TableColumn key="name" allowsSorting>NAME</TableColumn>
          <TableColumn key="email" allowsSorting>EMAIL</TableColumn>
          <TableColumn key="role" allowsSorting>ROLE</TableColumn>
          <TableColumn key="status" allowsSorting>STATUS</TableColumn>
          <TableColumn key="salary" allowsSorting>SALARY</TableColumn>
        </TableHeader>
        <TableBody>
          {items.map(user => <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{statusBadge(user.status)}</TableCell>
              <TableCell>\${user.salary.toLocaleString()}</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>;
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [expandedKeys, setExpandedKeys] = useState<any>(new Set(["ORD-001", "ORD-004"]));
    return <Table aria-label="Expandable rows table" treeColumn="id" expandedKeys={expandedKeys} onExpandedChange={setExpandedKeys} renderExpandedContent={(item: Order) => <div className="p-4 bg-neutral-50 dark:bg-neutral-800/40 rounded-lg space-y-2">
            <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
              Sub Items for {item.id}
            </p>
            {item.subRows && item.subRows.length > 0 ? item.subRows.map(sub => <div key={sub.id} className="flex items-center gap-6 text-sm text-neutral-700 dark:text-neutral-300">
                  <span className="font-mono text-primary font-medium">{sub.id}</span>
                  <span>{sub.product}</span>
                  <span>\${sub.amount}</span>
                  <span>{orderStatusBadge(sub.status)}</span>
                </div>) : <p className="text-xs text-neutral-400">No sub-items available</p>}
          </div>}>
        <TableHeader>
          <TableColumn key="id">ORDER ID</TableColumn>
          <TableColumn key="product">PRODUCT</TableColumn>
          <TableColumn key="customer">CUSTOMER</TableColumn>
          <TableColumn key="amount">AMOUNT</TableColumn>
          <TableColumn key="status">STATUS</TableColumn>
          <TableColumn key="date">DATE</TableColumn>
        </TableHeader>
        <TableBody items={orders}>
          {order => <TableRow key={order.id}>
              <TableCell><span className="font-mono text-xs text-primary font-semibold">{order.id}</span></TableCell>
              <TableCell>{order.product}</TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell>\${order.amount}</TableCell>
              <TableCell>{orderStatusBadge(order.status)}</TableCell>
              <TableCell>{order.date}</TableCell>
            </TableRow>}
        </TableBody>
      </Table>;
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <Table aria-label="Loading state table">
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>EMAIL</TableColumn>
        <TableColumn>ROLE</TableColumn>
      </TableHeader>
      <TableBody isLoading loadingState="loading" emptyContent="Loading data...">
        {[]}
      </TableBody>
    </Table>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <Table aria-label="Empty state table">
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>EMAIL</TableColumn>
        <TableColumn>ROLE</TableColumn>
      </TableHeader>
      <TableBody emptyContent="No rows available.">
        {[]}
      </TableBody>
    </Table>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <Table aria-label="Hidden header table" hideHeader>
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>EMAIL</TableColumn>
        <TableColumn>ROLE</TableColumn>
      </TableHeader>
      <TableBody>
        {users.slice(0, 4).map(user => <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "Pagination Color & Variant",
  render: () => {
    const [color, setColor] = useState<"primary" | "secondary" | "success" | "warning" | "danger" | "default">("primary");
    const [variant, setVariant] = useState<"flat" | "bordered" | "light" | "faded">("flat");
    const [page, setPage] = useState(1);
    const rowsPerPage = 3;
    const pages = Math.ceil(users.length / rowsPerPage);
    const items = useMemo(() => {
      const start = (page - 1) * rowsPerPage;
      return users.slice(start, start + rowsPerPage);
    }, [page]);
    const colors = ["primary", "secondary", "success", "warning", "danger", "default"] as const;
    const variants = ["flat", "bordered", "light", "faded"] as const;
    return <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">Color</span>
            <div className="flex flex-wrap gap-2">
              {colors.map(c => <button key={c} onClick={() => setColor(c)} className={\`px-3 py-1 text-sm rounded-lg border transition-all \${color === c ? "bg-neutral-800 text-white border-neutral-800" : "border-neutral-200 text-neutral-600 hover:border-neutral-400"}\`}>
                  {c}
                </button>)}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">Variant</span>
            <div className="flex flex-wrap gap-2">
              {variants.map(v => <button key={v} onClick={() => setVariant(v)} className={\`px-3 py-1 text-sm rounded-lg border transition-all \${variant === v ? "bg-neutral-800 text-white border-neutral-800" : "border-neutral-200 text-neutral-600 hover:border-neutral-400"}\`}>
                  {v}
                </button>)}
            </div>
          </div>
        </div>
        <Table aria-label="Table with pagination options" bottomContent={<div className="flex w-full justify-center p-2">
              <Pagination showControls color={color} variant={variant} page={page} total={pages} onChange={p => setPage(p)} />
            </div>} bottomContentPlacement="outside">
          <TableHeader>
            <TableColumn>NAME</TableColumn>
            <TableColumn>EMAIL</TableColumn>
            <TableColumn>ROLE</TableColumn>
          </TableHeader>
          <TableBody>
            {items.map(user => <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </div>;
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<User | null>(null);
    return <div className="flex flex-col gap-4">
        <p className="text-sm text-neutral-500">Click any row to trigger action.</p>
        {selected && <div className="p-4 bg-primary/10 border border-primary/20 rounded-xl text-sm">
            <span className="font-semibold text-primary">Selected:</span>{" "}
            {selected.name} — {selected.email} — {selected.role}
          </div>}
        <Table aria-label="Clickable rows table" onRowAction={key => {
        const u = users.find(x => x.id === key);
        if (u) setSelected(u);
      }}>
          <TableHeader>
            <TableColumn>NAME</TableColumn>
            <TableColumn>EMAIL</TableColumn>
            <TableColumn>ROLE</TableColumn>
          </TableHeader>
          <TableBody>
            {users.slice(0, 5).map(user => <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </div>;
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <Table aria-label="Striped table" isStriped>
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>EMAIL</TableColumn>
        <TableColumn>ROLE</TableColumn>
      </TableHeader>
      <TableBody>
        {users.slice(0, 6).map(user => <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "Real-world: Orders",
  render: () => {
    const [page, setPage] = useState(1);
    const rowsPerPage = 4;
    const pages = Math.ceil(orders.length / rowsPerPage);
    const items = useMemo(() => {
      const start = (page - 1) * rowsPerPage;
      return orders.slice(start, start + rowsPerPage);
    }, [page]);
    return <Table aria-label="Orders table" selectionMode="multiple" bottomContent={<div className="flex w-full justify-center p-2">
            <Pagination showControls color="primary" page={page} total={pages} onChange={p => setPage(p)} />
          </div>} bottomContentPlacement="outside">
        <TableHeader>
          <TableColumn>ORDER ID</TableColumn>
          <TableColumn>PRODUCT</TableColumn>
          <TableColumn>CUSTOMER</TableColumn>
          <TableColumn>AMOUNT</TableColumn>
          <TableColumn>STATUS</TableColumn>
          <TableColumn>DATE</TableColumn>
        </TableHeader>
        <TableBody>
          {items.map(order => <TableRow key={order.id}>
              <TableCell><span className="font-mono text-xs text-primary font-semibold">{order.id}</span></TableCell>
              <TableCell>{order.product}</TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell>\${order.amount}</TableCell>
              <TableCell>{orderStatusBadge(order.status)}</TableCell>
              <TableCell>{order.date}</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>;
  }
}`,...N.parameters?.docs?.source}}},P=[`Default`,`WithPagination`,`WithSorting`,`WithCheckboxSelection`,`AllFeatures`,`WithExpandableRows`,`LoadingState`,`EmptyState`,`HiddenHeader`,`PaginationVariants`,`ClickableRows`,`StripedRows`,`OrdersTable`]}))();export{T as AllFeatures,j as ClickableRows,x as Default,O as EmptyState,k as HiddenHeader,D as LoadingState,N as OrdersTable,A as PaginationVariants,M as StripedRows,w as WithCheckboxSelection,E as WithExpandableRows,S as WithPagination,C as WithSorting,P as __namedExportsOrder,b as default};