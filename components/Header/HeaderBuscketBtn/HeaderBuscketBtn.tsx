"use client";

import { ButtonIcon } from "@/components";
import { HeaderBasketModal } from "..";
import { Suspense, useEffect, useState } from "react";
import { Variants, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { IBasketGoods } from "../HeaderBasketModal/HeaderBasketModalProps";
import { useAppSelector } from "@/store/store";

export function HeaderBuscketBtn(): JSX.Element {
    const [isLocalStor, setIsLocalStor] = useState<boolean>(false);
    const [openBusket, setOpenBusket] = useState<boolean>(false);
    const path = usePathname();
    const { basketArr } = useAppSelector((store) => store.productCard);

    useEffect(() => {
        setOpenBusket(false);
    }, [path]);

    useEffect(() => {
        setIsLocalStor(basketArr.length !== 0 ? true : false);
    }, [basketArr]);

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
                iconFill={isLocalStor}
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
