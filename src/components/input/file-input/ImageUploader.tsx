import type { FieldProps } from 'formik';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import DeleteIcon from "../../../assets/trash.svg";
import CloseIcon from "../../../assets/ic-close-white.svg";
import PdfPreview from './PdfPreview';
import "./index.css";

export interface Image {
    _id: string;
    url: File | string;
}

interface ImageUploaderProps extends Partial<FieldProps> {
    imageArray?: Image[];
    images?: Image[];
    setImages?: (images: Image[]) => void;
    deleteImages?: Image[];
    setDeleteImages?: (deleteImages: Image[]) => void;
    deleteName?: string;
    label?: string;
    isPreviewOn?: boolean;
}

const ImagePreviewItem: React.FC<{
    image: Image;
    onDelete: () => void;
    isPreviewOn?: boolean;
}> = ({ image, onDelete, isPreviewOn }) => {
    const [previewUrl, setPreviewUrl] = React.useState<string>('');
    const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (image.url instanceof File) {
            const url = URL.createObjectURL(image.url);
            setPreviewUrl(url);
            return () => {
                URL.revokeObjectURL(url);
            };
        } else if (typeof image.url === 'string') {
            setPreviewUrl(image.url);
        }
    }, [image.url]);

    const isPdf = image.url &&
        (image.url instanceof File
            ? image.url.type === 'application/pdf'
            : typeof image.url === 'string' && image.url.toLowerCase().includes('.pdf'));

    const isImage = image.url &&
        (image.url instanceof File
            ? image.url.type?.startsWith('image/')
            : typeof image.url === 'string' && (
                image.url.toLowerCase().endsWith('.jpg') ||
                image.url.toLowerCase().endsWith('.jpeg') ||
                image.url.toLowerCase().endsWith('.png') ||
                image.url.toLowerCase().endsWith('.webp') ||
                image.url.toLowerCase().endsWith('.gif')
            ));

    const isVideo = image.url &&
        (image.url instanceof File
            ? image.url.type?.startsWith('video/')
            : typeof image.url === 'string' && (
                image.url.toLowerCase().endsWith('.mp4') ||
                image.url.toLowerCase().endsWith('.webm') ||
                image.url.toLowerCase().endsWith('.ogg') ||
                image.url.toLowerCase().includes('video')
            ));

    const handleCardClick = () => {
        if (isPdf) {
            window.open(previewUrl || (image.url as string), '_blank');
        } else {
            setIsModalOpen(true);
        }
    };

    return (
        <div className="relative w-[200px] h-[200px]">
            <div
                {...(isPreviewOn ? { onClick: handleCardClick } : {})}
                className={`border rounded-lg relative w-[200px] h-[200px] overflow-hidden group ${isPreviewOn ? 'cursor-pointer' : ''} ${isPdf ? 'form-upload-pdf' : 'form-upload-img'}`}
            >
                <div className="w-full h-full overflow-hidden rounded-lg">
                    {isPdf ? (
                        <PdfPreview file={image.url} />
                    ) : isVideo ? (
                        <video src={previewUrl} className="w-full h-full object-contain bg-black" preload="auto" autoPlay loop muted playsInline />
                    ) : isImage && previewUrl ? (
                        <img src={previewUrl} alt={`Images ${image?._id}`} className='w-full h-full object-contain' />
                    ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-800 text-gray-400">
                            <svg className="w-10 h-10 mb-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-xs font-semibold uppercase">
                                {image.url instanceof File ? image.url.name.split('.').pop() : 'FILE'}
                            </span>
                        </div>
                    )}
                </div>
            </div>

            <div
                onClick={(e) => {
                    e.stopPropagation();
                    onDelete();
                }}
                className="absolute -top-3 -right-3 z-50 bg-white/95 hover:bg-red-500 border border-neutral-200/80 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 shadow-md group/btn cursor-pointer"
                title="Remove File"
            >
                <img src={DeleteIcon} alt="clear" className="w-3.5 h-3.5 transition-all duration-200 group-hover/btn:brightness-0 group-hover/btn:invert" />
            </div>

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
                )}
            </AnimatePresence>
        </div>
    );
};

