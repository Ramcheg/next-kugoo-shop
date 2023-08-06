"use client";

import { BurgerMenu, HeaderFunctionalLinks } from "@/components";
import LogoItem from "@/public/Logo.svg";
import PhoneIcon from "@/public/Phone.svg";

import { HeaderMenu, HeaderSearch } from "..";
import { FooterChat } from "@/components/Footer/FooterChat/FooterChat";
import "./MonHeaderStyle.scss";
import Link from "next/link";
import useOpenModal from "@/hooks/useOpenModal";
import { Variants, motion } from "framer-motion";

export function MobHeader(): JSX.Element {
    const { onOpenModal, openModal } = useOpenModal();

    const variants: Variants = {
        hide: { opacity: 0, y: "-100%" },
        visible: {
            opacity: 1,
            y: 0,
            transition: { ease: "linear", duration: 0.3, y: { duration: 0.4 } },
        },
    };

    return (
        <div className="fixed z-50 w-full bg-white md:hidden">
            <div className="flex relative z-20 justify-between px-[.94rem]  pt-3">
                <Link href="/">
                    <LogoItem className="w-[4.3rem] h-[.875rem] my-3 mx-2" />
                </Link>
                <div className="flex gap-[.94rem] items-center">
                    <Link className=" my-3 mx-2" href="tel:+380953507692">
                        <PhoneIcon />
                    </Link>

                    <BurgerMenu
                        className={`burgerMenu-lavander my-3 mx-2 ${
                            openModal && "burgerMenu-active"
                        }`}
                        onClick={onOpenModal}
                    />
                </div>
            </div>
            <div className="px-[.94rem] mb-2">
                <HeaderSearch isMobSearch />
            </div>
            <motion.div
                variants={variants}
                initial={"hide"}
                animate={openModal ? "visible" : "hide"}
                className="w-full pt-8 sizeC bg-white fixed top-[3rem]  flex flex-col items-center justify-between"
            >
                <HeaderMenu onOpenModal={onOpenModal} />
                <div className="flex flex-col items-center mb-4">
                    <HeaderFunctionalLinks className="flex gap-5 mb-3" />
                    <FooterChat />
                </div>
            </motion.div>
        </div>
    );
}
