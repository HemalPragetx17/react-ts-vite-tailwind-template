import type { Meta, StoryObj } from "@storybook/react";
import { useState, useMemo } from "react";
import {
  Avatar,
  Chip,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  type SortDescriptor,
} from "../../components/ui";

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
      { id: "ORD-001-A", product: "AppleCare+", customer: "Alice Johnson", amount: 299, status: "delivered", date: "2024-01-10" },
      { id: "ORD-001-B", product: "USB-C Hub", customer: "Alice Johnson", amount: 49, status: "delivered", date: "2024-01-10" },
    ],
  },
  { id: "ORD-002", product: "iPad Air", customer: "Bob Smith", amount: 749, status: "shipped", date: "2024-01-18" },
  { id: "ORD-003", product: "AirPods Pro", customer: "Carol Williams", amount: 249, status: "pending", date: "2024-01-22" },
  {
    id: "ORD-004", product: "iPhone 15 Pro", customer: "David Brown", amount: 1099, status: "delivered", date: "2024-02-01",
    subRows: [
      { id: "ORD-004-A", product: "MagSafe Case", customer: "David Brown", amount: 59, status: "delivered", date: "2024-02-01" },
    ],
  },
  { id: "ORD-005", product: "Apple Watch S9", customer: "Eva Martinez", amount: 399, status: "cancelled", date: "2024-02-05" },
  { id: "ORD-006", product: "Mac mini M4", customer: "Frank Lee", amount: 599, status: "shipped", date: "2024-02-10" },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

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

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "success", "warning", "danger"],
    },
    radius: {
      control: "select",
      options: ["none", "sm", "md", "lg"],
    },
    shadow: {
      control: "select",
      options: ["none", "sm", "md", "lg"],
    },
    isStriped: { control: "boolean" },
    isCompact: { control: "boolean" },
    hideHeader: { control: "boolean" },
    isHeaderSticky: { control: "boolean" },
    selectionMode: {
      control: "select",
      options: ["none", "single", "multiple"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

// ─── Default ─────────────────────────────────────────────────────────────────

export const Default: Story = {
  render: () => (
    <Table aria-label="Users table">
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>EMAIL</TableColumn>
        <TableColumn>ROLE</TableColumn>
        <TableColumn>STATUS</TableColumn>
        <TableColumn>JOINED</TableColumn>
        <TableColumn>SALARY</TableColumn>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
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
            <TableCell>${user.salary.toLocaleString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

// ─── With Pagination ─────────────────────────────────────────────────────────

export const WithPagination: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    const rowsPerPage = 4;
    const pages = Math.ceil(users.length / rowsPerPage);

    const items = useMemo(() => {
      const start = (page - 1) * rowsPerPage;
      return users.slice(start, start + rowsPerPage);
    }, [page]);

    return (
      <Table
        aria-label="Table with pagination"
        bottomContent={
          <div className="flex w-full justify-center p-2">
            <Pagination
              isCompact
              showControls
              showShadow
              color="primary"
              page={page}
              total={pages}
              onChange={(p) => setPage(p)}
            />
          </div>
        }
        bottomContentPlacement="outside"
      >
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>EMAIL</TableColumn>
          <TableColumn>ROLE</TableColumn>
          <TableColumn>STATUS</TableColumn>
        </TableHeader>
        <TableBody>
          {items.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar name={user.name} size="sm" color="primary" />
                  <span className="font-semibold text-neutral-800 dark:text-neutral-200">{user.name}</span>
                </div>
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{statusBadge(user.status)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};

// ─── With Sorting ─────────────────────────────────────────────────────────────

export const WithSorting: Story = {
  render: () => {
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
      column: "name",
      direction: "ascending",
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

    return (
      <Table
        aria-label="Table with sorting"
        sortDescriptor={sortDescriptor}
        onSortChange={setSortDescriptor}
      >
        <TableHeader>
          <TableColumn key="name" allowsSorting>NAME</TableColumn>
          <TableColumn key="email" allowsSorting>EMAIL</TableColumn>
          <TableColumn key="role" allowsSorting>ROLE</TableColumn>
          <TableColumn key="status" allowsSorting>STATUS</TableColumn>
          <TableColumn key="salary" allowsSorting>SALARY</TableColumn>
        </TableHeader>
        <TableBody>
          {sortedItems.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{statusBadge(user.status)}</TableCell>
              <TableCell>${user.salary.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};

// ─── With Checkbox Selection ─────────────────────────────────────────────────

export const WithCheckboxSelection: Story = {
  render: () => (
    <Table
      aria-label="Table with selection"
      selectionMode="multiple"
      defaultSelectedKeys={new Set(["1", "3"])}
    >
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>EMAIL</TableColumn>
        <TableColumn>ROLE</TableColumn>
        <TableColumn>STATUS</TableColumn>
      </TableHeader>
      <TableBody>
        {users.slice(0, 6).map((user) => (
          <TableRow key={user.id}>
            <TableCell>
              <div className="flex items-center gap-3">
                <Avatar name={user.name} size="sm" color="primary" />
                <span className="font-semibold text-neutral-800 dark:text-neutral-200">{user.name}</span>
              </div>
            </TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{statusBadge(user.status)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

// ─── All Features Combined ───────────────────────────────────────────────────

export const AllFeatures: Story = {
  name: "All Features Combined",
  render: () => {
    const [page, setPage] = useState(1);
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
      column: "name",
      direction: "ascending",
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

    return (
      <Table
        aria-label="Table with all features"
        selectionMode="multiple"
        sortDescriptor={sortDescriptor}
        onSortChange={setSortDescriptor}
        bottomContent={
          <div className="flex w-full justify-center p-2">
            <Pagination
              isCompact
              showControls
              showShadow
              color="primary"
              page={page}
              total={Math.ceil(users.length / rowsPerPage)}
              onChange={(p) => setPage(p)}
            />
          </div>
        }
        bottomContentPlacement="outside"
      >
        <TableHeader>
          <TableColumn key="name" allowsSorting>NAME</TableColumn>
          <TableColumn key="email" allowsSorting>EMAIL</TableColumn>
          <TableColumn key="role" allowsSorting>ROLE</TableColumn>
          <TableColumn key="status" allowsSorting>STATUS</TableColumn>
          <TableColumn key="salary" allowsSorting>SALARY</TableColumn>
        </TableHeader>
        <TableBody>
          {items.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{statusBadge(user.status)}</TableCell>
              <TableCell>${user.salary.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};

// ─── With Expandable Rows ─────────────────────────────────────────────────────

export const WithExpandableRows: Story = {
  render: () => {
    const [expandedKeys, setExpandedKeys] = useState<any>(new Set(["ORD-001", "ORD-004"]));

    return (
      <Table
        aria-label="Expandable rows table"
        treeColumn="id"
        expandedKeys={expandedKeys}
        onExpandedChange={setExpandedKeys}
        renderExpandedContent={(item: Order) => (
          <div className="p-4 bg-neutral-50 dark:bg-neutral-800/40 rounded-lg space-y-2">
            <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
              Sub Items for {item.id}
            </p>
            {item.subRows && item.subRows.length > 0 ? (
              item.subRows.map((sub) => (
                <div key={sub.id} className="flex items-center gap-6 text-sm text-neutral-700 dark:text-neutral-300">
                  <span className="font-mono text-primary font-medium">{sub.id}</span>
                  <span>{sub.product}</span>
                  <span>${sub.amount}</span>
                  <span>{orderStatusBadge(sub.status)}</span>
                </div>
              ))
            ) : (
              <p className="text-xs text-neutral-400">No sub-items available</p>
            )}
          </div>
        )}
      >
        <TableHeader>
          <TableColumn key="id">ORDER ID</TableColumn>
          <TableColumn key="product">PRODUCT</TableColumn>
          <TableColumn key="customer">CUSTOMER</TableColumn>
          <TableColumn key="amount">AMOUNT</TableColumn>
          <TableColumn key="status">STATUS</TableColumn>
          <TableColumn key="date">DATE</TableColumn>
        </TableHeader>
        <TableBody items={orders}>
          {(order) => (
            <TableRow key={order.id}>
              <TableCell><span className="font-mono text-xs text-primary font-semibold">{order.id}</span></TableCell>
              <TableCell>{order.product}</TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell>${order.amount}</TableCell>
              <TableCell>{orderStatusBadge(order.status)}</TableCell>
              <TableCell>{order.date}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    );
  },
};

// ─── Loading State ────────────────────────────────────────────────────────────

export const LoadingState: Story = {
  render: () => (
    <Table aria-label="Loading state table">
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>EMAIL</TableColumn>
        <TableColumn>ROLE</TableColumn>
      </TableHeader>
      <TableBody isLoading loadingState="loading" emptyContent="Loading data...">
        {[]}
      </TableBody>
    </Table>
  ),
};

// ─── Empty State ──────────────────────────────────────────────────────────────

export const EmptyState: Story = {
  render: () => (
    <Table aria-label="Empty state table">
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>EMAIL</TableColumn>
        <TableColumn>ROLE</TableColumn>
      </TableHeader>
      <TableBody emptyContent="No rows available.">
        {[]}
      </TableBody>
    </Table>
  ),
};

// ─── Hidden Header ────────────────────────────────────────────────────────────

export const HiddenHeader: Story = {
  render: () => (
    <Table aria-label="Hidden header table" hideHeader>
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>EMAIL</TableColumn>
        <TableColumn>ROLE</TableColumn>
      </TableHeader>
      <TableBody>
        {users.slice(0, 4).map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

// ─── Pagination Variants ──────────────────────────────────────────────────────

export const PaginationVariants: Story = {
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

    return (
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">Color</span>
            <div className="flex flex-wrap gap-2">
              {colors.map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={`px-3 py-1 text-sm rounded-lg border transition-all ${color === c ? "bg-neutral-800 text-white border-neutral-800" : "border-neutral-200 text-neutral-600 hover:border-neutral-400"}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">Variant</span>
            <div className="flex flex-wrap gap-2">
              {variants.map((v) => (
                <button
                  key={v}
                  onClick={() => setVariant(v)}
                  className={`px-3 py-1 text-sm rounded-lg border transition-all ${variant === v ? "bg-neutral-800 text-white border-neutral-800" : "border-neutral-200 text-neutral-600 hover:border-neutral-400"}`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>
        </div>
        <Table
          aria-label="Table with pagination options"
          bottomContent={
            <div className="flex w-full justify-center p-2">
              <Pagination
                showControls
                color={color}
                variant={variant}
                page={page}
                total={pages}
                onChange={(p) => setPage(p)}
              />
            </div>
          }
          bottomContentPlacement="outside"
        >
          <TableHeader>
            <TableColumn>NAME</TableColumn>
            <TableColumn>EMAIL</TableColumn>
            <TableColumn>ROLE</TableColumn>
          </TableHeader>
          <TableBody>
            {items.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  },
};

// ─── Clickable Rows ───────────────────────────────────────────────────────────

export const ClickableRows: Story = {
  render: () => {
    const [selected, setSelected] = useState<User | null>(null);
    return (
      <div className="flex flex-col gap-4">
        <p className="text-sm text-neutral-500">Click any row to trigger action.</p>
        {selected && (
          <div className="p-4 bg-primary/10 border border-primary/20 rounded-xl text-sm">
            <span className="font-semibold text-primary">Selected:</span>{" "}
            {selected.name} — {selected.email} — {selected.role}
          </div>
        )}
        <Table
          aria-label="Clickable rows table"
          onRowAction={(key) => {
            const u = users.find((x) => x.id === key);
            if (u) setSelected(u);
          }}
        >
          <TableHeader>
            <TableColumn>NAME</TableColumn>
            <TableColumn>EMAIL</TableColumn>
            <TableColumn>ROLE</TableColumn>
          </TableHeader>
          <TableBody>
            {users.slice(0, 5).map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  },
};

// ─── Striped Rows ─────────────────────────────────────────────────────────────

export const StripedRows: Story = {
  render: () => (
    <Table aria-label="Striped table" isStriped>
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>EMAIL</TableColumn>
        <TableColumn>ROLE</TableColumn>
      </TableHeader>
      <TableBody>
        {users.slice(0, 6).map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

// ─── Orders Table ─────────────────────────────────────────────────────────────

export const OrdersTable: Story = {
  name: "Real-world: Orders",
  render: () => {
    const [page, setPage] = useState(1);
    const rowsPerPage = 4;
    const pages = Math.ceil(orders.length / rowsPerPage);

    const items = useMemo(() => {
      const start = (page - 1) * rowsPerPage;
      return orders.slice(start, start + rowsPerPage);
    }, [page]);

    return (
      <Table
        aria-label="Orders table"
        selectionMode="multiple"
        bottomContent={
          <div className="flex w-full justify-center p-2">
            <Pagination
              showControls
              color="primary"
              page={page}
              total={pages}
              onChange={(p) => setPage(p)}
            />
          </div>
        }
        bottomContentPlacement="outside"
      >
        <TableHeader>
          <TableColumn>ORDER ID</TableColumn>
          <TableColumn>PRODUCT</TableColumn>
          <TableColumn>CUSTOMER</TableColumn>
          <TableColumn>AMOUNT</TableColumn>
          <TableColumn>STATUS</TableColumn>
          <TableColumn>DATE</TableColumn>
        </TableHeader>
        <TableBody>
          {items.map((order) => (
            <TableRow key={order.id}>
              <TableCell><span className="font-mono text-xs text-primary font-semibold">{order.id}</span></TableCell>
              <TableCell>{order.product}</TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell>${order.amount}</TableCell>
              <TableCell>{orderStatusBadge(order.status)}</TableCell>
              <TableCell>{order.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};
