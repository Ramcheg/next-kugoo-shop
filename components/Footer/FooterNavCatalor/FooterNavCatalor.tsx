import { H } from "@/components";
import { IFooterNavCatalog } from "./FooterNavCatalogTypes";
import Link from "next/link";

const catalogItems: IFooterNavCatalog[] = [
    {
        name: "Электросамокаты",
        link: "catalog/electricSamokat",
    },
    {
        name: "Электроскутеры",
        link: "catalog/electricScooters",
    },
    {
        name: "Электровелосипеды",
        link: "catalog/electricBikes",
    },
];

export function FooterNavCatalor(): JSX.Element {
    return (
        <div>
            <H className="mb-3 w-auto lg:w-[12rem]" level={4}>
                Каталог товаров
            </H>
            <nav>
                <ul className=" text-gray-dark text-sm 2xl:text-base flex flex-col gap-2 ">
                    {catalogItems.map(({ link, name }) => {
                        return (
                            <li key={link}>
                                <Link
                                    className="transition-all duration-100 hover:text-lavander-light"
                                    href={`/${link}`}
                                >
                                    {name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
}
