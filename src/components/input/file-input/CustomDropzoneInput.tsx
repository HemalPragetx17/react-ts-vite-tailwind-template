import type { FieldProps } from 'formik';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { createPortal } from 'react-dom';
import { useDropzone } from 'react-dropzone';
import TrashIcon from "../../../assets/trash.svg";
import CloseIcon from "../../../assets/ic-close-white.svg";
import "./index.css";
import PdfPreview from './PdfPreview';

interface CustomDropzoneInputProps extends FieldProps {
    preview?: string | File | any;
    label?: string;
    disabled?: boolean;
    onChange?: (value: any) => void;
    isPreviewOn?: boolean;
}

const CustomDropzoneInput: React.FC<CustomDropzoneInputProps> = ({
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
        const url = URL.createObjectURL(preview);
        setPreviewUrl(url);
        return () => {
            URL.revokeObjectURL(url);
        };
    }, [preview]);

    const handleClear = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (onChange) {
            onChange(null);
        } else if (setFieldValue) {
            setFieldValue(fields.name, null);
        }
    };

    const handleCardClick = () => {
        if (isPdf) {
            window.open(previewUrl || preview, '_blank');
        } else {
            setIsModalOpen(true);
        }
    };

    const error = Boolean((touched[fields.name] || fields.value) && errors[fields.name]);

    const isPdf = preview &&
        (preview.type === 'application/pdf' ||
            (typeof preview === 'string' && preview.toLowerCase().includes('.pdf')));

    const isImage = preview &&
        (preview.type?.startsWith('image/') ||
            (typeof preview === 'string' && (
                preview.toLowerCase().endsWith('.jpg') ||
                preview.toLowerCase().endsWith('.jpeg') ||
                preview.toLowerCase().endsWith('.png') ||
                preview.toLowerCase().endsWith('.webp') ||
                preview.toLowerCase().endsWith('.gif')
            )));

    const isVideo = preview &&
        (preview.type?.startsWith('video/') ||
            (typeof preview === 'string' && (
                preview.toLowerCase().endsWith('.mp4') ||
                preview.toLowerCase().endsWith('.webm') ||
                preview.toLowerCase().endsWith('.ogg') ||
                preview.toLowerCase().includes('video')
            )));

    const isSupported = Boolean(isPdf || isImage || isVideo);

    return (
        <div>
            {label && <label className="block text-sm font-medium mb-1" htmlFor='label'>{label}</label>}
            {!previewUrl || !isSupported ? (
                <div {...getRootProps()} className="w-[200px]">
                    <label className={`flex flex-col items-center justify-center mt-2 p-4 bg-white w-[200px] h-[200px] rounded-lg tracking-wide uppercase border cursor-pointer ${error ? "error-red-border" : ""}`}>
                        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                        </svg>
                        <span className="mt-2 text-xs font-semibold text-gray-500">Select or drag a file</span>
                    </label>
                </div>
            ) : (
                <div className='relative w-[200px] h-[200px]'>
                    <div
                        {...(isPreviewOn ? { onClick: handleCardClick } : getRootProps())}
                        className={`border rounded-lg relative w-[200px] h-[200px] cursor-pointer group ${isPdf ? 'form-upload-pdf' : 'form-upload-img'} `}
                    >
                        <div className="w-full h-full overflow-hidden rounded-lg">
                            {isPdf ? (
                                <PdfPreview file={preview} />
                            ) : isVideo ? (
                                <video src={previewUrl} className="w-full h-full object-contain bg-black" preload="auto" autoPlay loop muted playsInline />
                            ) : (
                                <img src={previewUrl} alt="Preview" className="w-full h-full object-contain" />
                            )}
                        </div>
                    </div>
                    {!disabled && (
                        <div
                            onClick={handleClear}
                            className="absolute -top-4 -right-4 z-50 bg-white/95 hover:bg-red-500 border border-neutral-200/80 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 shadow-md group/btn"
                            title="Remove File"
                        >
                            <img src={TrashIcon} alt="clear" className="w-4 h-4 transition-all duration-200 group-hover/btn:brightness-0 group-hover/btn:invert" />
                        </div>
                    )}
                </div>
            )}
            <input id={label} {...getInputProps()} style={{ display: 'none' }} />

            {/* Error */}
            <AnimatePresence>
                {error && (
                    <motion.p
                        key="err"
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.15 }}
                        className={`mt-1.5 text-sm text-red-500`}
                    >
                        {errors[fields?.name] as string}
                    </motion.p>
                )}
            </AnimatePresence>

            {/* Full Preview Modal */}
            {isModalOpen && createPortal(
                <AnimatePresence mode="wait">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsModalOpen(false);
                        }}
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
                            {isVideo ? (
                                <video
                                    src={previewUrl}
                                    controls
                                    autoPlay
                                    className="max-w-full max-h-full rounded-lg shadow-2xl object-contain bg-black"
                                />
                            ) : isImage ? (
                                <img
                                    src={previewUrl}
                                    alt="Full Preview"
                                    className="max-w-full max-h-full rounded-lg shadow-2xl object-contain bg-neutral-900"
                                />
                            ) : null}
                        </motion.div>
                    </motion.div>
                </AnimatePresence>,
                document.body
            )}
        </div>
    );
};

export default CustomDropzoneInput;
