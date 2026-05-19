import type { FieldProps } from "formik";
import { AnimatePresence, motion } from "framer-motion";
import React from 'react';
import { useDropzone } from 'react-dropzone';
import EditIcon from "../../../assets/edit-icon.svg";
import ProfileImage from "../../../assets/profilepicture-logo.jpg";
import "./index.css";

interface CustomProfileInputProps extends FieldProps {
    preview?: string | File | any;
    label?: string;
    disabled?: boolean;
    onChange?: (value: any) => void;
}

const CustomProfileInput: React.FC<CustomProfileInputProps> = ({
    field: { ...fields },
    form: { touched, errors },
    ...props
}) => {
    const { onChange, preview, disabled, label } = props
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: (acceptedFiles) => onChange && onChange(acceptedFiles[0])
    });

    const [previewUrl, setPreviewUrl] = React.useState<string>('');

    React.useEffect(() => {
        if (!preview) {
            setPreviewUrl('');
            return;
        }
        if (typeof preview === 'string') {
            setPreviewUrl(preview);
            return;
        }
        if (preview instanceof File && preview.type?.startsWith('image/')) {
            const url = URL.createObjectURL(preview);
            setPreviewUrl(url);
            return () => {
                URL.revokeObjectURL(url);
            };
        }
        setPreviewUrl('');
    }, [preview]);

    const error = Boolean((touched[fields.name] || fields.value) && errors[fields.name]);

    return (
        <div>
            {!previewUrl ? (
                <div {...getRootProps()} className="flex justify-center">
                    <label className={`flex flex-col items-center overflow-hidden bg-white w-36 h-36 rounded-[50%] tracking-wide uppercase border cursor-pointer ${error ? "error-red-border" : ""}`}>
                        <img src={ProfileImage} alt="profile-logo" className='' />
                    </label>
                </div>
            ) : (
                <div className="flex justify-center">
                    <div className="w-36 h-36 border rounded-[50%] form-upload-img">
                        <img src={previewUrl} alt="Preview" />
                        <div className='form-upload-pdf-icon'>
                            <div className='flex gap-5'>
                                {!disabled && <div  {...getRootProps()} className='bg-white w-[40px] h-[40px] rounded-full flex items-center justify-center hover:cursor-pointer hover:bg-primary-200'>
                                    <div className="w-[20px] h-[20px]">
                                        <img src={EditIcon} alt="edit" />
                                    </div>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {label && <div className='w-full text-center'><label className='ml-2.5' htmlFor='label'>{label}</label></div>}
            <input id={label} {...getInputProps()} style={{ display: 'none' }} />

            {/* Error */}
            <AnimatePresence>
                {error && (
                    <motion.p
                        key="error"
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.15 }}
                        className={`mt-1.5 text-sm text-red-500 flex justify-center`}
                    >
                        {errors[fields?.name] as string}
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CustomProfileInput;
