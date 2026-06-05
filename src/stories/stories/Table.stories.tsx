import type { Meta, StoryObj } from "@storybook/react";
import type { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import { Avatar, Chip, CustomTable } from "../../components/ui";

// ─── Types ───────────────────────────────────────────────────────────────────

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive" | "pending";
  joined: string;
  salary: number;
}

interface Order {
  id: string;
  product: string;
  customer: string;
  amount: number;
  status: "shipped" | "pending" | "cancelled" | "delivered";
  date: string;
  subRows?: Order[];
}

// ─── Sample Data ─────────────────────────────────────────────────────────────

const users: User[] = [
  { id: "1", name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: "active", joined: "2023-01-15", salary: 95000 },
  { id: "2", name: "Bob Smith", email: "bob@example.com", role: "Developer", status: "active", joined: "2023-03-22", salary: 80000 },
  { id: "3", name: "Carol Williams", email: "carol@example.com", role: "Designer", status: "inactive", joined: "2022-11-05", salary: 72000 },
  { id: "4", name: "David Brown", email: "david@example.com", role: "Manager", status: "active", joined: "2021-07-18", salary: 110000 },
  { id: "5", name: "Eva Martinez", email: "eva@example.com", role: "Developer", status: "pending", joined: "2024-01-02", salary: 78000 },
  { id: "6", name: "Frank Lee", email: "frank@example.com", role: "Analyst", status: "active", joined: "2023-08-14", salary: 70000 },
  { id: "7", name: "Grace Kim", email: "grace@example.com", role: "Designer", status: "active", joined: "2022-05-30", salary: 68000 },
  { id: "8", name: "Henry Wilson", email: "henry@example.com", role: "Developer", status: "inactive", joined: "2021-12-01", salary: 85000 },
  { id: "9", name: "Isabel Davis", email: "isabel@example.com", role: "Admin", status: "active", joined: "2020-09-10", salary: 92000 },
  { id: "10", name: "Jack Thompson", email: "jack@example.com", role: "Analyst", status: "pending", joined: "2024-02-28", salary: 65000 },
  { id: "11", name: "Karen Anderson", email: "karen@example.com", role: "Manager", status: "active", joined: "2022-03-17", salary: 105000 },
  { id: "12", name: "Liam Garcia", email: "liam@example.com", role: "Developer", status: "active", joined: "2023-06-09", salary: 77000 },
];

const orders: Order[] = [
  {
    id: "ORD-001", product: "MacBook Pro 14\"", customer: "Alice Johnson", amount: 1999, status: "delivered", date: "2024-01-10",
    subRows: [
      { id: "ORD-001-A", product: "↳ AppleCare+", customer: "Alice Johnson", amount: 299, status: "delivered", date: "2024-01-10" },
      { id: "ORD-001-B", product: "↳ USB-C Hub", customer: "Alice Johnson", amount: 49, status: "delivered", date: "2024-01-10" },
    ],
  },
  { id: "ORD-002", product: "iPad Air", customer: "Bob Smith", amount: 749, status: "shipped", date: "2024-01-18" },
  { id: "ORD-003", product: "AirPods Pro", customer: "Carol Williams", amount: 249, status: "pending", date: "2024-01-22" },
  {
    id: "ORD-004", product: "iPhone 15 Pro", customer: "David Brown", amount: 1099, status: "delivered", date: "2024-02-01",
    subRows: [
      { id: "ORD-004-A", product: "↳ MagSafe Case", customer: "David Brown", amount: 59, status: "delivered", date: "2024-02-01" },
    ],
  },
  { id: "ORD-005", product: "Apple Watch S9", customer: "Eva Martinez", amount: 399, status: "cancelled", date: "2024-02-05" },
  { id: "ORD-006", product: "Mac mini M4", customer: "Frank Lee", amount: 599, status: "shipped", date: "2024-02-10" },
];

// ─── Column Definitions ───────────────────────────────────────────────────────

