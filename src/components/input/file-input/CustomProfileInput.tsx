import type { FieldProps } from "formik";
import { AnimatePresence, motion } from "framer-motion";
import React from 'react';
import { useDropzone } from 'react-dropzone';
import TrashIcon from "../../../assets/trash.svg";
import ProfileImage from "../../../assets/profilepicture-logo.jpg";
import CloseIcon from "../../../assets/ic-close-white.svg";
import "./index.css";

interface CustomProfileInputProps extends FieldProps {
    preview?: string | File | any;
    label?: string;
    disabled?: boolean;
    onChange?: (value: any) => void;
    isPreviewOn?: boolean;
}

const CustomProfileInput: React.FC<CustomProfileInputProps> = ({
    field: { ...fields },
    form: { touched, errors, setFieldValue },
    ...props
}) => {
    const { onChange, preview, disabled, label, isPreviewOn } = props;
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: (acceptedFiles) => onChange && onChange(acceptedFiles[0])
    });

    const [previewUrl, setPreviewUrl] = React.useState<string>('');
    const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

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

    const handleClear = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (onChange) {
            onChange(null);
        } else if (setFieldValue) {
            setFieldValue(fields.name, null);
        }
    };

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
                    <div className="relative w-36 h-36">
                        <div 
                            {...(isPreviewOn ? { onClick: () => setIsModalOpen(true) } : getRootProps())} 
                            className="w-36 h-36 border rounded-[50%] cursor-pointer overflow-hidden form-upload-img"
                        >
                            <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" style={{ objectFit: 'cover' }} />
                        </div>
                        {!disabled && (
                            <div
                                onClick={handleClear}
                                className="absolute top-1 right-1 z-50 bg-white/95 hover:bg-red-500 border border-neutral-200/80 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 shadow-md group/btn"
                                title="Remove File"
                            >
                                <img src={TrashIcon} alt="clear" className="w-4 h-4 transition-all duration-200 group-hover/btn:brightness-0 group-hover/btn:invert" />
                            </div>
                        )}
                    </div>
                </div>
            )}
            {label && <div className='w-full text-center mt-2'><label className='text-sm font-medium text-gray-700' htmlFor='label'>{label}</label></div>}
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

            {/* Full Preview Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsModalOpen(false)}
                        className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 cursor-zoom-out"
                    >
                        {/* Close button */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsModalOpen(false);
                            }}
                            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors text-white duration-200 focus:outline-none"
                            title="Close"
                        >
                            <img src={CloseIcon} alt="Close" className="w-6 h-6" />
                        </button>

                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="max-w-4xl max-h-[85vh] w-full h-full flex items-center justify-center"
                        >
                            <img
                                src={previewUrl}
                                alt="Full Preview"
                                className="max-w-full max-h-full rounded-lg shadow-2xl object-contain bg-neutral-900"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CustomProfileInput;
