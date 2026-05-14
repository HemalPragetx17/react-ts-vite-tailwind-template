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
  age: number;
  gender: string;
  role: string;
  status: string;
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
    },
  ];

  const [usersList, setUsersList] = useState<User[]>([
    {
      id: 1,
      name: "John Doe",
      email: "[EMAIL_ADDRESS]",
      age: 30,
      gender: "Male",
      role: "Admin",
      status: "Active",
      technologies: ["React", "TypeScript", "Node.js"],
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "[EMAIL_ADDRESS]",
      age: 25,
      gender: "Female",
      role: "User",
      status: "Inactive",
      technologies: ["React", "Tailwind CSS"],
    },
    {
      id: 3,
      name: "Bawana Doe",
      email: "[EMAIL_ADDRESS]",
      age: 23,
      gender: "Male",
      role: "Admin",
      status: "Active",
      technologies: ["Python", "Node.js"],
    },
    {
      id: 4,
      name: "Aka Doe",
      email: "[EMAIL_ADDRESS]",
      age: 22,
      gender: "Female",
      role: "User",
      status: "Inactive",
      technologies: ["TypeScript"],
    },
  ]);

  const handleAddUserSubmit = (values: UserFormValues) => {
    console.log("🚀 ~ handleAddUserSubmit ~ values:", values)
    const newUser: User = {
      id: usersList.length ? Math.max(...usersList.map((u) => u.id)) + 1 : 1,
      name: values.name,
      email: values.email,
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
      <div className="flex justify-between items-center mb-4">
        <p className="text-2xl">Users</p>
        <CustomButton className="mt-5 justify-center" onClick={() => setIsModalOpen(true)}>
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
