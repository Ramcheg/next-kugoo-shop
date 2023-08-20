import { H } from "@/components";
import Image from "next/image";
import { FC } from "react";
import ScuterDiagnosticImg from "@/public/ServicePage/battery-charging.png";

export const ServiceDiagnostic: FC = () => {
    return (
        <>
            <div className="container mx-auto">
                <H level={2} className="text-center w-3/4 mx-auto ">
                    Проведем диагностику и отремонтируем любую неисправность
                </H>

                <div className="flex justify-center  items-center mt-6 md:mt-16 gap-4 md:gap-10">
                    <div className="w-3/12">
                        <div className="text-right flex flex-col gap-5 md:gap-10">
                            <div>
                                <H level={4}>Ремонт от 1 дня</H>
                                <div className="text-sm 2xl:text-base mt-3">
                                    Устраним любую неисправность. Обычно делаем
                                    это за 1-3 дня, если ремонт сложный —
                                    предупредим заранее.
                                </div>
                            </div>
                            <div>
                                <H level={4}>
                                    Ремонтируем только то, что сломалось
                                </H>
                                <div className="text-sm 2xl:text-base mt-3">
                                    Не навязываем услуги, диагностируем и
                                    заранее обговариваем стоимость ремонта.
                                </div>
                            </div>
                            <div>
                                <H level={4}>Оригинальные запчасти</H>
                                <div className="text-sm 2xl:text-base mt-3">
                                    Благодаря прямой связи с производителем
                                    имеем в наличии все необходимые новые
                                    комплектующие для ремонта.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className=" rounded-full p-4 border-2 border-gray-light border-dashed">
                            <div className="bg-gray-light rounded-full p-4 ">
                                <div className="rounded-full overflow-hidden">
                                    <Image
                                        src={ScuterDiagnosticImg}
                                        alt="scooter"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" w-3/12 text-left flex flex-col justify-between gap-5 md:gap-10 ">
                        <div>
                            <H level={4}>гарантия</H>
                            <div className="text-sm 2xl:text-base mt-3">
                                14 дней на ремонт
                            </div>
                        </div>
                        <div>
                            <H level={4}>беслптный ремонт</H>
                            <div className="text-sm 2xl:text-base mt-3">
                                в течение 1 года после покупки
                            </div>
                        </div>
                        <div>
                            <H level={4}>расширенная гарантия</H>
                            <div className="text-sm 2xl:text-base mt-3">
                                до 36 месяцев
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
