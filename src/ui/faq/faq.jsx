"use client";

import { Disclosure, Transition } from "@headlessui/react";
import { Fragment } from "react";

const Faqs = ({ data }) => {

    return (
        <>
            {
                data.map((faq, index) => (
                    <div key={index} className="my-4">
                        <Disclosure>
                            <Disclosure.Button className="p-4 bg-slate-100 w-full text-right rounded-xl text-gray-600 font-iran font-normal text-sm">
                                لورم یک سوال جدید طراحی کرده که است ؟
                            </Disclosure.Button>
                            <Transition
                                as={Fragment}
                                enter="ease-in-out duration-500"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in-out duration-500"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Disclosure.Panel className="text-gray-500 px-2 py-4 font-iran font-normal text-sm">
                                    اینم پاسخ سوال لورم که نفهمیدیم چی شود
                                </Disclosure.Panel>
                            </Transition>
                        </Disclosure>
                    </div>
                ))
            }
        </>
    )

}

export default Faqs;