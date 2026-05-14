import type { ColumnDef } from "@tanstack/react-table";
import { CustomTable } from "../../components/data-table";

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  gender: string;
  role: string;
  status: string;
}

const Users = () => {
  const columns: ColumnDef<User>[] = [
    {
      accessorKey: "name",
      header: "Name",
      enableSorting: true, // Enable sorting for this column
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "age",
      header: "Age",
    },
    {
      accessorKey: "gender",
      header: "Gender",
    },
    {
      accessorKey: "role",
      header: "Role",
    },
    {
      accessorKey: "status",
      header: "Status",
    },
  ];

  const data = [
    {
      id: 1,
      name: "John Doe",
      email: "[EMAIL_ADDRESS]",
      age: 30,
      gender: "Male",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "[EMAIL_ADDRESS]",
      age: 25,
      gender: "Female",
      role: "User",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Bawana Doe",
      email: "[EMAIL_ADDRESS]",
      age: 23,
      gender: "Male",
      role: "Admin",
      status: "Active",
    },
    {
      id: 4,
      name: "Aka Doe",
      email: "[EMAIL_ADDRESS]",
      age: 22,
      gender: "Female",
      role: "User",
      status: "Inactive",
    },
  ]

  return (
    <section>
      <div className='flex justify-between items-center mb-4'>
        <p className='text-2xl'>Users</p>
      </div>
      <CustomTable data={data} columns={columns} enablePagination enableCheckbox enableSorting defaultSortKey="name" defaultSortOrder="desc" />
    </section>
  )
};

export default Users