const statusBadge = (status: User["status"]) => {
  const colorMap: Record<User["status"], "success" | "danger" | "warning"> = {
    active: "success",
    inactive: "danger",
    pending: "warning",
  };
  return (
    <Chip variant="flat" color={colorMap[status]} size="sm">
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Chip>
  );
};

const orderStatusBadge = (status: Order["status"]) => {
  const colorMap: Record<Order["status"], "success" | "primary" | "warning" | "danger"> = {
    delivered: "success",
    shipped: "primary",
    pending: "warning",
    cancelled: "danger",
  };
  return (
    <Chip variant="flat" color={colorMap[status]} size="sm">
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Chip>
  );
};

const userColumns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar name={row.original.name} size="sm" color="primary" />
        <span className="font-semibold text-gray-800">{row.original.name}</span>
      </div>
    ),
    enableSorting: true,
  },
  {
    accessorKey: "email",
    header: "Email",
    enableSorting: true,
  },
  {
    accessorKey: "role",
    header: "Role",
    enableSorting: true,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => statusBadge(getValue() as User["status"]),
    enableSorting: true,
  },
  {
    accessorKey: "joined",
    header: "Joined",
    enableSorting: true,
  },
  {
    accessorKey: "salary",
    header: "Salary",
    cell: ({ getValue }) => `$${(getValue() as number).toLocaleString()}`,
    enableSorting: true,
  },
];

const orderColumns: ColumnDef<Order>[] = [
  {
    accessorKey: "id",
    header: "Order ID",
    cell: ({ getValue }) => (
      <span className="font-mono text-xs text-primary font-semibold">{getValue() as string}</span>
    ),
  },
  { accessorKey: "product", header: "Product" },
  { accessorKey: "customer", header: "Customer" },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ getValue }) => `$${(getValue() as number).toLocaleString()}`,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => orderStatusBadge(getValue() as Order["status"]),
  },
  { accessorKey: "date", header: "Date" },
];

// ─── Meta ─────────────────────────────────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const meta: Meta<any> = {
  title: "Components/Table",
  component: CustomTable,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    enablePagination: { control: "boolean" },
    enableSorting: { control: "boolean" },
    enableFiltering: { control: "boolean" },
    enableCheckbox: { control: "boolean" },
    enableExpanding: { control: "boolean" },
    isStriped: { control: "boolean" },
    enableInfiniteScroll: { control: "boolean" },
    hideHeader: { control: "boolean" },
    loading: { control: "boolean" },
    scrollBehavior: { control: "select", options: ["inside", "outside"] },
    paginationSize: { control: "select", options: ["sm", "md", "lg"] },
    paginationColor: { control: "select", options: ["primary", "secondary", "success", "warning", "danger", "default"] },
    paginationVariant: { control: "select", options: ["solid", "bordered", "light", "flat"] },
    showPaginationControls: { control: "boolean" },
    data: { control: false },
    columns: { control: false },
  },
};

export default meta;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Story = StoryObj<any>;

// ─── Default ─────────────────────────────────────────────────────────────────

export const Default: Story = {
  render: (args) => <CustomTable {...args} data={users} columns={userColumns} />,
  args: {
    enablePagination: false,
    enableSorting: false,
    enableFiltering: false,
    enableCheckbox: false,
    enableExpanding: false,
    hideHeader: false,
    loading: false,
    scrollBehavior: "outside",
  },
};

// ─── With Pagination ─────────────────────────────────────────────────────────

export const WithPagination: Story = {
  render: (args) => {
    const [pagination, setPagination] = useState({ page: 1, limit: 5 });
    return (
      <CustomTable
        {...args}
        data={users}
        columns={userColumns}
        enablePagination
        manualPagination={false}
        pagination={pagination}
        onPaginationChange={setPagination}
        totalCount={users.length}
        pageSize={5}
        scrollBehavior="outside"
      />
    );
  },
  args: {
    paginationSize: "md",
    paginationColor: "primary",
    paginationVariant: "solid",
    showPaginationControls: true,
  },
};

