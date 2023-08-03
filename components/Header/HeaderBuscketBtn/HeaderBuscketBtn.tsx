"use client";

import { ButtonIcon } from "@/components";
import { HeaderBasketModal } from "..";
import cookie from "js-cookie";
import { Suspense, useEffect, useState } from "react";
import { IBasketGoods } from "../HeaderBasketModal/HeaderBasketModalProps";
import { Variants, motion } from "framer-motion";

export function HeaderBuscketBtn(): JSX.Element {
    const [isCokie, setIsCokie] = useState<boolean>(false);
    const [openBusket, setOpenBusket] = useState<boolean>(false);

    useEffect(() => {
        setIsCokie(isCookieBusket());
    }, []);
    const isCookieBusket = () => {
        const cok = cookie.get("busket");
        const decode = decodeURI(cok!);
        if (cok && decode) {
            return true;
        } else {
            return false;
        }
    };
    console.log(isCokie);

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
