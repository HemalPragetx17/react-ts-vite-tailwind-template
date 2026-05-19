import type { FieldProps } from 'formik';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import DeleteIcon from "../../../assets/trash.svg";
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
}

const ImagePreviewItem: React.FC<{
    image: Image;
    onDelete: () => void;
}> = ({ image, onDelete }) => {
    const [previewUrl, setPreviewUrl] = React.useState<string>('');

    React.useEffect(() => {
        if (image.url instanceof File) {
            if (image.url.type?.startsWith('image/')) {
                const url = URL.createObjectURL(image.url);
                setPreviewUrl(url);
                return () => URL.revokeObjectURL(url);
            }
        } else if (typeof image.url === 'string') {
            setPreviewUrl(image.url);
        }
    }, [image.url]);

    const isImageFile = image.url instanceof File && image.url.type?.startsWith('image/');
    const isImageUrl = typeof image.url === 'string';
    const isValidImage = isImageFile || isImageUrl;

    return (
        <div className="w-[150px] h-[150px] rounded-lg relative group before:content-[''] before:absolute before:top-full before:left-0 before:w-full before:h-full before:bg-black/50 before:z-[9999] before:transition-all before:duration-300 before:backdrop-blur-[2px] hover:before:top-0 overflow-hidden border">
            {isValidImage && previewUrl ? (
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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999] opacity-0 transition-all duration-400 group-hover:opacity-100">
                <div className='flex gap-5'>
                    <div
                        className='bg-white w-[40px] h-[40px] rounded-full flex items-center justify-center hover:cursor-pointer hover:bg-primary-200'
                        onClick={onDelete}
                    >
                        <div className="w-[20px] h-[20px]">
                            <img src={DeleteIcon} alt="delete" />
                        </div>
                    </div>
                </div>
            </div>
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
        const validTypes = ["image/jpeg", "image/png", "image/webp", "image/jpg"];
        const filteredFiles = acceptedFiles.filter((file) => validTypes.includes(file.type));

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
            'image/jpg': ['.jpg']
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
            <div className='flex mt-2 gap-2 flex-wrap'>
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
                            />
                        );
                    } else return null;
                })}
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <label className={`w-[150px] h-[150px] flex flex-col items-center px-4 py-[42px] bg-white rounded-lg tracking-wide uppercase border cursor-pointer ${hasError ? "error-red-border border-danger" : ""}`}>
                        <svg
                            className="w-8 h-8"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                        </svg>
                        <span className="mt-2 text-base">Select a file</span>
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