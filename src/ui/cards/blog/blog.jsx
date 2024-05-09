"use client"

import { AnimatePresence, LayoutGroup } from "framer-motion";
import { useCallback, useState } from "react";
import { motion } from "framer-motion";

export default function Blog() {
    const [index, setIndex] = useState(false);

    const handleClose = useCallback(() => {
        setIndex(false);
    }, []);

    return (
        <LayoutGroup>
            <ul className="flex justify-between items-center mb-[10em]">
                {[0, 1, 2, 3].map((item) => (
                    <motion.li
                        className="flex items-center justify-between"
                        key={item}
                        layoutId={`${item}`}
                        onClick={() => index === false && setIndex(item)}
                        initial={{ borderRadius: "0.6rem" }}
                    >
                        <motion.div

                            layoutId={`placeholder-${item}`}
                        >
                            <div>salam</div>
                        </motion.div>
                    </motion.li>
                ))}
            </ul>
            <AnimatePresence>
                {index !== false && (
                    <>
                        <motion.div key="modal" className="flex justify-center w-full">
                            <motion.div
                                className="fixed w-[40rem] mt-[10rem] bg-white top-0 mx-auto z-[1000]"
                                layoutId={`${index}`}
                                initial={{ borderRadius: "1.2rem" }}
                            >
                                <motion.div
                                    layoutId={`placeholder-${index}`}
                                >
                                    <div>khodafez</div>
                                </motion.div>
                                <motion.div
                                    layoutId={`close-${index}`}
                                    onClick={handleClose}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    close
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </LayoutGroup>
    );
}