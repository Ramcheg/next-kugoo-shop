import { H } from "@/components";
import { IFooterNavCatalog } from "./FooterNavCatalogTypes";

const catalogItems: IFooterNavCatalog[] = [
    {
        name: "Электросамокаты",
        link: "electric-samokat",
    },
    {
        name: "Электроскутеры",
        link: "electric-scooters",
    },
    {
        name: "Электровелосипеды",
        link: "electric-bikes",
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
                                <a
                                    className="transition-all duration-100 hover:text-lavander-light"
                                    href={`/${link}`}
                                >
                                    {name}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
}
