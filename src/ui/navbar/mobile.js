"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { TfiClose } from "react-icons/tfi";
import MobileMenu from "./menu/mobile";

const MobileNavbar = () => {
  const [mobileToggle, setMobileToggle] = useState(false);

  const toggleCallback = () => setMobileToggle(false);

  return (
    <>
      <div className="lg:hidden">
        <button
          onClick={() => setMobileToggle((prev) => !prev)}
          className="bg-violet-100 text-violet-500 text-2xl p-2 rounded-lg"
        >
          <CgMenuGridO />
        </button>
      </div>
      <Transition.Root show={mobileToggle} as={Fragment}>
        <Dialog as="div" className="relative" onClose={setMobileToggle}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity z-[5]" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-hidden z-[10]">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex  pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative h-screen w-screen max-w-[24rem] bg-white">
                    <div className="flex justify-between w-full pr-2 pt-4 sm:pr-2">
                      <div className="font-bakh font-bold mr-[20px]">
                        دنبال چه میگردی ؟
                      </div>
                      <button
                        type="button"
                        className="relative border-0 bg-transparent focus:outline-none ml-4"
                        onClick={() => setMobileToggle(false)}
                      >
                        <TfiClose />
                      </button>
                    </div>
                    <hr className="border-dashed my-3" />
                    <MobileMenu callback={toggleCallback} />
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default MobileNavbar;
