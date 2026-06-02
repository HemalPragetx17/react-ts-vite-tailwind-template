import type { ColumnDef } from "@tanstack/react-table";
import { Field, Form, Formik } from "formik";
import { debounce } from "lodash";
import { useEffect, useMemo, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import EditIcon from "../../assets/edit.svg";
import ViewIcon from "../../assets/eye-info.svg";
import SearchIcon from "../../assets/search.svg";
import DeleteIcon from "../../assets/trash.svg";
import CustomButton from "../../components/button/CustomButton";
import { CustomTable } from "../../components/data-table";
import CustomInput from "../../components/input/CustomInput";
import CustomSelect from "../../components/input/CustomSelect";
import CustomSwitch from "../../components/input/CustomSwitch";
import CustomConfirmModal from "../../components/modal/CustomConfirmModal";
import CustomModal from "../../components/modal/CustomModal";
import type { Pagination } from "../../models/base-type";
import type { IUserModal } from "../../models/user";
import { Routing } from "../../routes/routing";
import userService from "../../services/user-service";
import { PAGINATION } from "../../shared/constants/pagination";
import { handleTableLoader } from "../../store/slices/generalSlice";
import UserForm from "./UserForm";

interface IUsersFilter {
  search: string;
  status: string;
}

const initialFilter: IUsersFilter = {
  search: '',
  status: '',
};

const Users = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [usersList, setUsersList] = useState<IUserModal[]>([]);
  const [totalRecords, setTotalRecords] = useState<number>(0);
  const [pagination, setPagination] = useState<Pagination>(PAGINATION);
  const [filterValues, setFilterValues] = useState<IUsersFilter>(initialFilter);

  const [user, setUser] = useState<IUserModal | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [openConfirmDialogDelete, setOpenConfirmDialogDelete] = useState(false);

  const handleDialogOpen = useCallback(() => setOpenDialog(true), []);
  const handleDialogClose = useCallback(() => setOpenDialog(false), []);
  const handleConfirmDialogOpenForDelete = useCallback(() => setOpenConfirmDialogDelete(true), []);
  const handleConfirmDialogCloseForDelete = useCallback(() => setOpenConfirmDialogDelete(false), []);

  const handleStatusToggle = useCallback(async (userId: string, newStatus: boolean) => {
    await userService
      .toggleUserStatus(userId, { status: newStatus })
      .then(() => {
        toast.success("User status updated successfully!");
        setUsersList((prev) => prev.map((user) => user._id === userId ? { ...user, active: newStatus } : user))
      })
      .catch((error: any) => {
        toast.error(error || "Failed to update status.");
      })
  }, []);

  const handleView = useCallback((user: IUserModal) => {
    setUser(user);
    navigate(Routing.UserDetails);
  }, [navigate]);

  const handleEdit = useCallback((user: IUserModal) => {
    setUser(user);
    handleDialogOpen();
  }, [handleDialogOpen]);

  const handleDelete = useCallback((user: IUserModal) => {
    setUser(user);
    handleConfirmDialogOpenForDelete();
  }, [handleConfirmDialogOpenForDelete]);

  const columns: ColumnDef<IUserModal>[] = useMemo(() => [
    {
      accessorKey: "firstName",
      header: "Name",
      enableSorting: true,
      cell: ({ row }) => {
        const val = row.original.firstName + " " + row.original.lastName;
        if (!val) return <span className="text-gray-400">-</span>;
        return val;
      },
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "phone",
      header: "Phone Number",
      cell: ({ row }) => {
        const val = row.original.phoneCountry + " " + row.original.phone;
        if (!val) return <span className="text-gray-400">-</span>;
        return val;
      },
    },
    {
      accessorKey: "joiningDate",
      header: "Joining Date",
      cell: ({ row }) => {
        const val = row.original._createdAt;
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
      accessorKey: "active",
      header: "Status",
      cell: ({ row }) => {
        const isActive = row.original.active;
        return (
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${isActive
              ? "bg-emerald-50 text-emerald-700 border-emerald-200"
              : "bg-gray-50 text-gray-600 border-gray-200"
              }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-emerald-500" : "bg-gray-400"}`}
            />
            {isActive ? "Active" : "Inactive"}
          </span>
        );
      },
    },
    {
      id: "statusToggle",
      header: "Status Switch",
      cell: ({ row }) => {
        const isActive = row.original.active;
        const userId = row.original._id;
        return (
          <div className="flex items-center">
          <CustomSwitch
            size="sm"
            color="success"
            value={isActive}
            onChange={(checked) => {
              if (userId) {
                handleStatusToggle(userId, checked);
              }
            }}
          />
          </div>
        );
      },
    },
    {
      accessorKey: "actions",
      header: "Actions",
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
  ], [handleStatusToggle, handleView, handleEdit, handleDelete]);

  useEffect(() => {
    getUsers(filterValues);
  }, []);

  const debouncedSearch = useMemo(() =>
    debounce((filter: IUsersFilter, page: number, limit: number) => {
      getUsers(filter, page, limit);
    }, 400),
    []
  );

  useEffect(() => {
    return () => { debouncedSearch.cancel(); };
  }, []);

  const getUsers = async (filter: IUsersFilter, page: number = pagination.page, limit: number = pagination.limit) => {
    const params: any = {
      pageNo: page,
      limit: limit,
      sortKey: "_createdAt",
      sortOrder: "-1",
      needCount: true,
      searchTerm: filter?.search || "",
    };

    if (filter?.status && filter.status !== '') {
      params.active = filter.status === "true";
    }

    dispatch(handleTableLoader(true));
    await userService
      .getAllUsers(params)
      .then((response: any) => {
        if (response) {
          setTotalRecords(response?.total || 0);
          setUsersList(response?.records || []);
        } else {
          setTotalRecords(0);
          setUsersList([]);
        }
      })
      .catch((error: Error) => console.log(error?.message))
      .finally(() => dispatch(handleTableLoader(false)));
  };

  const handlePageChange = useCallback((newPagination: { page: number; limit: number }) => {
    if (pagination.page !== newPagination.page || pagination.limit !== newPagination.limit) {
      setPagination(newPagination);
      getUsers(filterValues, newPagination.page, newPagination.limit);
    }
  }, [pagination, filterValues]);

  const handleAddUserSubmit = useCallback(() => {
    getUsers(filterValues, pagination.page, pagination.limit);
    setOpenDialog(false);
  }, [filterValues, pagination]);

  const handleAdd = useCallback(() => {
    setUser(null);
    handleDialogOpen();
  }, [handleDialogOpen]);

  const handleDeleteConfirm = useCallback(() => {
    handleConfirmDialogCloseForDelete();
  }, [handleConfirmDialogCloseForDelete]);

  return (
    <section>
      <div className="flex justify-between items-center">
        <p className="text-2xl">Users</p>
        <CustomButton size="lg" onClick={handleAdd}>
          Add User
        </CustomButton>
      </div>

      <Formik
        initialValues={initialFilter}
        onSubmit={(data: IUsersFilter) => {
          setPagination(prev => ({ ...prev, page: 1 }));
          setFilterValues(data);
          getUsers(data, 1, pagination.limit);
        }}
        enableReinitialize
        onReset={() => {
          setPagination(prev => ({ ...prev, page: 1 }));
          setFilterValues(initialFilter);
          getUsers(initialFilter, 1, pagination.limit);
        }}
      >
        {(props) => {
          const { handleSubmit, setFieldValue } = props;
          return (
            <Form onSubmit={handleSubmit} noValidate className='my-5'>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Field
                  name="search"
                  placeholder="Search by name"
                  component={CustomInput}
                  startIcon={
                    <img src={SearchIcon} alt="Search" className="w-4 h-4" />
                  }
                  onChange={(e: any) => {
                    const value = e?.target ? e.target.value : e;
                    setFieldValue('search', value);
                    const newFilter = { ...filterValues, search: value };
                    setFilterValues(newFilter);
                    setPagination(prev => ({ ...prev, page: 1 }));
                    debouncedSearch(newFilter, 1, pagination.limit);
                  }}
                />

                <Field
                  name="status"
                  placeholder="Select status"
                  component={CustomSelect}
                  options={[
                    { label: "Active", value: "true" },
                    { label: "Inactive", value: "false" }
                  ]}
                  isClearable={true}
                  onChange={(option: any) => {
                    const value = option ? option.value : '';
                    setFieldValue('status', value);
                    const newFilter = { ...filterValues, status: value };
                    setFilterValues(newFilter);
                    setPagination(prev => ({ ...prev, page: 1 }));
                    getUsers(newFilter, 1, pagination.limit);
                  }}
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
        manualPagination
        pagination={pagination}
        onPaginationChange={handlePageChange}
        enableCheckbox
        enableSorting
        defaultSortKey="firstName"
        defaultSortOrder="desc"
        totalCount={totalRecords}
      />

      <CustomModal
        openDialog={openDialog}
        handleDialogClose={handleDialogClose}
        title="Add New User"
        size="lg"
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
        message={`Are you sure you want to delete ${user?.firstName} ${user?.lastName} ?`}
        handleSuccess={handleDeleteConfirm}
      />
    </section>
  );
};

export default Users;
