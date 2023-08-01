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
            y: -300,
            x: -400,
        },
    };

    return (
        <motion.div
            variants={variantContain}
            initial={"hidden"}
            animate={openModal ? "open" : "hidden"}
            className="fixed bg-white/50 h-full w-full top-0 left-0"
        >
            <motion.div
                variants={variantChildren}
                className="absolute z-50 left-[50%] -translate-x-1/2 top-1/2 -translate-y-1/2 bg-white rounded-md"
            >
                {children}
            </motion.div>
        </motion.div>
    );
}
