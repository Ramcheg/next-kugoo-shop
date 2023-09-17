import { H, PriceForm } from "@/components";
import { FC } from "react";

export const CooperationIndividual: FC = () => {
    return (
        <div className="containerBig bg-gray-light rounded-lg">
            <div className="container mx-auto">
                <div className="flex justify-center gap-4 md:gap-0 md:justify-between items-center flex-wrap py-12 ">
                    <div className="w-[97%] md:w-1/2">
                        <H level={2}>
                            Обсудите индивидуальное коммерческое предложение с
                            личным менеджером
                        </H>
                        <ul className="list-image-tic list-inside text-sm/7 mt-6">
                            <li>Ознакомитесь с актуальным каталогом;</li>
                            <li>
                                Узнаете, какие категории товаров пользуются
                                наибольшим спросом;
                            </li>
                            <li>
                                Получите доступ к выгодным ценам на закупку
                                оптом.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <PriceForm borderColor="none" />
                    </div>
                </div>
            </div>
        </div>
    );
};
