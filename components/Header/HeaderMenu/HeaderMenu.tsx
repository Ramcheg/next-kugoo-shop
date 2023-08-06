"use client";
import { IHeaderMenuLinks } from "./HeaderMenuProps";
import "./HeaderMenu.scss";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import { useEffect, useState } from "react";
import classNames from "classnames";
import Link from "next/link";

const linkArr: IHeaderMenuLinks[] = [
    { id: "aboutShop", name: "О магазине" },
    { id: "shippingAndPayment", name: "Доставка и оплата" },
    {
        id: "testDrive",
        name: "Тест-драйв",
        additionalContent: "Доступна рассрочка",
    },
    { id: "blog", name: "Блог" },
    { id: "contacts", name: "Контакты" },
    { id: "shares", name: "Акции", additionalContent: "%" },
];

interface HeaderModalProps {
    onOpenModal?: () => void;
}

export function HeaderMenu({ onOpenModal }: HeaderModalProps): JSX.Element {
    const path = useSelectedLayoutSegment();

    useEffect(() => {
        return () => {
            if (onOpenModal) {
                onOpenModal();
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const renderItems = linkArr.map((link) => {
        const clazzLink: string = classNames(
            "transition-all delay-100 text-sm lg:text-base 2xl:text-lg font-bold font-medium hover:text-lavander-light  p-[.5rem] md:p-[0rem] md:m-[0rem]",
            {
                ["text-lavander"]: path === link.id,
            }
        );
        if ("additionalContent" in link) {
            return (
                <li key={link.id}>
                    <div className="flex flex-col md:flex-row gap-[.15rem] md:gap-[0.37rem] items-center ">
                        <Link
                            onClick={onOpenModal && undefined}
                            className={clazzLink}
                            href={`/${link.id}`}
                        >
                            {link.name}
                        </Link>
                        <div className="py-[0.1rem] lg:py-[0.2rem] md:mt-[0rem] mt-[-.5rem] px-[.2rem] md:px-[0.2rem] lg:px-[0.47rem] border border-solid border-lavander bg-lavander md:bg-transparent rounded-full text-white md:text-lavander text-[10px] lg:text-xs font-bold cursor-default select-none">
                            {link.additionalContent}
                        </div>
                    </div>
                </li>
            );
        }
        return (
            <li key={link.id}>
                <div>
                    <Link
                        className={clazzLink}
                        onClick={onOpenModal && undefined}
                        href={`/${link.id}`}
                    >
                        {link.name}
                    </Link>
                </div>
            </li>
        );
    });

    return (
        <div className="container mx-auto bg-white md:bg-transparent ">
            <ul className="flex md:h-auto flex-col md:flex-row justify-center md:justify-center gap-[1rem] md:gap-[2rem] lg:gap-[3.1rem] items-center  py-[0.62rem] ">
                {renderItems ? renderItems : ""}
            </ul>
        </div>
    );
}
