import React from 'react';
import CustomModal from './CustomModal';
import CustomButton from '../button/CustomButton';

type ModalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | 'full';
type ModalBackdrop = 'transparent' | 'opaque' | 'blur';

interface CustomConfirmModalProps {
  title?: string;
  message: string;
  openDialog: boolean;
  handleDialogClose: () => void;
  handleSuccess: () => void;
  confirmText?: string;
  cancelText?: string;
  type?: 'danger' | 'warning' | 'info' | 'success';
  size?: ModalSize;
  backdrop?: ModalBackdrop;
}

const CustomConfirmModal: React.FC<CustomConfirmModalProps> = ({
  title = 'Confirmation',
  message,
  openDialog,
  handleDialogClose,
  handleSuccess,
  confirmText = 'Yes',
  cancelText = 'No',
  type = 'danger',
  size = 'md',
  backdrop = 'blur',
}) => {
  const getIcon = () => {
    switch (type) {
      case 'danger':
        return (
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
            <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
          </div>
        );
      case 'warning':
        return (
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
            <svg className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
          </div>
        );
      default:
        return (
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
            <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
          </div>
        );
    }
  };

  return (
    <CustomModal
      openDialog={openDialog}
      handleDialogClose={handleDialogClose}
      title={title}
      size={size}
      backdrop={backdrop}
    >
      <div className="p-2">
        <div className="text-center">
          {getIcon()}
          <div className="mt-4">
            <p className="text-sm text-gray-500">
              {message}
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <CustomButton
            variant="bordered"
            color="danger"
            onClick={handleDialogClose}
            className="w-full sm:w-32"
          >
            {cancelText}
          </CustomButton>
          <CustomButton
            variant="solid"
            color="primary"
            onClick={handleSuccess}
            className="w-full sm:w-32"
          >
            {confirmText}
          </CustomButton>
        </div>
      </div>
    </CustomModal>
  );
};

export default CustomConfirmModal;
