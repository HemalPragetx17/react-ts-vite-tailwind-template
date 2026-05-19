import type { FieldProps } from 'formik';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useDropzone } from 'react-dropzone';
import DownloadIcon from "../../../assets/download-icon.svg";
import EditIcon from "../../../assets/edit-icon.svg";
import "./index.css";
import PdfPreview from './PdfPreview';

interface CustomDropzoneInputProps extends FieldProps {
    preview?: string | File | any;
    label?: string;
    disabled?: boolean;
    onChange?: (value: any) => void;
}

const CustomDropzoneInput: React.FC<CustomDropzoneInputProps> = ({
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
        const url = URL.createObjectURL(preview);
        setPreviewUrl(url);
        return () => {
            URL.revokeObjectURL(url);
        };
    }, [preview]);

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
            {label && <label htmlFor='label'>{label}</label>}
            {!previewUrl || !isSupported ? (
                <div {...getRootProps()}>
                    <label className={`flex flex-col items-center justify-center mt-2 px-4 py-[42px] bg-white w-full h-[180px] rounded-lg tracking-wide uppercase border cursor-pointer ${error ? "error-red-border" : ""}`}>
                        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                        </svg>
                        <span className="mt-2 text-base">Select a file</span>
                    </label>
                </div>
            ) : (
                <div className={`border rounded-lg w-full h-[200px] py-1 ${isPdf ? 'form-upload-pdf' : 'form-upload-img'} `}>
                    {isPdf ? (
                        <>
                            <PdfPreview file={preview} />

                            <div className='form-upload-pdf-icon'>
                                <div className='flex gap-5'>
                                    {!disabled && <div  {...getRootProps()} className='bg-white w-[40px] h-[40px] rounded-full flex items-center justify-center hover:cursor-pointer hover:bg-primary-200'>
                                        <div className="w-[20px] h-[20px]">
                                            <img src={EditIcon} alt="edit" />
                                        </div>
                                    </div>}
                                    <div className='bg-white w-[40px] h-[40px] rounded-full  items-center justify-center hover:cursor-pointer hover:bg-primary-200 flex'>
                                        <a target='_blank' href={preview} download rel="noreferrer">
                                            <div className="w-[20px] h-[20px]">
                                                <img src={DownloadIcon} alt="edit" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : isVideo ? (
                        <>
                            <video src={`${previewUrl}#t=0.1`} preload="metadata" className="w-full h-full object-contain" />
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
                    ) : isImage ? (
                        <>
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
                        </>
                    ) : (
                        <>
                            <img src={previewUrl} {...getRootProps()} alt="Preview" />
                            <div className="form-upload-pdf-icon">
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
        </div>
    );
};

export default CustomDropzoneInput;
