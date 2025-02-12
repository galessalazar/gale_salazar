// 'use client'
import PropTypes from "prop-types";
import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

export default function Modal({ onContinue }) {
  // modal is the first to appear with useState set to true
  const [open, setOpen] = useState(true);

  const handleContinue = () => {
    // closes the modal
    setOpen(false);

    if (typeof onContinue === "function") {
      // once continue is clicked, the startTyping function begins

      onContinue();
    } else {
      console.error("something is aloof");
    }
  };

  if (!open) return null;

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="relative z-10"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-[90%] lg:max-w-xs xl:max-w-xs data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95  p-5"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-4 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle
                    as="h3"
                    className="text-base font-semibold text-gray-900"
                  >
                    Always Learning, Always Improving
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      This is only the beginning...
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={handleContinue}
                className="inline-flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 sm:ml-3 sm:w-auto"
              >
                Continue to portfolio...
              </button>
              <button
                type="button"
                data-autofocus
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Decline
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

Modal.propTypes = {
  onContinue: PropTypes.func.isRequired,
};
