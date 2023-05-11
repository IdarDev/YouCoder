import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface ModalProps {
  handleClickYes: () => void;
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  title?: string;
  description?: string;
  yesBtnText?: string;
  noBtnText?: string;
}

const Modal: React.FC<ModalProps> = ({
  handleClickYes = () => {},
  isModalOpen,
  setIsModalOpen,
  title,
  description,
  yesBtnText,
  noBtnText,
}) => {
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='z-[9999999]'>
      <Transition
        appear
        show={isModalOpen}
        as={React.Fragment}
      >
        <Dialog
          as='div'
          className='fixed inset-0 z-10 overflow-y-auto'
          onClose={closeModal}
        >
          <div className='min-h-screen px-4 text-center'>
            <Dialog.Overlay className='fixed inset-0 bg-black opacity-30' />
            <span
              className='inline-block h-screen align-middle'
              aria-hidden='true'
            >
              &#8203;
            </span>
            <Transition.Child
              as={React.Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <div className='inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-bg-pri shadow-[0px_0px_3px_1px_rgba(0,0,0)] rounded-2xl shadow-bg-sec'>
                <Dialog.Title
                  as='h3'
                  className='text-lg font-medium leading-6 text-white/95'
                >
                  {title}
                </Dialog.Title>
                <div className='mt-2'>
                  <p className='text-base text-white/95'>{description}</p>
                </div>
                <div className='mt-4'>
                  <button
                    type='button'
                    className='inline-flex justify-center px-4 py-2 text-sm font-medium border-red-500 text-white/80 bg-red-500/10 border rounded-md hover:bg-red-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white'
                    onClick={handleClickYes}
                  >
                    {yesBtnText}
                  </button>
                  <button
                    type='button'
                    className='ml-4 inline-flex justify-center px-4 py-2 text-sm font-medium text-white/70 border-white/70 border  rounded-md hover:bg-gray-200/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white'
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Modal;