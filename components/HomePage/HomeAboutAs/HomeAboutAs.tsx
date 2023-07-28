import Image from "next/image";

import companyImg from "@/public/happyYoungCompany.png";
import { Button } from "@/components/Button/Button";
import { H } from "@/components";
import Link from "next/link";

export function HomeAboutAs(): JSX.Element {
    return (
        <div className="flex flex-col-reverse md:flex-row justify-between items-center">
            <div className="relative rounded-md overflow-hidden">
                <Image
                    src={companyImg}
                    alt="Happy Young Company"
                    width={606}
                    height={565}
                    className="pointer-events-none"
                />
                <div className="absolute bottom-5 right-10 rounded-lg bg-white/10 backdrop-blur-sm">
                    <div className="ml-5 mr-10 mt-4 pb-4">
                        <div className="text-lg 2xl:text-xl font-medium text-white">
                            Тест-драйв в Киеве
                        </div>
                        <div className="text-white text-sm 2xl:text-base">
                            Оцените все преимущества
                            <br /> самокатов лично
                        </div>
                    </div>
                    <Button
                        className="relative w-full text-left after:content-['-->'] after:absolute after:right-5"
                        color="lavander"
                        size="small"
                    >
                        Подробнее
                    </Button>
                </div>
            </div>
            <div className="w-1/2">
                <H level={2}>
                    Kugoo-Ukraine — первый официальный дилер Kugoo Kirin в
                    Украине
                </H>
                <div className="mt-4 text-base">
                    Наша цель предоставить полный ассортимент современной
                    продукции Kugoo Kirin, которая улучшает и упрощает жизнь.
                    Стремимся подарить комфорт и эмоции, поэтому помогаем с
                    выбором и внимательно относимся к сервисному обслуживанию.
                </div>
                <div className="bg-white rounded-lg py-5 px-7 mt-9">
                    <div className="text-sm 2xl:text-base font-medium  ml-[-14px]">
                        Специализируемся исключительно на бренде Kugoo, поэтому
                        вы получите:
                    </div>
                    <ul className="list-disc list-outside mt-2 list-image-triangle text-sm 2xl:text-base">
                        <li className="pl-2">
                            цены от завода-изготовителя Jilong ;
                        </li>
                        <li className="pl-2">
                            бесплатный тест-драйв самокатов;
                        </li>
                        <li className="pl-2">фирменную гарантию 1 год;</li>
                        <li className="pl-2">
                            ремонт и обслуживание от 1 дня в собственном
                            сервисном центре;
                        </li>
                        <li className="pl-2">
                            более 1 000 запчастей и аксессуаров в наличии
                        </li>
                    </ul>
                    <Link
                        className="block mt-2 ml-[-14px] text-xs 2xl:text-sm font-medium text-lavander  hover:text-black-editible transition-all delay-100"
                        href={"/"}
                    >
                        Смотреть сертификат
                    </Link>
                </div>
            </div>
        </div>
    );
}
