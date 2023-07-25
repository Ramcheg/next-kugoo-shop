import { H } from "@/components/H/H";
import { IHomeCreditList } from "./HomeCreditListTypes";
import { ReactNode } from "react";

import GoogleIcon from "@/public/Google.svg";

const CreditListArr: IHomeCreditList[] = [
    { title: "Гарантия 1 год", subtitle: "на весь ассортимент" },
    { title: "рассрочка", subtitle: "от 6 месяцев" },
    { title: "Подарки", subtitle: "ни бонусам к покупкам " },
];

export function HomeCreditList(): JSX.Element {
    const renderCreditList: ReactNode = CreditListArr.map(
        ({ subtitle, title }, i) => {
            return (
                <div key={`${i + 1}-list`}>
                    <H level={3}>{title}</H>
                    <p className="text-base 2xl:text-xl">{subtitle}</p>
                </div>
            );
        }
    );

    return (
        <>
            {renderCreditList}
            <a href="https://google.com">
                <div className="flex items-center gap-3 pl-[.63rem] pr-[1.69rem] py-[.63rem] border border-solid border-gray-editible rounded-md hover:border-lavander transition-all delay-100">
                    <GoogleIcon className="w-14 2xl:w-16 h-14 2xl:h-16 rounded-md shadow-md  shadow-lavander-light" />
                    <div>
                        <div className="text-xs 2xl:text-sm text-gray-dark">
                            Google отзывы
                        </div>
                        <div className="flex items-center gap-2">
                            ⭐
                            <span className="text-2xl 2xl:text-3xl font-semibold uppercase">
                                4.9
                            </span>
                        </div>
                    </div>
                </div>
            </a>
        </>
    );
}
