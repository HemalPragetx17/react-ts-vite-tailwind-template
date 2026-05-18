import * as Yup from 'yup';

export const FormValidationSchema = () => {
    return Yup.object().shape({
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
}