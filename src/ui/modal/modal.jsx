import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Body from "@/ui/modal/layouts/body";
import Title from "@/ui/modal/layouts/title";

const Modal = ({ show, onClose, animateDuration = 100, size, children }) => {

    return (
        <Transition appear show={show} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter={`ease-out duration-${animateDuration}`}
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave={`ease-in duration-${animateDuration}`}
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/50" />
                </Transition.Child>
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <Transition.Child
                            as={Fragment}
                            enter={`ease-out duration-${animateDuration}`}
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave={`ease-in duration-${animateDuration}`}
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className={`${size} transform overflow-[unset] rounded-2xl bg-white py-3 px-6 align-middle shadow-xl transition-all`}>
                                {children}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition >
    )

}

Modal.Title = Title;
Modal.Body = Body;

export default Modal;