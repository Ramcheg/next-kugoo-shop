"use client";

import { ButtonIcon } from "@/components";
import { HeaderBasketModal } from "..";
import cookie from "js-cookie";
import { Suspense, useEffect, useState } from "react";
import { Variants, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export function HeaderBuscketBtn(): JSX.Element {
    const [isCokie, setIsCokie] = useState<boolean>(false);
    const [openBusket, setOpenBusket] = useState<boolean>(false);
    const path = usePathname();

    useEffect(() => {
        setOpenBusket(false);
    }, [path]);

    useEffect(() => {
        setIsCokie(isCookieBusket());
        return () => {
            setOpenBusket(false);
        };
    }, []);
    const isCookieBusket = () => {
        const cok = cookie.get("busket");
        const decode = decodeURI(cok!);
        if (cok && decode.length > 0) {
            return true;
        } else {
            return false;
        }
    };

    const variant: Variants = {
        open: { opacity: 1, zIndex: 40 },
        hidden: { opacity: 0, zIndex: -1 },
    };
    return (
        <>
            <ButtonIcon
                onClick={() => setOpenBusket(!openBusket)}
                icon="shopping"
                colorIcon="lavander"
                iconFill={isCokie}
            >
                Корзина
            </ButtonIcon>
            <Suspense fallback={<p>Loading...</p>}>
                <motion.div
                    layout
                    variants={variant}
                    initial={"hidden"}
                    animate={openBusket ? "open" : "hidden"}
                >
                    <HeaderBasketModal />
                </motion.div>
            </Suspense>
        </>
    );
}
