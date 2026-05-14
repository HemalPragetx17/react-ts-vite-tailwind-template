import React, { useEffect } from 'react';

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  maxWidthClassName?: string;
}

const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  maxWidthClassName = "sm:max-w-lg",
}) => {
  // Close on Escape key pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed z-50 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-center justify-center min-h-screen p-4 text-center sm:p-0">
        {/* Background overlay */}
        <div 
          className="fixed inset-0 bg-black/30 transition-opacity backdrop-blur-sm cursor-pointer" 
          aria-hidden="true"
          onClick={onClose}
        ></div>

        {/* Modal panel */}
        <div className={`relative flex flex-col bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 ${maxWidthClassName} w-full max-h-[90vh]`}>
          {/* Close Button */}
          <div className="absolute top-4 right-4 z-20">
            <button 
              type="button" 
              onClick={onClose}
              className="bg-white rounded-md text-gray-400 hover:text-gray-500 outline-none focus:outline-none cursor-pointer"
            >
              <span className="sr-only">Close</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Modal Header */}
          {title && (
            <div className="px-6 pt-5 pb-4 border-b border-gray-200 shrink-0">
              <h3 className="text-lg leading-6 font-medium text-gray-900 pr-8" id="modal-title">
                {title}
              </h3>
            </div>
          )}

          {/* Modal Content Wrapper */}
          <div className="flex-1 overflow-hidden flex flex-col p-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
