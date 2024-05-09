import { Dialog } from "@headlessui/react";

const Title = ({ className, children }) => {

    return (
        <>
            <Dialog.Title as="h3" className={className ? className : "text-lg font-bakh font-bold leading-6 text-gray-900"}>{children}</Dialog.Title>
            <hr className="my-3 border-dashed" />
        </>
    )

}

export default Title;