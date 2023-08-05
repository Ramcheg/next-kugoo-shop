"use client";
import { IHeaderMenuLinks } from "./HeaderMenuProps";
import "./HeaderMenu.scss";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import { useEffect, useState } from "react";
import classNames from "classnames";

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

export function HeaderMenu(): JSX.Element {
    const path = useSelectedLayoutSegment();

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
                        <a className={clazzLink} href={`/${link.id}`}>
                            {link.name}
                        </a>
                        <div className="py-[0.1rem] lg:py-[0.2rem] md:mt-[0rem] mt-[-.5rem] px-[.2rem] md:px-[0.2rem] lg:px-[0.47rem] border-custom-des rounded-full text-lavander text-[10px] lg:text-xs font-bold cursor-default select-none">
                            {link.additionalContent}
                        </div>
                    </div>
                </li>
            );
        }
        return (
            <li key={link.id}>
                <div>
                    <a className={clazzLink} href={`/${link.id}`}>
                        {link.name}
                    </a>
                </div>
            </li>
        );
    });

    return (
        <div className="container mx-auto bg-white md:bg-transparent">
            <ul className="flex flex-col md:flex-row justify-center gap-[1rem] md:gap-[2rem] lg:gap-[3.1rem] items-center  py-[0.62rem] ">
                {renderItems ? renderItems : ""}
            </ul>
        </div>
    );
}
