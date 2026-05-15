import { Field, Form, Formik } from "formik";
import React from "react";
import CustomButton from "../../components/button/CustomButton";
import CustomCheckbox from "../../components/input/CustomCheckbox";
import CustomCheckboxGroup from "../../components/input/CustomCheckboxGroup";
import CustomInput from "../../components/input/CustomInput";
import CustomRadio from "../../components/input/CustomRadio";
import CustomSelect from "../../components/input/CustomSelect";
import CustomSwitch from "../../components/input/CustomSwitch";
import CustomTextarea from "../../components/input/CustomTextarea";
import CustomDatePicker from "../../components/input/date-picker/CustomDatePicker";
import type { IUserModal } from "../../models/user";
import { UserValidationSchema } from "../../validation/user";

interface UserFormProps {
  user: IUserModal
  onUserAdd: () => void;
  handleDialogClose: () => void;
}

const UserForm: React.FC<UserFormProps> = ({ user, onUserAdd, handleDialogClose }) => {
  const initialState: IUserModal = {
    name: "",
    email: "",
    dateRange: [null, null],
    joiningDate: "",
    age: 0,
    gender: "Male",
    technologies: [] as string[],
    hobbies: [] as string[],
    role: "",
    status: true,
    agreeToTerms: false,
    bio: "",
  };

  const getData = () => user ? user : initialState;

  const genderOptions = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    { label: "Other", value: "Other" },
  ];

  const technologyOptions = [
    { label: "React", value: "React" },
    { label: "Node.js", value: "Node.js" },
    { label: "TypeScript", value: "TypeScript" },
    { label: "Tailwind CSS", value: "Tailwind CSS" },
    { label: "Python", value: "Python" },
  ];

  const hobbiesOptions = [
    { label: "Reading", value: "Reading" },
    { label: "Coding", value: "Coding" },
    { label: "Gaming", value: "Gaming" },
    { label: "Sports", value: "Sports" },
    { label: "Music", value: "Music" },
  ];

  const roleOptions = [
    { label: "Admin", value: "Admin" },
    { label: "User", value: "User" },
    { label: "Manager", value: "Manager" },
  ];

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
          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Full Name */}
            <Field
              name="name"
              label="Full Name"
              placeholder="Enter full name"
              component={CustomInput}
            />

            {/* Email Address */}
            <Field
              name="email"
              type="email"
              label="Email Address"
              placeholder="Enter email address"
              component={CustomInput}
            />

            {/* Joining Date */}
            <Field
              name="joiningDate"
              label="Joining Date"
              placeholder="Select joining date"
              isClearable={true}
              component={CustomDatePicker}
            />

            {/* Age */}
            <Field
              name="age"
              type="number"
              label="Age"
              placeholder="Enter age"
              component={CustomInput}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Gender (CustomRadio) */}
            <Field
              name="gender"
              label="Gender"
              orientation="horizontal"
              component={CustomRadio}
              options={genderOptions}
            />

            {/* Status (CustomSwitch) */}
            <Field
              name="status"
              label="Account Status"
              component={CustomSwitch}
              size="lg"
              activeLabel="Active"
              inactiveLabel="Inactive"
            />
          </div>

          {/* Technologies Stack (CustomSelect - multi select) */}
          <Field
            name="technologies"
            label="Technologies Stack"
            component={CustomSelect}
            options={technologyOptions}
            isMulti
            isClearable
            showCheckbox
          />

          <Field
            name="hobbies"
            label="Hobbies"
            component={CustomCheckboxGroup}
            options={hobbiesOptions}
            orientation="horizontal"
          />

          {/* Role (CustomSelect - single select) */}
          <Field
            name="role"
            label="Role"
            component={CustomSelect}
            options={roleOptions}
          />

          <Field
            name="dateRange"
            label="Project Duration"
            placeholder="Select date range"
            selectsRange={true}
            component={CustomDatePicker}
          />

          {/* User Bio / Notes (CustomTextarea) */}
          <Field
            name="bio"
            label="User Bio / Notes (Optional)"
            placeholder="Enter short bio or background notes"
            isClearable={true}
            component={CustomTextarea}
            rows={3}
          />

          {/* Agree to Terms Checkbox */}
          <Field
            name="agreeToTerms"
            label="Agree to terms"
            component={CustomCheckbox}
          />

          {/* Footer Action Area */}
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
