import { BaseConfig } from "@/lib/config/base";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";

const ProductAvatar = ({ alt, avatar, alternative }) => {

    const [show, setShow] = useState(false);

    return (
        <div className="relative" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
            <Transition
                show={!show}
                enter="ease-in-out duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
            // leave="ease-in-out duration-500"
            // leaveFrom="opacity-100"
            // leaveTo="opacity-0"
            >
                <Image
                    loading="lazy"
                    className="rounded-2xl"
                    src={`${BaseConfig.baseUrl
                        }/media/images/products/${avatar.replace("*", "250")}`}
                    width={300}
                    height={300}
                    alt={alt}
                />
            </Transition>
            <Transition
                show={show}
                enter="ease-in-out duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
            // leave="ease-in-out duration-500"
            // leaveFrom="opacity-100"
            // leaveTo="opacity-0"
            >
                <Image
                    loading="lazy"
                    className="rounded-2xl"
                    src={`${BaseConfig.baseUrl
                        }/media/images/products/${alternative.replace(
                            "*",
                            "250"
                        )}`}
                    width={300}
                    height={300}
                    alt={alt}
                />
            </Transition>
        </div>
    )
}

export default ProductAvatar;