import type { ColumnDef } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import CustomButton from "../../components/button/CustomButton";
import { CustomTable } from "../../components/data-table";
import CustomModal from "../../components/modal/CustomModal";
import CustomConfirmModal from "../../components/modal/CustomConfirmModal";
import type { IUserModal } from "../../models/user";
import UserForm from "./UserForm";
import ViewIcon from "../../assets/eye-info.svg"
import EditIcon from "../../assets/edit.svg"
import DeleteIcon from "../../assets/trash.svg"
import userService from "../../services/user-service";
import { Field, Form, Formik } from "formik";
import CustomInput from "../../components/input/CustomInput";
import CustomSelect from "../../components/input/CustomSelect";
import SearchIcon from "../../assets/search.svg"

interface IUsersFilter {
  search: string;
  status: string;
}

const Users = () => {
  const [usersList, setUsersList] = useState<IUserModal[]>([]);
  const [totalRecords, setTotalRecords] = useState<number>(0);
  const [user, setUser] = useState<IUserModal | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [openConfirmDialogDelete, setOpenConfirmDialogDelete] = useState(false);

  const handleDialogOpen = () => setOpenDialog(true);
  const handleDialogClose = () => setOpenDialog(false);
  const handleConfirmDialogOpenForDelete = () => setOpenConfirmDialogDelete(true);
  const handleConfirmDialogCloseForDelete = () => setOpenConfirmDialogDelete(false);

  const columns: ColumnDef<IUserModal>[] = [
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
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${isActive
              ? "bg-emerald-50 text-emerald-700 border-emerald-200"
              : "bg-gray-50 text-gray-600 border-gray-200"
              }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-emerald-500" : "bg-gray-400"
                }`}
            />
            {isActive ? "Active" : "Inactive"}
          </span>
        );
      },
    },
    {
      accessorKey: "actions",
      header: "Actions",
      size: 300,
      cell: ({ row }) => {
        return <div className="flex gap-2">
          <div className="cursor-pointer" onClick={() => handleView(row.original)}>
            <img src={ViewIcon} alt="View" />
          </div>
          <div className="cursor-pointer" onClick={() => handleEdit(row.original)}>
            <img src={EditIcon} alt="Edit" />
          </div>
          <div className="cursor-pointer" onClick={() => handleDelete(row.original)}>
            <img src={DeleteIcon} alt="Delete" />
          </div>
        </div>;
      },
    }
  ];

  const initialState: IUsersFilter = {
    search: '',
    status: '',
  };

  useEffect(() => {
    getUsers(initialState);
  }, [])

  const getUsers = async (filter: IUsersFilter) => {
    await userService
      .getAllUsers(
        1,
        10,
        "createdAt",
        "-1",
        true,
        filter?.search || "",
        "64709a6ff0e018908dee8947",
        0
      )
      .then((response: any) => {
        if (response) {
          setTotalRecords(response?.total);
          setUsersList(response?.records);
        } else {
          setTotalRecords(0);
          setUsersList([]);
        }
      })
      .catch((error: Error) => console.log(error?.message));
  }

  const handleAddUserSubmit = () => {
    getUsers(initialState);
    setOpenDialog(false);
  };

  const handleView = (user: IUserModal) => {
    setUser(user);
  };

  const handleEdit = (user: IUserModal) => {
    setUser(user);
    handleDialogOpen();
  };

  const handleDelete = (user: IUserModal) => {
    setUser(user);
    handleConfirmDialogOpenForDelete();
  };

  const handleDeleteConfirm = () => {
    handleConfirmDialogCloseForDelete();
  };

  return (
    <section>
      <div className="flex justify-between items-center">
        <p className="text-2xl">Users</p>
        <CustomButton size="lg" onClick={handleDialogOpen}>
          Add User
        </CustomButton>
      </div>

      <Formik
        initialValues={initialState}
        onSubmit={(data: any) => {
          getUsers(data);
        }}
        enableReinitialize
        onReset={() => {
          getUsers(initialState);
        }}
      >
        {(props) => {
          const { handleSubmit } = props;
          return (
            <Form onSubmit={handleSubmit} noValidate className='my-5'>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field
                  name="search"
                  placeholder="Search by name"
                  component={CustomInput}
                  startIcon={
                    <img src={SearchIcon} alt="Search" className="w-4 h-4" />
                  }
                />

                <Field
                  name="status"
                  placeholder="Select status"
                  component={CustomSelect}
                  options={[
                    { label: "Active", value: "true" },
                    { label: "Inactive", value: "false" }
                  ]}
                />
              </div>
            </Form>
          );
        }}
      </Formik>

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
        openDialog={openDialog}
        handleDialogClose={handleDialogClose}
        title="Add New User"
        size="2xl"
        backdrop="blur"
        scrollBehavior="inside"
      >
        <UserForm
          user={user}
          onUserAdd={handleAddUserSubmit}
          handleDialogClose={handleDialogClose}
        />
      </CustomModal>

      <CustomConfirmModal
        title="Delete User"
        openDialog={openConfirmDialogDelete}
        handleDialogClose={handleConfirmDialogCloseForDelete}
        message={`Are you sure you want to delete ${user?.name} ?`}
        handleSuccess={handleDeleteConfirm}
      />
    </section>
  );
};

export default Users;
