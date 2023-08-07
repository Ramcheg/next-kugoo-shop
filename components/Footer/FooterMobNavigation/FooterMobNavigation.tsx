"use client";
import HomeIcon from "@/public/Home.svg";
import SearchIcon from "@/public/Search.svg";
import ShopingIcon from "@/public/Shopping.svg";
import HeartIcon from "@/public/Heart.svg";
import CompareIcon from "@/public/Compare.svg";
import { IFooterMobNavigation } from "./FooterMobNavigationTypes";

import "./FooterMobNavigationStyle.scss";
import classNames from "classnames";
import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";

const footerMobNavigationArr: IFooterMobNavigation[] = [
    {
        name: "Главная",
        link: "",
        icon: <HomeIcon key={"homeSVG-1"} className="w-5 h-5" />,
    },
    {
        name: "Каталог",
        link: "catalog",
        icon: <SearchIcon key={"homeSVG-2"} className="w-5 h-5 " />,
    },
    {
        name: "Корзина",
        link: "basket",
        icon: <ShopingIcon key={"homeSVG-3"} className="w-5 h-5 " />,
    },
    {
        name: "Избранное",
        link: "favorites",
        icon: <HeartIcon key={"homeSVG-4"} className="w-5 h-5 " />,
    },
    {
        name: "Сравнить",
        link: "compare",
        icon: <CompareIcon key={"homeSVG-5"} className="w-5 h-5" />,
    },
];

export function FooterMobNavigation(): JSX.Element {
    const path = useSelectedLayoutSegment();
    const renderItem = footerMobNavigationArr.map(({ icon, link, name }) => {
        return (
            <li
                key={link}
                className={classNames({
                    [`${link}-mob`]: link,
                    ["home-mob"]: !link,
                    [`${link}-mob-active`]: path === link,
                    ["home-mob-active"]: path === null && link === "",
                })}
            >
                <Link
                    href={`/${link}`}
                    className="flex flex-col items-center justify-center py-2"
                >
                    {icon}
                    <div className="text-gray-dark text-xs">{name}</div>
                </Link>
            </li>
        );
    });

    return (
        <nav className="bg-gray-light">
            <ul className="flex justify-around">{renderItem}</ul>
        </nav>
    );
}
