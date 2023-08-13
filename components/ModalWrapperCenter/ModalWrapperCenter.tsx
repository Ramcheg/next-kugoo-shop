"use client";

import { motion, Variants } from "framer-motion";

import { ReactNode } from "react";

export function ModalWrapperCenter({
    children,
    openModal,
}: {
    children: ReactNode;
    openModal: boolean;
}): JSX.Element {
    const variantContain: Variants = {
        open: {
            opacity: 1,
            zIndex: 40,
            transition: {
                duration: 0.3,
                when: "beforeChildren",
                staggerChildren: 0.1,
            },
        },
        hidden: {
            opacity: 0,
            zIndex: -20,
        },
    };

    const variantChildren: Variants = {
        open: {
            scale: 1,
            opacity: 1,
        },
        hidden: {
            scale: 0,
            opacity: 0,
        },
    };

    return (
        <motion.div
            variants={variantContain}
            initial={"hidden"}
            animate={openModal ? "open" : "hidden"}
            className="fixed bg-white/50 h-full w-full top-0 left-0 flex items-center justify-center"
        >
            <motion.div
                variants={variantChildren}
                className="relative  z-50  bg-white rounded-md w-full md:w-1/2  mt-10 md:mt-0"
            >
                {children}
            </motion.div>
        </motion.div>
    );
}