const ImageUploader: React.FC<ImageUploaderProps> = ({
    field,
    form,
    imageArray,
    images: manualImages,
    setImages: manualSetImages,
    deleteImages: manualDeleteImages,
    setDeleteImages: manualSetDeleteImages,
    deleteName = 'imageToDelete',
    label,
    isPreviewOn,
}) => {
    const isFormik = Boolean(field && form);

    const images = (isFormik && field) ? (field.value || []) : (manualImages || []);
    const deleteImages = (isFormik && form) ? (form.values[deleteName] || []) : (manualDeleteImages || []);

    useEffect(() => {
        if (imageArray && imageArray.length > 0) {
            if (isFormik && form && field) {
                if (!field.value || field.value.length === 0) {
                    form.setFieldValue(field.name, imageArray);
                }
            } else if (manualSetImages) {
                const isDifferent = imageArray.length !== (manualImages?.length || 0) ||
                    imageArray.some((img, idx) => img._id !== manualImages?.[idx]?._id || img.url !== manualImages?.[idx]?.url);

                if (isDifferent) {
                    manualSetImages(imageArray);
                }
            }
        }
    }, [imageArray, isFormik, field?.name]);

    const onDrop = (acceptedFiles: File[]) => {
        const filteredFiles = acceptedFiles.filter((file) =>
            file.type.startsWith('image/') ||
            file.type.startsWith('video/') ||
            file.type === 'application/pdf'
        );

        const newImages: Image[] = filteredFiles.map((file, index) => ({
            _id: (images.length + index + 1).toString(),
            url: file,
        }));

        const updated = [...images, ...newImages];
        if (isFormik && form && field) {
            form.setFieldValue(field.name, updated);
            form.setFieldTouched(field.name, true, false);
        } else if (manualSetImages) {
            manualSetImages(updated);
        }
    };

    const handleImageDelete = (deleteImage: Image) => {
        const updated = images.filter((img: Image) => img._id !== deleteImage._id);

        if (typeof deleteImage?.url === 'string') {
            const updatedDeleted = [...deleteImages, deleteImage];
            if (isFormik && form) {
                form.setFieldValue(deleteName, updatedDeleted);
            } else if (manualSetDeleteImages) {
                manualSetDeleteImages(updatedDeleted);
            }
        }

        if (isFormik && form && field) {
            form.setFieldValue(field.name, updated);
            form.setFieldTouched(field.name, true, false);
        } else if (manualSetImages) {
            manualSetImages(updated);
        }
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: {
            'image/jpeg': ['.jpeg', '.jpg'],
            'image/png': ['.png'],
            'image/webp': ['.webp'],
            'image/jpg': ['.jpg'],
            'application/pdf': ['.pdf'],
            'video/mp4': ['.mp4'],
            'video/webm': ['.webm'],
            'video/ogg': ['.ogg'],
            'video/quicktime': ['.mov']
        }
    });

    const hasError = Boolean(isFormik && form && field && form.touched[field.name] && form.errors[field.name]);

    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {label}
                </label>
            )}
            <div className='flex mt-2 gap-6 flex-wrap'>
                {images?.map((image: Image, index: number) => {
                    const isDeleted = deleteImages.some(
                        (delImg: Image) => delImg._id === image._id && delImg.url === image.url
                    );
                    if (!isDeleted) {
                        return (
                            <ImagePreviewItem
                                key={index}
                                image={image}
                                onDelete={() => handleImageDelete(image)}
                                isPreviewOn={isPreviewOn}
                            />
                        );
                    } else return null;
                })}
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <label className={`w-[200px] h-[200px] flex flex-col items-center justify-center px-4 bg-white rounded-lg tracking-wide uppercase border cursor-pointer ${hasError ? "error-red-border border-danger" : ""}`}>
                        <svg
                            className="w-8 h-8"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                        </svg>
                        <span className="mt-2 text-xs font-semibold text-gray-500">Select or drag a file</span>
                    </label>
                </div>
            </div>

            {/* Error */}
            <AnimatePresence>
                {hasError && form && field && (
                    <motion.p
                        key="error"
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.15 }}
                        className={`mt-1.5 text-sm text-red-500`}
                    >
                        {form.errors[field.name] as string}
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ImageUploader;