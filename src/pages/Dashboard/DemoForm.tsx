import { Field, Form, Formik } from "formik";
import React from "react";
import CustomButton from "../../components/button/CustomButton";
import { CustomCheckbox, CustomCheckboxGroup, CustomDatePicker, CustomInput, CustomPhoneNumberInput, CustomRadio, CustomSelect, CustomSwitch, CustomTextarea, CustomFileInput } from "../../components/input";
import type { IFormModal } from "../../models/dashboard";
import { FormValidationSchema } from "../../validation/dashboard";

interface DemoFormProps {
    user: IFormModal | null;
    onUserAdd: () => void;
    handleDialogClose: () => void;
}

const initialState: IFormModal = {
    name: "",
    email: "",
    joiningDate: "",
    age: null,
    gender: "Male",
    technologies: [] as string[],
    hobbies: [] as string[],
    role: "",
    status: true,
    agreeToTerms: false,
    bio: "",
    startDate: null,
    endDate: null,
    phone: "",
    phoneCountry: "",
    profilePic: "",
    image: "",
    images: [],
    imageToDelete: [],
};

const DemoForm: React.FC<DemoFormProps> = ({ user, onUserAdd, handleDialogClose }) => {
    const initialValues = React.useMemo(() => {
        return user ? { ...user, imageToDelete: user.imageToDelete || [] } : initialState;
    }, [user]);

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
        { label: "Django", value: "Django" },
        { label: "FastAPI", value: "FastAPI" },
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

    const handleSubmit = (value: IFormModal) => {
        console.log("🚀 ~ handleSubmit ~ value:", value)

        const { images: _, ...data } = {
            ...value,
            productImages: value.images?.filter((img) => typeof img.url !== 'string').map((img) => img?.url)
        };

        const formData = new FormData();

        // Append key-value pairs to the FormData object
        Object.entries(data).forEach(([key, value]) => {
            if (Array.isArray(value)) {
                // Handle arrays
                if (key === 'images' || key === 'productImages') {
                    (value as any[]).forEach((image) => {
                        if (image instanceof File) {
                            formData.append(`${key}`, image);
                        } else if (image && (image as any).name) {
                            const file = new File([image], (image as any).name); // Assuming 'image' is a File object
                            formData.append(`${key}`, file);
                        }
                    });
                } else {
                    formData.append(`${key}`, JSON.stringify(value));
                }
            } else if (typeof value === 'object' && value !== null) {
                // Handle nested objects
                if (key === 'image' || key === 'profilePic') {
                    if (value instanceof File) {
                        // If value is already a File, no need to create a new one
                        formData.append(`${key}`, value);
                    } else {
                        // Convert IProductCategoriesModel to Blob and then create a File
                        const blob = new Blob([JSON.stringify(value)], { type: 'application/json' });
                        const file = new File([blob], 'filename.json');
                        formData.append(`${key}`, file);
                    }
                } else {
                    Object.entries(value).forEach(([subKey, subValue]) => {
                        formData.append(`${key}[${subKey}]`, subValue as string);
                    });
                }
            } else {
                // Handle other types
                formData.append(key, value as string);
            }
        });

        onUserAdd();
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={FormValidationSchema}
            onSubmit={handleSubmit}
            validateOnBlur={false}
            validateOnChange={true}
            enableReinitialize={true}
        >
            {({ handleSubmit, values, setFieldValue }) => (
                <Form onSubmit={handleSubmit} className="space-y-4">
                    {/* Profile Pic */}
                    <Field
                        label="Profile Pic"
                        name="profilePic"
                        radius="full"
                        mode="profile"
                        component={CustomFileInput}
                    />

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

                        {/* Phone Number */}
                        <Field
                            country={'in'}
                            type="tel"
                            name='phone'
                            label="Phone Number"
                            inputProps={{
                                name: 'phone',
                                required: true,
                            }}
                            value={values?.phone}
                            onChange={(value: string, country: any) => {
                                setFieldValue('phoneCountry', `+${country.dialCode}`);
                                setFieldValue('phone', value);
                            }}
                            component={CustomPhoneNumberInput}
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

                    <Field
                        label="Image"
                        name="image"
                        size="sm"
                        mode="dropzone"
                        component={CustomFileInput}
                    />

                    <Field
                        name="images"
                        deleteName="imageToDelete"
                        imageArray={user?.images ?? []}
                        label="Images"
                        size="sm"
                        mode="multi"
                        component={CustomFileInput}
                    />

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
                        name="startDate"
                        endDateName="endDate"
                        label="Project Duration"
                        placeholder="Select date range"
                        selectsRange={true}
                        isClearable={true}
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

export default DemoForm;
