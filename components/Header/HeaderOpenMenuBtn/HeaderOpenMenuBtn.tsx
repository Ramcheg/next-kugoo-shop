"use client";

import { Button } from "@/components";
import { HeaderModalMenu } from "..";
import useOpenModal from "@/hooks/useOpenModal";
import { motion, Variants } from "framer-motion";

export function HeaderOpenMenuBtn(): JSX.Element {
    const { onOpenModal, openModal } = useOpenModal();

    const variant: Variants = {
        open: { opacity: 1, zIndex: 40 },
        hidden: { opacity: 0, zIndex: -1 },
    };

    return (
        <>
            <Button
                className={`gap-3 ${openModal ? "btn-active" : ""}`}
                color="lavander"
                size="menu"
                icon="menu"
                onClick={onOpenModal}
            >
                Каталог
            </Button>
            <motion.div
                variants={variant}
                initial={"hidden"}
                animate={openModal ? "open" : "hidden"}
            >
                <HeaderModalMenu />
            </motion.div>
        </>
    );
}
