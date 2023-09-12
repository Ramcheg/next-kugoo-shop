import { H } from "@/components";
import { FC } from "react";
import { CooperationOfferSlide } from "./CooperationOfferSlide";

export const CooperationOffer: FC = () => {
    return (
        <div className="container mx-auto">
            <div className="flex justify-between items-center">
                <H level={3} className="w-1/2">
                    Выбирайте популярные товары без наценок посредников
                </H>
                <div className="border border-solid border-gray-light rounded-lg px-4 py-3 w-[18rem]">
                    <div className="flex items-center gap-3">
                        <div className="text-lavander text-[3.1rem] font-semibold uppercase">
                            93%
                        </div>
                        <div className="text-xs">
                            партнеров становятся постоянными, благодаря нашему
                            подходу
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-xl">
                являясь официальным дилером Kugoo в Украине
            </div>
            <div className="flex gap-5 lg:gap-0 justify-center lg:justify-between flex-wrap">
                <div className="mt-4">
                    <div className="text-lg 2xl:text-xl font-medium">
                        Сотрудничая с нами, вы получите:
                    </div>
                    <ul className="list-image-triangle list-inside text-sm 2xl:text-base mt-4">
                        <li>
                            <span className="font-medium">
                                Гарантию на товары 1 месяц
                            </span>{" "}
                            и возможность приобрести годовую гарантию
                        </li>
                        <li>
                            <span className="font-medium">Медиаконтент,</span>{" "}
                            который можно разместить на своем сайте и соцсетях
                        </li>
                        <li>
                            <span className="font-medium">
                                Удобные способы оплаты —
                            </span>{" "}
                            наличный и безналичный расчет
                        </li>
                        <li>
                            <span className="font-medium">
                                Отсутствие демпинга
                            </span>{" "}
                            на рынке за счет контролируемой МРЦ
                        </li>
                    </ul>
                    <div className="flex gap-5 mt-10">
                        <div className="bg-gray-light rounded-lg w-[13rem] p-4 text-center">
                            <div className="text-lavander text-xs 2xl:text-base">
                                До{" "}
                                <span className="text-2xl 2xl:text-3xl">
                                    25%
                                </span>
                            </div>
                            <div className="text-xs 2xl:text-sm mt-2">
                                ваша прибыль с продажи единицы товара Kugoo
                            </div>
                        </div>
                        <div className="bg-gray-light rounded-lg w-[13rem] p-4 text-center">
                            <div className="text-lavander text-xs 2xl:text-base">
                                от{" "}
                                <span className="text-2xl 2xl:text-3xl">
                                    3 шт.
                                </span>
                            </div>
                            <div className="text-xs 2xl:text-sm mt-2">
                                минимальная оптовая партия
                            </div>
                        </div>
                    </div>
                </div>
                <CooperationOfferSlide />
            </div>
        </div>
    );
};
