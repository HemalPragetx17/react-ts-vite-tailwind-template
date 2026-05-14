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
        <Form onSubmit={handleSubmit} className="flex flex-col h-full overflow-hidden w-full mt-2">
          {/* Inner Scrollable Fields Container */}
          <div className="flex-1 overflow-y-auto pr-2 flex flex-col gap-4">
            {/* Full Name */}
            <div className="relative shrink-0">
              <Field
                name="name"
                label="Full Name"
                placeholder="Enter full name"
                component={CustomInput}
              />
            </div>

            {/* Email Address */}
            <div className="relative shrink-0">
              <Field
                name="email"
                type="email"
                label="Email Address"
                placeholder="Enter email address"
                component={CustomInput}
              />
            </div>

            {/* Joining Date */}
            <div className="relative shrink-0">
              <Field
                name="joiningDate"
                label="Joining Date"
                placeholder="Select joining date"
                isClearable={true}
                component={CustomDatePicker}
              />
            </div>

            {/* Age */}
            <div className="relative shrink-0">
              <Field
                name="age"
                type="number"
                label="Age"
                placeholder="Enter age"
                component={CustomInput}
              />
            </div>

            {/* Gender (CustomRadio) */}
            <div className="relative shrink-0">
              <Field
                name="gender"
                label="Gender"
                orientation="horizontal"
                component={CustomRadio}
                options={genderOptions}
              />
            </div>

            {/* Status (CustomSwitch) */}
            <div className="relative shrink-0">
              <Field
                name="status"
                label="Account Status"
                component={CustomSwitch}
                size="lg"
                activeLabel="Active"
                inactiveLabel="Inactive"
              />
            </div>

            {/* Technologies Stack (CustomCheckboxGroup) */}
            <div className="relative shrink-0">
              <Field
                name="technologies"
                label="Technologies Stack"
                orientation="horizontal"
                component={CustomCheckboxGroup}
                options={technologyOptions}
                color="primary"
              />
            </div>

            {/* Role (CustomSelect - single select) */}
            <div className="relative shrink-0">
              <Field
                name="role"
                label="Role"
                component={CustomSelect}
                options={roleOptions}
              />
            </div>

            {/* Technologies Stack (CustomSelect - multi select with options array) */}
            <div className="relative shrink-0">
              <Field
                name="technologies"
                label="Technologies Stack"
                component={CustomSelect}
                options={technologyOptions}
                isMulti
                isClearable
                showCheckbox
              />
            </div>

            {/* User Bio / Notes (CustomTextarea) */}
            <div className="relative shrink-0">
              <Field
                name="bio"
                label="User Bio / Notes (Optional)"
                placeholder="Enter short bio or background notes"
                isClearable={true}
                component={CustomTextarea}
                rows={3}
              />
            </div>
            
            {/* Agree to Terms Checkbox */}
            <div className="relative shrink-0">
              <Field
                name="agreeToTerms"
                label="Agree to terms"
                component={CustomCheckbox}
              />
            </div>
          </div>

          {/* Fixed Shrink-0 Footer Action Area */}
          <div className="mt-4 shrink-0 flex justify-end gap-3 pt-3 border-t border-gray-100 bg-white">
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
