import { useState } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import { CustomTable } from "../../components/data-table";
import CustomButton from "../../components/button/CustomButton";
import CustomModal from "../../components/modal/CustomModal";
import UserForm, { type UserFormValues } from "./UserForm";

interface User {
  id: number;
  name: string;
  email: string;
  joiningDate?: string;
  age: number;
  gender: string;
  role: string;
  status: boolean;
  technologies?: string[];
}

const Users = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const columns: ColumnDef<User>[] = [
    {
      accessorKey: "name",
      header: "Name",
      enableSorting: true,
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "joiningDate",
      header: "Joining Date",
      cell: ({ row }) => {
        const val = row.original.joiningDate;
        if (!val) return <span className="text-gray-400">-</span>;
        const date = new Date(val);
        return isNaN(date.getTime()) ? val : date.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        });
      },
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
      accessorKey: "technologies",
      header: "Technologies",
      cell: ({ row }) => {
        const techs = row.original.technologies || [];
        return (
          <div className="flex flex-wrap gap-1">
            {techs.map((tech, i) => (
              <span key={i} className="px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded-full text-xs font-medium border border-indigo-100">
                {tech}
              </span>
            ))}
          </div>
        );
      },
    },
    {
      accessorKey: "role",
      header: "Role",
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const isActive = row.original.status;
        return (
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${
              isActive
                ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                : "bg-gray-50 text-gray-600 border-gray-200"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                isActive ? "bg-emerald-500" : "bg-gray-400"
              }`}
            />
            {isActive ? "Active" : "Inactive"}
          </span>
        );
      },
    },
  ];

  const [usersList, setUsersList] = useState<User[]>([
    {
      id: 1,
      name: "John Doe",
      email: "[EMAIL_ADDRESS]",
      joiningDate: "2025-01-15",
      age: 30,
      gender: "Male",
      role: "Admin",
      status: true,
      technologies: ["React", "TypeScript", "Node.js"],
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "[EMAIL_ADDRESS]",
      joiningDate: "2025-03-20",
      age: 25,
      gender: "Female",
      role: "User",
      status: false,
      technologies: ["React", "Tailwind CSS"],
    },
    {
      id: 3,
      name: "Bawana Doe",
      email: "[EMAIL_ADDRESS]",
      joiningDate: "2025-06-10",
      age: 23,
      gender: "Male",
      role: "Admin",
      status: true,
      technologies: ["Python", "Node.js"],
    },
    {
      id: 4,
      name: "Aka Doe",
      email: "[EMAIL_ADDRESS]",
      joiningDate: "2025-08-05",
      age: 22,
      gender: "Female",
      role: "User",
      status: false,
      technologies: ["TypeScript"],
    },
  ]);

  const handleAddUserSubmit = (values: UserFormValues) => {
    console.log("🚀 ~ handleAddUserSubmit ~ values:", values)
    const newUser: User = {
      id: usersList.length ? Math.max(...usersList.map((u) => u.id)) + 1 : 1,
      name: values.name,
      email: values.email,
      joiningDate: values.joiningDate,
      age: Number(values.age),
      gender: values.gender,
      role: values.role,
      status: values.status,
      technologies: values.technologies,
    };

    setUsersList((prev) => [newUser, ...prev]);
    setIsModalOpen(false);
  };

  return (
    <section>
      <div className="flex justify-between items-center py-4">
        <p className="text-2xl">Users</p>
        <CustomButton size="lg" onClick={() => setIsModalOpen(true)}>
          Add User
        </CustomButton>
      </div>

      <CustomTable
        data={usersList}
        columns={columns}
        enablePagination
        enableCheckbox
        enableSorting
        defaultSortKey="name"
        defaultSortOrder="desc"
      />

      {/* Reusable Custom Modal */}
      <CustomModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New User"
        maxWidthClassName="sm:max-w-xl"
      >
        {/* Dedicated static UserForm mapped as children inside the modal */}
        <UserForm
          onSubmit={handleAddUserSubmit}
          onCancel={() => setIsModalOpen(false)}
        />
      </CustomModal>
    </section>
  );
};

export default Users;
