import type { FieldProps } from "formik";
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

    const error = Boolean(touched[fields.name] && errors[fields.name]);

    const isImage = preview &&
        (preview.type === 'image/jpg' ||
            preview.type === 'image/jpeg' ||
            preview.type === 'image/png');

    return (
        <>
            <div className={`${error ? "error-red-border" : ""}`}>
                {!preview ? (
                    <div {...getRootProps()} className="flex justify-center">
                        <label className="flex flex-col items-center overflow-hidden bg-white w-36 h-36 rounded-[50%] tracking-wide uppercase border cursor-pointer ">
                            <img src={ProfileImage} alt="profile-logo" className='' />
                        </label>
                    </div>
                ) : (
                    <div className="flex justify-center">
                        <div className="w-36 h-36 border rounded-[50%] form-upload-img">
                            {isImage ? (
                                <>
                                    <img src={URL.createObjectURL(preview)} alt="Preview" />
                                    <div className='form-upload-pdf-icon'>
                                        <div className='flex gap-5'>
                                            {!disabled && <div  {...getRootProps()} className='bg-white w-[40px] h-[40px] rounded-full flex items-center justify-center hover:cursor-pointer hover:bg-primary-200'>
                                                <div className="w-[20px] h-[20px]">
                                                    <img src={EditIcon} alt="edit" />
                                                </div>
                                            </div>}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <img src={preview} {...getRootProps()} alt="Preview" />
                                    <div className='form-upload-pdf-icon'>
                                        <div className='flex gap-5'>
                                            {!disabled && <div  {...getRootProps()} className='bg-white w-[40px] h-[40px] rounded-full flex items-center justify-center hover:cursor-pointer hover:bg-primary-200'>
                                                <div className="w-[20px] h-[20px]">
                                                    <img src={EditIcon} alt="edit" />
                                                </div>
                                            </div>}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                )}
                {label && <div className='w-full text-center'><label className='ml-2.5' htmlFor='label'>{label}</label></div>}
                <input id={label} {...getInputProps()} style={{ display: 'none' }} />
                {error && <span className="text-sm text-danger ms-2">{errors[fields?.name] as string}</span>}
            </div>
        </>
    );
};

export default CustomProfileInput;
