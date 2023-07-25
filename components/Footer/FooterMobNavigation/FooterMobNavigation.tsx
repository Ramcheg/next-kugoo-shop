import HomeIcon from "@/public/Home.svg";
import SearchIcon from "@/public/Search.svg";
import ShopingIcon from "@/public/Shopping.svg";
import HeartIcon from "@/public/Heart.svg";
import CompareIcon from "@/public/Compare.svg";
import { IFooterMobNavigation } from "./FooterMobNavigationTypes";

import "./FooterMobNavigationStyle.scss";

const footerMobNavigationArr: IFooterMobNavigation[] = [
    {
        name: "Главная",
        link: "",
        icon: <HomeIcon className="w-5 h-5" />,
    },
    {
        name: "Каталог",
        link: "catalog",
        icon: <SearchIcon className="w-5 h-5 " />,
    },
    {
        name: "Корзина",
        link: "busket",
        icon: <ShopingIcon className="w-5 h-5 " />,
    },
    {
        name: "Избранное",
        link: "favorites",
        icon: <HeartIcon className="w-5 h-5 " />,
    },
    {
        name: "Сравнить",
        link: "compare",
        icon: <CompareIcon className="w-5 h-5" />,
    },
];

export function FooterMobNavigation(): JSX.Element {
    const renderItem = footerMobNavigationArr.map(({ icon, link, name }) => {
        return (
            <li key={link} className={link ? `${link}-mob` : "home-mob"}>
                <a
                    href={`/${link}`}
                    className="flex flex-col items-center justify-center py-2"
                >
                    {icon}
                    <div className="text-gray-dark text-xs">{name}</div>
                </a>
            </li>
        );
    });

    return (
        <nav className="bg-gray-light">
            <ul className="flex justify-around">{renderItem}</ul>
        </nav>
    );
}