// ─── With Sorting ─────────────────────────────────────────────────────────────

export const WithSorting: Story = {
  render: (args) => (
    <div>
      <p className="text-sm text-gray-500 mb-2">Click on a column header to sort. Columns with sorting enabled: Name, Email, Role, Status, Joined, Salary.</p>
      <CustomTable
        {...args}
        data={users}
        columns={userColumns}
        enableSorting
        scrollBehavior="outside"
      />
    </div>
  ),
  args: {
    defaultSortKey: "name",
    defaultSortOrder: "asc",
  },
};

// ─── With Checkbox Selection ─────────────────────────────────────────────────

export const WithCheckboxSelection: Story = {
  render: (args) => (
    <CustomTable
      {...args}
      data={users}
      columns={userColumns}
      enableCheckbox
      scrollBehavior="outside"
    />
  ),
  args: {},
};

// ─── With All Features ───────────────────────────────────────────────────────

export const AllFeatures: Story = {
  name: "All Features Combined",
  render: (args) => {
    const [pagination, setPagination] = useState({ page: 1, limit: 5 });
    return (
      <CustomTable
        {...args}
        data={users}
        columns={userColumns}
        enablePagination
        enableSorting
        enableCheckbox
        manualPagination={false}
        pagination={pagination}
        onPaginationChange={setPagination}
        totalCount={users.length}
        pageSize={5}
        scrollBehavior="outside"
        paginationColor="primary"
        paginationVariant="solid"
      />
    );
  },
  args: {
    defaultSortKey: "salary",
    defaultSortOrder: "desc",
  },
};

// ─── With Expandable Rows ─────────────────────────────────────────────────────

export const WithExpandableRows: Story = {
  render: (args) => (
    <div>
      <p className="text-sm text-gray-500 mb-2">Click the arrow icon on rows with sub-rows (ORD-001, ORD-004) to expand them.</p>
      <CustomTable
        {...args}
        data={orders}
        columns={orderColumns}
        enableExpanding
        getSubRows={(row: Order) => row.subRows}
        scrollBehavior="outside"
      />
    </div>
  ),
  args: {},
};

// ─── Loading State ────────────────────────────────────────────────────────────

export const LoadingState: Story = {
  render: (args) => (
    <CustomTable
      {...args}
      data={[]}
      columns={userColumns}
      loading
      scrollBehavior="outside"
    />
  ),
  args: {},
};

// ─── Empty State ──────────────────────────────────────────────────────────────

export const EmptyState: Story = {
  render: (args) => (
    <CustomTable
      {...args}
      data={[]}
      columns={userColumns}
      scrollBehavior="outside"
    />
  ),
  args: {},
};

// ─── Hidden Header ────────────────────────────────────────────────────────────

export const HiddenHeader: Story = {
  render: (args) => (
    <CustomTable
      {...args}
      data={users.slice(0, 5)}
      columns={userColumns}
      hideHeader
      scrollBehavior="outside"
    />
  ),
  args: {},
};

// ─── Pagination Variants ──────────────────────────────────────────────────────

