import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import CustomButton from '../button/CustomButton';

type ModalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | 'full';
type ModalBackdrop = 'transparent' | 'opaque' | 'blur';
type ModalScrollBehavior = 'inside' | 'outside';

interface CustomModalProps {
  openDialog: boolean;
  handleDialogClose: () => void;
  title?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: ModalSize;
  backdrop?: ModalBackdrop;
  scrollBehavior?: ModalScrollBehavior;
  isDraggable?: boolean;
  className?: string;
  closeButton?: boolean;
  primaryActionText?: string;
  secondaryActionText?: string;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
  primaryButtonForm?: string;
  primaryButtonColor?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'default';
  secondaryButtonColor?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'default';
  isDismissable?: boolean;
  isKeyboardDismissDisabled?: boolean;
}

const sizeClasses: Record<ModalSize, string> = {
  xs: 'max-w-xs',
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  '5xl': 'max-w-5xl',
  full: 'max-w-full m-0 h-full'
};

const CustomModal: React.FC<CustomModalProps> = ({
  openDialog,
  handleDialogClose,
  title,
  children,
  footer,
  size = 'md',
  backdrop = 'opaque',
  scrollBehavior = 'inside',
  isDraggable = false,
  className = '',
  closeButton = true,
  primaryActionText,
  secondaryActionText,
  onPrimaryAction,
  onSecondaryAction,
  primaryButtonForm,
  primaryButtonColor = 'primary',
  secondaryButtonColor = 'danger',
  isDismissable = false,
  isKeyboardDismissDisabled = true,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && openDialog && !isKeyboardDismissDisabled) {
        handleDialogClose();
      }
    };
    if (openDialog) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [openDialog, handleDialogClose, isKeyboardDismissDisabled]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isDraggable) return;
    // Only allow dragging from header
    const target = e.target as HTMLElement;
    if (!target.closest('.modal-header')) return;

    setIsDragging(true);
    dragStartPos.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y
    };
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    
    setPosition({
      x: e.clientX - dragStartPos.current.x,
      y: e.clientY - dragStartPos.current.y
    });
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  // Reset position when modal closes/opens
  useEffect(() => {
    if (!openDialog) {
      setPosition({ x: 0, y: 0 });
    }
  }, [openDialog]);

  if (!openDialog) return null;

  const backdropClasses = {
    transparent: 'bg-transparent',
    opaque: 'bg-black/50',
    blur: 'bg-black/30 backdrop-blur-md'
  };

  const renderFooter = () => {
    if (footer) return footer;
    if (!primaryActionText && !secondaryActionText) return null;

    return (
      <div className="flex justify-end gap-3 w-full">
        {secondaryActionText && (
          <CustomButton 
            variant="bordered" 
            color={secondaryButtonColor as any} 
            onClick={onSecondaryAction || handleDialogClose}
            type="button"
          >
            {secondaryActionText}
          </CustomButton>
        )}
        {primaryActionText && (
          <CustomButton 
            variant="solid" 
            color={primaryButtonColor as any} 
            onClick={onPrimaryAction}
            type='submit'
            form={primaryButtonForm}
          >
            {primaryActionText}
          </CustomButton>
        )}
      </div>
    );
  };

  const modalContent = (
    <div className="fixed inset-0 z-[9999] overflow-hidden flex items-center justify-center">
      {/* Backdrop - now inside the same container to handle clicks better */}
      <div 
        className={`fixed inset-0 transition-opacity duration-300 ${backdropClasses[backdrop]}`} 
        onClick={() => {
          if (isDismissable) handleDialogClose();
        }}
      />

      {/* Modal Container - captures scroll from anywhere */}
      <div 
        className={`fixed inset-0 flex justify-center p-4 transition-all duration-300 ${
          scrollBehavior === 'outside' ? 'overflow-y-auto items-start py-10 md:py-20' : 'overflow-hidden items-center'
        }`}
        onClick={(e) => {
          // Close if clicking outside the modal panel
          if (e.target === e.currentTarget && isDismissable) handleDialogClose();
        }}
      >
        <div 
          ref={modalRef}
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
            transition: isDragging ? 'none' : 'transform 0.2s ease-out'
          }}
          className={`
            relative w-full flex flex-col bg-white shadow-2xl pointer-events-auto
            ${size === 'full' ? 'rounded-none min-h-screen' : 'rounded-2xl'}
            ${sizeClasses[size]}
            ${scrollBehavior === 'inside' ? 'max-h-[calc(100vh-4rem)] md:max-h-[calc(100vh-8rem)]' : 'h-fit mb-8'}
            ${className}
          `}
          onMouseDown={handleMouseDown}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
        >
          {/* Close Button */}
          {closeButton && (
            <button 
              onClick={handleDialogClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors z-30"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}

          {/* Modal Header */}
          {title && (
            <div className={`modal-header px-6 py-4 border-b border-gray-100 shrink-0 ${isDraggable ? 'cursor-move select-none' : ''}`}>
              <h3 className="text-xl font-semibold text-gray-900 pr-8">
                {title}
              </h3>
            </div>
          )}

          {/* Modal Body */}
          <div className={`
            modal-body flex-1 px-6 py-4 min-h-0
            ${scrollBehavior === 'inside' ? 'overflow-y-auto' : ''}
          `}>
            {children}
          </div>

          {/* Modal Footer Slot */}
          {(footer || primaryActionText || secondaryActionText) && (
            <div className="modal-footer px-6 py-4 border-t border-gray-100 shrink-0 bg-white rounded-b-2xl">
              {renderFooter()}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default CustomModal;

