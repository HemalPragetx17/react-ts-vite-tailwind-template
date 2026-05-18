import { Field, Form, Formik } from "formik";
import React from "react";
import CustomButton from "../../components/button/CustomButton";
import CustomInput from "../../components/input/CustomInput";
import CustomSwitch from "../../components/input/CustomSwitch";
import type { IUserModal } from "../../models/user";
import { UserValidationSchema } from "../../validation/user";

interface UserFormProps {
  user: IUserModal | null;
  onUserAdd: () => void;
  handleDialogClose: () => void;
}

const UserForm: React.FC<UserFormProps> = ({ user, onUserAdd, handleDialogClose }) => {
  const initialState: IUserModal = {
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneCountry: "",
    phone: "",
    role: 3,
    active: true,
  };

  const getData = () => user ? user : initialState;

  const handleSubmit = (values: IUserModal) => {
    console.log("🚀 ~ handleSubmit ~ values:", values)
    onUserAdd();
  };

  return (
    <Formik
      initialValues={getData()}
      validationSchema={UserValidationSchema}
      onSubmit={handleSubmit}
      validateOnBlur={false}
      validateOnChange={true}
      enableReinitialize={true}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field
              name="firstName"
              label="First Name"
              placeholder="Enter first name"
              component={CustomInput}
            />
            <Field
              name="lastName"
              label="Last Name"
              placeholder="Enter last name"
              component={CustomInput}
            />
            <Field
              name="email"
              type="email"
              label="Email Address"
              placeholder="Enter email address"
              component={CustomInput}
            />
            {user?._id && (
              <Field
                name="active"
                label="Account Status"
                component={CustomSwitch}
                size="lg"
                activeLabel="Active"
                inactiveLabel="Inactive"
              />
            )}
          </div>

          <div className="mt-6 flex justify-end gap-3 pt-4 border-t border-gray-100">
            <CustomButton type="button" variant="bordered" color="danger" onClick={handleDialogClose}>
              Cancel
            </CustomButton>
            <CustomButton type="submit" variant="solid" color="primary">
              Add User
            </CustomButton>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