export const PaginationVariants: Story = {
  name: "Pagination Color & Variant",
  render: () => {
    const [color, setColor] = useState<"primary" | "secondary" | "success" | "warning" | "danger" | "default">("primary");
    const [variant, setVariant] = useState<"solid" | "bordered" | "light" | "flat">("solid");
    const [pagination, setPagination] = useState({ page: 1, limit: 4 });

    const colors = ["primary", "secondary", "success", "warning", "danger", "default"] as const;
    const variants = ["solid", "bordered", "light", "flat"] as const;

    return (
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Color</span>
            <div className="flex flex-wrap gap-2">
              {colors.map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={`px-3 py-1 text-sm rounded-lg border transition-all ${color === c ? "bg-gray-800 text-white border-gray-800" : "border-gray-200 text-gray-600 hover:border-gray-400"
                    }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Variant</span>
            <div className="flex flex-wrap gap-2">
              {variants.map((v) => (
                <button
                  key={v}
                  onClick={() => setVariant(v)}
                  className={`px-3 py-1 text-sm rounded-lg border transition-all ${variant === v ? "bg-gray-800 text-white border-gray-800" : "border-gray-200 text-gray-600 hover:border-gray-400"
                    }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>
        </div>
        <CustomTable
          data={users}
          columns={userColumns}
          enablePagination
          manualPagination={false}
          pagination={pagination}
          onPaginationChange={setPagination}
          totalCount={users.length}
          pageSize={4}
          paginationColor={color}
          paginationVariant={variant}
          paginationSize="md"
          scrollBehavior="outside"
        />
      </div>
    );
  },
};

// ─── Clickable Rows ───────────────────────────────────────────────────────────

export const ClickableRows: Story = {
  render: (args) => {
    const [selected, setSelected] = useState<User | null>(null);
    return (
      <div className="flex flex-col gap-4">
        <p className="text-sm text-gray-500">Click any row to select it.</p>
        {selected && (
          <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl text-sm">
            <span className="font-semibold text-primary">Selected:</span>{" "}
            {selected.name} — {selected.email} — {selected.role}
          </div>
        )}
        <CustomTable
          {...args}
          data={users}
          columns={userColumns}
          onRowClick={(row) => setSelected(row as User)}
          scrollBehavior="outside"
        />
      </div>
    );
  },
  args: {},
};

// ─── Striped Rows ─────────────────────────────────────────────────────────────

export const StripedRows: Story = {
  render: (args) => (
    <CustomTable
      {...args}
      data={users.slice(0, 6)}
      columns={userColumns}
      isStriped
      scrollBehavior="outside"
    />
  ),
  args: {},
};

// ─── Infinite Scroll ──────────────────────────────────────────────────────────

export const InfiniteScroll: Story = {
  render: (args) => {
    const [pagination, setPagination] = useState({ page: 1, limit: 5 });
    const [loading, setLoading] = useState(false);

    const allUsers = Array.from({ length: 30 }, (_, i) => {
      const base = users[i % users.length];
      return { ...base, id: String(i + 1), name: `${base.name} #${i + 1}` };
    });

    const visibleData = allUsers.slice(0, pagination.limit);

    const handlePaginationChange = (next: { page: number; limit: number }) => {
      setLoading(true);
      setTimeout(() => {
        setPagination({ page: 1, limit: next.limit });
        setLoading(false);
      }, 600);
    };

    return (
      <div>
        <p className="text-sm text-gray-500 mb-2">
          Scroll inside the table to load more rows. Page stays at 1; limit increases by 5 each time.
        </p>
        <CustomTable
          {...args}
          data={visibleData}
          columns={userColumns}
          enablePagination
          enableInfiniteScroll
          manualPagination
          pagination={pagination}
          onPaginationChange={handlePaginationChange}
          totalCount={allUsers.length}
          infiniteScrollStep={5}
          infiniteScrollMaxHeight="20rem"
          loading={loading}
          isStriped
        />
      </div>
    );
  },
  args: {},
};

// ─── Orders Table ─────────────────────────────────────────────────────────────

export const OrdersTable: Story = {
  name: "Real-world: Orders",
  render: (args) => {
    const [pagination, setPagination] = useState({ page: 1, limit: 5 });
    return (
      <CustomTable
        {...args}
        data={orders}
        columns={orderColumns}
        enablePagination
        enableSorting
        enableCheckbox
        manualPagination={false}
        pagination={pagination}
        onPaginationChange={setPagination}
        totalCount={orders.length}
        pageSize={5}
        scrollBehavior="outside"
        paginationColor="primary"
        paginationVariant="solid"
      />
    );
  },
  args: {},
};
