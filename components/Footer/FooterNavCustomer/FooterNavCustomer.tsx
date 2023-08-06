import { H } from "@/components";
import { IFooterNavCustumer } from "./FooterNavCustomerTypes";
import { ReactNode } from "react";

const firstNavCustomerArr: IFooterNavCustumer[] = [
    { name: "Сервисный центр", link: "service" },
    { name: "Доставка и оплата", link: "shippingAndPayment" },
    { name: "О магазине", link: "aboutShop" },
    { name: "Тест-драйв", link: "testDrive" },
];

const secondNavCustomerArr: IFooterNavCustumer[] = [
    { name: "Блог", link: "blog" },
    { name: "Сотрудничество", link: "cooperation" },
    { name: "Контакты", link: "contacts" },
    { name: "Акции", link: "shares" },
];

export function FooterNavCustomer(): JSX.Element {
    function renderItems(arr: IFooterNavCustumer[]): ReactNode {
        const itemsRender = arr.map(({ link, name }) => {
            return (
                <li className="lg:w-[8rem]" key={link}>
                    <a
                        className="transition-all duration-100 hover:text-lavander-light"
                        href={`/${link}`}
                    >
                        {name}
                    </a>
                </li>
            );
        });

        return (
            <ul className="text-gray-dark text-sm 2xl:text-base flex flex-col gap-2">
                {itemsRender}
            </ul>
        );
    }

    const fistRenderItemGroup = renderItems(firstNavCustomerArr);
    const secondRenderItemGroup = renderItems(secondNavCustomerArr);

    return (
        <div>
            <H className="mb-3" level={4}>
                Покупателям
            </H>
            <nav className="flex gap-11 flex-col xl:flex-row">
                {fistRenderItemGroup}
                {secondRenderItemGroup}
            </nav>
        </div>
    );
}
