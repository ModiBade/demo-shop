"use client"

import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";
import { FaAnglesUp } from "react-icons/fa6";

const ScrollToTop = () => {

    const [show, setShow] = useState(false);

    useEffect(() => {
        const doShow = () => {
            const currentY = window.scrollY;
            if (currentY > 200) {
                setShow(true);
            } else {
                setShow(false);
            }
        }

        window.addEventListener("scroll", doShow);

        return () => {
            window.removeEventListener("scroll", doShow);
        }
        //eslint-disable-next-line
    }, []);

    const goToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <Transition
            show={show}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <button onClick={goToTop} className="fixed bottom-5 left-10 z-[5] bg-violet-100 shadow-xl p-3 rounded-2xl animate-bounce">
                <FaAnglesUp className="text-gray-500" />
            </button>
        </Transition>
    )

}

export default ScrollToTop;