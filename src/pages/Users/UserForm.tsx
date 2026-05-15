import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import CustomInput from "../../components/input/CustomInput";
import CustomRadio from "../../components/input/CustomRadio";
import CustomCheckbox from "../../components/input/CustomCheckbox";
import CustomCheckboxGroup from "../../components/input/CustomCheckboxGroup";
import CustomSelect from "../../components/input/CustomSelect";
import CustomTextarea from "../../components/input/CustomTextarea";
import CustomSwitch from "../../components/input/CustomSwitch";
import CustomButton from "../../components/button/CustomButton";
import CustomDatePicker from "../../components/input/date-picker/CustomDatePicker";

export interface UserFormValues {
  agreeToTerms: boolean;
  name: string;
  email: string;
  joiningDate: string;
  age: string;
  gender: string;
  technologies: string[];
  role: string;
  status: boolean;
  bio?: string;
}

interface UserFormProps {
  onSubmit: (values: UserFormValues) => void;
  onCancel: () => void;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit, onCancel }) => {
  const initialValues: UserFormValues = {
    agreeToTerms: false,
    name: "",
    email: "",
    joiningDate: "",
    age: "",
    gender: "Male",
    technologies: [] as string[],
    role: "",
    status: true,
    bio: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    joiningDate: Yup.string().required("Joining date is required"),
    age: Yup.number()
      .typeError("Age must be a valid number")
      .positive("Age must be positive")
      .integer("Age must be an integer")
      .required("Age is required"),
    gender: Yup.string().required("Gender is required"),
    technologies: Yup.array()
      .min(1, "Please select at least one technology")
      .required("Technologies stack is required"),
    role: Yup.string().required("Role is required"),
    status: Yup.boolean().required("Status is required"),
    bio: Yup.string().max(300, "Bio must be at most 300 characters"),
  });

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

  const roleOptions = [
    { label: "Admin", value: "Admin" },
    { label: "User", value: "User" },
    { label: "Manager", value: "Manager" },
  ];

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
      validateOnBlur={false}
      validateOnChange={true}
      enableReinitialize={true}
    >
      {({ handleSubmit }) => (
        <Form id="user-form" onSubmit={handleSubmit} className="space-y-4">
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

          {/* Role (CustomSelect - single select) */}
          <Field
            name="role"
            label="Role"
            component={CustomSelect}
            options={roleOptions}
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
              <CustomButton type="button" variant="bordered" color="danger" onClick={onCancel}>
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
